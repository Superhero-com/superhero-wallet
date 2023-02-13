import type { WalletAppRouteConfig } from '../../types';
import {
  ROUTE_INDEX,
  ROUTE_ACCOUNT,
  ROUTE_ACCOUNT_DETAILS,
  ROUTE_ACCOUNT_DETAILS_NAMES_AUCTIONS,
  ROUTE_ACCOUNT_DETAILS_TRANSACTIONS,
  ROUTE_NOTIFICATIONS,
  ROUTE_COIN,
  ROUTE_TOKEN,
  ROUTE_NOT_FOUND,
  ROUTE_ACCOUNT_DETAILS_MULTISIG_DETAILS,
  ROUTE_ACCOUNT_DETAILS_NAMES,
  ROUTE_ACCOUNT_DETAILS_NAMES_CLAIM,
  ROUTE_ACCOUNT_DETAILS_MULTISIG_PROPOSAL_DETAILS,
} from './routeNames';

import ConfirmTransactionSign from '../components/Modals/ConfirmTransactionSign.vue';
import ConfirmRawSign from '../components/Modals/ConfirmRawSign.vue';
import About from '../pages/About.vue';
import AccountDetails from '../pages/AccountDetails.vue';
import AccountDetailsTokens from '../pages/AccountDetailsTokens.vue';
import AccountDetailsTransactions from '../pages/AccountDetailsTransactions.vue';
import AccountDetailsNames from '../pages/AccountDetailsNames.vue';
import Dashboard from '../pages/Dashboard.vue';
import Address from '../pages/Address.vue';
import CommentNew from '../pages/CommentNew.vue';
import DonateError from '../pages/DonateError.vue';
import TokenContainer from '../pages/FungibleTokens/TokenContainer.vue';
import TokenTransactions from '../pages/FungibleTokens/TokenTransactions.vue';
import TokenDetails from '../pages/FungibleTokens/TokenDetails.vue';
import Index from '../pages/Index.vue';
import Invite from '../pages/Invite.vue';
import InviteClaim from '../pages/InviteClaim.vue';
import LanguageSettings from '../pages/LanguageSettings.vue';
import CurrencySettings from '../pages/CurrencySettings.vue';
import Auction from '../pages/Names/Auction.vue';
import AuctionBid from '../pages/Names/AuctionBid.vue';
import AuctionHistory from '../pages/Names/AuctionHistory.vue';
import AuctionList from '../pages/Names/AuctionList.vue';
import More from '../pages/More.vue';
import NameClaim from '../pages/Names/Claim.vue';
import NamesList from '../pages/Names/List.vue';
import NotFound from '../pages/NotFound.vue';
import Notifications from '../pages/Notifications.vue';
import NotificationSettings from '../pages/NotificationSettings.vue';
import ErrorLogSettings from '../pages/ErrorLogSettings.vue';
import PermissionsSettings from '../pages/PermissionsSettings.vue';
import PermissionManager from '../pages/PermissionManager.vue';
import PopupConnect from '../pages/Popups/Connect.vue';
import PopupMessageSign from '../pages/Popups/MessageSign.vue';
import PrivacyPolicy from '../pages/PrivacyPolicy.vue';
import Retip from '../pages/Retip.vue';
import SeedPhraseSettings from '../pages/SeedPhraseSettings.vue';
import SeedPhraseDetailsSettings from '../pages/SeedPhraseDetailsSettings.vue';
import SeedPhraseVerifySettings from '../pages/SeedPhraseVerifySettings.vue';
import Settings from '../pages/Settings.vue';
import SignMessage from '../pages/SignMessage.vue';
import SignTransaction from '../pages/SignTransaction.vue';
import TermsOfService from '../pages/TermsOfService.vue';
import TipsClaim from '../pages/TipsClaim.vue';
import TransactionDetails from '../pages/TransactionDetails.vue';
import MultisigProposalDetails from '../pages/MultisigProposalDetails.vue';
import ResetWallet from '../pages/ResetWallet.vue';
import webIframePopups from './webIframePopups';
import Networks from '../pages/Networks.vue';
import NetworkForm from '../pages/NetworkForm.vue';
import MultisigDetails from '../pages/MultisigDetails.vue';

