# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

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
