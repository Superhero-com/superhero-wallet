<template>
  <div class="name-item">
    <div class="name-item-header">
      <div class="title">
        <Truncate
          :str="nameEntry.name"
          class="name"
        />

        <div
          v-if="nameEntry.pending"
          class="pending"
        >
          <PendingIcon class="pending-icon" />
          {{ $t('common.pending') }}
        </div>
        <div
          v-else
          class="buttons"
        >
          <BtnPlain
            v-show="canBeDefault"
            class="button-plain"
            :class="{ set: isDefault }"
            :disabled="isDefault"
            :text="(isDefault)
              ? $t('pages.names.list.default')
              : $t('pages.names.list.default-make')
            "
            @click="handleSetDefault"
          />
          <BtnPlain
            v-show="expand"
            class="button-plain"
            :class="{ set: nameEntry.autoExtend }"
            :text="$t('pages.names.auto-extend')"
            @click="toggleAutoExtend"
          />
          <BtnPlain
            v-show="expand || !canBeDefault"
            class="button-plain"
            :class="{ edit: showInput }"
            :text="$t('pages.names.details.set-pointer')"
            @click="expandAndShowInput"
          />
          <BtnHelp
            v-if="expand && !hasPointer"
            :title="$t('modals.name-pointers-help.title')"
            :msg="$t('modals.name-pointers-help.msg')"
            small
          />
        </div>
      </div>

      <BtnPlain
        v-if="!nameEntry.pending"
        class="btn-toggle"
        @click="onExpandCollapse"
      >
        <ChevronDownIcon class="icon" :class="{ rotated: expand }" />
      </BtnPlain>
    </div>

    <span v-if="!expand && !nameEntry.pending && !!addressOrFirstPointer">
      {{ addressOrFirstPointer }}
    </span>

    <Transition name="fade-transition">
      <div
        v-if="expand"
        class="expand"
      >
        <InputField
          v-show="showInput"
          ref="pointerInput"
          v-model="newPointer"
          class="input-address"
          :placeholder="$t('pages.names.details.address-placeholder')"
          :message="nameError ? $t('pages.names.list.valid-identifier-error') : null"
          code
        >
          <template #after>
            <BtnPlain
              v-show="newPointer.length"
              @click="setPointer"
            >
              <Save class="input-address-icon" />
            </BtnPlain>
          </template>
        </InputField>

        <DetailsItem :label="$t('pages.names.list.name-hash')">
          <span class="address-small">{{ nameEntry.hash }}</span>
        </DetailsItem>

        <div class="heights">
          <DetailsItem
            :value="nameEntry.createdAtHeight"
            :label="$t('pages.names.details.created-height')"
          />
          <DetailsItem
            :value="nameEntry.expiresAt"
            :label="$t('pages.names.details.expires-height')"
            :secondary="`(≈${blocksToRelativeTime(nameEntry.expiresAt - topBlockHeight)})`"
          />
        </div>

        <DetailsItem
          v-if="Object.entries(nameEntry.pointers || {}).length"
          :label="$t('pages.names.list.pointers')"
        >
          <template #label>
            <BtnHelp
              :title="$t('modals.name-pointers-help.title')"
              :msg="$t('modals.name-pointers-help.msg')"
            />
          </template>
          <template #value>
            <div
              v-for="(nameEntryPointer, key, idx) in nameEntry.pointers"
              :key="key"
              class="pointers"
            >
              <span class="pointers-number">#{{ idx + 1 }}</span>
              <span class="address-small">{{ nameEntryPointer }}</span>
            </div>
          </template>
        </DetailsItem>
      </div>
    </Transition>
  </div>
</template>

<script lang="ts">
import {
  computed,
  defineComponent,
  nextTick,
  PropType,
  ref,
  watch,
} from 'vue';
import { useI18n } from 'vue-i18n';
import { IName } from '@/types';
import {
  blocksToRelativeTime,
  handleUnknownError,
  postJson,
} from '@/utils';
import {
  useAccounts,
  useAeSdk,
  useModals,
  useTopHeaderData,
} from '@/composables';
import { checkAddressOrChannel } from '@/protocols/aeternity/helpers';
import { useAeNames } from '@/protocols/aeternity/composables/aeNames';
import { useAeNetworkSettings } from '@/protocols/aeternity/composables';
import { UPDATE_POINTER_ACTION } from '@/protocols/aeternity/config';

import InputField from './InputField.vue';
import BtnPlain from './buttons/BtnPlain.vue';
import BtnHelp from './buttons/BtnHelp.vue';
import DetailsItem from './DetailsItem.vue';
import Truncate from './Truncate.vue';

import PendingIcon from '../../icons/animated-pending.svg?vue-component';
import ChevronDownIcon from '../../icons/chevron-down.svg?vue-component';
import Save from '../../icons/account-card/btn-save.svg?vue-component';

