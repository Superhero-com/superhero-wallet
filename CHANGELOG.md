# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

### [1.1.1](https://github.com/aeternity/superhero-wallet/compare/v1.1.0...v1.1.1) (2023-04-25)


### Bug Fixes

* disable possibility of vault creation with chain name or an url ([b619cbe](https://github.com/aeternity/superhero-wallet/commit/b619cbea2a722ef0c664f36fd834c741f6ede1ab))
* handle insufficient balance issue for every action ([5e39fcd](https://github.com/aeternity/superhero-wallet/commit/5e39fcd14a478c64566f453ac4e5426ca7839c57))

## [1.1.0](https://github.com/aeternity/superhero-wallet/compare/v1.0.2...v1.1.0) (2023-04-20)


### Features

* accounts composable ([b370179](https://github.com/aeternity/superhero-wallet/commit/b370179b3487149b55cd44bcd20e4fda50a5a5ed))
* add colorful border with variable width to avatars ([f1e170a](https://github.com/aeternity/superhero-wallet/commit/f1e170a84bb1f20690b410d5cb4d20bfde28a75f))
* add multisig functionality to composables ([157a2e6](https://github.com/aeternity/superhero-wallet/commit/157a2e64f07d6dcf4f2d33766c41c7aff2c29922))
* add new error message in multisig vault create ([1ca3379](https://github.com/aeternity/superhero-wallet/commit/1ca33793fc3404dad0dad5352afd0b203658bd50))
* add ui for multisig dashboard ([8dcdaab](https://github.com/aeternity/superhero-wallet/commit/8dcdaabe5f14d0d156710ede4cb0995e2d82dd04))
* app connection composable ([3ccb516](https://github.com/aeternity/superhero-wallet/commit/3ccb516062c67bad8033940fc4c4055e05051819))
* assign proper account to a transaction party ([1f5ee54](https://github.com/aeternity/superhero-wallet/commit/1f5ee54493d7118661190a8d5d1a6c82b7d28815))
* calculate multisig creation transaction fee ([a3cba3f](https://github.com/aeternity/superhero-wallet/commit/a3cba3fa9c332c4dae2d39870630557bf8221614))
* change text-input to textarea in vault create form ([210471b](https://github.com/aeternity/superhero-wallet/commit/210471b13fe96e96006ba89907e0a098e3f03652))
* composition api in TransactionList ([034b4c9](https://github.com/aeternity/superhero-wallet/commit/034b4c928d95422fb6a208c66f67fe260d6c5de9))
* custom form select input ([fad9e09](https://github.com/aeternity/superhero-wallet/commit/fad9e09f0d74a8d2b6cf4a4b664d59b62812bf75))
* **dashboard:** add hover to network button ([a8490aa](https://github.com/aeternity/superhero-wallet/commit/a8490aa57730eee10bc4572c175e536bc720f72a))
* dialog box ([8b42bac](https://github.com/aeternity/superhero-wallet/commit/8b42bac3bd06ffe2d26b071ee48621cf96a64e77))
* display error if vault doesn't have sufficient funds ([ee038cb](https://github.com/aeternity/superhero-wallet/commit/ee038cb5531d8c97aadca4273c3cde8555891e05))
* enable card closing on dashboard ([2f5c41d](https://github.com/aeternity/superhero-wallet/commit/2f5c41d4f61da3bb0c6d4622023243134c42b6ca))
* enable preview of freshly created multisig account and tx proposal ([df412a0](https://github.com/aeternity/superhero-wallet/commit/df412a01f1180e2c9b98422a8eded42c1b0e2e65))
* expandable details item ([a00668a](https://github.com/aeternity/superhero-wallet/commit/a00668a60ba577d96cdd77af078b93f6d7f1333a))
* fetch active multisig transactions ([c3679ab](https://github.com/aeternity/superhero-wallet/commit/c3679abb1cdd022a3da607872e8d23fcc4793829))
* form select default styling ([8466da9](https://github.com/aeternity/superhero-wallet/commit/8466da90f90c3a26a6195f332473ca1740763683))
* implement multisig transaction list with pending widget ([22a4792](https://github.com/aeternity/superhero-wallet/commit/22a47925c496db509fde6a223d82d93c83884048))
* impove transactions labels ([4888bc7](https://github.com/aeternity/superhero-wallet/commit/4888bc7b605d0dbee8ad9a4b2a243a7464628d33))
* improve design of multisig details page ([a30412a](https://github.com/aeternity/superhero-wallet/commit/a30412a6ee4796209895952a17899a19018c2dcc))
* move the currencies logic from store to a composable ([d1f48ad](https://github.com/aeternity/superhero-wallet/commit/d1f48adb5f2e1f55b6b00b603b888ac42d64678e))
* multisig details ui changes ([5071dac](https://github.com/aeternity/superhero-wallet/commit/5071dac7fcb778774e32e190a4b91bd824de56e6))
* **multisig:** ability to remove signer when creating the vault ([2a85cd2](https://github.com/aeternity/superhero-wallet/commit/2a85cd21dd8d7a8789dc532d80866fd9f2239195))
* **multisig:** add warning if amount in proposal exceeds vault balance ([4cad71b](https://github.com/aeternity/superhero-wallet/commit/4cad71b4816b753d55985f471f19d61c9fbcb50c))
* **multisig:** auto select first signer as payer ([1be7ee2](https://github.com/aeternity/superhero-wallet/commit/1be7ee24a37c2ac684e98769d9a93440e19248e2))
* **multisig:** create multisig account ([ce85b45](https://github.com/aeternity/superhero-wallet/commit/ce85b45afb0b653de69a482960992435cffa4b03))
* **multisig:** create multisig vault flow ([95e16f7](https://github.com/aeternity/superhero-wallet/commit/95e16f73b562e33738d1289b9753069df5c4c1ec))
* **multisig:** create vault confirmation screen ([73fef1f](https://github.com/aeternity/superhero-wallet/commit/73fef1fcfcddbccb2c3428241d6239ac16f85e20))
* **multisig:** create vault confirmation screen ([e5e4d14](https://github.com/aeternity/superhero-wallet/commit/e5e4d14e7ca7c8241c0a0d18dc46c549b06945de))
* **multisig:** go to multisig vault details after creating it ([7680ae9](https://github.com/aeternity/superhero-wallet/commit/7680ae978b9ea21f0d568babc42760e026d2a647))
* **multisig:** proposal details screen ([36b6e16](https://github.com/aeternity/superhero-wallet/commit/36b6e16780b6e6df17a64d03835b05633d0670da))
* **multisig:** propose tx logic ([e46af6a](https://github.com/aeternity/superhero-wallet/commit/e46af6a38f5d9a5848a12721fc5b7ad019d43dae))
* **multisig:** propose tx ui ([46586bc](https://github.com/aeternity/superhero-wallet/commit/46586bcb82501532092d76f33290bf876cfe43a3))
* **multisig:** transfer receive modal ([e70ff2c](https://github.com/aeternity/superhero-wallet/commit/e70ff2cff6f1ee83d0356d6beb6fe4ce8eaadf14))
* **multisig:** use chosen account to pay for vault creation ([4a7ca1a](https://github.com/aeternity/superhero-wallet/commit/4a7ca1a09e51fe8b63f2f6184ce15e66e5ebf183))
* **multisig:** vault create first signer as account select ([16afb03](https://github.com/aeternity/superhero-wallet/commit/16afb039b2a8c3b0acf697f3377eedb88d52875a))
* **multisig:** vault create progress text update ([21123ea](https://github.com/aeternity/superhero-wallet/commit/21123ea10d8b6e5085b6f80497422e63d33e725a))
* **multisig:** vault only one signer required ([deb2bac](https://github.com/aeternity/superhero-wallet/commit/deb2bac7f9ced458687373fa285ba70d5a10812c))
* **name-item:** add BtnHelp if no pointer set ([0a0027c](https://github.com/aeternity/superhero-wallet/commit/0a0027c343be7b9657a992f1f1c7ee45327acd70))
* notFoundPage change button color ([f9d38c1](https://github.com/aeternity/superhero-wallet/commit/f9d38c1916a7997fb9a65a92b2b77f3a3849a023))
* notFoundPage change button color ([c0fe250](https://github.com/aeternity/superhero-wallet/commit/c0fe250a3c2ae3034fab914fc432c619e447f1c9))
* notification page empty message ([fecc953](https://github.com/aeternity/superhero-wallet/commit/fecc9532e5b60b79881587f8ca5cb603ec2b18a3))
* paying for mutisig tx types handler ([b508802](https://github.com/aeternity/superhero-wallet/commit/b50880207aa24237895734384581a6efe93695eb))
* prevent creating vault with account that has no balance ([fd4282b](https://github.com/aeternity/superhero-wallet/commit/fd4282b69084af99c9f32b6f6e0e829a21f38acb))
* redirect to 404 when transaction is not found ([4f41be9](https://github.com/aeternity/superhero-wallet/commit/4f41be9ebb9040810b7ed9036115a320afa93353))
* refactor accountDetails filter and navigation ([cfd8f11](https://github.com/aeternity/superhero-wallet/commit/cfd8f110fc99f39d1b98738d33c61034a57c16a9))
* refactor multisig navigation ([b0e2962](https://github.com/aeternity/superhero-wallet/commit/b0e2962b9b14eb92f2f997530bef576239daf4f4))
* refactor network components to composition api ([ec0c930](https://github.com/aeternity/superhero-wallet/commit/ec0c930f612b93c74f16eec5008d23fb6552aae2))
* replace AddressShortening component with AddressTruncated ([275df03](https://github.com/aeternity/superhero-wallet/commit/275df03feb24f96c17494a756116eac79f4d70ec))
* separate add multisig vault from add account card ([0a83f34](https://github.com/aeternity/superhero-wallet/commit/0a83f34151762c02f91144192e1c97b23aafb229))
* show latest multisig proposal status ([4ab3bc7](https://github.com/aeternity/superhero-wallet/commit/4ab3bc787eb9dff9bba27d71e01c89d463a8f485))
* show related multisig coin details ([b5dccbc](https://github.com/aeternity/superhero-wallet/commit/b5dccbc6c706b7be44298cc5d566275fac2c3214))
* support GAMetaTx transactions ([45e25b1](https://github.com/aeternity/superhero-wallet/commit/45e25b1f1dffdc2d15ac33d8308ef18c9102316d))
* transaction item and latest transaction ([58db736](https://github.com/aeternity/superhero-wallet/commit/58db7362dfceedbe97faeb156e695148689335db))
* update CommentNew page ([ea70257](https://github.com/aeternity/superhero-wallet/commit/ea70257dabf35baafe830376913a41ef1d8c9f20))
* update styling of token list item ([a7318da](https://github.com/aeternity/superhero-wallet/commit/a7318dade9dcb8d3ff7887c53a626636e5fcff7f))
* use consensus label component instead of function ([a8b1153](https://github.com/aeternity/superhero-wallet/commit/a8b11531b0251ae5cbf0da8d669902dd06e8a8fc))


### Bug Fixes

* account details tokens margins ([36fcd67](https://github.com/aeternity/superhero-wallet/commit/36fcd673e4268bfb8f0aeb15964dccb00fa15411))
* add missing multisig account address ([1de3d83](https://github.com/aeternity/superhero-wallet/commit/1de3d83f20fe72e47cc0bab0acf53cfa8546090f))
* add new comment correctly ([6917572](https://github.com/aeternity/superhero-wallet/commit/6917572c726c715b7f1d2acd93f428f9724b079f))
* add payload to a fee calculation ([6b4db00](https://github.com/aeternity/superhero-wallet/commit/6b4db001462beb2f4cbec04aefe386ed8b90c565))
* aens button sizes on ios ([beb97c5](https://github.com/aeternity/superhero-wallet/commit/beb97c5c2c9e7ba7995d6056aed06cb4a73c97d5))
* amount input number transformer ([3174df2](https://github.com/aeternity/superhero-wallet/commit/3174df22d69199f9dbad6eb75737b3865e96e618))
* apply correct border color for verified url ([1e0f64b](https://github.com/aeternity/superhero-wallet/commit/1e0f64bf2eba7bd9db77742b0e2f8ae287657099))
* avoid multiple composable polling when switching views ([9a24d93](https://github.com/aeternity/superhero-wallet/commit/9a24d93ab0f04df204a540a8664c1833d8865308))
* back button logic ([7ae784c](https://github.com/aeternity/superhero-wallet/commit/7ae784c6157c5bdb201202b8bc2d42ae17ca4fce))
* be able to claim tips ([b6e3a0f](https://github.com/aeternity/superhero-wallet/commit/b6e3a0f7c81dc4c9d9fdbcf1f308f426a24bc035))
* calculate animation speed ([cd9d6f4](https://github.com/aeternity/superhero-wallet/commit/cd9d6f44226a0ba05d8769fdbfb2d91755e94971))
* calculate max amount on transferData change ([0d20ecd](https://github.com/aeternity/superhero-wallet/commit/0d20ecdbba334aa8d770f9760e18ac522dc768b9))
* calculate name claim fee correctly ([efae9fe](https://github.com/aeternity/superhero-wallet/commit/efae9fe6b0e66d3445c875d209cca5502c4fd0de))
* calculate totalAmount correctly ([09febf5](https://github.com/aeternity/superhero-wallet/commit/09febf5613e5c4eaa2a99c9db6ca2b65f6861fca))
* calculate transaction direction correctly ([b81aeff](https://github.com/aeternity/superhero-wallet/commit/b81aeff74fe5a6ce95be890d4ce8fd24486e916a))
* change drySdk network on network change ([dfa7d88](https://github.com/aeternity/superhero-wallet/commit/dfa7d887e4778db56f2cdbefc500336d8d215907))
* changes in Truncate component animation ([e5d24e1](https://github.com/aeternity/superhero-wallet/commit/e5d24e1538ba49efddc35101395ffc9da101d4eb))
* confirm local tx ([60a2b93](https://github.com/aeternity/superhero-wallet/commit/60a2b93c2423b70388064fc1f06668684c8239be))
* **confirm-transaction-sign:** show token amount correctly ([2248bfe](https://github.com/aeternity/superhero-wallet/commit/2248bfeacee9d9a3112e41380209bb7b76d4d06f))
* correctly determine DEX transactions ([aab4af6](https://github.com/aeternity/superhero-wallet/commit/aab4af61797b4de7d60bdbe6ef2b2067c4145941))
* design discrepancies on account details ([9714879](https://github.com/aeternity/superhero-wallet/commit/971487920ff1c4beba366e5d8799b0a1d693d343))
* do not lose precision during sending ([4812c2c](https://github.com/aeternity/superhero-wallet/commit/4812c2c0690394fa19af466087c321da119b42ee))
* error handler ([f8c1ea6](https://github.com/aeternity/superhero-wallet/commit/f8c1ea6afc384d8379fe069c0844b76a2ae39f75))
* fetch all endpoint pages correctly ([5979d89](https://github.com/aeternity/superhero-wallet/commit/5979d89d069ace9402746c1e9aa3d518a2bbc0f8))
* fetch multisig proposal for syncing vault ([e409720](https://github.com/aeternity/superhero-wallet/commit/e409720064f7000a6d14d6666c12cb7ad78eb727))
* firefox & safari input validation ([b8840cc](https://github.com/aeternity/superhero-wallet/commit/b8840ccc687161fd6495e0c5d3683ba04a0cbd8e))
* fix initial amount calculation in maxAmount.ts ([4064b0d](https://github.com/aeternity/superhero-wallet/commit/4064b0d0bf6ce108d47e6f4420374af399a0afe9))
* fix multisig address in transfer review ([5610bd4](https://github.com/aeternity/superhero-wallet/commit/5610bd46054b72660430a8d7ee5e9c040a965f94))
* fixing clientWitdh issue ([62365ed](https://github.com/aeternity/superhero-wallet/commit/62365ed62ae71559604a749365b35dfe57e6dd6b))
* fixing textarea auto height ([b8bc2e9](https://github.com/aeternity/superhero-wallet/commit/b8bc2e923837a4f97aee9b7054bdd69ebb54bb7e))
* fixing truncate text animation ([de27fe9](https://github.com/aeternity/superhero-wallet/commit/de27fe9328a5d2a5992808c97c60563c6fcbb7a2))
* **fungible-tokens:** handle no tokens correctly ([ef8fb7f](https://github.com/aeternity/superhero-wallet/commit/ef8fb7ffdecda187475d340a5f300c6c2a5fe743))
* handle nonce error gracefully in multisig accounts ([1c8cc6d](https://github.com/aeternity/superhero-wallet/commit/1c8cc6dfd1126e477656b27c726170b9811544fa))
* handle pending transactions correctly ([88eae9f](https://github.com/aeternity/superhero-wallet/commit/88eae9f1358837597851f3fbb52eb46235cbb9df))
* handle unsupported tx types correctly in the popups ([abb1657](https://github.com/aeternity/superhero-wallet/commit/abb1657fcc1074c5004546498b4aed9f4fc40048))
* handle wrapper transactions correctly ([ff1a3a9](https://github.com/aeternity/superhero-wallet/commit/ff1a3a966dc60c5602fbea7e3fb919806d3dd74f))
* icon styles issues ([58efec5](https://github.com/aeternity/superhero-wallet/commit/58efec5cb76e34b5c375374f0191d68b3e796cdc))
* improve default vault selection time ([115b313](https://github.com/aeternity/superhero-wallet/commit/115b313929f8cb9bcc3fc64985e41cd6a8d97f18))
* **index:** add Platforms only in web ([5a30ff1](https://github.com/aeternity/superhero-wallet/commit/5a30ff1c54d39d41bb6f2dc0aea6cbe9e900c4e8))
* **invites:** validate amount input ([780b5cf](https://github.com/aeternity/superhero-wallet/commit/780b5cf4b55ac09b5c0ffcea488bdeed51507f61))
* latest transaction correctly showing the order ([316adcd](https://github.com/aeternity/superhero-wallet/commit/316adcdd60cbf4e963b9179f0acebc025a8dcb62))
* latest transaction showing correctly direction ([4388b8b](https://github.com/aeternity/superhero-wallet/commit/4388b8b9ee38452a9dbc62b77233c14bde136130))
* list item hover effect on mobile ([8c7b716](https://github.com/aeternity/superhero-wallet/commit/8c7b7168e878c8f6ca49653a6d4a67b57ea7ed72))
* load aeternity data correctly ([05bc302](https://github.com/aeternity/superhero-wallet/commit/05bc3021b8e4b6b24ade16ebaf8ee2dd9cf091ce))
* load transactions on scroll ([49f0ef6](https://github.com/aeternity/superhero-wallet/commit/49f0ef606f3239d60a3e36e0d3977e8dff541066))
* long names on send and receive modals ([2990a56](https://github.com/aeternity/superhero-wallet/commit/2990a56a99f1122215fb1b8746ed4ebe630de6ee))
* middleware watcher in names vuex module ([a00e040](https://github.com/aeternity/superhero-wallet/commit/a00e0402d8ef19e733ebcc76a510719e0d9a4a25))
* missing revoke button on proposal details ([50b91ba](https://github.com/aeternity/superhero-wallet/commit/50b91baa3ac4509a3eedc7b5e5a961eb7c439122))
* mobile safe area ([f5d0fa6](https://github.com/aeternity/superhero-wallet/commit/f5d0fa6678c6076c539b750151e241630b474a5e))
* multisig assets list ([4fd552f](https://github.com/aeternity/superhero-wallet/commit/4fd552f1b53e0237d45c1d94b4e1ee287e7d4122))
* multisig proposal consensus icons alignment ([c49c208](https://github.com/aeternity/superhero-wallet/commit/c49c208ea14da18c166385b723fbd63e23f264d9))
* multisig transaction details fee label ([4d73141](https://github.com/aeternity/superhero-wallet/commit/4d731412818c6bb12731f0980163319f6a3f94be))
* **multisig-details:** show correct consensus info ([b98d3af](https://github.com/aeternity/superhero-wallet/commit/b98d3af2cca04bacd7980575b224258b3c541e1b))
* **multisig-proposal:** change address to gaAccountId ([4eb2dd8](https://github.com/aeternity/superhero-wallet/commit/4eb2dd8afee588479c58de74505fba0ddc43d6a4))
* **multisig:** apply correct pending transaction logic ([fa502f1](https://github.com/aeternity/superhero-wallet/commit/fa502f1d15bb50de793587b438b7e32a3d4eafbb))
* **multisig:** be able to send a transaction ([1a0b40c](https://github.com/aeternity/superhero-wallet/commit/1a0b40c3c8bd0d7fa1dd2894ebafa989dd73eeef))
* **multisig:** handle not enough ae to propose ([78b29d3](https://github.com/aeternity/superhero-wallet/commit/78b29d3ea7e1544161dc54fd75c1deaeb9345c04))
* **multisig:** m of n signers selection ([40885ea](https://github.com/aeternity/superhero-wallet/commit/40885ea772acde319209fd209826c876a6267198))
* **multisig:** propose transaction wording fixes ([5c84a7f](https://github.com/aeternity/superhero-wallet/commit/5c84a7f2e4e2de2b88c95ade5765af191ba73a18))
* **multisig:** show correct copied text ([b64571a](https://github.com/aeternity/superhero-wallet/commit/b64571a02bfb2ab63e8b457334d0632dc05b36bf))
* **multisig:** show label for all user accounts in the vault details page ([0e1e2d3](https://github.com/aeternity/superhero-wallet/commit/0e1e2d31cc2922d0feac9a00cdf8e986b9b0d643))
* **multisig:** show only transactions related to account ([80a3bc2](https://github.com/aeternity/superhero-wallet/commit/80a3bc264e2b0978a05b4805d08f46886426ef7c))
* **multisig:** validate proposal correctly ([dafd62f](https://github.com/aeternity/superhero-wallet/commit/dafd62ffb94dafcfd86136f1f776431ac3b538d7))
* **names:** be able to autoExtend names ([6694f07](https://github.com/aeternity/superhero-wallet/commit/6694f078b8c8e47738c2356a29f61bf5a450b167))
* open modals with a preset token correctly ([466c841](https://github.com/aeternity/superhero-wallet/commit/466c841ef348570dfa537fea809e4519022cf033))
* open transfer send on query change & fix token select from link ([7cb53b0](https://github.com/aeternity/superhero-wallet/commit/7cb53b003558726308f862d4eaa3111919bc7da1))
* proper typing for ae token balance ([d432ff9](https://github.com/aeternity/superhero-wallet/commit/d432ff9180c4136f8f80db3090b95db17fcc4077))
* provide a required app prop to a confirmRawSign ([96e51d2](https://github.com/aeternity/superhero-wallet/commit/96e51d2d26ad8603309d8a5f1b797acc225139f8))
* provide missing store argument to the useSdk composable ([657bcbc](https://github.com/aeternity/superhero-wallet/commit/657bcbcadc02abc60f9d2057fcfaf45e9f928cca))
* remove additional 3 dots in transaction label ([982d34f](https://github.com/aeternity/superhero-wallet/commit/982d34f062119f39260b9567fa9e970592422a6e))
* remove excessive spacing in header ([a819c67](https://github.com/aeternity/superhero-wallet/commit/a819c67bd8f95ff093f5fe9e55997ae60a8db676))
* remove names for account wrapper views ([61042c1](https://github.com/aeternity/superhero-wallet/commit/61042c164c102d136ae2a4209fedda4cb6ec48a8))
* remove syncing multisig vault from another network ([49da939](https://github.com/aeternity/superhero-wallet/commit/49da939b54d29958a46ab87fc91119ea433b5951))
* remove terms navigation bug ([1a1b61c](https://github.com/aeternity/superhero-wallet/commit/1a1b61cb02f0c9e503c6ae233236528c6094c5c6))
* removed problem with multiple Transition children ([4b12733](https://github.com/aeternity/superhero-wallet/commit/4b12733f966d124b8ec00989b16ac365fbf81b30))
* resolve problem with filter in assets select ([1bae1b0](https://github.com/aeternity/superhero-wallet/commit/1bae1b097406b7e4682e250fb238571272633d1d))
* restore correct multisig accounts and active multisig id on network change ([c8dec64](https://github.com/aeternity/superhero-wallet/commit/c8dec64bb7918ade1d9354e6dc7eb7ff1d39a0d8))
* **retip:** allow only ae ([28ac878](https://github.com/aeternity/superhero-wallet/commit/28ac878eb50fe125b3371ba23e1631f4d2a8cbaf))
* **route:** set scroll position to 0 for every page ([f498e30](https://github.com/aeternity/superhero-wallet/commit/f498e3030f9ff7e261bdd7dac5ff87cdd2da5faf))
* scrollbars visibility in firefox ([1b44c2a](https://github.com/aeternity/superhero-wallet/commit/1b44c2a58a248dd5bbc61c7f366b70aa1bc9c67c))
* select assets list should be scrollable on safari ([1e8c565](https://github.com/aeternity/superhero-wallet/commit/1e8c5657f94bf000a358795b4c486ecc60db16f8))
* **send-modal:** show correct error on token 0 balance ([1167e2c](https://github.com/aeternity/superhero-wallet/commit/1167e2c1b203a960f1155073351cfb1ea2a120ce))
* set a proper url for a connected aepp ([2823f36](https://github.com/aeternity/superhero-wallet/commit/2823f3634e3c00631fd75328f78b19e7ddf074ac))
* set correct fallback route ([7a70546](https://github.com/aeternity/superhero-wallet/commit/7a7054618bb9b46feb53d345fe73961e6a801dc2))
* set correct labels for a spend transactions ([7829969](https://github.com/aeternity/superhero-wallet/commit/782996967716427fd33950b1e64c32da05b6f797))
* set default name only if it points to current account ([c1fb03a](https://github.com/aeternity/superhero-wallet/commit/c1fb03aeee92e05f1fe32fbc550ed897fc511a6f))
* show asset selector correctly on firefox ([547a003](https://github.com/aeternity/superhero-wallet/commit/547a003f97694832d14379e18056c499d9b7ffab))
* show correct amount for incomplete transactions ([04b7715](https://github.com/aeternity/superhero-wallet/commit/04b77150ed1f92b97a1b18170dee80cfdc0c8937))
* show correct label for vault creation transaction ([1128c10](https://github.com/aeternity/superhero-wallet/commit/1128c1029353261d800873a446a694898da7218e))
* show correct labels for spend transactions ([e157ee6](https://github.com/aeternity/superhero-wallet/commit/e157ee661051af21987230d934394fdfc2fd6eb9))
* show correct spend amount in SpendSuccess modal ([b58c34a](https://github.com/aeternity/superhero-wallet/commit/b58c34ad57a71e13eb2773825401318f4d6a5d58))
* show correct subtitle for multisig send and receive buttons ([b6167e1](https://github.com/aeternity/superhero-wallet/commit/b6167e1a1bf1d30a966c6e25ef744be2ecbbfce2))
* show proper transaction direction for transaction owner ([a21d708](https://github.com/aeternity/superhero-wallet/commit/a21d708e4ce72671aa6163974f7abcc7283fcdfb))
* show total multisig amount correctly ([54bc99a](https://github.com/aeternity/superhero-wallet/commit/54bc99a07bfa9cbd6ddb1afafb2d86902f30295f))
* show transactions only for current account ([63122ad](https://github.com/aeternity/superhero-wallet/commit/63122ad02800a7919ab488cdaef748959f47a95b))
* **spend-success:** use correct prop type ([75b52c5](https://github.com/aeternity/superhero-wallet/commit/75b52c5b27a4dc5ae7d7eea173d3786d524863a3))
* stop transactions polling onUmnounted ([e0505ca](https://github.com/aeternity/superhero-wallet/commit/e0505cace995a70f3d80ad6885bbb89c9a7479d3))
* styling of number select ([990e306](https://github.com/aeternity/superhero-wallet/commit/990e306d9283567c2382ade1f515396165dbed8a))
* swap route lines thickness ([dedefcb](https://github.com/aeternity/superhero-wallet/commit/dedefcb033dd55408ed806bc7f90a901a992b6d4))
* text shrink utility helper ([a5904d3](https://github.com/aeternity/superhero-wallet/commit/a5904d39f76dca2cd80481ef28d3b95f784466de))
* token list margins ([e5ad67e](https://github.com/aeternity/superhero-wallet/commit/e5ad67e5eec0627ae018268a2df45b14c163a8c7))
* transaction labels not loading properly ([d8efac1](https://github.com/aeternity/superhero-wallet/commit/d8efac102ce0d917ac078c2bc26f2815a3f9e6ae))
* transaction sorting ([dc75103](https://github.com/aeternity/superhero-wallet/commit/dc75103262a1361e7196eeb58923c768f27dc2a6))
* **transaction-details:** do not show empty tag ([9f97f63](https://github.com/aeternity/superhero-wallet/commit/9f97f633de78408c5bc2c95e6cc359c926ff3066))
* **transaction-details:** show error uncropped ([ade2476](https://github.com/aeternity/superhero-wallet/commit/ade2476b6a1b1a426a8094f09e1e70fe506baaf7))
* **transaction-details:** show transaction tokens correctly ([1c4df84](https://github.com/aeternity/superhero-wallet/commit/1c4df847a5c0a5a70978feed8c4597986bf742ce))
* **transaction-displaying:** show an actual avatars of participants ([f90d246](https://github.com/aeternity/superhero-wallet/commit/f90d2461025b6abb33f3e709292a3d0335b4d229))
* **transaction-item:** add missing icon ([3e2700e](https://github.com/aeternity/superhero-wallet/commit/3e2700eddbce62365f31564b61a43565f9e957b9))
* **transaction-item:** show labels correctly ([45b1d3f](https://github.com/aeternity/superhero-wallet/commit/45b1d3f865bcb981aca852576135d2cb23d8f19e))
* **transaction-tag-list:** be able to show custom tag ([5d47156](https://github.com/aeternity/superhero-wallet/commit/5d4715661d3284bb4c6111e95cf964db0753a297))
* **transactions:** apply correct filter logic for pending transactions ([64b69c5](https://github.com/aeternity/superhero-wallet/commit/64b69c53aaac7c4438468f1e46f9fedf213f9268))
* transfer send payload info modal translation ([50114ef](https://github.com/aeternity/superhero-wallet/commit/50114ef8a9ace8a28056a7ce9eacbc76ab222957))
* **transfer-receive:** set correct button styles ([7faa15e](https://github.com/aeternity/superhero-wallet/commit/7faa15e0ce6ad681b1ef6cd01ca55ba3f6f96599))
* **transfer-review:** show fiat value ([633312a](https://github.com/aeternity/superhero-wallet/commit/633312abd5804950f10576bc826718a3e950914f))
* **transfer-send:** disable next button on error ([f476889](https://github.com/aeternity/superhero-wallet/commit/f47688917f5012bbda8a707efb51c8edde20dcaf))
* **transfer-send:** handle uknown url status correctly ([26b9a9b](https://github.com/aeternity/superhero-wallet/commit/26b9a9bd91673dd4ce109a08861bb35740ee62c5))
* **transfer-send:** limit asset select to ae only ([054af8c](https://github.com/aeternity/superhero-wallet/commit/054af8c605fcd88f87698daf89dbcb6763afff01))
* truncate long names in vault creation review ([ac72800](https://github.com/aeternity/superhero-wallet/commit/ac7280032eb40ec6b872b0e886fb00f111b0ea0c))
* unnecessary fetching of latest transactions ([76c8246](https://github.com/aeternity/superhero-wallet/commit/76c8246d75f2f932f17b96ec09d1b135997a1c69))
* update latest transactions on token balance change ([a3b23a3](https://github.com/aeternity/superhero-wallet/commit/a3b23a3e29ac9f3a725e05dc210e3883ab36b6b0))
* update multisig proposal modal ([bd6340b](https://github.com/aeternity/superhero-wallet/commit/bd6340b19872fa869fd86ab0011124cae4c85da3))
* update warning color ([adb8f08](https://github.com/aeternity/superhero-wallet/commit/adb8f086407e47b79fddbcbc3e4a55f15cf115e5))
* url parser in permission manager ([b338b04](https://github.com/aeternity/superhero-wallet/commit/b338b0457fb5d51e753b741eba637c950a1d5250))
* use correct value for a minTipAmount validation ([baa642b](https://github.com/aeternity/superhero-wallet/commit/baa642b57952ee0bd50b8894411da65ec807b46a))
* use different prop for a custom title ([02ca507](https://github.com/aeternity/superhero-wallet/commit/02ca507c18041f2ff8272e35215ccdadb69633ea))
* welcome screen paddings ([e6264d3](https://github.com/aeternity/superhero-wallet/commit/e6264d30fb3dfa500cdf5166dbd5d3486811e415))
* wrong coin details route name ([f58e536](https://github.com/aeternity/superhero-wallet/commit/f58e5369ac7d9800d7306a7bf6a70946cded7ba4))


### Tests

* avoid overloading external services with requests ([aa852fa](https://github.com/aeternity/superhero-wallet/commit/aa852fa649a0a13deffb08038677492b413f8ddf))
* fix and enable withdraw test ([1ae9243](https://github.com/aeternity/superhero-wallet/commit/1ae9243ef216612dc4565735ec1b4632173bb2a0))
* **other:** enable pending transaction tests ([0186821](https://github.com/aeternity/superhero-wallet/commit/01868210c45aa9b13054381a995e2d960dc73b93))
* **other:** test the existing routes ([4e8d4ea](https://github.com/aeternity/superhero-wallet/commit/4e8d4ea5a55923686f18983470d185fc67afa4bd))


### Maintenance

* add types to categorizeContractCallTxObject util function ([4854c12](https://github.com/aeternity/superhero-wallet/commit/4854c1266fc949d18f0f08b6ab3a66d27ee40161))
* adjust label logic ([ea4b394](https://github.com/aeternity/superhero-wallet/commit/ea4b39459517e1b63d5a7857ececc1b9dc8fd590))
* buttons and table rows color unification ([e36da9c](https://github.com/aeternity/superhero-wallet/commit/e36da9c2ddedd26cf959213f8015d884b8c53a3e))
* common way of calculating readable fee from a value ([f8a281b](https://github.com/aeternity/superhero-wallet/commit/f8a281b274bf95758885f0d3486bd5e934970a63))
* convert components using balances to Composition API ([278c6cf](https://github.com/aeternity/superhero-wallet/commit/278c6cffc6ea02f772c019f7b29cd76e22b37873))
* convert name auction components to Composition API and TypeScript ([05fd6f9](https://github.com/aeternity/superhero-wallet/commit/05fd6f9cd1ab99d5a97b15bac33432f2f5f5ee18))
* exclude DEX transactions from Out ([654a362](https://github.com/aeternity/superhero-wallet/commit/654a362c90aac278292da9988bafc5c6b9fdce50))
* implement method to sign from non active account ([18cd8bf](https://github.com/aeternity/superhero-wallet/commit/18cd8bff3cb5989eabba2f9be51b488f84512b3b))
* input field message property interface ([612e91f](https://github.com/aeternity/superhero-wallet/commit/612e91f360047618f9029aa701f0dd0216f2de31))
* **middleware:** remove unnecessary workarounds ([e7e5bcc](https://github.com/aeternity/superhero-wallet/commit/e7e5bcc7b4bd7532f0e55d2e41aa7cef626fcddd))
* move formatNumber store getter to utils ([9bbf1d2](https://github.com/aeternity/superhero-wallet/commit/9bbf1d2ff6c0e4806be9037d49940ab507e6485f))
* move getTxTipUrl store getter to utils ([f55bb07](https://github.com/aeternity/superhero-wallet/commit/f55bb070087ed96598a1b85a3dd7e5e4fcfcb0a0))
* move getTxType function from the store to the utils ([ba83b7f](https://github.com/aeternity/superhero-wallet/commit/ba83b7f2adc6803bfb041dd842eaa7456a12c975))
* move isTxAex9 store getter to utils ([987fbfb](https://github.com/aeternity/superhero-wallet/commit/987fbfb000bb7264d9bdef3e8dc04a08a2caf705))
* move the middleware initiation logic from the store to a composable ([9689b07](https://github.com/aeternity/superhero-wallet/commit/9689b07cd2f8d16b507d8f8590fd480a3fa8b6a0))
* **multisig:** add polling height and verify polling results ([8159287](https://github.com/aeternity/superhero-wallet/commit/815928745e4b9a485adc5a31a15b77b7f870c8e9))
* **multisig:** adjust account filtering logic ([eb6f399](https://github.com/aeternity/superhero-wallet/commit/eb6f3992f56a02b1d5dfc35afc06d8f5dc9bf304))
* **multisig:** avoid dependency on obsolete http compiler ([f7b25ca](https://github.com/aeternity/superhero-wallet/commit/f7b25cae36b73c67227106a8dbbe21a6a4488e35))
* **multisig:** disable create multisig button till pay for transaction is ready ([884643b](https://github.com/aeternity/superhero-wallet/commit/884643b50ce6a2443c22d304eba9bfb626e36844))
* **multisig:** set expiration of proposal to a day ([2c795e9](https://github.com/aeternity/superhero-wallet/commit/2c795e948eae09c51a36c8acd6b5ffa07c4ac478))
* **multisig:** sign vault creation without switching active account ([d783345](https://github.com/aeternity/superhero-wallet/commit/d7833459576339de857f8ada43c8ac546009c78b))
* **multisig:** sort by date if other conditions are similar ([8effbc2](https://github.com/aeternity/superhero-wallet/commit/8effbc2ba4aec4c26ba00f0f24a1c9b4af2b037b))
* **multisig:** support multiple vault creation ([1723640](https://github.com/aeternity/superhero-wallet/commit/1723640b4a24cfa22b6fa6eef8db22a1c0af4c25))
* **multisig:** use signers length and remove duplicate method" ([9a72d39](https://github.com/aeternity/superhero-wallet/commit/9a72d39fe18834fd975be4bb743e7c86afd68e84))
* **name-item:** adjust wording ([6415e5a](https://github.com/aeternity/superhero-wallet/commit/6415e5a08fed05e16fe5d796d9eeb48c7f2b36c8))
* **name-item:** focus on set pointer input ([c6400bc](https://github.com/aeternity/superhero-wallet/commit/c6400bcfa5471b424ebb85f4debfa0a428f9b991))
* **name-item:** set correct expand, collapse logic ([9afee20](https://github.com/aeternity/superhero-wallet/commit/9afee2083a022b3ebe6fb7bba5ae95ac30548cba))
* **refactor:** tx function types ([8f8ac6d](https://github.com/aeternity/superhero-wallet/commit/8f8ac6d3765c759797ec19647d1839fb938da75e))
* **release:** 1.0.2 ([54531fa](https://github.com/aeternity/superhero-wallet/commit/54531faa179ba2d444df7f26943a8b4069097400))
* remove approx sign from formatted amount ([d27c198](https://github.com/aeternity/superhero-wallet/commit/d27c198db4251603aab93ecfbe8416be9a008544))
* remove duplicated font face mono 16 ([4a69023](https://github.com/aeternity/superhero-wallet/commit/4a6902350811cc9bacb13b5dabbecf3e7322911e))
* replace popups mixin with composition api and add types for transaction resolvers ([fdc4e60](https://github.com/aeternity/superhero-wallet/commit/fdc4e6066911876ca1f8ed1be3983a0b6273e5b0))
* replace RxJS with Vue Composables ([d99efe7](https://github.com/aeternity/superhero-wallet/commit/d99efe79db83875ab49b8720d7a0b2fe9ea80df9))
* show transactions sent to yourself as spent ([4e2622a](https://github.com/aeternity/superhero-wallet/commit/4e2622ae7b98d71204c06f620687f3e3d759bf83))
* unify pending transaction amount structure ([046c00f](https://github.com/aeternity/superhero-wallet/commit/046c00f6f94af41f0c3ff6213f02110c59b79ef4))
* use composition api in avatar component ([53cae4d](https://github.com/aeternity/superhero-wallet/commit/53cae4d3597d3a65f7d0666fc84dd813be8223d2))
* use default interface for composables ([ffb9a4c](https://github.com/aeternity/superhero-wallet/commit/ffb9a4c399a3a5ffd57be00c380c671440f80012))
* use one component to sign messages ([9e31f95](https://github.com/aeternity/superhero-wallet/commit/9e31f950d30e67738293e2d3d65d41c3d55b5b0f))
* use the correct name structure ([1658350](https://github.com/aeternity/superhero-wallet/commit/1658350ebbc9f8d358af836c09620dd17fde0996))
* use topHeader composable data in multisigTransactions to fetch the top block height ([3f62d8f](https://github.com/aeternity/superhero-wallet/commit/3f62d8f07a00ad1043fd2670e26755c0352ff781))
* use TypeScript in the Filters component ([0bc3888](https://github.com/aeternity/superhero-wallet/commit/0bc38881de519d822334dd8ed647719dc9754c4a))


### Performance

* do not update token blance if AE is chosen ([f863336](https://github.com/aeternity/superhero-wallet/commit/f8633362e00765872b0148717bd87752632c80e5))
* **fungible-tokens:** speed up tokens loading on middleware initialization ([59ee80b](https://github.com/aeternity/superhero-wallet/commit/59ee80b9df484dfa276087f683f80bd56ce5179f))
* improve tip withdrawn transaction fetching ([7f49a7b](https://github.com/aeternity/superhero-wallet/commit/7f49a7bcedbecd6c156498233838bb111901f24f))
* keep the latest transactions state when navigating ([4eeaed3](https://github.com/aeternity/superhero-wallet/commit/4eeaed3adcb3fb6e1e66ac3dcaed30485c767df7))
* **latest-transactions:** fetch only latest tip withdrawn transactions ([e73097a](https://github.com/aeternity/superhero-wallet/commit/e73097a89b737eacae5bb2b5180afa53456354ba))
* **multisig:** dry-run additional info only on demand ([f9e5c18](https://github.com/aeternity/superhero-wallet/commit/f9e5c1836607dcb5f05c61c7e171a6df24e1f0cc))
* **multisig:** filter out multisigs with unsupported version ([937cae0](https://github.com/aeternity/superhero-wallet/commit/937cae04b0b2b682cca56f74081e2e2ea6c42b8f))
* **multisig:** load immutable data only once ([ac03adf](https://github.com/aeternity/superhero-wallet/commit/ac03adf27f488737d79217752381335075e60099))
* **multisig:** remove unnecessary dry-run ([8844e5f](https://github.com/aeternity/superhero-wallet/commit/8844e5f4aea13ebb3fa37a4cf6b522c43e9246dc))
* **multisig:** remove unnecessary dry-runs needed to fetch transaction ([97ee217](https://github.com/aeternity/superhero-wallet/commit/97ee2172149a042083dc6b486e82a78708a0395d))
* poll multisig accounts only if necessary ([284ff51](https://github.com/aeternity/superhero-wallet/commit/284ff51e59de2688097f6264320c913445dcfed8))

### [1.0.2](https://github.com/aeternity/superhero-wallet/compare/v1.0.1...v1.0.2) (2022-12-22)


### Features

* add ability to send transactions with a payload ([200a906](https://github.com/aeternity/superhero-wallet/commit/200a9064a5fd2dcf336334e758d8daaabdd0cfff))
* change back button logic ([eaf420c](https://github.com/aeternity/superhero-wallet/commit/eaf420c31cfff0b1d7f25aa3e5525c3de699512f))
* improve token transactions & details navigation ([acc3075](https://github.com/aeternity/superhero-wallet/commit/acc3075265e50d98cff68d707d9b0ec3e97dc06c))
* improved filter tokens by contract-id ([9ce64fe](https://github.com/aeternity/superhero-wallet/commit/9ce64fed56807dff55da77cd8d7307c38b193a9e))
* notification infinite scroll ([e655662](https://github.com/aeternity/superhero-wallet/commit/e65566237b8092d0ae1ecd9182a7fb3933761953))
* redesign notifications page & move notifications to composable ([05e4ea2](https://github.com/aeternity/superhero-wallet/commit/05e4ea296bf138e444ec418cb5630e4289681f57))
* remodeled not found page ([fec08d1](https://github.com/aeternity/superhero-wallet/commit/fec08d110a6c67910b84f03cd5a7c21a3efad137))
* show active network on header ([7699eb4](https://github.com/aeternity/superhero-wallet/commit/7699eb403e0cffa8e79ec51cb6b76c9460d22581))


### Bug Fixes

* account card avatar overflow ([0ba0318](https://github.com/aeternity/superhero-wallet/commit/0ba031876294d83668246e3e16442fe5b29e53b7))
* **account-import:** be able to generate account from valid mnemonic ([272cfcb](https://github.com/aeternity/superhero-wallet/commit/272cfcb3a54fe99d0634e6f8767ce7e02c4c708a))
* adjust welcome screen styles ([16c2fca](https://github.com/aeternity/superhero-wallet/commit/16c2fcab3a035d8a51acd11e694202bc22b3363f))
* allow localhost in url check ([dcfd1d9](https://github.com/aeternity/superhero-wallet/commit/dcfd1d928d719c7a9cbcc9310c5aa8de627ba093))
* back button logic ([8eecf4c](https://github.com/aeternity/superhero-wallet/commit/8eecf4cd8770e47ebdbcc4000c0435645c663f78))
* **btn-icon:** use correct hover color and opacity ([47c6081](https://github.com/aeternity/superhero-wallet/commit/47c608163d2578c55300abe31279ecf06226ba13))
* coins & tokens router path ([a9c6d5f](https://github.com/aeternity/superhero-wallet/commit/a9c6d5f3f7393b7ed04a330ad3eca6c041e97779))
* composition api transactionToken and vuex ([b3d00c5](https://github.com/aeternity/superhero-wallet/commit/b3d00c52643faeaf325e83cef398c966ecba16a7))
* dapp permissions check [#1726](https://github.com/aeternity/superhero-wallet/issues/1726) ([6b53e74](https://github.com/aeternity/superhero-wallet/commit/6b53e743104875ca327c837d923e9bb54a2c1fe4))
* fix the overflowing name on send/receive popups ([3fd92a9](https://github.com/aeternity/superhero-wallet/commit/3fd92a936f330e2c72a00ebf45522763503b8fa4))
* **fungible-tokens:** load correct token balances info ([57716c7](https://github.com/aeternity/superhero-wallet/commit/57716c7893d903f321737bde7ccd8a27fc491a00))
* header route meta ([9f4a95e](https://github.com/aeternity/superhero-wallet/commit/9f4a95ea7128e63cf079a969fbe9844bcddff990))
* **header:** use existing computed ([36d4334](https://github.com/aeternity/superhero-wallet/commit/36d4334a4da7c0ba3f3aa4f120fd38b1f1bab1a9))
* **helper:** vue composition-api usage ([86d1141](https://github.com/aeternity/superhero-wallet/commit/86d1141cc6432b66c575f450fc0ef3a7e9bc5fc6))
* **index:** add Platforms only in web ([2c9f3c2](https://github.com/aeternity/superhero-wallet/commit/2c9f3c21f4db808b97a8c64c6894f74ec9c3b29a))
* inline button arrangement ([6f3a86e](https://github.com/aeternity/superhero-wallet/commit/6f3a86e77cf5b36cee4f90643f453d91a0ad643b))
* missing dex related transaction details ([4cd8e4d](https://github.com/aeternity/superhero-wallet/commit/4cd8e4d3c27bef8a98319610fd73a331222214f3))
* only format address ([233f56e](https://github.com/aeternity/superhero-wallet/commit/233f56e36575f26e2fd31f5cc1e6f861e40ecd39))
* open ios notifications in new tab ([01bd2bb](https://github.com/aeternity/superhero-wallet/commit/01bd2bb5b8d9cbdff7dfb77112140155945ae137))
* permission auto sign message [#1158](https://github.com/aeternity/superhero-wallet/issues/1158) ([7712a32](https://github.com/aeternity/superhero-wallet/commit/7712a320807bec6bf77708cf362c76f179cfe0cc))
* prevent names from overflowing on transaction details ([b2a4f24](https://github.com/aeternity/superhero-wallet/commit/b2a4f24d6794e424516c689775d03ddfb817df55))
* refactor TransactionList.vue ([b61b18b](https://github.com/aeternity/superhero-wallet/commit/b61b18b113c8c28dd96cebf3174c2e85b2897254))
* remove transactionTokensMixin.js ([c40c15c](https://github.com/aeternity/superhero-wallet/commit/c40c15c2e3f60240905593924824fd24d5ab85ba))
* reopen ae coin details ([6eaf0c1](https://github.com/aeternity/superhero-wallet/commit/6eaf0c19f18fdbbf32e339b188ec3ecda27aae3f))
* **routes:** apply correct header logic for Auction pages ([df6f1fc](https://github.com/aeternity/superhero-wallet/commit/df6f1fc12052eddb76cf013a334911a848bccd75))
* **route:** set scroll position to 0 for every page ([9e03ef0](https://github.com/aeternity/superhero-wallet/commit/9e03ef0ff743153c4517f36947d631d1229113a9))
* scrollable screens ([746021d](https://github.com/aeternity/superhero-wallet/commit/746021d66798c7a0c723ca796c59d240d0e0aa5e))
* show all info on claim tip transaction details ([6174ba4](https://github.com/aeternity/superhero-wallet/commit/6174ba4d7121520700ab070c6b36be609b384428))
* show correct info for pending token send transaction ([79ab508](https://github.com/aeternity/superhero-wallet/commit/79ab50898cb7ae3de0c3b66b5821dd3c6c328258))
* show long tip urls correctly ([d54f100](https://github.com/aeternity/superhero-wallet/commit/d54f100b96f4b9117cede04adecd1f1635a270f2))
* **transaction-details:** show loading state while loading a transaction ([f5f9a08](https://github.com/aeternity/superhero-wallet/commit/f5f9a084266502c124de5f2f3b8e2aa3707b373f))
* **transaction-item:** show labels token send transactions ([4f6dc52](https://github.com/aeternity/superhero-wallet/commit/4f6dc52605713ab6c5cb4b1a0e21167de880a62c))
* **transactions:** show none AE transactions correctly ([b48d69d](https://github.com/aeternity/superhero-wallet/commit/b48d69d99ec5b0c79e7053529de74c36a54a59d0))
* **transfer-receive:** set correct button styles ([b9fe262](https://github.com/aeternity/superhero-wallet/commit/b9fe262a15d065aba5759bcbc3de23c4cbfbb4b1))
* use a valid type for a tipUrl prop ([629084d](https://github.com/aeternity/superhero-wallet/commit/629084d43095e23c2d187c6ff5828d654cce3b87))
* use correct close icon ([e028f61](https://github.com/aeternity/superhero-wallet/commit/e028f618a56ec626028bd452491e463b5cace4f8))
* use modal-like footer in verify seed phrase form ([cd26602](https://github.com/aeternity/superhero-wallet/commit/cd266029ec1dfe187324bf5c1e06761a4a904410))


### Style

* apply different styling of conditions in TransactionItem ([4b70938](https://github.com/aeternity/superhero-wallet/commit/4b7093863bfeb17e377b84abb377789d232c9359))
* **modal:** remove unused selector ([f82b308](https://github.com/aeternity/superhero-wallet/commit/f82b308472d81fc37e30502d9b11dbcdb0530058))


### Tests

* add tests for isTxAex9 getter ([a32c848](https://github.com/aeternity/superhero-wallet/commit/a32c8487af8aad1369a7b89e1ae4a967ba59e7aa))
* align test names ([3a4f117](https://github.com/aeternity/superhero-wallet/commit/3a4f117790c9a36783ca0b26ed24d65309bec51c))
* fix e2e tests ([a39f3b9](https://github.com/aeternity/superhero-wallet/commit/a39f3b950b5e8a332d752744f0ced2cdc1e4675f))
* fix transaction-details spec ([b85407d](https://github.com/aeternity/superhero-wallet/commit/b85407de5596f16bd33752dcdfa3eb6816e8786f))
* fix ts-jest warnings ([c37a462](https://github.com/aeternity/superhero-wallet/commit/c37a462ec6532c9e6e03e488c533e8e16f9447ed))
* fix unit tests ([3539d8c](https://github.com/aeternity/superhero-wallet/commit/3539d8cb59b1b2c8efddebf8e28259cf4c101559))
* **import-account:** test seed phrases more than 12 words ([1a7c7ef](https://github.com/aeternity/superhero-wallet/commit/1a7c7efdee9861935de0f1703a41868023ccfff1))
* introduce error cases ([32a8d52](https://github.com/aeternity/superhero-wallet/commit/32a8d522ed464f4811b31cb858a839d4d06ba0f2))
* support typescript and composition-api ([d224269](https://github.com/aeternity/superhero-wallet/commit/d224269dc6395a5d552c91f0ff2ad1d1b3865820))


### Documentation

* add BrowserStack tooling to README.md ([84aa4e2](https://github.com/aeternity/superhero-wallet/commit/84aa4e21993718c8b96ce9d95b62c95c2bf6b070))


### Maintenance

* add types for selected utilities ([5f61e08](https://github.com/aeternity/superhero-wallet/commit/5f61e08b62c16bbf69c6d8d63a5e3705e084cd41))
* disallow unused variables ([92cd2a1](https://github.com/aeternity/superhero-wallet/commit/92cd2a1f02fb58663f7b5141a47081d69f15d189))
* migrate router to type script ([8dd0a02](https://github.com/aeternity/superhero-wallet/commit/8dd0a023d5168886e5b7030dd128d41592714f17))
* **refactor:** deeplink api & max amount mixins ([3741910](https://github.com/aeternity/superhero-wallet/commit/3741910f01dda1e7b2e285fa93019f784fd09af7))
* remove duplicated sdk vuex states ([ee024dc](https://github.com/aeternity/superhero-wallet/commit/ee024dc40cff0f9f174c865116b54810816088eb))
* remove fake modal transition from account details ([1a8e8e5](https://github.com/aeternity/superhero-wallet/commit/1a8e8e5d85b7b0aaa84e0927152d4334df559090))
* remove unused imports ([4cfd833](https://github.com/aeternity/superhero-wallet/commit/4cfd833a487a811b92dd3814d1ecdeadfc72504f))
* restructure routes ([fd9c2f0](https://github.com/aeternity/superhero-wallet/commit/fd9c2f0e0228a7bdcdd099c3179761a45aa7bdd9))
* update button color variants ([3797e53](https://github.com/aeternity/superhero-wallet/commit/3797e536e221b405dbcb03ed98a8ba34cb13ecfa))

## [1.0.1](https://github.com/aeternity/superhero-wallet/compare/v1.0.0...v1.0.1) (2022-11-15)


### Features

* add network forms ([e7028cd](https://github.com/aeternity/superhero-wallet/commit/e7028cdb3de7f8bce30922404ec58699f144d4a2))
* add send process indication ([c6ebb4f](https://github.com/aeternity/superhero-wallet/commit/c6ebb4fcfe282e6ccccee15de9bf01860d21fa47))
* add/edit permission ui updates ([4bb0867](https://github.com/aeternity/superhero-wallet/commit/4bb0867db18d9e0db82d4eed1341a0c9b91ebd59))
* added superhero logo to qr code generator ([ae29bac](https://github.com/aeternity/superhero-wallet/commit/ae29bac716159814f7ff567ba39c6542f5bdfefd))
* apply opacity to not selected accounts ([c8226d4](https://github.com/aeternity/superhero-wallet/commit/c8226d439fb5d68db15f307c5b397b1f4cc37c35))
* closable dashboard cards ([b18b0b8](https://github.com/aeternity/superhero-wallet/commit/b18b0b8bf997d10320256f3ab3c4530496e994a1))
* deeplink connection popup ui updates ([2f562fe](https://github.com/aeternity/superhero-wallet/commit/2f562feea267d6b7065e0f610caa6fae13f51807))
* remove unused confirm-tip.vue ([2eb9410](https://github.com/aeternity/superhero-wallet/commit/2eb94105fe02e9a86dc824815abe8e58fea8a2e6))
* seed phrase ui updates ([77d6fe9](https://github.com/aeternity/superhero-wallet/commit/77d6fe96696828339066a362aaed4660e923623c))
* **settings:** change network list UI ([a3be56b](https://github.com/aeternity/superhero-wallet/commit/a3be56bb792954d3eae5361cb057d820d651ea25))
* sticky account detail search bar & filters ([ff5f4e9](https://github.com/aeternity/superhero-wallet/commit/ff5f4e9cdde43cd0c0b3274d0fc0233009b4eb48))
* text blocks unification ([cce7db2](https://github.com/aeternity/superhero-wallet/commit/cce7db2630b0b24c5fe6b257bdcc28ca21e3b952))
* **token-details:** add collapsible scroll view with filters ([b928c6d](https://github.com/aeternity/superhero-wallet/commit/b928c6de3302df68ad41fe17f0ca562f156e5f4c))
* use disabled amount input for invites ([af5836b](https://github.com/aeternity/superhero-wallet/commit/af5836ba846879a5eecd35242f06c393e3a0c649))


### Bug Fixes

* adjust footer gradient position ([74a88d8](https://github.com/aeternity/superhero-wallet/commit/74a88d82586f152b34ad013ab368edd350298412))
* adjust transaction details styles ([03ee572](https://github.com/aeternity/superhero-wallet/commit/03ee572b52cce18191a4ad6aa6d34904a189ce53))
* app and modal rounded corners ([ee7f51c](https://github.com/aeternity/superhero-wallet/commit/ee7f51c153ff2dc5a50578dc0a5d95c0023ceeeb))
* app page and modal bottom inset ([f5f0bcd](https://github.com/aeternity/superhero-wallet/commit/f5f0bcd1da0c55cc9416a5a358fa2b0c14d32904))
* apply sticky rule for filters ([f960b35](https://github.com/aeternity/superhero-wallet/commit/f960b358da903df9474584b9f609d5190a66ca7a))
* **background:** change network/account correctly ([6dc23bd](https://github.com/aeternity/superhero-wallet/commit/6dc23bdb975c8883d49038363d33349165514a9f))
* bell icon and notification badge ([982cfd7](https://github.com/aeternity/superhero-wallet/commit/982cfd7434a17054ea8f96e83c8ee5069addc187))
* buy link fix ([78679a3](https://github.com/aeternity/superhero-wallet/commit/78679a3a203ce6a04e65e81ee50e9c3b855b3a25))
* buy link fix ([427b955](https://github.com/aeternity/superhero-wallet/commit/427b955f63f7c4d55b2e4a1118f963cb09e2a4dd))
* camera on extensions ([2971227](https://github.com/aeternity/superhero-wallet/commit/29712270ade8faa9c550acc85fbc9b6b548e0f1b))
* connected and sign modals margins ([93b6b55](https://github.com/aeternity/superhero-wallet/commit/93b6b55b0f621673d52ed6213cdee041d7301d0d))
* **copy text:** ability to click when disabled ([bdec040](https://github.com/aeternity/superhero-wallet/commit/bdec040abfb3812c9ec84656fdadef9aa28990ae))
* **copy text:** ability to click when disabled ([9ce6a44](https://github.com/aeternity/superhero-wallet/commit/9ce6a447cdcc6dccc1469fb0dff98e44b1d431eb))
* disable formatting in tx overview for non-hash labels ([507587c](https://github.com/aeternity/superhero-wallet/commit/507587cf14c76a13c084ab04439efc26da799a50))
* **firefox:** prevent number input from allowing letters ([082ed4b](https://github.com/aeternity/superhero-wallet/commit/082ed4bbd31cb13185f4044dd7260972d8b06454))
* fix permissions back button ([55672e7](https://github.com/aeternity/superhero-wallet/commit/55672e7930bf4d3efe51f5e8eab6578d814b5464))
* fix Transaction successfully submitted, link to explorer and fix token ([42dd46c](https://github.com/aeternity/superhero-wallet/commit/42dd46cdfed16e733836b3aa0569eec1a8c7c097))
* get ae coin from scanned qr code ([fca6ebd](https://github.com/aeternity/superhero-wallet/commit/fca6ebdcd76cfb55b699164c588fd6b654a09b1a))
* hide close dashboard cards buttons ([0ca6a96](https://github.com/aeternity/superhero-wallet/commit/0ca6a96f6555e84f048b404194e7a023b1b21df6))
* hover under search ([d593db0](https://github.com/aeternity/superhero-wallet/commit/d593db095ce881b8512eeb4fc7944a540224ba2e))
* inital active account card auto update ([b248ef2](https://github.com/aeternity/superhero-wallet/commit/b248ef2eca9019329fe128725e799536e171b202))
* limit number input to number only ([7833faa](https://github.com/aeternity/superhero-wallet/commit/7833faa3f6af54135dc8e2622cdb5143ad2fad40))
* modal footer fix ([7b5f3d0](https://github.com/aeternity/superhero-wallet/commit/7b5f3d064f6eed5be4bdc069f45483f15bf70927))
* move buttons from edge of the screen ([9c8dd0b](https://github.com/aeternity/superhero-wallet/commit/9c8dd0bffc0bab3f3e945aed7d67218060f00087))
* move loader layer above the account details tabs ([e2340c2](https://github.com/aeternity/superhero-wallet/commit/e2340c2572beb0b033fac2df1e0d5f33f43b66ad))
* name allowed characters length ([627f2ac](https://github.com/aeternity/superhero-wallet/commit/627f2acf8ea7ed8db939cbce8a0007a789975e95))
* no registered name message button alignment ([850a646](https://github.com/aeternity/superhero-wallet/commit/850a646af3ee9ceb28d07a66c4589463f7f1348f))
* **platforms:** missing import ([68c4966](https://github.com/aeternity/superhero-wallet/commit/68c49667c8a63305964b44d0c9837f3afc7e2d6e))
* prevent error when name set to default and not connected ([54b3c20](https://github.com/aeternity/superhero-wallet/commit/54b3c2045c576a2500a9ca4a360fcbe87112809e))
* qr code reader ([b1d3d5b](https://github.com/aeternity/superhero-wallet/commit/b1d3d5b786089a5b9079ec4344790167723a47e7))
* qr code sh logo size ([99d03ff](https://github.com/aeternity/superhero-wallet/commit/99d03ff8442a6338dddf45ccdba3c9809a69b6f0))
* **recieve:** dot validation on input ([42e0964](https://github.com/aeternity/superhero-wallet/commit/42e0964cf328d63ef15309f170f28fa69964847f))
* remove account import button top margin ([f9d6298](https://github.com/aeternity/superhero-wallet/commit/f9d62982f3fbc679ee3cc393a90fe518e5b377a3))
* remove app bottom empty space ([408f717](https://github.com/aeternity/superhero-wallet/commit/408f7178e56e0e850ff58ec4dccbdab0e0f082ef))
* remove unnecessary page scrolling ([92c7c6c](https://github.com/aeternity/superhero-wallet/commit/92c7c6c820ab61739b20c82104c1b5ead8607cfb))
* repair utils ([ca74d4e](https://github.com/aeternity/superhero-wallet/commit/ca74d4eaf2b61bf578a232a3b922bec2b79f71f5))
* resize qr code logo and remove flickering ([3ad0b1f](https://github.com/aeternity/superhero-wallet/commit/3ad0b1ff49a38d9bf8b151020af663201d293370))
* seed phrase screen ui ([7e0a4c4](https://github.com/aeternity/superhero-wallet/commit/7e0a4c43a7c173e3fb0cd5dbb1368aab32ff3423))
* send modal address placeholder text ([6abb581](https://github.com/aeternity/superhero-wallet/commit/6abb58135e1490c60ca47b7d533a908a9cf88722))
* show none AE related transactions correctly ([f82ca12](https://github.com/aeternity/superhero-wallet/commit/f82ca12560987c704eb0b3f2b7012ca45438a8d2))
* top bar style ([0b2dd51](https://github.com/aeternity/superhero-wallet/commit/0b2dd51dce2933df7d007b0484899848242ce82e))
* transaction list scroll load more ([25802dc](https://github.com/aeternity/superhero-wallet/commit/25802dc9c20156291404f5266247f69ac4573ec4))
* transaction should remain filters shown if filter is changed ([f25c6bd](https://github.com/aeternity/superhero-wallet/commit/f25c6bd1c1c9fcf84b4183d432a706909e5f4edd))
* **transaction-overiew:** show a proper name for transactions to sent to a name ([062f42c](https://github.com/aeternity/superhero-wallet/commit/062f42c6d2aee17f405048a413bf9aa76d43baff))
* **transactions:** fetch next transactions page correctly ([f435b3e](https://github.com/aeternity/superhero-wallet/commit/f435b3e9b214854142192f906a7c4be19d3c61e1))
* **transactions:** show pending tip transaction correctly ([52700e7](https://github.com/aeternity/superhero-wallet/commit/52700e76858b2390b9f217fc02ceea8335fed472))
* **transfer-receive:** handle none AE tokens correctly ([38e59e9](https://github.com/aeternity/superhero-wallet/commit/38e59e9b91d7639d47725a0502c2058d9669ca55))
* viewport on android ([7d0c715](https://github.com/aeternity/superhero-wallet/commit/7d0c71520190e6bfac71a597ca50eac89ee6f5c6))
* viewport on mobile browsers ([1d71307](https://github.com/aeternity/superhero-wallet/commit/1d71307f83d0b084a7cf1bebaa6cbe4d8b4d3d2d))
* when wallet running on ext cannot use composition api watch ([87ea0f8](https://github.com/aeternity/superhero-wallet/commit/87ea0f8d6136a970ecbe2f2dc554a02286b3153e))


### Maintenance

* add typescript and vue composition api ([5bf236e](https://github.com/aeternity/superhero-wallet/commit/5bf236ec5b3ba322c37ba17a106ff2249a3a5f4d))
* buttons new ui by default ([cd6eb1b](https://github.com/aeternity/superhero-wallet/commit/cd6eb1ba40c8865bc54cd38c43db653ab51de38a))
* environment variables as imports ([79750b2](https://github.com/aeternity/superhero-wallet/commit/79750b2a873a8d24259b16487d7a54654f72987d))
* inputs new ui by default ([af33bd8](https://github.com/aeternity/superhero-wallet/commit/af33bd8c7921ca07b3949335dfd5398d0eec9223))
* move vue components to popup dir ([4ac1098](https://github.com/aeternity/superhero-wallet/commit/4ac1098db25dc1449d6c7c1e44dd4ea88a4696b2))
* name tip/retip pending transaction fields consistent ([c1a28c2](https://github.com/aeternity/superhero-wallet/commit/c1a28c29a30d769e962430cd48003bafcf24229e))
* node connection statuses as constants ([619fa43](https://github.com/aeternity/superhero-wallet/commit/619fa43873ef1feec8bd937ad4f2f5c520296cc1))
* **notifications:** statuses as constants and tabs styling ([19e9908](https://github.com/aeternity/superhero-wallet/commit/19e9908edc5595548ef4420e4694e8672b648ee0))
* popup utility functions unification ([4f25c75](https://github.com/aeternity/superhero-wallet/commit/4f25c75149f7917d3205df0fb961520012fde5eb))
* remove aepp components library ([6cf0da6](https://github.com/aeternity/superhero-wallet/commit/6cf0da62a0911267e57dea6778f82fece5a5f848))
* replace copy mixin with composable ([e5dc80d](https://github.com/aeternity/superhero-wallet/commit/e5dc80ddb29f060585333ff4cf834fcbf2b34cf9))
* replace mixin balance list with composable ([dcc6f34](https://github.com/aeternity/superhero-wallet/commit/dcc6f349a76cc0d570002e9bb45dfc0991966148))
* **tabs:** unify the tabs appearance ([76c0463](https://github.com/aeternity/superhero-wallet/commit/76c0463e5cac4109db75dda6ffb7ed6639c1986a))
* update css color variable names ([9922eb5](https://github.com/aeternity/superhero-wallet/commit/9922eb5a4f5e89ef4c81c64108cc4fa9681d9e94))
* visual and performance tweaks ([b1184f3](https://github.com/aeternity/superhero-wallet/commit/b1184f362a23868de62cc8c432ff29e0e9314043))
* vue3 compatible passing content to slots ([8ca0c7e](https://github.com/aeternity/superhero-wallet/commit/8ca0c7eb12d32ab44ab9cef1325e2e5f3945e006))

## [1.0.0](https://github.com/aeternity/superhero-wallet/compare/v0.9.11...v1.0.0) (2022-09-10)


### Features

* about screen ui updates ([3b435dc](https://github.com/aeternity/superhero-wallet/commit/3b435dcb356f4655d46e8bea0c2e6f31f08ba2d9))
* account add modal ([7ccbbba](https://github.com/aeternity/superhero-wallet/commit/7ccbbba5ca72d045fef3f36890edd3de9d675ba5))
* account card swipe and arrow switching ([e081fff](https://github.com/aeternity/superhero-wallet/commit/e081fff34c57779fbf021c0b35889708a4091070))
* account details as page and page transitions ([329c261](https://github.com/aeternity/superhero-wallet/commit/329c26187d5de3393d0fa3e83cfd094bb835da57))
* account details names ([9940687](https://github.com/aeternity/superhero-wallet/commit/9940687ad30a8f16f8d4e0b1671393108402d493))
* account details popup, transaction list, tokens list ([2a69311](https://github.com/aeternity/superhero-wallet/commit/2a693116c445ad9592ff73ad6197440909b39f9c))
* **account:** implement accounts card ([2636253](https://github.com/aeternity/superhero-wallet/commit/26362537bf6adef13a8ec745e37042c587941c53))
* **accounts:** discover subaccounts on seed phrase recovery ([cabca3e](https://github.com/aeternity/superhero-wallet/commit/cabca3ecb2a71d508697220b02a4352fe3664594))
* add account card ([2a13a95](https://github.com/aeternity/superhero-wallet/commit/2a13a9585b0cf985a86e03e9f1e3576a22f76263))
* add bullets to account switcher ([0fc370a](https://github.com/aeternity/superhero-wallet/commit/0fc370ab29d6afd0be4f3593d9f740a3ad3f6791))
* add total amount of fiat for all accounts ([439914f](https://github.com/aeternity/superhero-wallet/commit/439914f17bbb104fc8ae856170e116fe66041a28))
* change link ([d575399](https://github.com/aeternity/superhero-wallet/commit/d575399e7fa6d15125daec49cc09a2bfe748abda))
* change qr code popup style ([2da49aa](https://github.com/aeternity/superhero-wallet/commit/2da49aacac1bd57a20c7e27dfb890a42ee24f9f5))
* claim tips ui screen ([e85dc05](https://github.com/aeternity/superhero-wallet/commit/e85dc05afacdbd2424b468638c20448e981e55e3))
* currency settings screen ([c73ef3c](https://github.com/aeternity/superhero-wallet/commit/c73ef3c17bf3d4385b92bd163ab547b7b2ea1413))
* disable diamond button on home page & add disabled state for send button ([530956b](https://github.com/aeternity/superhero-wallet/commit/530956b9753b8808188af183a222fee6a55be31f))
* errors log setting ui updates ([2cb6e02](https://github.com/aeternity/superhero-wallet/commit/2cb6e02896fcd46a63033eadda8678be9ccd3196))
* implement recipient helpers ([7868c85](https://github.com/aeternity/superhero-wallet/commit/7868c8588af665a7ad66302a3f18ce6315c3a951))
* invite screen ui updates ([7fccc0c](https://github.com/aeternity/superhero-wallet/commit/7fccc0cb1a80e7c878d6139b3a98d63880ffcfc0))
* language setting ui updates ([44a2ab3](https://github.com/aeternity/superhero-wallet/commit/44a2ab3e6ec432732e4420e48645ac527677597f))
* make send and receive cards dense ([58a740e](https://github.com/aeternity/superhero-wallet/commit/58a740ec796252e502d53ef4bec54ccecea7efff))
* **modal:** appear from bottom modal variant ([b550f63](https://github.com/aeternity/superhero-wallet/commit/b550f6344286fd6275e24af340aadbccd99d3a1a))
* more main screen, new app ui background ([671137a](https://github.com/aeternity/superhero-wallet/commit/671137a56c3c51d0676acf7e827d5a27218b20d5))
* notifications setting ui updates ([b4cb12d](https://github.com/aeternity/superhero-wallet/commit/b4cb12d5bb0754c7faf327e318b98237960d9e9f))
* page transitions tweaks ([5a0fdd4](https://github.com/aeternity/superhero-wallet/commit/5a0fdd482be7f7daf3d8ad1ddaf4f047dcb2f0d5))
* permission setting ui updates ([f76dfd0](https://github.com/aeternity/superhero-wallet/commit/f76dfd0c67749f53fd2fa57f85eff8d748eb839d))
* **receive-tokens:** implement asset selector popup ([cba90d3](https://github.com/aeternity/superhero-wallet/commit/cba90d3487cd195a1f3a40035cf19a2fed6334c9))
* redesign index page ([82108b3](https://github.com/aeternity/superhero-wallet/commit/82108b371eda0920a7fb41160c22c0ffd2beab89))
* redirect user after seed phrase confirmation ([7716900](https://github.com/aeternity/superhero-wallet/commit/7716900fa7aebb64ae70479c2987ff771fd300d8))
* remove ability to copy address from acc card ([c67608d](https://github.com/aeternity/superhero-wallet/commit/c67608d5640597dbdb956375dc15dc9089a743e6))
* remove excess buttons from AccountCard and from TokenList ([e4ffed2](https://github.com/aeternity/superhero-wallet/commit/e4ffed26cfa5b2c3df33e9e90e01a3f5362fbd1d))
* reset wallet screen ui updates ([4e61b5f](https://github.com/aeternity/superhero-wallet/commit/4e61b5f91629fd669698ca7400ede6b8b1f3c824))
* seed phrase screens ([2b36b96](https://github.com/aeternity/superhero-wallet/commit/2b36b96ad93aee3c37cfaf6bca3c23bd1752fa3d))
* seed phrase setting ui updates ([d9eb41d](https://github.com/aeternity/superhero-wallet/commit/d9eb41d0ca278a9a9c5575c9dccf9dad110120a2))
* setting screen ui updates ([55f20e9](https://github.com/aeternity/superhero-wallet/commit/55f20e970e6ac26174cf38720c46e5a8d23f8119))
* submit textarea on enter click ([8bfba6e](https://github.com/aeternity/superhero-wallet/commit/8bfba6ef0045b63de336ef4470b1f9112f7a653d))
* token list item ui updates ([9b66bf1](https://github.com/aeternity/superhero-wallet/commit/9b66bf1bb9def65201c5c9d882109e04923cbfae))
* transfer receive modal ([3bcdf8a](https://github.com/aeternity/superhero-wallet/commit/3bcdf8a6e664754e61cd3adcddd360c2b531e8c6))
* transfer review screens ([ee72b2f](https://github.com/aeternity/superhero-wallet/commit/ee72b2feecd658920ebe2b92fde67b91768fc507))
* transfer send modal ([fc64022](https://github.com/aeternity/superhero-wallet/commit/fc6402297d8e63421acc031b96183d58c50f87d1))
* **transfer-send-form:** add current account info ([91ae8a7](https://github.com/aeternity/superhero-wallet/commit/91ae8a76ff9bfba2fd3be502a9c0e943f793f12b))
* **transfer-send:** add Max button ([895ce39](https://github.com/aeternity/superhero-wallet/commit/895ce39d131dce7571b62848cf1c5b3d9283cfa2))
* update add account card with new color ([cf992f8](https://github.com/aeternity/superhero-wallet/commit/cf992f873152e0d57200c7d3e2b41d5715f8a784))
* updated app icon ([4aa41c4](https://github.com/aeternity/superhero-wallet/commit/4aa41c4e588b2b9b4a1523ca1734783c9df19cdb))
* wallet dashboard ([ac45000](https://github.com/aeternity/superhero-wallet/commit/ac4500019762e1d4f8a0dd6586ee3eefda022ac1))


### Bug Fixes

* account details & dashboard links ([46f99ca](https://github.com/aeternity/superhero-wallet/commit/46f99cac381239a8445da0ee6c9445623aeeb0a5))
* account info active idx, switcher arrows ([5f580e2](https://github.com/aeternity/superhero-wallet/commit/5f580e2be321e6772ee0720959a310a52bc9a00d))
* **account-switcher:** show all existing accounts ([249c85f](https://github.com/aeternity/superhero-wallet/commit/249c85f344ee244e27f499a250c4ea448f35bf4e))
* add margin before terms on mobile ([ccdd2ff](https://github.com/aeternity/superhero-wallet/commit/ccdd2ff4af59c72e8bea57fbf3777e553967cf78))
* app icon & splash ([c296772](https://github.com/aeternity/superhero-wallet/commit/c2967724f611cb1a9fe5200190975c7c451c64ce))
* **build:** remove circleci build ([8f5b024](https://github.com/aeternity/superhero-wallet/commit/8f5b0244a556138e8eb7065578d964c9f66a2b1c))
* calculate fee properly ([7416014](https://github.com/aeternity/superhero-wallet/commit/7416014c594f5c00cf2323a5d8f6246f233e2b20))
* change back button logic for auctions page ([014fea5](https://github.com/aeternity/superhero-wallet/commit/014fea5b905bde3a10d1c456130e8a78dc9898a9))
* claim tips active account index ([acd7a5b](https://github.com/aeternity/superhero-wallet/commit/acd7a5b88c103ff8c207b180724c6293f50f4491))
* **claim:** use new error message format for the input field ([75ef92c](https://github.com/aeternity/superhero-wallet/commit/75ef92c4fa661ac1c7daf8239859da49ab47f7ed))
* dashboard claim name link ([bba188c](https://github.com/aeternity/superhero-wallet/commit/bba188cf9ae5f9adddb0594f2e4471b18941ec8e))
* dashboard receive & send buttons links ([032c9fa](https://github.com/aeternity/superhero-wallet/commit/032c9faed5e79b562679864c29adff27b13e9157))
* **deeplinks:** handle transfer deeplink correctly ([bcba88e](https://github.com/aeternity/superhero-wallet/commit/bcba88ef65c48e6d7d25eb46053474fd45c94c88))
* display proper amount of tokens in account card ([92de082](https://github.com/aeternity/superhero-wallet/commit/92de0822b617ffdf1e6bbcd7504dc93012980043))
* fix asset selector styles ([bd73c86](https://github.com/aeternity/superhero-wallet/commit/bd73c8626d1761a795779837f4b66488f636a587))
* fix top padding on onboard screen ([ea52056](https://github.com/aeternity/superhero-wallet/commit/ea5205643470cc30184dd3becf399b1bd6575113))
* include safe-area for fullscreen modals ([ca3c744](https://github.com/aeternity/superhero-wallet/commit/ca3c74409938e02ece8be0080e324ed45dc93610))
* **index:** make terms an internal link ([0c5364b](https://github.com/aeternity/superhero-wallet/commit/0c5364ba6b0adbeb8f3461e2a94b7c49287d1171))
* **modal:** align footer buttons correctly ([015257f](https://github.com/aeternity/superhero-wallet/commit/015257fcbcdee8573352f9e28a0070560da96713))
* more screen width ([2bcc377](https://github.com/aeternity/superhero-wallet/commit/2bcc3773bbd59cae5302b10a912b0b0beefe56a0))
* move buttons up on mobile ([6d8fdea](https://github.com/aeternity/superhero-wallet/commit/6d8fdeaeb9c0e5d99ce33f40defe8ed22cf4342d))
* **name-item:** be able to set pointer ([a4ed73d](https://github.com/aeternity/superhero-wallet/commit/a4ed73d6252e7144b5ff8bc20e50c241b5ba3555))
* **node-connection-status:** align status correctly ([c77e989](https://github.com/aeternity/superhero-wallet/commit/c77e9892e7d2898d0cc921aafad3378e2151c4c3))
* **permissions-details:** display error correctly ([e90f028](https://github.com/aeternity/superhero-wallet/commit/e90f028de5d5de5cd0379194d2eb7c25cc599721))
* preselect token in send modal ([fc7deb6](https://github.com/aeternity/superhero-wallet/commit/fc7deb6da2be86d2deb47bf02ed705db4d49148f))
* prevent asset selector from freezing on open ([43e0915](https://github.com/aeternity/superhero-wallet/commit/43e0915129f20a66ed15793b100933b2b039fc63))
* qr camera should stop preview on stop, bg colors ([74e26ee](https://github.com/aeternity/superhero-wallet/commit/74e26ee207e961da40c27937cdb2c2729913bbda))
* qr scanner ([c572471](https://github.com/aeternity/superhero-wallet/commit/c5724716c6faa4e9a5f6152b13cfffbbb0e3d853))
* **qr-code-reader:** do not cover scanning modal ([fb33523](https://github.com/aeternity/superhero-wallet/commit/fb335232fd44402680762eb3eb7624d5bdcbeefe))
* **recipient:** make help page full screen ([d4344cc](https://github.com/aeternity/superhero-wallet/commit/d4344cc15a1d0ccdb0fb699bd0497d5688915e94))
* **retip:** fit long url in the screen ([3e17fcf](https://github.com/aeternity/superhero-wallet/commit/3e17fcf0de1b88983765859d46049e513e06440e))
* **seed-phrase-verify-settings:** show correct wording ([0e15400](https://github.com/aeternity/superhero-wallet/commit/0e15400885741492bdc38c861b47c06a91762463))
* **share:** remove line breaks ([aa703d5](https://github.com/aeternity/superhero-wallet/commit/aa703d59486b98a1c808e770d7f23234133000cf))
* status bar background color ([9f69ffa](https://github.com/aeternity/superhero-wallet/commit/9f69ffa1f284a4e3c98bb625b6d921b4f3c8778d))
* **tokens-list:** ability to open receive modal ([8dfbcb4](https://github.com/aeternity/superhero-wallet/commit/8dfbcb48445f80a187bbca57c29b4d391320cd93))
* **transactions:** show only current account transactions ([e11ffc7](https://github.com/aeternity/superhero-wallet/commit/e11ffc7b2a69a378672eb3c61a96ac66c77ce7e1))
* **transfer-receive:** align account names ([f062ae5](https://github.com/aeternity/superhero-wallet/commit/f062ae549303ae9c3b08c91303c7925b1325ae4a))
* **transfer-receive:** correct share link, make it backwards compatible ([26a5268](https://github.com/aeternity/superhero-wallet/commit/26a5268c8f3522697e62e56c4ac40c39c7efb928))
* **transfer-receive:** do not require optional field ([6c384e6](https://github.com/aeternity/superhero-wallet/commit/6c384e61d0df45aef9a4f89dd72baaf84e74bb35))


### Tests

* adjust tests ([1470b64](https://github.com/aeternity/superhero-wallet/commit/1470b6404946a16ef46839b5a4ae3640326355d4))


### Maintenance

* **account-info:** fix warning ([ccf0b95](https://github.com/aeternity/superhero-wallet/commit/ccf0b95ab2ff2196a28ee765e4681ee337cee0a9))
* add url status validation ([cf5f916](https://github.com/aeternity/superhero-wallet/commit/cf5f9164c28d83494fb0fb41973d7b595fb19127))
* bigger qr code ([89a2939](https://github.com/aeternity/superhero-wallet/commit/89a2939b2e42b7bf39fac8567b3c298ee2415228))
* change receive modal share messages ([3907073](https://github.com/aeternity/superhero-wallet/commit/3907073c503a97664b2f9543f02754903f97e525))
* combine error and warning prop in input field component ([3a0b589](https://github.com/aeternity/superhero-wallet/commit/3a0b589db44326b6c06d38fc955eda60492ffc84))
* **dashboard:** remove unnecessary Plate wrapper ([7ed769b](https://github.com/aeternity/superhero-wallet/commit/7ed769b85d31e6d320afcc7cb2322586bba4730e))
* extract aeternity constant ([5997253](https://github.com/aeternity/superhero-wallet/commit/59972537872928e45b5c8708b080cd7435764e64))
* **fungible-tokens:** remove selectedToken entity ([1126c25](https://github.com/aeternity/superhero-wallet/commit/1126c257e7799146445ea7c65b749de17ef36c27))
* **header:** change back button logic ([58e3735](https://github.com/aeternity/superhero-wallet/commit/58e3735da6f9101f431a5d0b4e13a150d2b4853c))
* **header:** hide home button when back button is shown ([6279f27](https://github.com/aeternity/superhero-wallet/commit/6279f27aeadf8ca50d08b30c292bd9b9a0f5b874))
* **name:** implement new design for buttons ([20abbc2](https://github.com/aeternity/superhero-wallet/commit/20abbc2fa7335e7ed8f74d1b943a9f4764d68ed8))
* **refactor:** clean new-ui temporary variable ([7a8735e](https://github.com/aeternity/superhero-wallet/commit/7a8735e9f473069d68108bf982e7521bd6a69995))
* remove /accounts route ([84a4b08](https://github.com/aeternity/superhero-wallet/commit/84a4b082f323a4f3f154e5ece6dc55314cb4761a))
* remove hideTabBar variable ([dad8e66](https://github.com/aeternity/superhero-wallet/commit/dad8e6641e1882f4b980fdb70f370ca3092efbd4))
* remove onboarding screens ([4d72636](https://github.com/aeternity/superhero-wallet/commit/4d726363a48c860900ed5257675059970e8da77c))
* **settings:** update report bug link ([55a68b3](https://github.com/aeternity/superhero-wallet/commit/55a68b34a212713192cbc2f345b012107fbf17f5))
* **style:** fix missing design elements in welcome screen ([9fb8c5b](https://github.com/aeternity/superhero-wallet/commit/9fb8c5b33a3f737e996e124295393ca10a88ed3e))
* **tips:** remove learn more link ([4687463](https://github.com/aeternity/superhero-wallet/commit/4687463bb85adcadb59bccbafaec5ca0cdf3bb92))
* **transfer-receive:** simplify logic ([98fc0f2](https://github.com/aeternity/superhero-wallet/commit/98fc0f20d8c4aa361b6fc51781be5601e68cdea0))

### [0.9.11](https://github.com/aeternity/superhero-wallet/compare/v0.9.9...v0.9.11) (2022-08-12)


### Features

* add bullets to account switcher ([12a2d60](https://github.com/aeternity/superhero-wallet/commit/12a2d60d37ff3848628f67553a1b053fad0e3b93))
* address shortening component ([55edeea](https://github.com/aeternity/superhero-wallet/commit/55edeead669b31e0a4b54f323a66d5b44faa7562))
* adjust transaction confirmation modals to be DEX compatible ([835e258](https://github.com/aeternity/superhero-wallet/commit/835e2581b930b33bf1d36e31ff9063af83e32fd3))
* adjust transaction details screen to new UI to be DEX compatible ([f39e1cd](https://github.com/aeternity/superhero-wallet/commit/f39e1cda7ebe06b49ea8f9c20a4a834b3863a7b1))
* show all tokens user had activity with ([15aef34](https://github.com/aeternity/superhero-wallet/commit/15aef3445a660a991eed49df2b31490e709c9563))
* store pending transactions for each node ([1b11998](https://github.com/aeternity/superhero-wallet/commit/1b1199854f7af0603385425999af9c382bf3231c))
* token details ([bb4335e](https://github.com/aeternity/superhero-wallet/commit/bb4335e8d4cef910d33686e729203c36fddc2ade))
* tooltip component ([e448f1e](https://github.com/aeternity/superhero-wallet/commit/e448f1ee6c2870bbc7ee3c2814f64994be08b038))
* transaction details swap rates ([406adc2](https://github.com/aeternity/superhero-wallet/commit/406adc2416c09ba0915cfcb5d55d0d6bc3d7fa81))
* transaction details swap route ([28b1111](https://github.com/aeternity/superhero-wallet/commit/28b111162d52ad804cae3e0d60207da5bc51ca18))
* **transaction-list:** ablity to filter pending transactions ([f7c624e](https://github.com/aeternity/superhero-wallet/commit/f7c624ec81899b850e748d6df0059a48efc8a599))
* update transaction list ([6b8b90b](https://github.com/aeternity/superhero-wallet/commit/6b8b90bede4dcc5976eb5a2be0f8506d155f9139))


### Bug Fixes

* **auction-bid:** disable bid button if no amount ([cf6036a](https://github.com/aeternity/superhero-wallet/commit/cf6036a36999a1a51e9c100c743cff9d79518ba8))
* calculate fee for the token spend properly ([35a9a55](https://github.com/aeternity/superhero-wallet/commit/35a9a552e4d2a84e1a74b6dfdd9b0b5e033d2af9))
* claiming from url ([30fd918](https://github.com/aeternity/superhero-wallet/commit/30fd9184bed34b9827360a0eafae3ca3c6bcbae0))
* **deeplink-api:** complete opening a callback url correctly ([0aceed3](https://github.com/aeternity/superhero-wallet/commit/0aceed32cafc12c50f1df339e7efa11a20997a7a))
* display currency list over filters ([b0aebd1](https://github.com/aeternity/superhero-wallet/commit/b0aebd199758033ebaabcb74ff779bc86205b5b2))
* do not reload not connected tabs ([1dcd699](https://github.com/aeternity/superhero-wallet/commit/1dcd6998f38659ae37037836f2bcd4908a99fa3f))
* do not show spend-success modal multiple time for a one transaction ([61ad864](https://github.com/aeternity/superhero-wallet/commit/61ad8644a9f59c5777c92b923d85800eefe81329))
* **fungible-tokens:** avoid showing incomplete DEX transactions ([2c17df0](https://github.com/aeternity/superhero-wallet/commit/2c17df0188af752ef2ede4ce9fbd2ed80ccd22d5))
* **invite:** claiming from invite link ([882fc1b](https://github.com/aeternity/superhero-wallet/commit/882fc1bf08642e39120acdfc40c4bfad6aca0120))
* **ledger:** propely sign transactions with ledger ([9f36fbc](https://github.com/aeternity/superhero-wallet/commit/9f36fbc7c23984b95490a8b4d027f3ab3b2f8570))
* **ledger:** use not deprecated transport ([b71e9c7](https://github.com/aeternity/superhero-wallet/commit/b71e9c74442aef158c318e681cf63ddfe75a98fc))
* load all auctions at once ([e329213](https://github.com/aeternity/superhero-wallet/commit/e329213d4af4bac11a1ed8186f609233e8b0eff5))
* load currencies after a time interval ([ab15d0d](https://github.com/aeternity/superhero-wallet/commit/ab15d0dad5241aac20153848d63ed1392f82de7b))
* **modal:** show modals over Header component ([77b7e64](https://github.com/aeternity/superhero-wallet/commit/77b7e64c7d80f78008f574c22773158574500c67))
* **mutations:** avoid potential problems with missing fields ([c462025](https://github.com/aeternity/superhero-wallet/commit/c462025f42dfb2cbac0159f966a6500ec2f4ea66))
* **mutations:** remove pending transctions on network/account change ([e63aaf4](https://github.com/aeternity/superhero-wallet/commit/e63aaf4abab2e295125c4d85ac9128d80a9b3c42))
* **name-list:** fetch owned names every 10 seconds ([c7327ea](https://github.com/aeternity/superhero-wallet/commit/c7327ea15af19b55b6c12b11d54a93b36de0b0b3))
* **name-list:** show the loader when the transactions are loading ([062a813](https://github.com/aeternity/superhero-wallet/commit/062a813c3a51c5e84e83a006ffdb5e1cb7db7c17))
* **names:** handle correctly preferred name response ([31c5874](https://github.com/aeternity/superhero-wallet/commit/31c5874e8781e5d07d808f7b1d10f18775a7a33d))
* **names:** setting a pointer ([65f671f](https://github.com/aeternity/superhero-wallet/commit/65f671fba825925033aab83f64dca56fe09bcc6e))
* **persist-state:** sync state between stores properly ([6c21387](https://github.com/aeternity/superhero-wallet/commit/6c2138791adfb5b3e02581561fdeda758f765941))
* **sdk:** enable signing with a permissions module ([886f763](https://github.com/aeternity/superhero-wallet/commit/886f76307f6f218c95a0604cd1e00c68e845c95f))
* show all transactions in proper order ([f11a700](https://github.com/aeternity/superhero-wallet/commit/f11a700c88863884c3e5b6128d0c2dad159e5389))
* show proper information for the tip pending transaction ([3feec13](https://github.com/aeternity/superhero-wallet/commit/3feec1361ece777c5daa380e348df38fd4f4acb9))
* show proper information for tranfer_payload transactions ([3085df1](https://github.com/aeternity/superhero-wallet/commit/3085df19c45feb5adf121fdfd147ead0f9da9d29))
* **sign-transaction:** do not allow to sign on a different network ([3b2acd4](https://github.com/aeternity/superhero-wallet/commit/3b2acd4405bace41357fd0152491e1e3be854329))
* **spend-success:** show the proper spend transaction symbol ([36d9aca](https://github.com/aeternity/superhero-wallet/commit/36d9acabcda144cce4287251ef8f6b02a99302b3))
* **tabs:** do not show svgs through other elements ([ee8a4fc](https://github.com/aeternity/superhero-wallet/commit/ee8a4fc42e465a49886dd4bc07240874c184498b))
* **token-details:** add a proper link to a simplex ([e8f9bad](https://github.com/aeternity/superhero-wallet/commit/e8f9badf37c7f0243066d0f6772a437bba276c8d))
* **token-list:** set a proper simplex url ([6c8f686](https://github.com/aeternity/superhero-wallet/commit/6c8f686a1c254e082323c4afa40a236716f2300f))
* **tokens:** do not read properties of null ([8fb40f1](https://github.com/aeternity/superhero-wallet/commit/8fb40f122b233febed9c555cde4970048f169a04))
* **transaction-list:** do not consider every contract with tip/retip function as tipping ([ebcceba](https://github.com/aeternity/superhero-wallet/commit/ebcceba2bfae97b31ddb92f2ba972bb3a039fd1f))
* **transaction-list:** support PayingForTx type ([5979400](https://github.com/aeternity/superhero-wallet/commit/5979400b05184ca61d33e357413719b19af675c7))
* **transaction-token-info-resolvers:** avoid reading properties of undefined ([fe0a425](https://github.com/aeternity/superhero-wallet/commit/fe0a42510793bbea4ba8c766f6a70f497c261173))
* **transaction-token-info-resolver:** show correct tokens for swapTokensForExactTokens function ([fc9ad95](https://github.com/aeternity/superhero-wallet/commit/fc9ad950d37277a07179fae249cf2b2ef32cd8da))
* **transactions:** mutate nested transactions fields reactivly ([386d782](https://github.com/aeternity/superhero-wallet/commit/386d7821e44a81aa59673a1bb16dfa084230ddfd))
* **transactions:** remove fiat from amount for tokens other than ae ([efea108](https://github.com/aeternity/superhero-wallet/commit/efea108dc5934175263c8603033d535635a59fc7))
* **transactions:** show labels for fungible tokens pending transactions ([29e5c54](https://github.com/aeternity/superhero-wallet/commit/29e5c54eb7223690fa532378c51d84f2c5e9f077))


### Style

* **swap-route:** adjust scss ([3c24f9a](https://github.com/aeternity/superhero-wallet/commit/3c24f9a7607ef35ad1a68a1df61ca060e753ad0d))


### Tests

* ignore tests failing because of 3d party problems ([25ac082](https://github.com/aeternity/superhero-wallet/commit/25ac082eda0177a92071a12252f83c98ca53030c))
* improve unit testing coverage ([2544996](https://github.com/aeternity/superhero-wallet/commit/25449962d19e0b2996cf775e57bf5568265b2ba3))
* **input-amount:** avoid deprecated methods overwriting ([52b0371](https://github.com/aeternity/superhero-wallet/commit/52b0371ea45b544031a576877b7fb054dde1aa15))
* **snapshot:** fix issue with accessing of imported function ([68d96eb](https://github.com/aeternity/superhero-wallet/commit/68d96eb2ac754627892c9d23e71ac08a5a2835dc))


### Performance

* do not fetch all backend transactions on each call ([bc7462a](https://github.com/aeternity/superhero-wallet/commit/bc7462aff55ece003c39be04c66bcda63c32a53c))
* do not have a separate request for each fungible token transaction ([3a0fdde](https://github.com/aeternity/superhero-wallet/commit/3a0fddecbfffe84dfbe308b2c11207389ac3f144))
* do not load additional name entry ([b991b4c](https://github.com/aeternity/superhero-wallet/commit/b991b4c7bd5c27809398dd66c1f818b54a42859a))
* do not make duplicate requests on initialization ([f2810c0](https://github.com/aeternity/superhero-wallet/commit/f2810c00536b31836160345673b12de717bf27af))
* do not poll account info on each AccountInfo instance ([57f3e5f](https://github.com/aeternity/superhero-wallet/commit/57f3e5f2e00cac14eb3062418030e56ba1865253))
* **fungible-tokens:** do not commit each token balance separately ([3df9809](https://github.com/aeternity/superhero-wallet/commit/3df98096942784f76c31b99d29eb4acabd83d458))
* **fungible-tokens:** do not run through not uniq token balances ([6002cfb](https://github.com/aeternity/superhero-wallet/commit/6002cfb2c7bf4eed3ae31f40de03eb5bf0881c8f))
* **fungible-tokens:** remove pointless mutation ([6707be8](https://github.com/aeternity/superhero-wallet/commit/6707be884e676ecf3cf07d8b2d6d5c3fdddf941b))
* **fungible-tokens:** remove pointless unionBy ([fff8ec2](https://github.com/aeternity/superhero-wallet/commit/fff8ec29c1ac6d36339974183d29e283aeb28f68))
* **name-item:** do not fetch owned names in each component instance ([8f48352](https://github.com/aeternity/superhero-wallet/commit/8f4835235f3c21a69a2122e983838c85e071ad37))
* **names:** fetch names in parallel ([7f5e3ea](https://github.com/aeternity/superhero-wallet/commit/7f5e3ea8c8c6142711c33b9f23926d8014c5ce56))
* **transactions:** do not load incomplete transaction every time entering details page ([4bed8f8](https://github.com/aeternity/superhero-wallet/commit/4bed8f836eb481297c6d90bcdc097d609c57d296))
* **wallet:** improve handling await events ([f29efc8](https://github.com/aeternity/superhero-wallet/commit/f29efc8daa3ed9f9a9e73d9c1267f63070db23ac))


### Maintenance

* add dex contracts for testnet and mainnet ([540db78](https://github.com/aeternity/superhero-wallet/commit/540db787dc1a48946c7ddb65a8b59494d225cd79))
* add transactionTokenInfoResolvers ([a39d1e9](https://github.com/aeternity/superhero-wallet/commit/a39d1e9f93e5225d277317217919d661921cefe6))
* adjust NameItem component ([cca7ee1](https://github.com/aeternity/superhero-wallet/commit/cca7ee1b38f3e694ab81be58b389ba20c2208b15))
* align every contract id notations ([4e85a28](https://github.com/aeternity/superhero-wallet/commit/4e85a2887a37c2d513701b91791b905ce7fff27f))
* **App:** drop useless code ([40d96ec](https://github.com/aeternity/superhero-wallet/commit/40d96ec8b5c22327f38bfc207c6b047ced8dad9a))
* **constants:** add dex related transaction types constant ([2a1f0b7](https://github.com/aeternity/superhero-wallet/commit/2a1f0b7a8666edd5556fb399f034bcb6b9787ea1))
* do not poll currencies if not logged in ([f97a76c](https://github.com/aeternity/superhero-wallet/commit/f97a76cc5b39a2143ee26dedaaf9618fba038945))
* do not show fiat value for the liquidity transactions ([05811a6](https://github.com/aeternity/superhero-wallet/commit/05811a6da4c52d4ccf6381d4eb16aba56a1641de))
* extract background sdk into plugin ([b9bb7a5](https://github.com/aeternity/superhero-wallet/commit/b9bb7a508399607837ddc6847a62e25ede3f41f4))
* **ledger:** remove unused ledger bridge ([c1ce862](https://github.com/aeternity/superhero-wallet/commit/c1ce86256591df5ed881eb26a9222780ce3c45ff))
* **name-item:** remove unused prop ([541bde6](https://github.com/aeternity/superhero-wallet/commit/541bde6c0c326963faa580c6591326ff6482d72e))
* **release:** 0.9.10 ([c481816](https://github.com/aeternity/superhero-wallet/commit/c481816371555018e3b942dc56dc385e3eb4eb2d))
* remove unused variables ([38213a9](https://github.com/aeternity/superhero-wallet/commit/38213a9f4e475b15394cda41bdabfbf2d98483c9))
* show also retip transactions when filtered by tips ([4124442](https://github.com/aeternity/superhero-wallet/commit/4124442da0ba07c3051575f3f81e17f8d49fb8b7))
* show pending transaction until middleware returns it ([438cb26](https://github.com/aeternity/superhero-wallet/commit/438cb263b880866ec2a26fda8cffa0d7fd7c50ea))
* **transaction-details:** exclude unfinished components from production ([34f6565](https://github.com/aeternity/superhero-wallet/commit/34f6565de7fef7d0746a1a3e06c891f8ce7fb381))
* **transaction-info-resolver:** adjust to provide more info ([d925cfb](https://github.com/aeternity/superhero-wallet/commit/d925cfba24c172aca2c0d47e32a27064f9754d02))
* **transactions:** add labels for a tip/retip transactions ([04c59f1](https://github.com/aeternity/superhero-wallet/commit/04c59f18422fd4cffbf402f66f7e97aa4834bd1d))
* **transactions:** change the page title ([be133ae](https://github.com/aeternity/superhero-wallet/commit/be133aebc0a49387dbd9fe8b1ef7a696bc5fd353))
* **wallet:** use sdkPlugin instead of initializing new one ([80c3f6f](https://github.com/aeternity/superhero-wallet/commit/80c3f6f49e5d90bbb44e2d36617553da7ae3c281))

### [0.9.10](https://github.com/aeternity/superhero-wallet/compare/v0.9.9...v0.9.10) (2022-07-22)


### Features

* address shortening component ([55edeea](https://github.com/aeternity/superhero-wallet/commit/55edeead669b31e0a4b54f323a66d5b44faa7562))
* show all tokens user had activity with ([15aef34](https://github.com/aeternity/superhero-wallet/commit/15aef3445a660a991eed49df2b31490e709c9563))
* store pending transactions for each node ([1b11998](https://github.com/aeternity/superhero-wallet/commit/1b1199854f7af0603385425999af9c382bf3231c))
* tooltip component ([e448f1e](https://github.com/aeternity/superhero-wallet/commit/e448f1ee6c2870bbc7ee3c2814f64994be08b038))
* transaction details swap rates ([406adc2](https://github.com/aeternity/superhero-wallet/commit/406adc2416c09ba0915cfcb5d55d0d6bc3d7fa81))
* transaction details swap route ([28b1111](https://github.com/aeternity/superhero-wallet/commit/28b111162d52ad804cae3e0d60207da5bc51ca18))
* **transaction-list:** ablity to filter pending transactions ([f7c624e](https://github.com/aeternity/superhero-wallet/commit/f7c624ec81899b850e748d6df0059a48efc8a599))


### Bug Fixes

* calculate fee for the token spend properly ([35a9a55](https://github.com/aeternity/superhero-wallet/commit/35a9a552e4d2a84e1a74b6dfdd9b0b5e033d2af9))
* claiming from url ([30fd918](https://github.com/aeternity/superhero-wallet/commit/30fd9184bed34b9827360a0eafae3ca3c6bcbae0))
* display currency list over filters ([b0aebd1](https://github.com/aeternity/superhero-wallet/commit/b0aebd199758033ebaabcb74ff779bc86205b5b2))
* do not reload not connected tabs ([1dcd699](https://github.com/aeternity/superhero-wallet/commit/1dcd6998f38659ae37037836f2bcd4908a99fa3f))
* do not show spend-success modal multiple time for a one transaction ([61ad864](https://github.com/aeternity/superhero-wallet/commit/61ad8644a9f59c5777c92b923d85800eefe81329))
* **ledger:** propely sign transactions with ledger ([9f36fbc](https://github.com/aeternity/superhero-wallet/commit/9f36fbc7c23984b95490a8b4d027f3ab3b2f8570))
* **ledger:** use not deprecated transport ([b71e9c7](https://github.com/aeternity/superhero-wallet/commit/b71e9c74442aef158c318e681cf63ddfe75a98fc))
* load all auctions at once ([e329213](https://github.com/aeternity/superhero-wallet/commit/e329213d4af4bac11a1ed8186f609233e8b0eff5))
* load currencies after a time interval ([ab15d0d](https://github.com/aeternity/superhero-wallet/commit/ab15d0dad5241aac20153848d63ed1392f82de7b))
* **modal:** show modals over Header component ([77b7e64](https://github.com/aeternity/superhero-wallet/commit/77b7e64c7d80f78008f574c22773158574500c67))
* **mutations:** avoid potential problems with missing fields ([c462025](https://github.com/aeternity/superhero-wallet/commit/c462025f42dfb2cbac0159f966a6500ec2f4ea66))
* **mutations:** remove pending transctions on network/account change ([e63aaf4](https://github.com/aeternity/superhero-wallet/commit/e63aaf4abab2e295125c4d85ac9128d80a9b3c42))
* **name-list:** fetch owned names every 10 seconds ([c7327ea](https://github.com/aeternity/superhero-wallet/commit/c7327ea15af19b55b6c12b11d54a93b36de0b0b3))
* **name-list:** show the loader when the transactions are loading ([062a813](https://github.com/aeternity/superhero-wallet/commit/062a813c3a51c5e84e83a006ffdb5e1cb7db7c17))
* **names:** handle correctly preferred name response ([31c5874](https://github.com/aeternity/superhero-wallet/commit/31c5874e8781e5d07d808f7b1d10f18775a7a33d))
* **persist-state:** sync state between stores properly ([6c21387](https://github.com/aeternity/superhero-wallet/commit/6c2138791adfb5b3e02581561fdeda758f765941))
* **sdk:** enable signing with a permissions module ([886f763](https://github.com/aeternity/superhero-wallet/commit/886f76307f6f218c95a0604cd1e00c68e845c95f))
* show all transactions in proper order ([f11a700](https://github.com/aeternity/superhero-wallet/commit/f11a700c88863884c3e5b6128d0c2dad159e5389))
* show proper information for the tip pending transaction ([3feec13](https://github.com/aeternity/superhero-wallet/commit/3feec1361ece777c5daa380e348df38fd4f4acb9))
* show proper information for tranfer_payload transactions ([4532e69](https://github.com/aeternity/superhero-wallet/commit/4532e698608012760d804f57f3728be6b6ed780f))
* **spend-success:** show the proper spend transaction symbol ([36d9aca](https://github.com/aeternity/superhero-wallet/commit/36d9acabcda144cce4287251ef8f6b02a99302b3))
* **tabs:** do not show svgs through other elements ([ba07ffc](https://github.com/aeternity/superhero-wallet/commit/ba07ffc0f9413792fa5689761867c5ce4d4105ca))
* **token-details:** add a proper link to a simplex ([e8f9bad](https://github.com/aeternity/superhero-wallet/commit/e8f9badf37c7f0243066d0f6772a437bba276c8d))
* **token-list:** set a proper simplex url ([6c8f686](https://github.com/aeternity/superhero-wallet/commit/6c8f686a1c254e082323c4afa40a236716f2300f))
* **tokens:** do not read properties of null ([8fb40f1](https://github.com/aeternity/superhero-wallet/commit/8fb40f122b233febed9c555cde4970048f169a04))


### Tests

* improve unit testing coverage ([2544996](https://github.com/aeternity/superhero-wallet/commit/25449962d19e0b2996cf775e57bf5568265b2ba3))
* **input-amount:** avoid deprecated methods overwriting ([52b0371](https://github.com/aeternity/superhero-wallet/commit/52b0371ea45b544031a576877b7fb054dde1aa15))
* **snapshot:** fix issue with accessing of imported function ([68d96eb](https://github.com/aeternity/superhero-wallet/commit/68d96eb2ac754627892c9d23e71ac08a5a2835dc))


### Maintenance

* add dex contracts for testnet and mainnet ([540db78](https://github.com/aeternity/superhero-wallet/commit/540db787dc1a48946c7ddb65a8b59494d225cd79))
* add transactionTokenInfoResolvers ([a39d1e9](https://github.com/aeternity/superhero-wallet/commit/a39d1e9f93e5225d277317217919d661921cefe6))
* align every contract id notations ([4e85a28](https://github.com/aeternity/superhero-wallet/commit/4e85a2887a37c2d513701b91791b905ce7fff27f))
* **App:** drop useless code ([40d96ec](https://github.com/aeternity/superhero-wallet/commit/40d96ec8b5c22327f38bfc207c6b047ced8dad9a))
* **constants:** add dex related transaction types constant ([2a1f0b7](https://github.com/aeternity/superhero-wallet/commit/2a1f0b7a8666edd5556fb399f034bcb6b9787ea1))
* do not poll currencies if not logged in ([f97a76c](https://github.com/aeternity/superhero-wallet/commit/f97a76cc5b39a2143ee26dedaaf9618fba038945))
* extract background sdk into plugin ([b9bb7a5](https://github.com/aeternity/superhero-wallet/commit/b9bb7a508399607837ddc6847a62e25ede3f41f4))
* **ledger:** remove unused ledger bridge ([c1ce862](https://github.com/aeternity/superhero-wallet/commit/c1ce86256591df5ed881eb26a9222780ce3c45ff))
* remove unused variables ([38213a9](https://github.com/aeternity/superhero-wallet/commit/38213a9f4e475b15394cda41bdabfbf2d98483c9))
* show also retip transactions when filtered by tips ([4124442](https://github.com/aeternity/superhero-wallet/commit/4124442da0ba07c3051575f3f81e17f8d49fb8b7))
* show pending transaction until middleware returns it ([438cb26](https://github.com/aeternity/superhero-wallet/commit/438cb263b880866ec2a26fda8cffa0d7fd7c50ea))
* **transaction-details:** exclude unfinished components from production ([34f6565](https://github.com/aeternity/superhero-wallet/commit/34f6565de7fef7d0746a1a3e06c891f8ce7fb381))
* **wallet:** use sdkPlugin instead of initializing new one ([80c3f6f](https://github.com/aeternity/superhero-wallet/commit/80c3f6f49e5d90bbb44e2d36617553da7ae3c281))


### Performance

* do not fetch all backend transactions on each call ([bc7462a](https://github.com/aeternity/superhero-wallet/commit/bc7462aff55ece003c39be04c66bcda63c32a53c))
* do not have a separate request for each fungible token transaction ([3a0fdde](https://github.com/aeternity/superhero-wallet/commit/3a0fddecbfffe84dfbe308b2c11207389ac3f144))
* do not load additional name entry ([b991b4c](https://github.com/aeternity/superhero-wallet/commit/b991b4c7bd5c27809398dd66c1f818b54a42859a))
* do not make duplicate requests on initialization ([f2810c0](https://github.com/aeternity/superhero-wallet/commit/f2810c00536b31836160345673b12de717bf27af))
* do not poll account info on each AccountInfo instance ([57f3e5f](https://github.com/aeternity/superhero-wallet/commit/57f3e5f2e00cac14eb3062418030e56ba1865253))
* **fungible-tokens:** do not commit each token balance separately ([3df9809](https://github.com/aeternity/superhero-wallet/commit/3df98096942784f76c31b99d29eb4acabd83d458))
* **fungible-tokens:** do not run through not uniq token balances ([6002cfb](https://github.com/aeternity/superhero-wallet/commit/6002cfb2c7bf4eed3ae31f40de03eb5bf0881c8f))
* **fungible-tokens:** remove pointless mutation ([742f949](https://github.com/aeternity/superhero-wallet/commit/742f9494c65ca3e66eb0343e750461aa56ed3846))
* **fungible-tokens:** remove pointless unionBy ([d5c7abb](https://github.com/aeternity/superhero-wallet/commit/d5c7abb0381d448935bffa1423f8d87aa5b947c4))
* **name-item:** do not fetch owned names in each component instance ([8f48352](https://github.com/aeternity/superhero-wallet/commit/8f4835235f3c21a69a2122e983838c85e071ad37))
* **names:** fetch names in parallel ([7f5e3ea](https://github.com/aeternity/superhero-wallet/commit/7f5e3ea8c8c6142711c33b9f23926d8014c5ce56))
* **wallet:** improve handling await events ([f29efc8](https://github.com/aeternity/superhero-wallet/commit/f29efc8daa3ed9f9a9e73d9c1267f63070db23ac))

### [0.9.9](https://github.com/aeternity/superhero-wallet/compare/v0.9.8...v0.9.9) (2022-06-10)


### Bug Fixes

* open simplex in the new tab on every platform ([5ed9c05](https://github.com/aeternity/superhero-wallet/commit/5ed9c059b6d72aa4101445360216769e26c48770))

### [0.9.8](https://github.com/aeternity/superhero-wallet/compare/v0.9.7...v0.9.8) (2022-05-29)


### Features

* enable simplex ([2bc57dc](https://github.com/aeternity/superhero-wallet/commit/2bc57dca407731ad1f52afe9c525736fb3a0ff4c))


### Bug Fixes

* **account-info:** show default account name ([797e226](https://github.com/aeternity/superhero-wallet/commit/797e22650e167ec5a8b3aacba82924728b67cf71))
* **claim:** check name fee using new sdk ([f45088d](https://github.com/aeternity/superhero-wallet/commit/f45088d806a2b8b06a4523cec2222b7166361926))
* **deeplink-api:** fix special symbols encoding in callback url ([e076235](https://github.com/aeternity/superhero-wallet/commit/e0762350d14064571a55b58dc11721ff692c53f3))
* **deeplink-api:** open all callback urls in the same tab ([a4ae911](https://github.com/aeternity/superhero-wallet/commit/a4ae911320d96bed242cf13773dcd321814c6c3c))
* **fungible-tokens:** handle errors on update tokens info ([09b1d46](https://github.com/aeternity/superhero-wallet/commit/09b1d46d59c6261920e5c1c9450df84a50c8a16b))
* **invite-item:** copy the link to the clipboard ([5d85482](https://github.com/aeternity/superhero-wallet/commit/5d85482c570d8328c40ca1dd506bcf6a6c02e528))
* **names:** get auctions list using new middleware ([78b2fd7](https://github.com/aeternity/superhero-wallet/commit/78b2fd7612991f7445003c3c86cae06be421a612))
* **names:** load owned names from both nodes ([260178e](https://github.com/aeternity/superhero-wallet/commit/260178e62bd1b79bab35423f65c8981ed2257656))
* **transactions:** add payerId for comparison in tx direction ([f90a095](https://github.com/aeternity/superhero-wallet/commit/f90a095726330050887b2f7f9e90bfd55660b377))
* **transactions:** show tipped url only in transaction with function equal to 'tip' ([438db45](https://github.com/aeternity/superhero-wallet/commit/438db45acb64416b4caece779b8cfb02d9c3c2ea))
* **unit-tests:** use sdk modules instead of inside imports ([39344e2](https://github.com/aeternity/superhero-wallet/commit/39344e2a6e906c4affe14aac9c6c2839c685c295))
* welcome screen message for mobile ([1f99246](https://github.com/aeternity/superhero-wallet/commit/1f9924681380982ebfc74dde940b28d61839394a))


### Tests

* fix snapshots test ([6e8f608](https://github.com/aeternity/superhero-wallet/commit/6e8f60811202dce53d04c8ccb75b87d9e867acff))


### Maintenance

* change `==` to `===` in ToS ([70b1588](https://github.com/aeternity/superhero-wallet/commit/70b1588c1b17a0b07e540652e647db2559488136))
* extract links to constants.js ([ebb9a73](https://github.com/aeternity/superhero-wallet/commit/ebb9a7338d72b9b9223e216f5315bf6aa1dc8955))
* remove unused/unnecessary config files ([8b84e60](https://github.com/aeternity/superhero-wallet/commit/8b84e607e8f9006ef56a6680e0a5329ac31f138c))
* update dependencies ([23669de](https://github.com/aeternity/superhero-wallet/commit/23669debc9c9dc61a1fdb85d5a6196898f883fd3))
* update fontsource/ibm-plex-sans ([497949c](https://github.com/aeternity/superhero-wallet/commit/497949ce0a15edf0f85380eca0b84eaac3ed4e48))
* update package-lock to lockfileVersion 2 ([108d4df](https://github.com/aeternity/superhero-wallet/commit/108d4df24feaf0764786111507daf5d5366a57c1))
* update SDK to 11.0.1 ([bd25325](https://github.com/aeternity/superhero-wallet/commit/bd2532543f5678221b50bacc6fcc298ab36f2849))
* update uuid ([2604f11](https://github.com/aeternity/superhero-wallet/commit/2604f115b1c98974198052f063d924164f910fe2))

### [0.9.7](https://github.com/aeternity/superhero-wallet/compare/v0.9.6...v0.9.7) (2022-03-22)


### Bug Fixes

* call deny on denied address subscription ([3dcc1db](https://github.com/aeternity/superhero-wallet/commit/3dcc1db1357bc1bdd5a889f8492572b80343f333))
* send connection close message to the aepps ([2149556](https://github.com/aeternity/superhero-wallet/commit/214955689f420c1c4797e6e21f87d4f8d3968fa2))

### [0.9.6](https://github.com/aeternity/superhero-wallet/compare/v0.9.5...v0.9.6) (2021-12-13)


### Features

* receive transaction for signing through deeplink ([f1a292a](https://github.com/aeternity/superhero-wallet/commit/f1a292a82515aeea88859ff7f8a257c23362c058))

### [0.9.5](https://github.com/aeternity/superhero-wallet/compare/v0.9.4...v0.9.5) (2021-11-23)


### Features

* save transactions in session ([707561d](https://github.com/aeternity/superhero-wallet/commit/707561d86cb7fa3aa52e2a111727eef5c7602159))
* **transaction-list:** save scroll position ([23da760](https://github.com/aeternity/superhero-wallet/commit/23da760465d21f4ddd5be004a12a585d22638e18))


### Bug Fixes

* **transaction-details:** fetch transaction if not preloaded ([bc65967](https://github.com/aeternity/superhero-wallet/commit/bc65967f5250b6777d8b3be5a1b1d78961a9b584))


### Maintenance

* **migrations:** add changeTransactionStructure migration ([af11f64](https://github.com/aeternity/superhero-wallet/commit/af11f64f65a1e961a9ed2af90f68cb334004ca38))
* **transaction-list:** remove useless setTimeout ([0e41081](https://github.com/aeternity/superhero-wallet/commit/0e4108104222c3b7b6f62358b960adb777ed9478))
* **transactions:** use next page to load additional transactions ([6a0392f](https://github.com/aeternity/superhero-wallet/commit/6a0392f463acc2c5757d50a47c7ac768f1f677e6))

### [0.9.4](https://github.com/aeternity/superhero-wallet/compare/v0.9.3...v0.9.4) (2021-11-10)


### Features

* **android-build:** build for higher target sdk version ([991efb6](https://github.com/aeternity/superhero-wallet/commit/991efb61e2b2c547412ebd034bd87a756191b3ee))
* **input-amount:** use veeValidate in all amount inputs ([fcf9ef7](https://github.com/aeternity/superhero-wallet/commit/fcf9ef7789540932ef7ce3b20a360c90fc8198b3))
* **status:** add offline status ([daadb77](https://github.com/aeternity/superhero-wallet/commit/daadb7760f9ac9954a87ceed72a8e628e9e71b19))
* **tip-calim:** add additional info ([147d901](https://github.com/aeternity/superhero-wallet/commit/147d901d10a5ad248c01b7734fdf3c8d24666214))
* **tip-send:** add additional info ([4f8a79b](https://github.com/aeternity/superhero-wallet/commit/4f8a79b9e56b22b161cb51459c5e5621841fc112))
* **transfer-send:** fill address if qr consist of it ([2378a8f](https://github.com/aeternity/superhero-wallet/commit/2378a8f50beeb8613dc19f60e738096211a948d8))


### Bug Fixes

* **account-card:** adjust card minifying ([01e45ef](https://github.com/aeternity/superhero-wallet/commit/01e45ef22308e93a20d78a4cd4bc23e43871a730))
* **account-info:** reflect the preffered name change from other deivce ([917df92](https://github.com/aeternity/superhero-wallet/commit/917df922c7c19b57c244347c6da66d5a37646e75))
* **account-info:** remove wrong button background-color ([c13c50d](https://github.com/aeternity/superhero-wallet/commit/c13c50d41d4fc4f06730e73e35b33986bb232758))
* **account-switcher:** align single card in the middle ([a914271](https://github.com/aeternity/superhero-wallet/commit/a914271b2f5e372f88868b009f2901693c40c49a))
* **intro:** adjust checkbox size ([78709bb](https://github.com/aeternity/superhero-wallet/commit/78709bb14f62939eb4df2ec7fe482519383db1d9))
* **retip:** use valid name of error property ([bb1d416](https://github.com/aeternity/superhero-wallet/commit/bb1d4167c11a73c77549dd2d241fe43bb4a8b23c))
* set empty amount in InpitAmount ([2e3b197](https://github.com/aeternity/superhero-wallet/commit/2e3b1975ef74b7a551ae6675e18a8c520ed1d16b))
* **tab-bar:** avoid env not getting add ([42a03c5](https://github.com/aeternity/superhero-wallet/commit/42a03c52df9c84057a097bfdfbe9f0efffdb32a2))
* **transaction-list:** do not send request after component being destroyed ([f63f41d](https://github.com/aeternity/superhero-wallet/commit/f63f41d15b4bdad1d6724ee6cbe9b05fff2eb09c))
* **transaction-list:** show transactions to a name ([c263e04](https://github.com/aeternity/superhero-wallet/commit/c263e04a7e2861608f6617707f4f0fc946f80403))
* **transaction-overview:** show properly if recipient is the name ([fc39320](https://github.com/aeternity/superhero-wallet/commit/fc3932068d8875fa487a157e86a10f0819c4cff7))
* **truncate:** adjust scrolling on str change ([13ec1e0](https://github.com/aeternity/superhero-wallet/commit/13ec1e02cb126999057d1474bd910662b6978e11))


### Performance

* **fungible-tokens:** avoid additional fungible tokens requests ([fcd6f71](https://github.com/aeternity/superhero-wallet/commit/fcd6f71b84a0a17a806655f64aafb3bfdac6a140))
* **icons:** compress iframe onboarding icons ([007fe50](https://github.com/aeternity/superhero-wallet/commit/007fe50a3fea0600780ef7e570f22e8ded6a26b5))


### Tests

* **input-amount:** extend test and use VeeValidate ([44be6ba](https://github.com/aeternity/superhero-wallet/commit/44be6bae24f053e1120e79364ac98adc991bd5a3))
* **withdraw:** remove duplicate part of test ([3ebf3a2](https://github.com/aeternity/superhero-wallet/commit/3ebf3a226392e26950d561fec9d0e5e82f401ff0))


### Style

* add a proper mustache style ([6b94ec6](https://github.com/aeternity/superhero-wallet/commit/6b94ec636bd2f80d85adf0baab726686a4c8a68b))
* clean up global styles ([ecc791a](https://github.com/aeternity/superhero-wallet/commit/ecc791a9193ed1c47dc2dc1f0d0b95dd3ccb65dc))
* **intro:** adjust css ([01c028e](https://github.com/aeternity/superhero-wallet/commit/01c028eacfd87e49f1f45c437b325c768cad409c))
* **security-settings:** adjust css ([8a1ae1b](https://github.com/aeternity/superhero-wallet/commit/8a1ae1b4d1e0d856e6d73d2ee29fbb7aef96018a))


### Maintenance

* **account-switcher:** align card-wrapper centered ([1c18a05](https://github.com/aeternity/superhero-wallet/commit/1c18a055ca49823d4abd7a8789d13553d6583d8c))
* **actions:** drop workaround for the duplicate transactions from mdw ([d9324d3](https://github.com/aeternity/superhero-wallet/commit/d9324d3f8ec9afcbd08810989dc02dffb29c609f))
* bump version in tests ([b34d3c1](https://github.com/aeternity/superhero-wallet/commit/b34d3c1c96d5333719fd35b52a3788b31cc768f0))
* **intro:** use esixting varibale ([954945f](https://github.com/aeternity/superhero-wallet/commit/954945fb7078fced6467680521eeb9938e984fa7))
* **invite:** remove non-existent prop ([47971e9](https://github.com/aeternity/superhero-wallet/commit/47971e92db8c6f20738a0bd3ed114a7fd31df7f6))
* **name-row:** remove unused styles ([edaa9f1](https://github.com/aeternity/superhero-wallet/commit/edaa9f15602e83e65f3cf60672aed5859b5c68f0))
* remove Tour component ([6a82a31](https://github.com/aeternity/superhero-wallet/commit/6a82a3132d31e3b763cf666a5f36e10abf612450))
* remove unused Badge component ([d6664c1](https://github.com/aeternity/superhero-wallet/commit/d6664c1fe19774bf7ed1f511b0039c1f926e8df5))
* remove unused SignAccountIdenticons component ([3ab4984](https://github.com/aeternity/superhero-wallet/commit/3ab498449656f7f8cdd020703ad9f7453fed6da4))
* **sass:** removed unused node-sass package ([00eebd4](https://github.com/aeternity/superhero-wallet/commit/00eebd441818a9eab1967d0ccedda1e956eaae86))
* **transaction-list:** show no transaction message centered ([8a1fd5f](https://github.com/aeternity/superhero-wallet/commit/8a1fd5ff7e3bd8b83ee75c49ced4da3965304072))
* utilize line-height property in rebranded pages ([55ca3af](https://github.com/aeternity/superhero-wallet/commit/55ca3af11066b139db9d00909b30ff1fedcfc884))

### [0.9.3](https://github.com/aeternity/superhero-wallet/compare/v0.9.2...v0.9.3) (2021-10-18)


### Features

* **accounts:** add ledger module ([a2f98d3](https://github.com/aeternity/superhero-wallet/commit/a2f98d3b52bf89d94ed8d3e0f225b7c858dd2acc))
* **aex9:** don't display fiat value for aex9 tokens ([11bb4d3](https://github.com/aeternity/superhero-wallet/commit/11bb4d30f42278d179f82cd214d9e52972e2a745))
* **buy:** add buy button and page ([f11881e](https://github.com/aeternity/superhero-wallet/commit/f11881e705af0d1f5041480fe860a22efe6c9749))
* **claim:** show name price before submit ([f337767](https://github.com/aeternity/superhero-wallet/commit/f3377676060c8feb7740afacea1cdeb59eb81144))
* **index:** add message on disabled JavaScript ([a8c3702](https://github.com/aeternity/superhero-wallet/commit/a8c3702f39978769c60bfb1ddbbbbb5e989a5726))
* **index:** add message on exceptions while bundle initialising ([daa8f70](https://github.com/aeternity/superhero-wallet/commit/daa8f70d3a7cb61d8ec54be7c2c70e2159fc9a25))
* **ledger:** add ledger compatibility with extension ([22147a4](https://github.com/aeternity/superhero-wallet/commit/22147a40ff25f6cf24d56e238eac7fa89b227386))
* **receive:** add share functionality to receive screen ([2490006](https://github.com/aeternity/superhero-wallet/commit/249000638fad157ceb8f6490faac153758a62f2e))
* **router:** open simplex in separate tab for extension and mobile ([6634fca](https://github.com/aeternity/superhero-wallet/commit/6634fca4c1b7fe2d3a478e085afa1aaf81c288e6))
* **send:** add share string parsing ([03be916](https://github.com/aeternity/superhero-wallet/commit/03be9163e6554ff2b22219152e476417aea2741c))
* **share-qr:** add pseudo element on copy ([fd91f66](https://github.com/aeternity/superhero-wallet/commit/fd91f6606cee5c25f7d491f6aca9e348f2025979))
* **transfer-send:** rebrand send workflow ([4f0715a](https://github.com/aeternity/superhero-wallet/commit/4f0715a344adf062b5c8f89b3ab1f76a2e07d19c))


### Bug Fixes

* **accounts:** use uniq key ([9ede492](https://github.com/aeternity/superhero-wallet/commit/9ede492ff2737af787d62a02b3aa3327bc225077))
* **account:** use decode instead of removed assertedType ([24f961e](https://github.com/aeternity/superhero-wallet/commit/24f961e33375ea8ba0e69ec1bef46f4a6b588084))
* allow builds in non git environments ([cddf6fe](https://github.com/aeternity/superhero-wallet/commit/cddf6fe8d053d6956e969700dcb29fbedaa7bcf0))
* **check-box:** start value has mixed support, using flex-start instead ([4de09fd](https://github.com/aeternity/superhero-wallet/commit/4de09fd1e4bf74a2154f476d8f370487950fe486))
* **copy-plugin:** copy web folder in dist ([187ad9e](https://github.com/aeternity/superhero-wallet/commit/187ad9ee44f088a57eec5f262e061539a69baf24))
* **transaction-details:** prevent non external redirection ([845d782](https://github.com/aeternity/superhero-wallet/commit/845d782eb47775c937c86ba4483a4a8cc5f2e00b))
* **zeit:** linting errors ([4c39430](https://github.com/aeternity/superhero-wallet/commit/4c39430d71ea05bb43e2e1831334c43dd072487b))


### Documentation

* **readme:** update README file ([bfebb7f](https://github.com/aeternity/superhero-wallet/commit/bfebb7f8f2769f78d4b391946dba51429351f4ba))


### Style

* **lint:** resolve lint issues automatically ([bf0ae50](https://github.com/aeternity/superhero-wallet/commit/bf0ae5070ee4a81ca4aa4367974ecf25878e6a5e))
* **lint:** resolve lint issues manually ([a362af6](https://github.com/aeternity/superhero-wallet/commit/a362af60afee0a981b3c02c65c9870e94ed9fe30))
* **modal:** set different border color ([99e7f6a](https://github.com/aeternity/superhero-wallet/commit/99e7f6a7c519260a2de12ffaa00631c691c91f23))


### Tests

* **account:** remove duplicate part of test ([aa2bd9e](https://github.com/aeternity/superhero-wallet/commit/aa2bd9e34fcf54e1978b49b51e8868211d307de6))
* add example unit test ([4d4d029](https://github.com/aeternity/superhero-wallet/commit/4d4d029429265d8cadb245f0705d3aee46c4c6bf))
* **import-account:** convert test from e2e to unit ([6d74918](https://github.com/aeternity/superhero-wallet/commit/6d74918b6d81aa9af39b725bd7c94a58cadb58d3))
* **input-amount:** convert test from e2e to unit ([41272ef](https://github.com/aeternity/superhero-wallet/commit/41272efdf3c835f5f9870ea7d106c47ee9531c76))
* **jest-config:** add several packages to transpile ([fb1e91b](https://github.com/aeternity/superhero-wallet/commit/fb1e91bed0ae04645a11fa07e842282ec929c44d))
* **jest-config:** map inlined components ([0bb6fde](https://github.com/aeternity/superhero-wallet/commit/0bb6fde4c328e02ebb32e5467d7e82ffaef5f5d6))
* **terms-of-service:** convert test from e2e to unit ([859018e](https://github.com/aeternity/superhero-wallet/commit/859018eda26b9f2c40ef5f3019ba2346d18a54c4))
* update test due to work with web version ([183d56a](https://github.com/aeternity/superhero-wallet/commit/183d56addcc130e1114dec9416f0708c07339941))
* use snapshots to test static pages ([7d8ed17](https://github.com/aeternity/superhero-wallet/commit/7d8ed17b85cc182bec51f8928f7d7f63b5327080))


### Maintenance

* **account-info:** do not assign value to a variable twice ([7612c5d](https://github.com/aeternity/superhero-wallet/commit/7612c5d2b3593ae0a6b691b1cf0512790988d8d0))
* **accounts:** extract hdWallet module ([68bed5c](https://github.com/aeternity/superhero-wallet/commit/68bed5ca3367c0ec58539dcbe0d09abd5e9a9483))
* **accounts:** move account plugin to module ([4ddd3c1](https://github.com/aeternity/superhero-wallet/commit/4ddd3c1f1cf10b5cf959ee5f3ddeef51a807ca69))
* **accounts:** move account related to the accounts ([df562aa](https://github.com/aeternity/superhero-wallet/commit/df562aafca6d098e484382562e1f5f8c69acdd07))
* **accounts:** rename state and mutations ([9695e68](https://github.com/aeternity/superhero-wallet/commit/9695e681b2d98cd50c94ff432ec5f7e3ae27a305))
* build using @vue/cli ([70718ad](https://github.com/aeternity/superhero-wallet/commit/70718ad70d4107fcd59c5c575fd5530811742c6d))
* **buy:** add unfinished flag to buy functionality ([29c689a](https://github.com/aeternity/superhero-wallet/commit/29c689a6df94d8884c96ef487c2be4d28e379862))
* **copy:** extract similar copy functionality to mixin ([abe6abe](https://github.com/aeternity/superhero-wallet/commit/abe6abe084b2f0e9191a74d1fc558dff6844f3a6))
* **input-field:** set autocomplete off ([08707f9](https://github.com/aeternity/superhero-wallet/commit/08707f9ff6c797f2d0f71bcdc4594da70076c94b))
* **popup:** remove unused firefox html ([69ab99c](https://github.com/aeternity/superhero-wallet/commit/69ab99c3df66da8358cfeba560461173d88e2260))
* remove unused mapped states ([d76a0da](https://github.com/aeternity/superhero-wallet/commit/d76a0da14a0e49a2b40de955ac807f94fd8ab8fc))
* run npm audit fix ([e214f7e](https://github.com/aeternity/superhero-wallet/commit/e214f7ee890e0755b2e42562510768d4e937ee2d))
* run npm update ([8245153](https://github.com/aeternity/superhero-wallet/commit/824515354ea0d82c754ea348de30328967d5b262))
* **sdk:** update sdk to 9.0.1 ([8ae8cb1](https://github.com/aeternity/superhero-wallet/commit/8ae8cb1a25343182b88d4fb2e8d9c1a33559dd15))
* **template-renderer:** extract similar root node creation ([a19091b](https://github.com/aeternity/superhero-wallet/commit/a19091b02a6b9b7e61abd1bfee5f0558780e77a9))
* **zeit:** do not show error logs on production ([27e7bac](https://github.com/aeternity/superhero-wallet/commit/27e7bac0274040c55de6400cc3764699cd49ce01))
* **zeit:** makes contract pass through from QR code ([9ae2552](https://github.com/aeternity/superhero-wallet/commit/9ae2552924e74bce8f893d12663904d19d0c1dc3))
* **zeit:** removes chain listener and tx cache ([fad2bf4](https://github.com/aeternity/superhero-wallet/commit/fad2bf44235732c57177faab176ebcc80069542d))

### [0.9.2](https://github.com/aeternity/superhero-wallet/compare/v0.9.1...v0.9.2) (2021-09-28)


### Features

* **input:** add warnings to input field ([5086efc](https://github.com/aeternity/superhero-wallet/commit/5086efc7046c667d129fd86dd64f0549fbb418ac))
* **send:** rebrand address input in send screen ([1116153](https://github.com/aeternity/superhero-wallet/commit/111615335d119d81a94446dd4921c8108059b69d))
* **validation:** add vee-validate as plugin ([c913ea4](https://github.com/aeternity/superhero-wallet/commit/c913ea4637de88541d246c3f948e7b4e39cc5d20))
* **vee-validate:** add account validation rules ([b5722d9](https://github.com/aeternity/superhero-wallet/commit/b5722d947ff39dc105d618ad85e720afc1378d2a))
* **vee-validate:** inject warning support to vee-validate ([a41a688](https://github.com/aeternity/superhero-wallet/commit/a41a688cf27725e2f6abaaeb37a7782dc8ff0460))


### Bug Fixes

* **permissions:** fix permissions input styling ([b450cb5](https://github.com/aeternity/superhero-wallet/commit/b450cb5483d4a95ee506435ccd1d7b0d2a73058e))
* **send:** add proper color to valid svg ([9f75935](https://github.com/aeternity/superhero-wallet/commit/9f75935c23de205740e83975b0b2fed7cccc3d3a))
* **send:** restore error for tokens to name sending ([0da891f](https://github.com/aeternity/superhero-wallet/commit/0da891f6a74e401bf377569b27e0c216bef13a3a))


### Maintenance

* **input:** unify input components names ([b25e1d6](https://github.com/aeternity/superhero-wallet/commit/b25e1d6dff8207f94fb0796df807679365c24d26))
* **recent-transactions:** do not hide line on transaction list overlap ([9b3be97](https://github.com/aeternity/superhero-wallet/commit/9b3be9799a0137a7ed97320d01da455153239ccf))
* **stale:** remove stale bot support ([ff5d105](https://github.com/aeternity/superhero-wallet/commit/ff5d105b4ba90a1d24bc1f0b60c924d3fd5006fa))
* **transfer-send:** replace textarea with validatable input ([800babf](https://github.com/aeternity/superhero-wallet/commit/800babf28e276ca6e54b29307422449922eb58e7))

### [0.9.1](https://github.com/aeternity/superhero-wallet/compare/v0.9.0...v0.9.1) (2021-09-16)


### Maintenance

* **paste:** disable paste functionality ([ccb78d8](https://github.com/aeternity/superhero-wallet/commit/ccb78d89a6124469b18575810dfb8a454a949b08))

## [0.9.0](https://github.com/aeternity/superhero-wallet/compare/v0.8.2...v0.9.0) (2021-09-14)


### Features

* **account-card:** rebrand account card ([8431ebc](https://github.com/aeternity/superhero-wallet/commit/8431ebc985892fd81767af5edfe676a8381a87dd))
* **account-card:** smooth card height transition ([7fa503f](https://github.com/aeternity/superhero-wallet/commit/7fa503f407606e85d3b1a406e7974b9500133205))
* **auction-card:** show auctions help modal ([06bdb41](https://github.com/aeternity/superhero-wallet/commit/06bdb41e95544588e2ea48749a0ea6b58767026d))
* **balance-info:** change the approx sing ([2414f65](https://github.com/aeternity/superhero-wallet/commit/2414f65d75232fc22180b7a2465a41793dd3d064))
* **confirm:** add ability to render locales as a template ([f9fa962](https://github.com/aeternity/superhero-wallet/commit/f9fa962ebc640845f97fc701be36f714d156ddbf))
* **cordova:** add cordova-clipboard to dependencies ([8e2c22c](https://github.com/aeternity/superhero-wallet/commit/8e2c22ca315bc8e21ead33424e9d159b798f898a))
* **mobile:** lock orientation to portrait ([1c9e974](https://github.com/aeternity/superhero-wallet/commit/1c9e97468135318c83e0bc167e3e0cd9865dda14))
* **name-item:** add NameItem component ([45d0f12](https://github.com/aeternity/superhero-wallet/commit/45d0f12f64a9a9d8f7186b502ed625826f8be0d0))
* **names:** add AuctionHistory component ([5fc424c](https://github.com/aeternity/superhero-wallet/commit/5fc424c6efb3cd4c6a7d4ec9cd275c4d9cefa697))
* **names:** update auction page to new designs ([370dda7](https://github.com/aeternity/superhero-wallet/commit/370dda70262e56193f361339f8ccaadeb9a54eff))
* **names:** update AuctionBid to new designs ([153f157](https://github.com/aeternity/superhero-wallet/commit/153f1574e67057189e1874979165efe093353f28))
* **qr-reader:** open settings when camera not allowerd on mobile ([4702265](https://github.com/aeternity/superhero-wallet/commit/4702265fab31b11dd0db82bb4e9bfe7a158c5c46))
* redirect from /tip to /tips ([00a4901](https://github.com/aeternity/superhero-wallet/commit/00a490101a38a50f5f6574d67dbec27008db5d76))
* **routes:** add tip redirection ([0a637a8](https://github.com/aeternity/superhero-wallet/commit/0a637a8bf9fa54f308aa0818102677261b69d764))
* show chain name of other users ([74f5d63](https://github.com/aeternity/superhero-wallet/commit/74f5d63a2697c563fb1da076defbb4aed2f8c400))
* **truncate:** allow truncate to be fixed ([53e8d35](https://github.com/aeternity/superhero-wallet/commit/53e8d3550128ac2a88b9d72946bebd19f47e4343))
* **truncate:** animate text scrolling ([e0e2456](https://github.com/aeternity/superhero-wallet/commit/e0e2456e0c2c8fac7d424cdaba430c961bfaec6f))
* update Loader to new designs ([a48215b](https://github.com/aeternity/superhero-wallet/commit/a48215b9927e3295452272848d578b854d17e063))
* **zeit:** add new contract address & decimal support ([dca9480](https://github.com/aeternity/superhero-wallet/commit/dca948036343a5967a3062ff6b33028cfd67c504))


### Bug Fixes

* **account-info:** use explorerUrl from activeNetwork ([988eabf](https://github.com/aeternity/superhero-wallet/commit/988eabf16ca6b3d63ceab57a1eeffa5e2e8d0604))
* **actions:** add the rest of tokens transactions if no transactions fetched ([d1a15ca](https://github.com/aeternity/superhero-wallet/commit/d1a15ca9fd83f8e544d1bd0b898d05b2af6ac32d))
* **actions:** change backend tip cache url ([818a10a](https://github.com/aeternity/superhero-wallet/commit/818a10aaeaf2c334edd8d47552f4f235559d4171))
* **auction:** avoid using z-index ([82b41b9](https://github.com/aeternity/superhero-wallet/commit/82b41b9cbfaca7b3d0fe939accec3a8de8091585))
* **constants:** use v2 schema for nameClaimTx in calculateMinFee ([e379178](https://github.com/aeternity/superhero-wallet/commit/e3791780d78adc0f0379878b2923d0f03e51ba79))
* **deeplinks:** build redirect route correctly ([50f01a2](https://github.com/aeternity/superhero-wallet/commit/50f01a2c2313415776a7e3b910aa8c3db1e708f7))
* **invites:** temporary fix for validation of node fields ([5ea4993](https://github.com/aeternity/superhero-wallet/commit/5ea4993c01d3a0465b840ca08ff45f2eaa785e5f))
* **ios:** reset webview color after qr scan ([6fb5f4a](https://github.com/aeternity/superhero-wallet/commit/6fb5f4ac16d2ac424623aaf53d1a89dbbde9fb7a))
* **migrations:** add missing new names field ([cc8dfbb](https://github.com/aeternity/superhero-wallet/commit/cc8dfbbe6eb51e4677589f9a1fb1d74aa652ec64))
* **mobile-share:** allow tip url to be passed in TipsSend ([27d84a9](https://github.com/aeternity/superhero-wallet/commit/27d84a9d20a8635c707604974cce891f78a55d05))
* **modal:** set empty span on attribute msg undefined ([197fc11](https://github.com/aeternity/superhero-wallet/commit/197fc11f8b2f4e145c58745bb06507ea0a591124))
* **name-item:** call setAutoExtend action with proper params ([afd452a](https://github.com/aeternity/superhero-wallet/commit/afd452a82c01cb6495a0c4a5c8972d8cd3400694))
* **name-item:** set Pending svg size ([e0e8960](https://github.com/aeternity/superhero-wallet/commit/e0e8960732bdf9017eb22c888399f3dbffa6460f))
* **onboarding:** fix onboarding welcome typo ([a140736](https://github.com/aeternity/superhero-wallet/commit/a1407367d8b57cb95e5fde9552e5e1bfda7b2b50))
* **overview:** avoid wrapping for chain names ([d82df49](https://github.com/aeternity/superhero-wallet/commit/d82df496a630ee4f988d150e89604f23f70c81c2))
* **pending-txs:** filter pending transactions by active account ([8fb690d](https://github.com/aeternity/superhero-wallet/commit/8fb690ddc8c19c0fd3673580762e4b6cda5270c1))
* **retip:** set svg size ([489e133](https://github.com/aeternity/superhero-wallet/commit/489e133ca42a23435e6368f79483ef2649296fc4))
* **status:** set bottom to 0 if tab bar is hidden ([4ce43d3](https://github.com/aeternity/superhero-wallet/commit/4ce43d3e1fded13ad7d32ca42d23ba095e08874f))
* **swagger:** temporary fix for wrong scheme in genSwaggerClient ([129d4c3](https://github.com/aeternity/superhero-wallet/commit/129d4c3b96e4fb76402cb35bd53767aa0d58d3a2))
* **transaction-list:** set transactions and page to initial value on accountChange ([56021c2](https://github.com/aeternity/superhero-wallet/commit/56021c2c4d9600695d4f801462a2f51972abf1f5))
* **tx-details:** handle overflowing tip url ([a515ca4](https://github.com/aeternity/superhero-wallet/commit/a515ca46f8f91cb79b24a9dc49a5b3562e095860))
* **tx-list:** prevent infinite fetch of next page ([178a8d8](https://github.com/aeternity/superhero-wallet/commit/178a8d8be7cc6aae0151ccaa343b6f76e24462ba))
* **tx-list:** remove extra space from bottom ([fbad5be](https://github.com/aeternity/superhero-wallet/commit/fbad5be565f6deef90996d143c6ea01166de1bc9))
* **tx-list:** show msg when no items found ([d3c71b4](https://github.com/aeternity/superhero-wallet/commit/d3c71b4bcc8fd01dca44bf66e94fd738910170ae))


### Style

* **checkbox:** update checkbox color ([5c9ad4a](https://github.com/aeternity/superhero-wallet/commit/5c9ad4aa111156b82a53f1f4ce8d958322cc2d1e))


### Documentation

* **readme:** correct grammar and spelling ([97380f4](https://github.com/aeternity/superhero-wallet/commit/97380f44f369f53172affecfae3b5addca38a90a))


### Maintenance

* <ul> and <ol> usage ([c7c8b02](https://github.com/aeternity/superhero-wallet/commit/c7c8b0256408b1f4ce4f9e10061f924431682c57))
* **account-info:** simplify edit mode ([c09715b](https://github.com/aeternity/superhero-wallet/commit/c09715b9aba35344a3b97ce26af4311fc71d7b64))
* **account:** remove unused mapped state ([ee4fd4c](https://github.com/aeternity/superhero-wallet/commit/ee4fd4cc420ac0a8f9a4d601ec6f54ca322698c6))
* **app-links:** add app links for all platforms to constants ([1169bdf](https://github.com/aeternity/superhero-wallet/commit/1169bdf0370398aca87ef6c7b194f8b791d68c13))
* **auctions:** update AuctionList page ([5216f23](https://github.com/aeternity/superhero-wallet/commit/5216f23ab5f07be45bbd67838bfc45a2664aab02))
* **claim:** update Claim page ([dbe5af8](https://github.com/aeternity/superhero-wallet/commit/dbe5af800d40e9401036a6a18c7d781ff9481475))
* connect AuctionOverview to store ([dd47ceb](https://github.com/aeternity/superhero-wallet/commit/dd47cebf992dda7fb6facbead3b1db857181783b))
* **constants:** avoid extra redirect to explorer ([1653e93](https://github.com/aeternity/superhero-wallet/commit/1653e93b399940b273774e7c246c2e3c68c27f5c))
* **constants:** update contract address ([ed50fa7](https://github.com/aeternity/superhero-wallet/commit/ed50fa72805e4f43493abf0b447e91d071f64613))
* **cordova:** add missing clipboard plugin config ([4ddd92d](https://github.com/aeternity/superhero-wallet/commit/4ddd92d01fef4473f9dac1699e50b22bd5e4e811))
* **css:** unify z-index ([ed7766b](https://github.com/aeternity/superhero-wallet/commit/ed7766b8ed83e08883d37ee165c00f4f283e8962))
* **dropdown:** remove unused markup ([10f848f](https://github.com/aeternity/superhero-wallet/commit/10f848f12c9171865f5475ec0c2999d1a1b26f5d))
* extract AuctionOverview from AuctionCard ([df2ce97](https://github.com/aeternity/superhero-wallet/commit/df2ce97c9804388371bc5279e769502b0c928844))
* extract HelpButton component ([cca3329](https://github.com/aeternity/superhero-wallet/commit/cca3329fc566eeb9f52c833736e5f86ef41539bb))
* **ios-link:** change ios link from testflight to app store ([693bbc0](https://github.com/aeternity/superhero-wallet/commit/693bbc079ba4377c6610141cecdbae63c8d8c136))
* **main:** hide tabbar on childern views ([1553a88](https://github.com/aeternity/superhero-wallet/commit/1553a88a98f640022542744d979516accb2c07ea))
* **main:** remove back button of main tabs ([636f55d](https://github.com/aeternity/superhero-wallet/commit/636f55dbf977c5ba1ae87a40667afc3f0f257d31))
* **modals:** drop localization with dynamic keys ([d76bc46](https://github.com/aeternity/superhero-wallet/commit/d76bc464344ede6366277ed67065a8ddb85ed6cf))
* **modals:** render help locales as templates ([c185c0d](https://github.com/aeternity/superhero-wallet/commit/c185c0dc43b9d6e929f00d0ad4028dfcf672f16b))
* **names:** drop redundant subject from getter ([3480300](https://github.com/aeternity/superhero-wallet/commit/3480300aa72c7da840f511b87e94577407fc9708))
* **names:** update naming system pages structure ([a166ae3](https://github.com/aeternity/superhero-wallet/commit/a166ae36f85729e76ab87565f2ba79cf3235e1e6))
* **network:** set default values for custom networks ([da4cf82](https://github.com/aeternity/superhero-wallet/commit/da4cf8204e30021948c045257af3281c16828d68))
* **networks:** use ActionsMenu instead of ae-dropdown ([8a88920](https://github.com/aeternity/superhero-wallet/commit/8a889205745c3810c19b56d50ab933caec5a0f0c))
* **node-status:** align node status bar in collapsed iframe view ([4e0f4c0](https://github.com/aeternity/superhero-wallet/commit/4e0f4c03cdb244de3dc3982652fb5c4a669edb5e))
* **notification:** remove unused class ([a68045d](https://github.com/aeternity/superhero-wallet/commit/a68045d89f51297b6ed37e2551278ed953fea42d))
* **phishing:** remove broken phishing check ([94e7c15](https://github.com/aeternity/superhero-wallet/commit/94e7c154cbdf3c1d3ce3dffdc2d46fd26fe1c6b1))
* rename AuctionOverview component to AuctionCard ([593ee68](https://github.com/aeternity/superhero-wallet/commit/593ee689715ab4d3c497681cbd4107a1f3ce232b))
* rename help-circle icon to question-circle-border ([8705e5f](https://github.com/aeternity/superhero-wallet/commit/8705e5f3bcababb5f3464d039e5a013b37a21eb1))
* rename tx-history icon to history ([22d2767](https://github.com/aeternity/superhero-wallet/commit/22d27672f3598e81fcf72a1b7c31d17792bdc0ed))
* rewrite Dropdown using ActionsMenu component ([8043373](https://github.com/aeternity/superhero-wallet/commit/8043373c6ea9d43a6fb051a6c456e79c80d3c874))
* run npm audit fix ([0e42149](https://github.com/aeternity/superhero-wallet/commit/0e4214928f4e1dbfb89a63140c4ec666edefe030))
* run npm update ([a5f48d1](https://github.com/aeternity/superhero-wallet/commit/a5f48d18f715139f87814c0edf7ac142d2cb9613))
* **sdk:** update sdk to 8.2.1 ([1e0db31](https://github.com/aeternity/superhero-wallet/commit/1e0db313cf854d35304cb618282f8c4679898277))
* **tabbar:** hide tabbar in collapsed iframe view ([ead9b19](https://github.com/aeternity/superhero-wallet/commit/ead9b19e86a36884fb85b518042515ec03a60258))
* update RecentTransactions component and inline into Account ([0ed9ea7](https://github.com/aeternity/superhero-wallet/commit/0ed9ea7736f9015e97fb4267a6c9c2d237e2eb63))

### [0.8.2](https://github.com/aeternity/superhero-wallet/compare/v0.8.1...v0.8.2) (2021-07-14)


### Features

* **unfinished:** enable unfinished features ([37b7bd7](https://github.com/aeternity/superhero-wallet/commit/37b7bd783c2c7d12c434bc5e484de447a9282f8f))


### Bug Fixes

* **tx-list:** show loader only when fetching ([00f6f24](https://github.com/aeternity/superhero-wallet/commit/00f6f24ac66d9b8a5ed6c185fff95ed657f18709))


### Maintenance

* **unfinished:** hide unfinished features ([c4b7536](https://github.com/aeternity/superhero-wallet/commit/c4b7536d2fe7d4dc05828f0193cdebae04bc567b))

### [0.8.1](https://github.com/aeternity/superhero-wallet/compare/v0.8.0...v0.8.1) (2021-07-09)


### Bug Fixes

* **wallet:** don't set accounts immediately ([d0e5c52](https://github.com/aeternity/superhero-wallet/commit/d0e5c5207feefdfd74fb139c5079d2bfe7b2a563))

## [0.8.0](https://github.com/aeternity/superhero-wallet/compare/v0.7.2...v0.8.0) (2021-07-09)


### Features

* **acc:** update available tokens and balances every 10 seconds ([0eb890a](https://github.com/aeternity/superhero-wallet/commit/0eb890aa6d907b9f9eb70a1e604561b2fff7e5cd))
* **account-switcher:** show switching to the aepp ([4370f39](https://github.com/aeternity/superhero-wallet/commit/4370f3904027d4c772b3089ce99efc9ca7b08d34))
* **balances:** add balances screen new ux ([31e95bf](https://github.com/aeternity/superhero-wallet/commit/31e95bfc4d37003d68c6f0175c1ed7d3c06f8886))
* **fonts:** add sans 14 bold ([f725f46](https://github.com/aeternity/superhero-wallet/commit/f725f466dbbbd0aca4471bc95cb75557720a916b))
* **ft:** updates balances after successful mine ([8e35da9](https://github.com/aeternity/superhero-wallet/commit/8e35da9f5a4647577a8c1642f95954b9b75cd73a))
* **fungible-tokens:** load tokens on network change ([f0a8e3d](https://github.com/aeternity/superhero-wallet/commit/f0a8e3d4c9ca5a28e7685edcf4e221bc075f4edc))
* **fungible-tokens:** make fungible tokens work with several accounts ([679a9a2](https://github.com/aeternity/superhero-wallet/commit/679a9a2a01b067123424a3c8ed3bcfde175e5e62))
* **modal:** add critical icon ([269d9f1](https://github.com/aeternity/superhero-wallet/commit/269d9f138577c489c11e2ed9e06939a7c1e6f678))
* **more:** add More page ([8d544e7](https://github.com/aeternity/superhero-wallet/commit/8d544e72df0f1071afe1d32157a1c76e3526bd86))
* **names:** make names work with several accounts ([856ba37](https://github.com/aeternity/superhero-wallet/commit/856ba37e5527e08cbb7244bbff720f3861fc55c6))
* **payments-send:** drop trailing zeros from amount ([df221a4](https://github.com/aeternity/superhero-wallet/commit/df221a408753925cb9153c669b33586c0d1a3584))
* **token-amount:** update fiat formatting rules ([61ec06f](https://github.com/aeternity/superhero-wallet/commit/61ec06f5e2f73e410115db954006f8ef69e5c746))
* **token-details:** add token details new ux ([d4e8859](https://github.com/aeternity/superhero-wallet/commit/d4e885944ba5fab80b1bdf4c67df6d439a1f0d3b))
* **token-list:** don't display zero balances ([db4e02b](https://github.com/aeternity/superhero-wallet/commit/db4e02b2454ea78d974ddee65243b99a0d25f38c))
* **txlist:** adds realtime incoming tx for bitcoin token ([ab99c78](https://github.com/aeternity/superhero-wallet/commit/ab99c78806291c07eff2d3ca2d6d12cbe624ddd6))
* **txlist:** removes cached tx after fetching them from mdw ([d2f89e8](https://github.com/aeternity/superhero-wallet/commit/d2f89e85ecc30f50e5437f85b3b3ed7ab7b61809))
* **zeit:** add zeit token support ([dec3d08](https://github.com/aeternity/superhero-wallet/commit/dec3d08998f81fc1aaf2737382b8c7de9c07d177))
* add AccountItem component ([aa9d323](https://github.com/aeternity/superhero-wallet/commit/aa9d323dfd22eadb7d0acefe1c5dc91aee10139b))
* add AuctionOverview component ([89c81eb](https://github.com/aeternity/superhero-wallet/commit/89c81ebef18754d3bb11cc4dbeb51911fe8920e8))
* add NamePointersHelp modal ([5e75f67](https://github.com/aeternity/superhero-wallet/commit/5e75f67d696ca760c3843a6b660979c5b2169901))
* rebrand ConfirmRawSign modal ([83ba9b3](https://github.com/aeternity/superhero-wallet/commit/83ba9b302a745e5a455aca1b9999ca11b921dbf3))
* rebrand Modal ([1db7813](https://github.com/aeternity/superhero-wallet/commit/1db78135e0ef52d63d1229c17e1c907bb45cdb2d))
* rebrand QrCodeScanner modal ([688c0d1](https://github.com/aeternity/superhero-wallet/commit/688c0d184cc8ba633f33fe0b6607ce2e7b1f7128))
* rebrand tip url status ([2a0644e](https://github.com/aeternity/superhero-wallet/commit/2a0644edd7145c699e43e72ba1a939095505c99d))
* **unfinished:** enable unfinished features ([1b08c9e](https://github.com/aeternity/superhero-wallet/commit/1b08c9e5f08efff0a0f9cf4ad97a520bda6689d5))


### Bug Fixes

* **account:** disallow account switching before sdk initialize ([08cc72c](https://github.com/aeternity/superhero-wallet/commit/08cc72c798b8eaca8d6eb5d979b136fe30fec816))
* **account-switcher:** disable horizontal scrolling ([59c358a](https://github.com/aeternity/superhero-wallet/commit/59c358a11cab7352221b010c59ebc3e08f9333b7))
* **actions:** add missing transaction type to transcation history ([0bdd836](https://github.com/aeternity/superhero-wallet/commit/0bdd8368031f3bf3e9e9b5d72a2a51c2f0d1afa8))
* **app:** disallow horizontall scrolling ([32abbd5](https://github.com/aeternity/superhero-wallet/commit/32abbd5360e481a66aa9331a8ab8fe37d07d869c))
* **auction-list:** load auctions properly ([aeae5f8](https://github.com/aeternity/superhero-wallet/commit/aeae5f87e958ccd5c06eb4a3f0fe036804ffe76d))
* **background:** fix state reducer ([39e6307](https://github.com/aeternity/superhero-wallet/commit/39e630772ad0a4b6e14007aeea79880e3c689f99))
* **claim:** fix not enough balance modal ([fad4120](https://github.com/aeternity/superhero-wallet/commit/fad4120c85ccc045f3eb803a65caae927db18e05))
* **default:** fix modals with no msg ([9d73178](https://github.com/aeternity/superhero-wallet/commit/9d73178476ef9679fe8d28e135f8a67b31137bf8))
* **dropdown:** fix dropdown align ([4a9c656](https://github.com/aeternity/superhero-wallet/commit/4a9c656a2eaf5dc1d5060000e7f7884b15deecd4))
* **dropdown-width:** make dropdown list width constant ([4cebfd9](https://github.com/aeternity/superhero-wallet/commit/4cebfd9bbe5322271c34d7c4bcd64b05be772e35))
* **fonts:** fix id overflowing ([a3beb23](https://github.com/aeternity/superhero-wallet/commit/a3beb238d3239752e95eeb3932c1b1bcd0082a3f))
* **fungible-tokens:** set correct selected Token ([fc1bac2](https://github.com/aeternity/superhero-wallet/commit/fc1bac2a21596af8b524a58d1b90558a84d20bcd))
* **fungible-tokens:** use mdw endpoint instead of backend ([5c94e37](https://github.com/aeternity/superhero-wallet/commit/5c94e37e9efb572a516562a4b8fb3f76315ac22c))
* **helper:** fix isAccountNotFoundError ([1607a2e](https://github.com/aeternity/superhero-wallet/commit/1607a2e6c9a0960b57e2d8ab146daa7bdfa99287))
* **helper:** fix isNotFoundError ([f10b77d](https://github.com/aeternity/superhero-wallet/commit/f10b77da00e7d231dc4e9a9d7e66631ba2dee7f6))
* **modal:** expand container to fit long copy ([cdc9c7c](https://github.com/aeternity/superhero-wallet/commit/cdc9c7c4a74da70802de32f1f7def18bdff4fbd2))
* **observables:** use new balance storage structure ([88350cf](https://github.com/aeternity/superhero-wallet/commit/88350cf2b5bde31b15bd136fbd262a537c7ab64b))
* **platforms:** change ios link from testflight to store ([a8debf9](https://github.com/aeternity/superhero-wallet/commit/a8debf9174af718eca4b9c26ac1ca0450ca944d9))
* **qr-code:** inline transparent style to show preview in cordova ([6b7fdf9](https://github.com/aeternity/superhero-wallet/commit/6b7fdf98e91c726624f973639f984a72efbefac2))
* **token-amount:** show fiat only for AE ([88d74cd](https://github.com/aeternity/superhero-wallet/commit/88d74cda599c4d8a36899f49b60d385527045254))
* **token-details:** fix header padding ([cc5139f](https://github.com/aeternity/superhero-wallet/commit/cc5139ffed373699305a5edfff23fa7f9ae62761))
* **tx:** move view more link to tx list component ([e0271b0](https://github.com/aeternity/superhero-wallet/commit/e0271b02f08106020b0b71eb20a3e292e9a9589e))
* **tx-list:** center spinner and messsage ([9b85be3](https://github.com/aeternity/superhero-wallet/commit/9b85be3553c6b6f337fb008f58244f3e37f8717f))
* **tx-list:** don't show spinner on refetch interval ([d3e9f1a](https://github.com/aeternity/superhero-wallet/commit/d3e9f1a63ae15e1ba21a6d8bfc1a1e7be44c2e8b))


### Performance

* **persist-state:** use mutation to sync state ([ff18073](https://github.com/aeternity/superhero-wallet/commit/ff180735f9fe2469925a7da47ab2816ad79aa151))


### Style

* **account-info:** align address center ([49b0034](https://github.com/aeternity/superhero-wallet/commit/49b00346ea5ab7dcbf6f4609b44bf053ded51733))
* **dropdown:** make dropdown wider and always on top ([00a1ad8](https://github.com/aeternity/superhero-wallet/commit/00a1ad83df52889f0fec2cc5c67a313c9e5300e1))
* **icons:** update icons for tab navigation ([31a5fe8](https://github.com/aeternity/superhero-wallet/commit/31a5fe8c81dd0f7ed9216ca3f29c4869f009b9ca))
* **search-bar:** make background darker ([fb36175](https://github.com/aeternity/superhero-wallet/commit/fb36175d8633f3c54673d6818349a3a8af79873f))
* **token-list:** change no tokens msg style ([4b2ef54](https://github.com/aeternity/superhero-wallet/commit/4b2ef54077a6137813d1a88152915ffa0cf5b415))


### Maintenance

* **actions:** set middleware to null on network switch ([5443e1a](https://github.com/aeternity/superhero-wallet/commit/5443e1a9b9fea0f24fc81faf800126ed226510f4))
* **avatar:** change mid size to new designs ([d76b980](https://github.com/aeternity/superhero-wallet/commit/d76b9808930c318f89089ecd5e86c04ebf91cb81))
* **avatar:** make address optional ([aaeeea1](https://github.com/aeternity/superhero-wallet/commit/aaeeea1beb71b1262d6bdc9e238df099ee8abf4d))
* **chain-listener:** add test contract to variables ([548d434](https://github.com/aeternity/superhero-wallet/commit/548d43401131ca6788a9987d6e8d3797b8f03490))
* **chain-listener:** reinit listener on middleware change ([420ad06](https://github.com/aeternity/superhero-wallet/commit/420ad069ab251691f3713e3cb09c77ef48adf473))
* **constants:** update to mainnet contracts ([ef1a0f3](https://github.com/aeternity/superhero-wallet/commit/ef1a0f39934b75e86cf607d225f0f3e12801fa87))
* **e2e:** add tests for confirm raw sign popup ([8003c45](https://github.com/aeternity/superhero-wallet/commit/8003c45975261323c611a240b23f5479d989be65))
* **fungible-tokens:** cover all fetchJson with catch ([875be71](https://github.com/aeternity/superhero-wallet/commit/875be71068d3a527bbf119824e7ab6908c5f76c8))
* **icons:** unify arrow icons ([7dbd5ba](https://github.com/aeternity/superhero-wallet/commit/7dbd5bacdf31fc600eb272bfac38424e117498bc))
* **invite:** disable invite links for tokens ([25d494c](https://github.com/aeternity/superhero-wallet/commit/25d494c8a16b5e3f507cf7d28fb7c79ac54eece1))
* **invite:** show error message ([67ee22d](https://github.com/aeternity/superhero-wallet/commit/67ee22dea8b3a212ec5b8eed0008b6b826cca043))
* **logger:** don't show error modal by default on production ([bd53886](https://github.com/aeternity/superhero-wallet/commit/bd538866848198e9345dbd3500bc4a989f65f3fb))
* **migrations:** add addNewFields migration ([86fa6eb](https://github.com/aeternity/superhero-wallet/commit/86fa6ebf23a70863d00cf50b330a197ba9d85e00))
* **migrations:** rename migration ([138700a](https://github.com/aeternity/superhero-wallet/commit/138700a86849bbc11d24c4b19721e7c2b2a7be23))
* **names:** adjust account default names ([7b571bb](https://github.com/aeternity/superhero-wallet/commit/7b571bb9d0c7a1a5181e9f37307589bd011b4c7d))
* **networks-test:** disable fast switching networks ([831b0df](https://github.com/aeternity/superhero-wallet/commit/831b0df768a4e39c68b9a27adc4a8c90e490c8a0))
* **observables:** set all account balances to local storage ([9487d5a](https://github.com/aeternity/superhero-wallet/commit/9487d5a1e62315a6fd4351177f3a631c74a430ab))
* **pending-token-tx:** show pending token tx immediately ([c216978](https://github.com/aeternity/superhero-wallet/commit/c21697876c9c5d8eaab196f6e7b18828e52ab834))
* **plate:** add plate splitting ([593eb2b](https://github.com/aeternity/superhero-wallet/commit/593eb2b7610cbbcb1538aa09a435d5b7cfe62f2e))
* **tab-bar:** update TabBar component ([31a99d6](https://github.com/aeternity/superhero-wallet/commit/31a99d61be17dab917521c6d8685b73340d08d4f))
* **token-amount:** add prop to not show symbol ([98479d8](https://github.com/aeternity/superhero-wallet/commit/98479d820454fac51250220ada86632ff5cf65be))
* **token-amount:** drop alt text prop ([9653ddc](https://github.com/aeternity/superhero-wallet/commit/9653ddc7d4c71b8a1aa2b8810f5cb7355a0ebc82))
* **tokens:** remove unfinished from tokens ([aec13d3](https://github.com/aeternity/superhero-wallet/commit/aec13d3c4f8efcca18b92a56f5bfef2f59be9f68))
* **transaction-list:** add filters for fungible tokens ([481a194](https://github.com/aeternity/superhero-wallet/commit/481a1945ded50e957a17b3e5e60e4ae38c9f2381))
* **transaction-list:** move spinner and styles from recent to tx list ([3251e14](https://github.com/aeternity/superhero-wallet/commit/3251e14b0f2e22a1662b8726e58b5af3b82f8fda))
* **transactions:** extract transaction list into component ([42551b6](https://github.com/aeternity/superhero-wallet/commit/42551b6c5a916c34c1ee9c7e370eeb47177b9dc6))
* **txlist:** merges both implementations ([6fc6e3c](https://github.com/aeternity/superhero-wallet/commit/6fc6e3ccbbb53d7266a17ccf1d7e5ed132f0c288))
* **unfinished:** hide unfinished features ([5c3c935](https://github.com/aeternity/superhero-wallet/commit/5c3c93542727e2fc55da6baaedac6908fa36053e))
* compose Confirm with Default modal ([3e5c7c1](https://github.com/aeternity/superhero-wallet/commit/3e5c7c11ba04f4aff7ff42af7b68b9dc5f9c931c))
* drop text from toRelativeTime filter ([75cd65c](https://github.com/aeternity/superhero-wallet/commit/75cd65c68bc0bb1711829b1beddfcdac16ef7390))
* extract StatusIcon component ([c8a6255](https://github.com/aeternity/superhero-wallet/commit/c8a62554a1d5c179b397c2d4aa28aba31a385d65))
* rename Payments page to Transfer ([ed71de6](https://github.com/aeternity/superhero-wallet/commit/ed71de67829f8515434126162bd671cd60a1c3f0))
* **wording:** extract home variable ([05c6eae](https://github.com/aeternity/superhero-wallet/commit/05c6eaed2d3fa5da4cd4dcb8d72b3fd8dfd14659))
* remove MenuCarousel component ([f2d1734](https://github.com/aeternity/superhero-wallet/commit/f2d1734b6522cc6590c2071593ab8022b5568fea))

### [0.7.2](https://github.com/aeternity/superhero-wallet/compare/v0.7.1...v0.7.2) (2021-06-11)


### Features

* show node status in full screen modals ([4cd4f90](https://github.com/aeternity/superhero-wallet/commit/4cd4f9077cc85dfaba1bcd735732aed7f04e3e67))
* **confirm-tx:** show name fee token amount ([1776fff](https://github.com/aeternity/superhero-wallet/commit/1776fff0dc0bc34f7a1b64c54cbd35c65be2d959))
* **truncate:** simplify truncate behaviour ([5ae05d3](https://github.com/aeternity/superhero-wallet/commit/5ae05d38ebb0682331cc1ede16148e1dc823504b))


### Maintenance

* use iris compatible contracts ([dc08775](https://github.com/aeternity/superhero-wallet/commit/dc087752f11c270b067a0f184217199547059b5e))
* **global:** use ButtonPlain component ([47304bf](https://github.com/aeternity/superhero-wallet/commit/47304bfa7a31fc42c3c198800e1bb62ec1b25f3a))
* **receive:** remove exchange url ([2cf8b68](https://github.com/aeternity/superhero-wallet/commit/2cf8b68bb8c3ce7df3b899857c70e37dd79aa740))
* **tokens:** move tokens path and sidebar entry to unfinished ([e8e2786](https://github.com/aeternity/superhero-wallet/commit/e8e278696ada2ac2d6ba508f45dcf8356cf32a36))

### [0.7.1](https://github.com/aeternity/superhero-wallet/compare/v0.7.0...v0.7.1) (2021-05-31)


### Features

* rebrand Connect popup ([8138d27](https://github.com/aeternity/superhero-wallet/commit/8138d272da9acf0e3d15dbdca1361344450dc380))
* rebrand MessageSign popup ([e683ebc](https://github.com/aeternity/superhero-wallet/commit/e683ebcdda3aab851fabb0be973c2522aa41c55a))
* **payments-send:** add warning when sending to same address ([a9fb93a](https://github.com/aeternity/superhero-wallet/commit/a9fb93a95e5acf84008fd7b59b9903125fd25a75))


### Bug Fixes

* **amount-input:** adjust error condition ([ace955d](https://github.com/aeternity/superhero-wallet/commit/ace955d2aea738bfadc12b9b8110358448a15b6e))
* **comment-new:** redirect to /account on successful comment send ([25efe0e](https://github.com/aeternity/superhero-wallet/commit/25efe0ed74455679a796fc76d65d61bf9e93604b))
* **comment-new:** reload info on query change ([dc76a39](https://github.com/aeternity/superhero-wallet/commit/dc76a39f3002b0ca5956f6c716837e8c8ebebc5a))
* **details:** block buttons and don't watch before sdk init ([4b65ed8](https://github.com/aeternity/superhero-wallet/commit/4b65ed8ee12c2734b75f4ac91405eb426a464405))
* **header:** disallow title text wrapping ([8c5292c](https://github.com/aeternity/superhero-wallet/commit/8c5292c0187afe3d3e717ff4a45410558bd8eddc))
* **invite:** fix handleNotEnoughFoundsError parameters ([d275f95](https://github.com/aeternity/superhero-wallet/commit/d275f95d5d0dee3954254a2400a481697a2f015a))
* **invite:** set missing invite icon size ([33c6593](https://github.com/aeternity/superhero-wallet/commit/33c6593222b9bf46755b82d6cc57b37f886d4232))
* **pending:** fix duplicate pending transactions ([4e0a688](https://github.com/aeternity/superhero-wallet/commit/4e0a68861912b0aabaa0f4ee3e0ebff9fd0d8515))
* **recent-txs:** align empty and loading states ([2e30e65](https://github.com/aeternity/superhero-wallet/commit/2e30e656f9add0673cc499763a7b60fc64cde650))
* **retip:** request tip from backend instead of contract ([296b23a](https://github.com/aeternity/superhero-wallet/commit/296b23a8384a01f832f3ef0d2d6d844c127c7c51))
* **retip:** set proper pending transaction property ([8c84775](https://github.com/aeternity/superhero-wallet/commit/8c8477515ef215d1c9cdb195d4f94b888c30595b))
* **routes:** enable props for PaymentsSend ([911233f](https://github.com/aeternity/superhero-wallet/commit/911233f2e9eb9809c8442154407ef0052f2a609f))
* **routes:** fix retip page wrong title ([e9d7881](https://github.com/aeternity/superhero-wallet/commit/e9d788122020c4decfdf5363258200f94916db74))
* **small-modal:** fix mark as read unavailable for clicking ([4ad38d8](https://github.com/aeternity/superhero-wallet/commit/4ad38d8a374e6617be5d25c5ef3715b6f2c6f270))
* **tx-pointers:** fix name pointers field error in confirm tx modal ([bbfcf33](https://github.com/aeternity/superhero-wallet/commit/bbfcf33ebee837e6103000a33bdd02c34151b6dc))
* **warnings:** fix github actions warnings ([6d55381](https://github.com/aeternity/superhero-wallet/commit/6d55381e3f4684c48deee7c45e00d49dadb0ed15))
* resolve no-alert warnings ([d1250cc](https://github.com/aeternity/superhero-wallet/commit/d1250cc0c3eb3b901311a9e5f1c717691c6262dd))
* resolve no-console warnings ([f2428f5](https://github.com/aeternity/superhero-wallet/commit/f2428f5d7f8c698907274ca8f08fccf7c29c700b))
* resolve no-lone-template warning ([2561be4](https://github.com/aeternity/superhero-wallet/commit/2561be47767319ae9444be16bd8995c91c395845))
* resolve no-template-shadow warnings ([83fd054](https://github.com/aeternity/superhero-wallet/commit/83fd0544ada0211efe11e3ba909208b98d6c6431))
* resolve no-v-html warnings ([251a995](https://github.com/aeternity/superhero-wallet/commit/251a995b453a9826895b834ef064513c989c6200))
* resolve order-in-component warnings ([04b80d8](https://github.com/aeternity/superhero-wallet/commit/04b80d827227aec6d54e84a3e6148569c52beab7))
* **tests:** fix network test after new node added ([aaf25b1](https://github.com/aeternity/superhero-wallet/commit/aaf25b10257a12026f0fdea19a9d32b32fc6ad05))


### Performance

* **icons:** optimize iframe icons ([a0810b7](https://github.com/aeternity/superhero-wallet/commit/a0810b745eee77f2244dd168d1ab7566ec4bcaf3))


### Maintenance

* **unfinished:** hide unfinished features ([3797c91](https://github.com/aeternity/superhero-wallet/commit/3797c91a94c570536bd6399b55de79a55f03ec83))
* update sdk to 8.1.0 ([0121390](https://github.com/aeternity/superhero-wallet/commit/01213909a5649bf6ad32dd09534d714ddeab5c0f))
* **account-info:** change width of name with unfinished features off ([7a0663d](https://github.com/aeternity/superhero-wallet/commit/7a0663dad7d8138c5454d2c2e845c19d8a5f7764))
* **account-info:** revert width change ([f37e0aa](https://github.com/aeternity/superhero-wallet/commit/f37e0aac398ce3467d7b47a9d0348e73b87bd5e1))
* **env:** enable unfinished features ([11aa297](https://github.com/aeternity/superhero-wallet/commit/11aa2971a2d092b7985718a1bfadd2a4b6776326))
* **icons:** rearrange icons and delete duplicates ([ac9ebe8](https://github.com/aeternity/superhero-wallet/commit/ac9ebe81f9eabe6d69f4d1b29272a132e647db12))
* **networks:** remove unnecessary v-html ([8d32d7d](https://github.com/aeternity/superhero-wallet/commit/8d32d7de37640d13ea62f2cf05ed031eca835255))
* **payments:** revert old solution to redirection after success payment ([a9412b7](https://github.com/aeternity/superhero-wallet/commit/a9412b76385cbf8ae628cdfb72bd8a2615d1121f))
* **payments-send:** disable sending tokens to a name ([2fb7c87](https://github.com/aeternity/superhero-wallet/commit/2fb7c870fab27094781b39da0f7a72b30e5ae76c))
* **wallet:** move loading tokens data to unfinished ([3c25d27](https://github.com/aeternity/superhero-wallet/commit/3c25d27a339e3c028669bc1f5c39333f5d6b04e0))
* flickity buttons hover and pressed style ([eb6bce6](https://github.com/aeternity/superhero-wallet/commit/eb6bce66cd2f696c349a579824d8809f80624255))
* remove unused global css ([4c830d3](https://github.com/aeternity/superhero-wallet/commit/4c830d3280d81b8d95d3f937b9c95c403a6a6ec2))
* **permissions:** change placeholder to more clear version ([a126ea3](https://github.com/aeternity/superhero-wallet/commit/a126ea3dc9d6213211c3c27e32778dd892947761))
* **props:** set required defaults for props ([8950fe9](https://github.com/aeternity/superhero-wallet/commit/8950fe93a2e0dcadc7306e286e6b8c18f0fe926b))
* **tests:** disable mining-related tests ([0b784b6](https://github.com/aeternity/superhero-wallet/commit/0b784b6191d60b4127a12b31c9d19db7dc62b64b))
* **token-list-item:** remove unused name prop ([541e54c](https://github.com/aeternity/superhero-wallet/commit/541e54c63648afc9bec903a1bdcb2f845e5eb43a))
* **tour:** remove useless v-for ([5fd8477](https://github.com/aeternity/superhero-wallet/commit/5fd8477b34545290251d0b32718249d8dfdf0ce0))
* update SDK to 8.0.0 ([52234b5](https://github.com/aeternity/superhero-wallet/commit/52234b51e9ae691dcbec97cc3bfed03014e89646))

## [0.7.0](https://github.com/aeternity/superhero-wallet/compare/v0.6.1...v0.7.0) (2021-04-29)


### Features

* **tabs:** add Tabs component and split payments and tips screens ([ab3cdce](https://github.com/aeternity/superhero-wallet/commit/ab3cdceaf6696fbd00909280ffb91702397be9d6))
* rebrand ConfirmTransactionSign modal ([3d8ae06](https://github.com/aeternity/superhero-wallet/commit/3d8ae06dac199dc861a749380ac6e0a538e06871))
* **amount-send:** rebrand AmountSend component into Amount ([751155d](https://github.com/aeternity/superhero-wallet/commit/751155d39cb4cd523af017e8ac62a29ae0bc231f))
* **claim:** add claim tips menu entry ([4c71b9d](https://github.com/aeternity/superhero-wallet/commit/4c71b9df66ca45c50508476e4d1c67a0e09bbfcb))
* **icons:** update rebranded icons ([3d8f2f7](https://github.com/aeternity/superhero-wallet/commit/3d8f2f7636a3bd5b46747edaaeb119185ca0cfaf))
* add Accounts page ([f80fbdf](https://github.com/aeternity/superhero-wallet/commit/f80fbdf4648b8d567b3d5e97109d9a6d71f1a24a))
* add CopyAddress component ([6f27310](https://github.com/aeternity/superhero-wallet/commit/6f273102637422bf1892035ac59fb96ca10f29e3))
* add links to an account in the middleware explorer ([20ecf8b](https://github.com/aeternity/superhero-wallet/commit/20ecf8b7472bbf6a7a2523812c0ffd2e0bba0cbf))
* add TransactionOverview component ([48d7dc6](https://github.com/aeternity/superhero-wallet/commit/48d7dc611870a4af3a78a8bdd588d9c00bd3b26a))
* show balance for each account ([4e5762e](https://github.com/aeternity/superhero-wallet/commit/4e5762e2831323390f37b09031f0653ba85cffce))
* simple account list ([6580328](https://github.com/aeternity/superhero-wallet/commit/6580328f966ac213f5c74e16dc80a5fd93a17866))
* simple account switcher ([a339f0c](https://github.com/aeternity/superhero-wallet/commit/a339f0c5d000c15f44e70c9ada52b3e8b120d31d))


### Bug Fixes

* **account-info:** fix alignment on copy and name claim ([ee10ee9](https://github.com/aeternity/superhero-wallet/commit/ee10ee91e4acd1ac93458df9b9007e9d2727278c))
* **app:** match header background color ([b2824b2](https://github.com/aeternity/superhero-wallet/commit/b2824b2fb38bf9d6c315636e4d99201def2507ab))
* **background:** add missing getters ([588edba](https://github.com/aeternity/superhero-wallet/commit/588edbae4f25ea66bffdedf3df36ca24ee2e81cc))
* **confirm-modals:** don't stretch to whole page on desktop ([1d69f7d](https://github.com/aeternity/superhero-wallet/commit/1d69f7db27a58633ef787be91ff544c37320853d))
* **copy-address:** ensure copied text is expanded ([5c5ab8f](https://github.com/aeternity/superhero-wallet/commit/5c5ab8fdf254eeb943632379436ee45517d0d01d))
* **getters:** add correct name fee to tx amount ([5204402](https://github.com/aeternity/superhero-wallet/commit/5204402605b35c3e1ace2446eafaeee1e68878fb))
* **height:** use viewport height only for ios cordova ([f7f70e2](https://github.com/aeternity/superhero-wallet/commit/f7f70e2cf09454431c392db9e3a0fb483047ba41))
* **icons:** replace icons with transparency versions ([df67290](https://github.com/aeternity/superhero-wallet/commit/df67290c6afa4f331553946969623a59f573f266))
* **invite:** show correct token ([ff527ad](https://github.com/aeternity/superhero-wallet/commit/ff527ad38ef6b412116a1dbc054cc21b81ce4cae))
* **invite-claim:** update handleNotEnoughFoundsError ([ea3aae6](https://github.com/aeternity/superhero-wallet/commit/ea3aae6f7e5e0ce53bf2614bc302ac47b7a5cc7a))
* **ios:** add safe area to confirm modals ([6eb93dc](https://github.com/aeternity/superhero-wallet/commit/6eb93dc5c8b3dda6ad94124bccd7d37e9527a765))
* **ios:** set body bg visible on overscroll ([784b4d3](https://github.com/aeternity/superhero-wallet/commit/784b4d38f939681441cf825c72556897e99aae36))
* **manu-carousel:** make draggable in all mobile browsers ([f2ff6bb](https://github.com/aeternity/superhero-wallet/commit/f2ff6bbe456f9c96fcaafbc0ef0e964fea94106d))
* **mobile/extension:** use padding-bottom if bottom elements visible ([b855eae](https://github.com/aeternity/superhero-wallet/commit/b855eaef02436fc30d6006aae793616d1e413cf8))
* **names:** switch from deprecated profile endpoint ([8a78cfb](https://github.com/aeternity/superhero-wallet/commit/8a78cfb2625c2b967aafae2267b3def30251a4b1))
* **notifications:** use first name in the list if chainNames presented ([5ee89af](https://github.com/aeternity/superhero-wallet/commit/5ee89afa12a08e94923c7f46756af21d8f9234b3))
* **qr-code-reader:** do not interact with header styles explicitly ([d1fff50](https://github.com/aeternity/superhero-wallet/commit/d1fff507d99d69c3fc22ab3d89b1f9c7d3f20496))
* **recent-txs:** slice transactions list to limit ([58e5ffa](https://github.com/aeternity/superhero-wallet/commit/58e5ffae9a1448115ee68f26e02a576f6aec9b29))
* **retip:** add missing account getter ([fd9ae31](https://github.com/aeternity/superhero-wallet/commit/fd9ae31810b428627b27faac78e1715fa28424ad))
* **status:** position NodeConnectionStatus properly ([aaa0a52](https://github.com/aeternity/superhero-wallet/commit/aaa0a526a021a2af80a3d9ded600a3dd86635fbb))
* **styles:** add proper styles for custom name input ([3ea3285](https://github.com/aeternity/superhero-wallet/commit/3ea3285c4a6d9bcd020dbf862c89918f6d9d852a))
* **tabs:** fix Header routing and tests ([38c06e0](https://github.com/aeternity/superhero-wallet/commit/38c06e07c0eedde44a68eb7dd1dc7dfdf115d650))
* **tests:** remove header check in last intro screen ([7166e1c](https://github.com/aeternity/superhero-wallet/commit/7166e1ca580a905c1acda18c4ac1aaf0bf130417))
* **transactions:** change recent transactions on switching accounts ([14ddeaa](https://github.com/aeternity/superhero-wallet/commit/14ddeaae6bc07cfd1a5e5300a3330d1947065537))
* **tx-details:** keep header on top ([817bb01](https://github.com/aeternity/superhero-wallet/commit/817bb01e55b035597c48414cff69ead9c5a762c0))
* **web-iframe-popups:** make iframe popups notRebranded ([e472666](https://github.com/aeternity/superhero-wallet/commit/e472666cfcf54737e94593ce81f4c5d6732edf01))
* rebranded welcome screen image in iframe ([273a5b4](https://github.com/aeternity/superhero-wallet/commit/273a5b4bf17513ef3d0cdea9e7893e807ddea822))


### Tests

* use should to assert node content ([96df928](https://github.com/aeternity/superhero-wallet/commit/96df9282397557b68513e16d1d12be369deb64d1))
* **account:** force click covered dropdown ([09edf7a](https://github.com/aeternity/superhero-wallet/commit/09edf7a6cf4ca576590167e08cd6c56ffe2230fa))
* **amount-input:** use function in should to have retry mechanism ([6b2be15](https://github.com/aeternity/superhero-wallet/commit/6b2be1544d3e598259ac4f34ab93e61c21b7a039))
* **networks:** double get transaction-list timeout ([e468e9a](https://github.com/aeternity/superhero-wallet/commit/e468e9af984320e3e0e1d1cbbffb509308da373e))
* **transaction-details:** make the test independent from pending ([5b77498](https://github.com/aeternity/superhero-wallet/commit/5b77498f29d698d7632e7d18c4d2aa8eded09f0f))
* **transactions:** simplify test and remove unnecessary part ([9574bc9](https://github.com/aeternity/superhero-wallet/commit/9574bc95adf97b61876e5147d6d6168dc010c236))


### Style

* fix linter errors automatically ([1d9a323](https://github.com/aeternity/superhero-wallet/commit/1d9a3235e0984a346fc150e586433aae92fb9e1b))
* **colors:** drop old colors and replace it with rebranded ones ([469bda7](https://github.com/aeternity/superhero-wallet/commit/469bda71a3aef6e3f2e24c74634191095618c3b9))
* **fonts:** use missed rebranded fonts ([31d94e8](https://github.com/aeternity/superhero-wallet/commit/31d94e8efbe5cb114fbd67cecda520f3ea747e83))


### Maintenance

* **qr-code-reader:** use defined handleUnknownError ([d645dca](https://github.com/aeternity/superhero-wallet/commit/d645dcaee7aa4a2745f8cb962e733cead4371a76))
* box button ([b3ec0bc](https://github.com/aeternity/superhero-wallet/commit/b3ec0bc710737d4048b6a35c395a1d709010425d))
* build a single extension for Firefox and Chrome ([fa52e2c](https://github.com/aeternity/superhero-wallet/commit/fa52e2c0034cb7dad70f2a144fd96d9f5faa3333))
* change testnet backend url ([878cb8d](https://github.com/aeternity/superhero-wallet/commit/878cb8db97b99365262609f704fc4d91a72555fe))
* disable extra webpack stats to clean up build log ([3128018](https://github.com/aeternity/superhero-wallet/commit/3128018b88748da9b7505b16e06439145b7fd48c))
* extract tx fee getter ([c678ca6](https://github.com/aeternity/superhero-wallet/commit/c678ca690c71c8cb5bd94eb3e666ee1b74806501))
* get account type from instance ([6c4c323](https://github.com/aeternity/superhero-wallet/commit/6c4c323a3fc487cf0dd7d012b13773e4bde3f6ce))
* remove global css for sign modals ([5ae909f](https://github.com/aeternity/superhero-wallet/commit/5ae909f9b74f5721e4a1abeef31784ad5178fa2a))
* rename updateLatestTransactions mutation to setTransactions ([fb815b7](https://github.com/aeternity/superhero-wallet/commit/fb815b75d6edb56f04cbf4bd3e5ea35136205710))
* split TransactionOverview component ([618f232](https://github.com/aeternity/superhero-wallet/commit/618f232e533845e3e18e1847bc2e1be17c95d94f))
* try electron ([5fa2ca2](https://github.com/aeternity/superhero-wallet/commit/5fa2ca29f483f19e0e6de5023f3b43c60e31e368))
* update scss-related packages to fix env inside border ([1decc7f](https://github.com/aeternity/superhero-wallet/commit/1decc7f8ea154e9fcac666ae0e8c4a4d523d11bd))
* update vue packages ([3349d6e](https://github.com/aeternity/superhero-wallet/commit/3349d6ef41b234497ecce02841c7faf853bfedb8))
* **accounts:** use Plate component ([b9d1903](https://github.com/aeternity/superhero-wallet/commit/b9d19034923de85144cb1148de3b982d48f39734))
* **build:** fix build by using ChromeExtensionReloader properly ([7848665](https://github.com/aeternity/superhero-wallet/commit/7848665f6b282904e323e4ecda6be62aed5c6ec2))
* **button:** update secondary style and drop dark ([95ba341](https://github.com/aeternity/superhero-wallet/commit/95ba34144c0b3b2cd004767f1de7007ea3e93c59))
* **eslint:** fix errors automatically ([75c519a](https://github.com/aeternity/superhero-wallet/commit/75c519abc0ee2a98132a261e321085972cc2ca74))
* **eslint:** fix errors manually ([b03bde3](https://github.com/aeternity/superhero-wallet/commit/b03bde3e4ee32196de5a95c7bdcc20ba1d7c75f4))
* **eslint:** vue recommended rule set and drop conflicting prettier ([50acaee](https://github.com/aeternity/superhero-wallet/commit/50acaeee6967bca5d06cbfce3bbbbecaeac1225a))
* **scss:** "use" instead of "import" ([4d9f253](https://github.com/aeternity/superhero-wallet/commit/4d9f253fe08a1203de5ffd70e0b1ef82556e27ce))
* **scss:** start to "use" instead of "import" ([f42a353](https://github.com/aeternity/superhero-wallet/commit/f42a353ab01ebacd61c2442f68589da6284086ee))
* **tx:** return empty tx list if getTxByAccount returns error ([9b53094](https://github.com/aeternity/superhero-wallet/commit/9b530943961e10ba208342ad94984d9eec317454))
* **webpack:** remove unnecessary firefox-specific stuff ([477bc52](https://github.com/aeternity/superhero-wallet/commit/477bc527e2033ebd1295cb38acf7af87de2e3810))

### [0.6.1](https://github.com/aeternity/superhero-wallet/compare/v0.6.0...v0.6.1) (2021-04-15)


### Features

* **claim:** add claim tips menu entry ([ba58bba](https://github.com/aeternity/superhero-wallet/commit/ba58bba9a06008b705be0dd4c0c7f3235435cfdd))
* **icons:** update rebranded icons ([dfe2f10](https://github.com/aeternity/superhero-wallet/commit/dfe2f10c34424e0ed287a32d66ad5e285db26e5f))


### Bug Fixes

* **commitlint:** run commitlint from master ([6d8f8ff](https://github.com/aeternity/superhero-wallet/commit/6d8f8ff9555d2ddf9f09e73621e861f5b30ab289))
* **height:** use viewport height only for ios cordova ([350a8ab](https://github.com/aeternity/superhero-wallet/commit/350a8ab77532f1224ac520082f9a07a729f0aaf0))
* **mobile/extension:** use padding-bottom if bottom elements visible ([d585315](https://github.com/aeternity/superhero-wallet/commit/d585315a2ca20cef5f4623539b958ecbee862390))
* **notifications:** use first name in the list if chainNames presented ([4bad5e7](https://github.com/aeternity/superhero-wallet/commit/4bad5e726a34581ae8d54f8e145315b1b2641942))
* **retip:** add missing account getter ([84b8801](https://github.com/aeternity/superhero-wallet/commit/84b88014aad06c55901bc0154d62e5aa1c14eb00))
* **status:** position NodeConnectionStatus properly ([5eb84f9](https://github.com/aeternity/superhero-wallet/commit/5eb84f9560bad9716d0a23c87413ca06768e562c))
* **tests:** remove header check in last intro screen ([35f07ac](https://github.com/aeternity/superhero-wallet/commit/35f07ac4d57d8aa4fb73e6bcd6b9fbbb7cb732dc))
* **web-iframe-popups:** make iframe popups notRebranded ([ecc4acb](https://github.com/aeternity/superhero-wallet/commit/ecc4acbac49fb46845a769bc02858bf211dcbb74))


### Maintenance

* **tx:** return empty tx list if getTxByAccount returns error ([2b22dc2](https://github.com/aeternity/superhero-wallet/commit/2b22dc25045a7cf4f78fe5f94eb22227e9a4f5d8))

## [0.6.0](https://github.com/aeternity/superhero-wallet/compare/v0.5.6...v0.6.0) (2021-04-08)


### Features

* **transaction-list:** rebrand TransactionList ([91a94dd](https://github.com/aeternity/superhero-wallet/commit/91a94dd25e4e7d5414b931ba2bf075139f0e7cf7))
* add TabBar menu ([829644e](https://github.com/aeternity/superhero-wallet/commit/829644e3f4174b77df648599ce8e90fb586b66d8))
* **mixins:** introduce basic mixins ([8063d32](https://github.com/aeternity/superhero-wallet/commit/8063d3254f9b4df837aeb3279541c049f18ad2d5))
* **web-wallet-alignment:** align desktop and mobile web version ([093e93b](https://github.com/aeternity/superhero-wallet/commit/093e93b67eee05c8cef43c147323a5f4f4aa4214))
* add CopyButton component ([2ecc529](https://github.com/aeternity/superhero-wallet/commit/2ecc5297139ab8a39d0f16613182d2630442c5fd))
* add TransactionDetails page ([7d6bdcc](https://github.com/aeternity/superhero-wallet/commit/7d6bdccd972f0c2b33056801694d8e14e065fbc8))
* allow user to report a bug if they are not logged ([4623ebb](https://github.com/aeternity/superhero-wallet/commit/4623ebbc44bfaf2fe6b67227bd3da3263bb6199d))
* include stale bot ([8a9f57b](https://github.com/aeternity/superhero-wallet/commit/8a9f57bf04f40b1d89c8290bc4f1ea3d45755515))
* **header:** implement home button ([becb20c](https://github.com/aeternity/superhero-wallet/commit/becb20c3921dfdf73f07c64b6f4054706e6f4e00))
* enable adaptive icons in Android 8 and above ([5f7b0c4](https://github.com/aeternity/superhero-wallet/commit/5f7b0c4fa3f376e27803fe9aa95942e5322806c4))
* home menu buttons carousel by new design ([2b28c49](https://github.com/aeternity/superhero-wallet/commit/2b28c49ea382f8934d92de99f0488bb5b1292f77))
* rebrand Header component ([26a54d3](https://github.com/aeternity/superhero-wallet/commit/26a54d3a3bf6cb1bdf8dd877a9e607f8047b9ece))
* rebrand RecentTransactions component ([6384750](https://github.com/aeternity/superhero-wallet/commit/638475034f58a14e6979a415d00c29b84a2c2a01))
* rebrand TransactionItem component ([7f3036b](https://github.com/aeternity/superhero-wallet/commit/7f3036bf81568a9f5f63402d74ee1dc0ebdb0e41))
* update Index page designs ([15a48dd](https://github.com/aeternity/superhero-wallet/commit/15a48dd58ff6dbd13352a442ed248a9776061818))
* update Platform component designs ([00e741f](https://github.com/aeternity/superhero-wallet/commit/00e741fe868c85e4602db883e04755e6101e163c))
* update SidebarMenu designs ([f0f3883](https://github.com/aeternity/superhero-wallet/commit/f0f3883c18dc82da494048a96a09230647d750d6))


### Bug Fixes

* **app:** make desktop border outside as per designs ([77a3fd6](https://github.com/aeternity/superhero-wallet/commit/77a3fd6fae474d8efdcf76b8f856c3893a3a50d5))
* **box-btn:** adjust hover and active bg colors ([f0abd59](https://github.com/aeternity/superhero-wallet/commit/f0abd59bb76f1fd54964f4b4269300da23d8bd42))
* **check-aens-name:** drop unused .text aens suffix ([4984780](https://github.com/aeternity/superhero-wallet/commit/49847809a04a1370f9c20494613098d0e61bd3c7))
* **ci:** don't fetch develop if running tests on develop ([8e87cd4](https://github.com/aeternity/superhero-wallet/commit/8e87cd49ab4da98ab939709c2bffbbd576589cbf))
* **claim-links:** use account getter instead of nonexistent account state ([3eb8881](https://github.com/aeternity/superhero-wallet/commit/3eb88816ccdfde4a9b7d7048834f40c3b18dbc2f))
* **commitlint:** revert run commitlint from first valid commit ([29e44a2](https://github.com/aeternity/superhero-wallet/commit/29e44a2efa1b0cea00b0cda37bc15b5f1be2c874))
* **details:** disable setPointer button if name is pending ([76ddee1](https://github.com/aeternity/superhero-wallet/commit/76ddee17a87f87bb198b469698383b36a64277b2))
* **details:** leave details page if nameEntry become unvailable ([078b1ab](https://github.com/aeternity/superhero-wallet/commit/078b1ab9fd87dd8d1b3172f4b87bebc646646289))
* **e2e:** more accurate popup opening ([4a7fab3](https://github.com/aeternity/superhero-wallet/commit/4a7fab3c2683ba5baab57c172293a345434d4caa))
* **firefox-redirect:** exclude redirect.js from popup.html ([4a9b88d](https://github.com/aeternity/superhero-wallet/commit/4a9b88d41634079150a7891f764c2380455b7fa3))
* **global:** scroll to top on route change ([2dcceca](https://github.com/aeternity/superhero-wallet/commit/2dcceca1ef84e5aea5c15e76b55b7370ea9f7935))
* **icons:** change Checkbox checked state ([229abec](https://github.com/aeternity/superhero-wallet/commit/229abec55096161289477d755a5e7329e690b149))
* **icons:** make icons proper size ([2acbcb7](https://github.com/aeternity/superhero-wallet/commit/2acbcb7d244d20437a49fcbf3f8d5a281d4095e4))
* **import-account:** show loader before expensive sync calculation ([1c06dd8](https://github.com/aeternity/superhero-wallet/commit/1c06dd84708d92d149aff2a034baf1a9c64964b7))
* **menu:** link to payments page ([bea7205](https://github.com/aeternity/superhero-wallet/commit/bea720531ca4059217f9ba77f460b38f37b09908))
* **menu:** link to tokens page ([c2c50ea](https://github.com/aeternity/superhero-wallet/commit/c2c50ea1bb42d92725c68c66a7950f415ca1d733))
* **names:** remove obsolete removed state in names ([12f172f](https://github.com/aeternity/superhero-wallet/commit/12f172f37123e6ff5f0b624ef29c45e1d5421ace))
* **networks:** make editing of networks reactive ([1b99f26](https://github.com/aeternity/superhero-wallet/commit/1b99f2696c44757cd9b56befcb2b632776668e4e))
* **not-found:** redirection to initial page if logged it ([39b7c00](https://github.com/aeternity/superhero-wallet/commit/39b7c0024abc2c40f3a810e7d2ccf5af03d535f0))
* **plate:** show only bottom border as per designs ([1a322e2](https://github.com/aeternity/superhero-wallet/commit/1a322e2d5eede8d5fe73ea7176669213b37c0586))
* **popup-header:** hide header in popups ([6302f2e](https://github.com/aeternity/superhero-wallet/commit/6302f2eb658ed9314d088220af0292245f395869))
* **recent-txs:** remove duplicated margin ([83fdc90](https://github.com/aeternity/superhero-wallet/commit/83fdc904ecdc1e4309d3d64601d4124d84d6b407))
* **side-menu:** align item text and icon ([008845d](https://github.com/aeternity/superhero-wallet/commit/008845dd4725d7b858f95d248bdadf58f3e66c41))
* **sign-tx:** disable not working amount editor ([b631580](https://github.com/aeternity/superhero-wallet/commit/b6315800acfe397407faa7aff47804ae185300d8))
* **style:** make menu button according to designs ([7baeb8c](https://github.com/aeternity/superhero-wallet/commit/7baeb8cf2e90e2759668736a28fe9f2e445bd990))
* **styles:** adjust line-height of typography fonts ([3b7c760](https://github.com/aeternity/superhero-wallet/commit/3b7c76091a3f9a8267bcf0ee81d4636585264eb9))
* **styles:** align Header items according to designs ([7b2f3f6](https://github.com/aeternity/superhero-wallet/commit/7b2f3f63260e0a2f4c6c5e4e6d7abb9023becd76))
* **styles:** change background colors ([ae0f970](https://github.com/aeternity/superhero-wallet/commit/ae0f97059854dafce4e107fab7894e53f66cec40))
* **styles:** change styles for an a ([0f1b03f](https://github.com/aeternity/superhero-wallet/commit/0f1b03f6df8b20332289a9c4a6b82b0cbda69316))
* **tab-bar:** add main min-height to extension ([abe8767](https://github.com/aeternity/superhero-wallet/commit/abe876796446317ff1d9a91b2e3a1230daea6fba))
* enable PrivacyPolicy if not authorised (available from about page) ([9ae0a09](https://github.com/aeternity/superhero-wallet/commit/9ae0a090df60be9abc51f7363663ab96c09272d7))
* **styles:** align CheckBox items properly ([f9946d9](https://github.com/aeternity/superhero-wallet/commit/f9946d9da62f8336db181f6b08603cf550aaedd2))
* set formatted mnemonic phrase ([3a95cae](https://github.com/aeternity/superhero-wallet/commit/3a95caefeb472ab80e89384f58001643075ce993))
* **tx-details:** handle fetched pending transactions ([e99754e](https://github.com/aeternity/superhero-wallet/commit/e99754ec5b4bf3c5a33c4a1e6783a497f1e11b55))
* adjust TruncateMid component ([fa9a5fd](https://github.com/aeternity/superhero-wallet/commit/fa9a5fddf4b4bbe7ead9df369fe61ed7c438f41f))
* remove unused global styles ([9898017](https://github.com/aeternity/superhero-wallet/commit/9898017c0564d9d3a12a24b243ae5f8b3e1e88d7))
* rewrite tests depending on old SidebarMenu ([b621f77](https://github.com/aeternity/superhero-wallet/commit/b621f771988457f3484306ae697c401b0768dd03))
* set spinner color as per new design ([cb57c04](https://github.com/aeternity/superhero-wallet/commit/cb57c04d6d2d66f8f9f44c7fdddf2d4336b11bc5))
* use TruncateMid only for custom titles ([8f78218](https://github.com/aeternity/superhero-wallet/commit/8f7821896690250546903bb8729a044a1635c8b6))


### Style

* **button:** restyle button according to new designs ([0cc65ca](https://github.com/aeternity/superhero-wallet/commit/0cc65cac665d7f977d89b70da28d6f283dabe981))
* **font:** add sans 12 medium ([6a4cb5a](https://github.com/aeternity/superhero-wallet/commit/6a4cb5a0c28bfe83fc9031c1e541b8ad8353c380))
* **font:** replace Roboto with IBM Plex Sans ([ec15523](https://github.com/aeternity/superhero-wallet/commit/ec1552306dd376383592f1a3d8c7da7357486c64))
* **global:** replace html background-color ([097d968](https://github.com/aeternity/superhero-wallet/commit/097d968b67d734a6c5d838204cb442b82bc105de))
* **header:** set bg color as per new designs ([4131277](https://github.com/aeternity/superhero-wallet/commit/4131277b0b6d608a6dc5afb532b5c923cad08274))
* **variables:** add new colors ([66d39fa](https://github.com/aeternity/superhero-wallet/commit/66d39fa5c1f4fbdd034caedec081ea06d4bc6679))


### Tests

* **fix:** use back button in top-up ([76c35f4](https://github.com/aeternity/superhero-wallet/commit/76c35f40fe7ce50d561e679dd7358c0ea2c47b7c))


### Maintenance

* handle clipboard copy success more accurately ([1e6f3c1](https://github.com/aeternity/superhero-wallet/commit/1e6f3c12d6dc88dea793f21f90116afafed8c2a2))
* **container-width:** rename container-width to extension-width ([12896a5](https://github.com/aeternity/superhero-wallet/commit/12896a5ecb26d69a8cb9e70b2b8441572aca61d8))
* **global-input:** remove unused global input styles ([7a954c6](https://github.com/aeternity/superhero-wallet/commit/7a954c6687aed1b5df642b95187cd70f2cfd7124))
* **icons:** remove unused icon ([2520d56](https://github.com/aeternity/superhero-wallet/commit/2520d56fa0ea318396b043e8f6a966b3e38d2820))
* **import-account:** remove unnecessary loading screen ([77a2277](https://github.com/aeternity/superhero-wallet/commit/77a2277c0eeb587303445f74783f1e254ba4eba6))
* **input:** rebrand Input component ([ea511a0](https://github.com/aeternity/superhero-wallet/commit/ea511a042dd67ae4b3820c58a7e8c35be593870d))
* **menu-carousel:** use flickity buttons and make responsive alignment ([1ffdf22](https://github.com/aeternity/superhero-wallet/commit/1ffdf225283a97b566a184a097250499c58a24ac))
* **plate:** extract common styles to Plate component ([7dcc6f5](https://github.com/aeternity/superhero-wallet/commit/7dcc6f564beeef3aa39d9088312a73047a9be58d))
* **plate:** remove negative margin ([de8e4c8](https://github.com/aeternity/superhero-wallet/commit/de8e4c8cfa7197637a88388ff946ac1a6bef4003))
* **scrollbar:** hide scrollbar completely ([874592c](https://github.com/aeternity/superhero-wallet/commit/874592cf714d0bbaeff78fb24facfcdb20624a43))
* **search-bar:** refactor TokensPreview input into SearchBar ([cae51d1](https://github.com/aeternity/superhero-wallet/commit/cae51d108fa2d2806e61c316a6aca220f9b71cee))
* background rpc sdk ([28cdf10](https://github.com/aeternity/superhero-wallet/commit/28cdf10f00df58ecc7efe7bd8593b6e9939e4ffe))
* disable vue-i18n/no-raw-text rule ([c4f8573](https://github.com/aeternity/superhero-wallet/commit/c4f8573f3f0300cf3f955a755dee39553d5d5f6d))
* e2e tests for TransactionDetails page ([d68d8f1](https://github.com/aeternity/superhero-wallet/commit/d68d8f1d66da2e500b0f4c5a07df07e89c99e9ad))
* extract explorer url getter ([b9dd53f](https://github.com/aeternity/superhero-wallet/commit/b9dd53febda9319a59be42f7df7cc81547764c9f))
* extract InfoBox component ([645a323](https://github.com/aeternity/superhero-wallet/commit/645a323620168908a2576dc635a98ebb3970a208))
* extract LinkButton component ([3c248e3](https://github.com/aeternity/superhero-wallet/commit/3c248e3706805ee5678f84efae9226106fdba395))
* extract Plate component ([958d066](https://github.com/aeternity/superhero-wallet/commit/958d066bfc5ad443d28a15890a4f1e7fc9ed2bdc))
* extract transaction getters ([0a5d109](https://github.com/aeternity/superhero-wallet/commit/0a5d109ce898f6fd6e45173a611edad521e047c0))
* keep only state in component data objects ([c567b5b](https://github.com/aeternity/superhero-wallet/commit/c567b5be90bd51cd3b08f0a6344191fdeb8bcf63))
* rebrand logo in About page ([c4f3de3](https://github.com/aeternity/superhero-wallet/commit/c4f3de3b8815e8b69faaff0dcd63daf397797b37))
* remove extra IS_EXTENSION_BACKGROUND check ([8f36e51](https://github.com/aeternity/superhero-wallet/commit/8f36e51e08001468f3368a9de8e701b1b52ecbce))
* remove openUrl ([37a9b71](https://github.com/aeternity/superhero-wallet/commit/37a9b71f045b360c2402b2bc48cdcfbf95704fd3))
* remove unnecessary cordova-plugin-inappbrowser ([1cee0ea](https://github.com/aeternity/superhero-wallet/commit/1cee0ea1f6c0d5955426208688668b6ddb24be73))
* **background-utils:** subscribe to network from store ([a134a11](https://github.com/aeternity/superhero-wallet/commit/a134a111a2716bc2fca7465559ecbe6a1d3c9388))
* **invites:** show generated-invites section if invites exist ([d8e7610](https://github.com/aeternity/superhero-wallet/commit/d8e76106b93205d147e487a63bd440d388bac74e))
* **locales:** update urlToClaim text ([c111751](https://github.com/aeternity/superhero-wallet/commit/c111751f7643f42507b2f61edd59e7da56076892))
* **popup:** get rid of popup class ([3c37f03](https://github.com/aeternity/superhero-wallet/commit/3c37f035dbaeb4f4c13278a7de46291ed1dac047))
* **popup-wallet:** subscribe to current network ([4ce4c27](https://github.com/aeternity/superhero-wallet/commit/4ce4c275bd63ebc9d5659dab5cda9769d9dfd026))
* **receive:** remove home button in favor of the back arrow ([73d85e2](https://github.com/aeternity/superhero-wallet/commit/73d85e234ac24f32af7b435deaa057ac0ee89ed1))
* **settings:** redirect back to settings after backup seed ([9ada9dd](https://github.com/aeternity/superhero-wallet/commit/9ada9dd057ac102602179eb35fdd2a7a80bf6141))
* **terms-of-service:** refactor i18n titles data binding ([ab89171](https://github.com/aeternity/superhero-wallet/commit/ab8917157671190aef6acef29181a92465d8caec))
* **tx-item:** use RouterLink component ([4925bec](https://github.com/aeternity/superhero-wallet/commit/4925bec992cac4764113082fbdaf40bb4acdb1a8))
* **webpack:** simplify path ([482ea23](https://github.com/aeternity/superhero-wallet/commit/482ea23a050c5bad08dfd6b611fddb0292856844))
* drop account state field ([9196670](https://github.com/aeternity/superhero-wallet/commit/9196670816720ff4992edad3cbc6d1b96d03f1f9))
* extract getPopupProps call ([a757a92](https://github.com/aeternity/superhero-wallet/commit/a757a9244449f3b015b22df725a49903d6568938))
* fix typo in checkAensName function name ([6c284f9](https://github.com/aeternity/superhero-wallet/commit/6c284f9b88b96ddb5807253d7534ba7e48b01b85))
* make account getter depending only on mnemonic ([7459384](https://github.com/aeternity/superhero-wallet/commit/7459384f8b1ae24a7c31b96aacbdd97b57129c18))
* make width and height more clean ([89c112b](https://github.com/aeternity/superhero-wallet/commit/89c112b6ad48dbaaef405e5f4468586de8662a43))
* prefer 'mounted' hook instead of 'created' ([3d7d118](https://github.com/aeternity/superhero-wallet/commit/3d7d118bb26078753533e026aa308ddbf3327508))
* remove unnecessary generateWallet method ([4598fd3](https://github.com/aeternity/superhero-wallet/commit/4598fd3b0522535baf8ac3d25a0f1f95b3b51918))
* remove unnecessary getAccount method ([6c23bba](https://github.com/aeternity/superhero-wallet/commit/6c23bba5a21a89f8c5f68112205d71784b4b5730))
* remove unnecessary getKeyPair method ([f06f4fd](https://github.com/aeternity/superhero-wallet/commit/f06f4fdca05c5c603244476b6960d7bb3d372523))
* remove unnecessary isLoggedIn method ([f6aa1c8](https://github.com/aeternity/superhero-wallet/commit/f6aa1c8fcce32c3203050ac95bcb517264f6b699))
* remove unnecessary mainLoading ([4219fa3](https://github.com/aeternity/superhero-wallet/commit/4219fa3ebfeab29bb426f5c7efbee49eaff36d57))
* remove unused AEX2_METHODS ([0359e48](https://github.com/aeternity/superhero-wallet/commit/0359e485efd6e2a235e690753aa3b62e71a53ca4))
* remove unused helpers functions ([e36fb8b](https://github.com/aeternity/superhero-wallet/commit/e36fb8b0d11daef4b0b78ce7cfe501869ba6f68c))
* rename InfoBox component to DetailsItem ([fae8377](https://github.com/aeternity/superhero-wallet/commit/fae8377a6a35a4e20d3b25e3f8edc4600af45ff7))
* rename misspelled type face ([d28b686](https://github.com/aeternity/superhero-wallet/commit/d28b6867a1b7d9d5cce5c9f57410f2c50e301015))
* router beforeEach hook ([7828e28](https://github.com/aeternity/superhero-wallet/commit/7828e284fbd223103a2c290946bd75f8118f313d))
* use getter instead of isLoggedIn state field ([cdc3fb9](https://github.com/aeternity/superhero-wallet/commit/cdc3fb9f3d30ee5757e6e68f6b82aaf93e2a6186))
* **background:** use getters instead of getActiveAccount ([a7cd621](https://github.com/aeternity/superhero-wallet/commit/a7cd621edbbd3229b5e76f631b96a406487e8fb7))
* **background:** use getters instead of getState ([3a5b9a7](https://github.com/aeternity/superhero-wallet/commit/3a5b9a73cf2f06bf729216f0739030b5f385098f))
* remove unused aes file ([daca8c7](https://github.com/aeternity/superhero-wallet/commit/daca8c7cf8779c8d1cdde9c37a526296116130eb))
* remove WalletController ([a5dc06e](https://github.com/aeternity/superhero-wallet/commit/a5dc06eb366e67ea41148f109046c47407977439))
* **event-bus:** use store plugin instead ([2ae38b8](https://github.com/aeternity/superhero-wallet/commit/2ae38b8f84cec84eb368816e6771854fb8628771))
* **header:** remove redundant disabled prop on logo link ([b82196f](https://github.com/aeternity/superhero-wallet/commit/b82196f6e6d1ded926219974957a881cdd2df556))
* **import-account:** simplify code ([90d67f1](https://github.com/aeternity/superhero-wallet/commit/90d67f134b65cd70f78b781e1fa7928b4ae5ddea))
* **message-sign:** remove unused name property ([9590e7d](https://github.com/aeternity/superhero-wallet/commit/9590e7d5049ec71af1a5eb73b37ecb6a5ca3c27d))
* account store plugin ([b08433b](https://github.com/aeternity/superhero-wallet/commit/b08433b15613c9adae70c291d30a7c7d267b6be5))
* option to load svg with no optimization ([b1184de](https://github.com/aeternity/superhero-wallet/commit/b1184de5efa4c14759c7cc40def8a3b6c96c3974))
* remove unused AskAccounts popup ([09130ee](https://github.com/aeternity/superhero-wallet/commit/09130ee4b42fb43dc1d7a80c04c8857a536fa249))
* rename publicKey to address ([548dbbc](https://github.com/aeternity/superhero-wallet/commit/548dbbcc5aac2aa360f8655e508e11697b188ade))
* **ft:** loadTokenBalances only for the current account ([363a71e](https://github.com/aeternity/superhero-wallet/commit/363a71e37b8157ae8ec8dc10dd588a76863a87c1))
* **notifications:** getAllNotifications only for the current account ([09fd7f3](https://github.com/aeternity/superhero-wallet/commit/09fd7f3376a9ab25c69e82b2f02a6bd189c29652))
* use a single popup to confirm transaction signing ([eb089bc](https://github.com/aeternity/superhero-wallet/commit/eb089bcfc9dd33d406ceae6c430f45ff919d1d9f))
* use account instead of activeAccountName getter ([f57cad9](https://github.com/aeternity/superhero-wallet/commit/f57cad9b173309bdb00300004d4e75caca7b3019))
* **sass:** replace deprecated node-sass with sass ([af97284](https://github.com/aeternity/superhero-wallet/commit/af97284ad2fb43ca75da03eb90963510e5f32a40))
* **sign-account-identicons:** validate transaction fields ([aaac083](https://github.com/aeternity/superhero-wallet/commit/aaac0833c6b9a2ebf1339b5581b9d7bf631ba26e))
* **styles:** adjust Platform styles ([77b3e81](https://github.com/aeternity/superhero-wallet/commit/77b3e81d77c921d1b0a23bf784e0bec429c51d5c))
* **styles:** update hover,active states of CheckBox ([7df36f1](https://github.com/aeternity/superhero-wallet/commit/7df36f1d0aa408fce4004480209ca6e0515f8f05))
* **styles:** use color variables ([14721fe](https://github.com/aeternity/superhero-wallet/commit/14721fe2b9056027c89cbd9fb4066d1cdbe3c93c))

### [0.5.6](https://github.com/aeternity/superhero-wallet/compare/v0.5.4...v0.5.6) (2021-02-23)


### Features

* fetch pending transactions ([a9a786c](https://github.com/aeternity/superhero-wallet/commit/a9a786c8b725dcb347f95641fcc22be18492c1df))
* improve truncating of a long strings ([25eb9e8](https://github.com/aeternity/superhero-wallet/commit/25eb9e8db54fb29a1c0ac0e8b6c1e2bd4a26ecd6))
* **aens:** remove minimum aens name length limit ([be85b57](https://github.com/aeternity/superhero-wallet/commit/be85b578ff0517a61db5667a701c59122bbe7916))


### Bug Fixes

* **ios:** don't import BrowserQRCodeReader on mobile ([6f7b772](https://github.com/aeternity/superhero-wallet/commit/6f7b772f9ba75bb318994480228f3b001d9a6a2e))
* hide date if transaction is pending ([b906b20](https://github.com/aeternity/superhero-wallet/commit/b906b20292f10cbff637730be721146d9edd20f2))
* show pending transactions properly ([694450f](https://github.com/aeternity/superhero-wallet/commit/694450f897a6c74b3c4299a8c87f22d4f5ee2647))
* **helper:** return undefined if no response field ([58b84ab](https://github.com/aeternity/superhero-wallet/commit/58b84ab59b938ed922235864805979e1a4c96156))

### [0.5.2](https://github.com/aeternity/superhero-wallet/compare/v0.5.1...v0.5.2) (2021-02-08)


### Features

* **changelog:**  add sections ([ff062cf](https://github.com/aeternity/superhero-wallet/commit/ff062cf7fd52c4e5155b6ce9e6d9b6df58c11a3f))
* **mobile:** tip shared url ([865302b](https://github.com/aeternity/superhero-wallet/commit/865302bc54632d4aea77208931d1d801e736e3a8))


### Maintenance

* **lint:** setup pre-commit hook ([686ee0c](https://github.com/aeternity/superhero-wallet/commit/686ee0cdd1772b31d9df961020810a5b4059abef))

### [0.5.1](https://github.com/aeternity/superhero-wallet/compare/v0.5.0...v0.5.1) (2021-01-22)


### Features

* **changelog:** build using standard-version ([505412b](https://github.com/aeternity/superhero-wallet/commit/505412b59fff07e3879835e5bef86457ab595ea7))


### Bug Fixes

* set success message as a div ([9b19b15](https://github.com/aeternity/superhero-wallet/commit/9b19b1558a955ad9a82fdf0b49e26926654a193d))