export const routes: WalletAppRouteConfig[] = [
  ...webIframePopups,
  {
    path: '/',
    name: ROUTE_INDEX,
    component: Index,
    meta: {
      title: '',
      hideHeader: true,
      ifNotAuthOnly: true,
      notPersist: true,
    },
  },
  {
    path: '/account',
    name: ROUTE_ACCOUNT,
    component: Dashboard,
  },
  {
    path: '/transfer*',
    redirect: '/account*',
  },
  {
    path: '/account-details/',
    component: AccountDetails,
    children: [
      {
        path: '',
        name: ROUTE_ACCOUNT_DETAILS,
        component: AccountDetailsTokens,
        meta: {
          showFilterBar: true,
          hideHeader: true,
          hideFilterButton: true,
        },
      },
      {
        path: 'transactions',
        name: ROUTE_ACCOUNT_DETAILS_TRANSACTIONS,
        component: AccountDetailsTransactions,
        meta: {
          hideHeader: true,
          showFilterBar: true,
        },
      },
      {
        path: 'multisig-details',
        name: ROUTE_ACCOUNT_DETAILS_MULTISIG_DETAILS,
        component: MultisigDetails,
        meta: {
          hideHeader: true,
        },
      },
      {
        path: 'names',
        component: AccountDetailsNames,
        children: [
          {
            path: '',
            name: ROUTE_ACCOUNT_DETAILS_NAMES,
            component: NamesList,
            props: true,
            meta: {
              hideHeader: true,
            },
          },
          {
            path: 'auctions',
            component: AuctionList,
            props: true,
            name: ROUTE_ACCOUNT_DETAILS_NAMES_AUCTIONS,
            meta: {
              hideHeader: true,
            },
          },
          {
            path: 'claim',
            component: NameClaim,
            props: true,
            name: ROUTE_ACCOUNT_DETAILS_NAMES_CLAIM,
            meta: {
              hideHeader: true,
            },
          },
        ],
      },
    ],
  },
  {
    name: 'popup-sign-tx',
    path: '/popup-sign-tx',
    component: ConfirmTransactionSign,
    props: true,
    meta: {
      notPersist: true,
    },
  },
  {
    name: 'popup-raw-sign',
    path: '/popup-raw-sign',
    component: ConfirmRawSign,
    props: true,
    meta: {
      notPersist: true,
    },
  },
  {
    name: 'connect',
    path: '/connect',
    component: PopupConnect,
    props: true,
    meta: {
      notPersist: true,
    },
  },
  {
    name: 'message-sign',
    path: '/message-sign',
    component: PopupMessageSign,
    props: true,
    meta: {
      notPersist: true,
    },
  },
  {
    path: '/more/settings',
    name: 'settings',
    component: Settings,
    meta: {
      title: 'settings',
      showHeaderNavigation: true,
    },
  },
  {
    path: '/more/settings/reset-wallet',
    name: 'settings-reset-wallet',
    component: ResetWallet,
    meta: {
      title: 'reset-wallet',
      showHeaderNavigation: true,
    },
  },
  {
    path: '/more/settings/errors-log',
    name: 'settings-errors-log',
    component: ErrorLogSettings,
    meta: {
      title: 'save-errors-log',
      showHeaderNavigation: true,
    },
  },
  {
    path: '/more/settings/language',
    name: 'settings-language',
    component: LanguageSettings,
    meta: {
      title: 'language',
      showHeaderNavigation: true,
    },
  },
  {
    path: '/more/settings/currency',
    name: 'settings-currency',
    component: CurrencySettings,
    meta: {
      title: 'currency',
      showHeaderNavigation: true,
    },
  },
  {
    path: '/more/settings/seed-phrase',
    name: 'settings-seed-phrase',
    component: SeedPhraseSettings,
    meta: {
      title: 'seed-phrase',
      showHeaderNavigation: true,
    },
  },
  {
    path: '/more/settings/seed-phrase/details',
    name: 'settings-seed-phrase-details',
    component: SeedPhraseDetailsSettings,
    meta: {
      title: 'seed-phrase',
      showHeaderNavigation: true,
    },
  },
  {
    path: '/more/settings/seed-phrase/details/verify',
    name: 'settings-seed-phrase-verify',
    component: SeedPhraseVerifySettings,
    meta: {
      title: 'seed-phrase',
      showHeaderNavigation: true,
    },
  },
  {
    path: '/more/settings/networks',
    name: 'network-settings',
    component: Networks,
    props: true,
    meta: {
      title: 'networks',
      showHeaderNavigation: true,
    },
  },
  {
    path: '/more/settings/networks/add',
    name: 'network-add',
    component: NetworkForm,
    props: true,
    meta: {
      title: 'network-add',
      showHeaderNavigation: true,
    },
  },
  {
    path: '/more/settings/networks/:name',
    name: 'network-edit',
    component: NetworkForm,
    props: true,
    meta: {
      title: 'network-edit',
      showHeaderNavigation: true,
    },
  },
  {
    path: '/more/settings/permissions',
    component: PermissionsSettings,
    name: 'permissions-settings',
    meta: {
      title: 'permissionsSettings',
      showHeaderNavigation: true,
    },
  },
  {
    path: '/more/settings/permissions/add',
    component: PermissionManager,
    name: 'permissions-add',
    meta: {
      title: 'permissionsAdd',
      showHeaderNavigation: true,
    },
  },
  {
    path: '/more/settings/permissions/:host',
    component: PermissionManager,
    name: 'permissions-details',
    meta: {
      title: 'permissionsEdit',
      showHeaderNavigation: true,
      isEdit: true,
    },
  },
  {
    path: '/more/about',
    component: About,
    name: 'about',
    meta: {
      title: 'about',
      showHeaderNavigation: true,
    },
  },
  {
    path: '/more/about/terms',
    component: TermsOfService,
    name: 'about-terms',
    meta: {
      title: 'terms',
      showHeaderNavigation: true,
      showScrollbar: true,
      ifNotAuth: true,
    },
  },
  {
    path: '/more/about/privacy',
    component: PrivacyPolicy,
    name: 'about-privacy',
    meta: {
      title: 'privacy',
      showHeaderNavigation: true,
      showScrollbar: true,
    },
  },
  {
    path: '/more/tips-claim',
    name: 'tips-claim',
    component: TipsClaim,
    meta: {
      title: 'claim-tips',
      showHeaderNavigation: true,
    },
  },
  {
    path: '/tips*',
    redirect: '/account*',
  },
  {
    path: '/retip',
    component: Retip,
    meta: {
      title: 'send-tip',
      notPersist: true,
    },
  },
  {
    path: '/account-details/transactions/:hash',
    name: 'tx-details',
    component: TransactionDetails,
    props: true,
    meta: {
      title: 'tx-details',
      showHeaderNavigation: true,
    },
  },
  {
    path: '/account-details/multisig-proposals',
    name: ROUTE_ACCOUNT_DETAILS_MULTISIG_PROPOSAL_DETAILS,
    component: MultisigProposalDetails,
    props: true,
    meta: {
      title: 'multisigProposalDetails',
      showHeaderNavigation: true,
    },
  },
  {
    path: '/more',
    component: More,
    name: 'more',
    meta: {
      title: 'more',
      showHeaderNavigation: true,
    },
  },
  {
    path: '/more/invite',
    name: 'invite',
    component: Invite,
    meta: {
      title: 'invite',
      showHeaderNavigation: true,
    },
  },
  {
    path: '/more/settings/notifications',
    name: 'notification-settings',
    component: NotificationSettings,
    meta: {
      title: 'notifications',
      showHeaderNavigation: true,
    },
  },
  {
    path: '/account-details/names/auctions/:name/',
    component: Auction,
    props: true,
    children: [
      {
        path: '',
        component: AuctionBid,
        props: true,
        name: 'auction-bid',
        meta: {
          title: 'auction',
          showHeaderNavigation: true,
          showNamesNavigation: true,
        },
      },
      {
        path: 'history',
        component: AuctionHistory,
        props: true,
        name: 'auction-history',
        meta: {
          title: 'auction',
          backRoute: { name: ROUTE_ACCOUNT_DETAILS_NAMES_AUCTIONS },
          showHeaderNavigation: true,
          showNamesNavigation: true,
        },
      },
    ],
  },
  {
    path: '/comment',
    component: CommentNew,
    meta: {
      title: 'comment-new',
      notPersist: true,
    },
  },
  {
    name: 'donate-error',
    path: '/donate-error',
    component: DonateError,
    props: true,
    meta: {
      title: 'donate-error',
      notPersist: true,
      ifNotAuth: true,
    },
  },
  {
    name: 'address',
    path: '/address',
    component: Address,
    meta: {
      title: 'address',
      notPersist: true,
    },
  },
  {
    path: '/coins/:id',
    component: TokenContainer,
    children: [
      {
        name: ROUTE_COIN,
        path: '',
        component: TokenTransactions,
        props: true,
        meta: {
          title: 'coin-details',
          backRoute: { name: ROUTE_ACCOUNT_DETAILS },
          showHeaderNavigation: true,
          showFilterBar: true,
          hideSearchBar: true,
        },
      },
      {
        name: 'coin-details',
        path: 'details',
        component: TokenDetails,
        props: true,
        meta: {
          title: 'coin-details',
          backRoute: { name: ROUTE_ACCOUNT_DETAILS },
          showHeaderNavigation: true,
        },
      },
    ],
  },
  {
    path: '/tokens/:id',
    component: TokenContainer,
    children: [
      {
        name: ROUTE_TOKEN,
        path: '',
        component: TokenTransactions,
        props: true,
        meta: {
          title: 'token-details',
          backRoute: { name: ROUTE_ACCOUNT_DETAILS },
          showHeaderNavigation: true,
          showFilterBar: true,
          hideSearchBar: true,
        },
      },
      {
        name: 'token-details',
        path: 'details',
        component: TokenDetails,
        props: true,
        meta: {
          title: 'token-details',
          backRoute: { name: ROUTE_ACCOUNT_DETAILS },
          showHeaderNavigation: true,
        },
      },
    ],
  },
  {
    name: 'sign-message',
    path: '/sign-message',
    component: SignMessage,
    meta: {
      title: 'sign-message',
      notPersist: true,
    },
  },
  {
    name: 'sign-transaction',
    path: '/sign-transaction',
    component: SignTransaction,
    meta: {
      title: 'sign-transaction',
      notPersist: true,
    },
  },
  {
    name: 'invite-claim',
    path: '/invite/:secretKey',
    component: InviteClaim,
    props: true,
    meta: {
      title: 'invite',
      notPersist: true,
    },
  },
  {
    path: '/notifications',
    name: ROUTE_NOTIFICATIONS,
    component: Notifications,
    meta: {
      title: 'notifications',
      showHeaderNavigation: true,
      notPersist: true,
    },
  },
  {
    name: ROUTE_NOT_FOUND,
    path: '*',
    component: NotFound,
    meta: {
      ifNotAuth: true,
      showHeaderNavigation: true,
    },
  },
];