export default defineComponent({
  components: {
    PendingIcon,
    InputField,
    BtnPlain,
    BtnHelp,
    DetailsItem,
    Truncate,
    ChevronDownIcon,
    Save,
  },
  props: {
    nameEntry: { type: Object as PropType<IName>, required: true },
  },
  setup(props) {
    const { openConfirmModal } = useModals();
    const { activeAccount } = useAccounts();
    const { t } = useI18n();
    const { topBlockHeight } = useTopHeaderData();
    const {
      setAutoExtend,
      updateNamePointer,
      getName,
      setDefaultName,
    } = useAeNames();
    const { aeActiveNetworkSettings } = useAeNetworkSettings();
    const { nodeNetworkId, fetchRespondChallenge } = useAeSdk();

    const expand = ref(false);
    const newPointer = ref<string>('');
    const showInput = ref(false);
    const nameError = ref(false);
    const pointerInput = ref();

    const isDefault = computed(
      () => getName(activeAccount.value.address).value === props.nameEntry.name,
    );
    const hasPointer = computed(
      (): boolean => !!props.nameEntry.pointers?.accountPubkey,
    );
    const canBeDefault = computed(
      (): boolean => props.nameEntry?.pointers?.accountPubkey === activeAccount.value.address,
    );
    const addressOrFirstPointer = computed((): string | null => (
      props.nameEntry?.pointers?.accountPubkey
      || Object.values(props.nameEntry?.pointers || {})[0]
    ));

    function expandAndShowInput() {
      expand.value = true;
      showInput.value = !showInput.value;
      if (showInput.value) {
        nextTick(() => pointerInput.value.$el.getElementsByClassName('input')[0].focus());
      }
    }

    function onExpandCollapse() {
      expand.value = !expand.value;
      showInput.value = false;
    }

    async function handleSetDefault() {
      try {
        const { address } = activeAccount.value;
        const { name } = props.nameEntry;
        const url = `${aeActiveNetworkSettings.value.backendUrl}/profile/${address}`;
        const currentNetworkId = nodeNetworkId.value;

        const response = await postJson(url, {
          body: {
            preferredChainName: name,
          },
        });

        let respondChallenge;
        try {
          respondChallenge = await fetchRespondChallenge(response);
        } catch (error: any) {
          handleUnknownError(error);
          return;
        }
        await postJson(url, { body: respondChallenge });

        if (currentNetworkId !== nodeNetworkId.value) {
          return;
        }

        setDefaultName({ address, name });
      } catch (error: any) {
        handleUnknownError(error);
      }
    }

    async function toggleAutoExtend() {
      if (!props.nameEntry.autoExtend) {
        await openConfirmModal({
          title: t('modals.nameAutoExtendHelp.title'),
          msg: t('modals.nameAutoExtendHelp.msg'),
        });
      }
      setAutoExtend(props.nameEntry.name);
    }

    async function setPointer() {
      if (!checkAddressOrChannel(newPointer.value)) {
        nameError.value = true;
        return;
      }
      updateNamePointer({
        name: props.nameEntry.name,
        address: newPointer.value,
        type: UPDATE_POINTER_ACTION.update,
      });
      newPointer.value = '';
      showInput.value = false;
    }

    watch(newPointer, () => {
      nameError.value = false;
    });

    return {
      activeAccount,
      addressOrFirstPointer,
      canBeDefault,
      nameError,
      expand,
      hasPointer,
      isDefault,
      newPointer,
      pointerInput,
      showInput,
      topBlockHeight,
      blocksToRelativeTime,
      expandAndShowInput,
      handleSetDefault,
      onExpandCollapse,
      toggleAutoExtend,
      setPointer,
    };
  },
});
</script>

<style lang="scss" scoped>
@use '@/styles/variables' as *;
@use '@/styles/typography';
@use '@/styles/mixins';

.name-item {
  display: flex;
  flex-direction: column;
  padding: 8px var(--screen-padding-x);
  margin-left: calc(-1 * var(--screen-padding-x));
  margin-right: calc(-1 * var(--screen-padding-x));
  transition: 0.2s;

  &:hover {
    background-color: $color-bg-4-hover;
  }

  .name-item-header {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;

    .title {
      width: calc(100% - 30px);

      .name {
        @extend %face-sans-15-medium;

        margin-bottom: 6px;
      }
    }

    .pending {
      @extend %face-sans-12-medium;

      display: flex;
      align-items: center;
      gap: 4px;
      color: $color-grey-dark;

      &-icon {
        height: 16px;
        width: 16px;
      }
    }

    .buttons {
      display: flex;
      margin-top: 2px;
      user-select: none;

      .button-plain {
        @extend %face-sans-12-medium;

        padding: 2px 8px;
        white-space: nowrap;
        color: $color-grey-light;
        background: $color-border-hover;
        border-radius: 6px;
        opacity: 1;

        @include mixins.mobile {
          padding: 2px 6px;
        }

        &.set {
          background: rgba($color-warning, 0.1);
          color: $color-warning;
        }

        &.edit {
          background: rgba($color-primary, 0.15);
          color: $color-primary;
        }

        &:not(:last-of-type) {
          margin-right: 4px;
        }
      }
    }

    .btn-toggle {
      margin-top: 4px;
      width: 24px;
      height: 24px;

      .icon {
        width: 14px;
        color: $color-white;
        opacity: 0.44;
        transition: all 0.2s;

        &.rotated {
          transform: rotate(180deg);
        }
      }
    }
  }

  .expand {
    display: flex;
    flex-direction: column;

    .input-address {
      margin: 8px 0;

      &-icon {
        width: 24px;
        height: 24px;
        margin: -4px 0;
      }
    }

    .address-small {
      @extend %face-mono-10-medium;

      letter-spacing: 0;
    }

    .pointers {
      display: flex;
      align-items: center;
      gap: 4px;

      .pointers-number {
        @extend %face-sans-12-medium;

        color: $color-grey-dark;
      }
    }

    .heights {
      display: flex;
      flex-direction: row;

      .details-item {
        flex: 1;

        :deep(.value .secondary) {
          color: $color-grey-dark;
          margin-left: -2px;
        }

        &:first-of-type {
          margin-right: 16px;
        }
      }
    }
  }

  > span {
    margin-top: 4px;
    color: $color-grey-light;

    @extend %face-mono-10-medium;
  }
}
</style>
