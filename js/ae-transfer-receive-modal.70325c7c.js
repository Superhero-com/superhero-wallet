"use strict";(self["webpackChunksuperhero_wallet"]=self["webpackChunksuperhero_wallet"]||[]).push([[375],{46707:(e,t,s)=>{s.r(t),s.d(t,{default:()=>v});var a=s(20641);function n(e,t,s,n,c,i){var o=(0,a.g2)("TransferReceiveBase");return(0,a.uX)(),(0,a.Wv)(o,(0,a.v6)(e.$attrs,{heading:e.isMultisig?e.$t("modals.receiveMultisig.title"):e.$t("modals.receive.title",{name:e.$t("modals.receive.funds")}),"account-address":e.activeAccountAddress,"account-name":e.activeAccountName,tokens:e.tokens,"disable-asset-selection":e.isMultisig,protocol:e.PROTOCOLS.aeternity}),null,16,["heading","account-address","account-name","tokens","disable-asset-selection","protocol"])}var c=s(65563),i=s(84754),o=s(49012),r=s(14023);const u=(0,a.pM)({name:c.LX,components:{TransferReceiveBase:r.A},props:{isMultisig:Boolean},setup:function(e){var t=(0,i.ci)({pollOnce:!0}),s=t.activeMultisigAccountId,n=(0,i.oV)(),r=n.activeAccount,u=(0,o.q)(),l=u.getName,d=(0,i.Y7)(),v=d.getProtocolAvailableTokens,p=(0,a.EW)((function(){return e.isMultisig?s.value:r.value.address})),g=e.isMultisig?void 0:l(r.value.address),m=(0,a.EW)((function(){return v(c.yv.aeternity)}));return{PROTOCOLS:c.yv,tokens:m,activeAccountAddress:p,activeAccountName:g}}});var l=s(66262);const d=(0,l.A)(u,[["render",n]]),v=d}}]);