"use strict";(self["webpackChunksuperhero_wallet"]=self["webpackChunksuperhero_wallet"]||[]).push([[875],{53007:(e,t,n)=>{n.r(t),n.d(t,{default:()=>$});var r=n(20641);function a(e,t,n,a,o,s){var i=(0,r.g2)("TransferSendBase");return(0,r.uX)(),(0,r.Wv)(i,{protocol:e.PROTOCOLS.bitcoin,"current-step":e.currentStep,"sending-disabled":e.error||!e.transferData.address||!e.transferData.amount,onClose:e.resolve,onStepNext:e.proceedToNextStep,onStepPrev:e.editTransfer},{content:(0,r.k6)((function(){return[((0,r.uX)(),(0,r.Wv)((0,r.$y)(e.currentStepConfig.component),{ref:"currentRenderedComponent",transferData:e.transferData,"onUpdate:transferData":t[0]||(t[0]=function(t){return e.transferData=t}),onSuccess:e.currentStepConfig.onSuccess,onError:t[1]||(t[1]=function(t){return e.error=t})},null,40,["transferData","onSuccess"]))]})),_:1},8,["protocol","current-step","sending-disabled","onClose","onStepNext","onStepPrev"])}var o=n(1287),s=n(50953),i=n(65563),c=n(32118),u=n(84754),l=n(42346);function d(e,t,n,a,o,s){var i=(0,r.g2)("TokenAmount"),c=(0,r.g2)("DetailsItem"),u=(0,r.g2)("TransferReviewBase");return(0,r.uX)(),(0,r.Wv)(u,{"base-token-symbol":e.BTC_SYMBOL,"transfer-data":e.transferData,loading:e.loading,"show-fiat":"",protocol:e.PROTOCOLS.bitcoin,class:"transfer-review"},{total:(0,r.k6)((function(){return[(0,r.bF)(c,{label:e.$t("common.total"),class:"details-item"},{value:(0,r.k6)((function(){return[(0,r.bF)(i,{amount:+e.transferData.total,symbol:e.BTC_SYMBOL,"high-precision":"",protocol:e.PROTOCOLS.bitcoin,"data-cy":"review-total"},null,8,["amount","symbol","protocol"])]})),_:1},8,["label"])]})),_:1},8,["base-token-symbol","transfer-data","loading","protocol"])}var f=n(2327),v=(n(44114),n(2892),n(26099),n(75220)),m=n(46992),p=n(60831),b=n(74494),S=n(39953),A=n(28446),T=n(60346),O=function(e,t,n,r){function a(e){return e instanceof n?e:new n((function(t){t(e)}))}return new(n||(n=Promise))((function(n,o){function s(e){try{c(r.next(e))}catch(t){o(t)}}function i(e){try{c(r["throw"](e))}catch(t){o(t)}}function c(e){e.done?n(e.value):a(e.value).then(s,i)}c((r=r.apply(e,t||[])).next())}))};const g=(0,r.pM)({name:"BtcTransferReview",components:{TokenAmount:S.A,DetailsItem:b.A,TransferReviewBase:p.A},model:{prop:"transferData"},props:{transferData:{type:Object,required:!0}},setup:function(e,t){var n=t.emit,r=(0,m.s9)(),a=r.t,o=(0,v.rd)(),l=(0,u.mv)(),d=l.homeRouteName,p=(0,u.U8)(),b=p.openDefaultModal,S=(0,u.oV)(),g=S.activeAccount,h=S.getLastActiveProtocolAccount,w=(0,u.rb)(),x=w.addAccountPendingTransaction,C=(0,s.KR)(!1);function M(e){b({title:a("modals.transaction-failed.msg"),icon:"critical",msg:e})}function y(e){var t=document.createElement("textarea");return t.textContent=e,t.innerHTML}function _(t){var n,r=t.amount,a=t.recipient;t.selectedAsset;return O(this,void 0,void 0,(0,f.A)().mark((function t(){var o,s,u;return(0,f.A)().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return o=c.C.getAdapter(i.yv.bitcoin),t.prev=1,C.value=!0,t.next=5,o.spend((0,T.A)(r).toNumber(),a,Object.assign({fee:null===(n=e.transferData.fee)||void 0===n?void 0:n.toNumber()},g.value));case 5:return s=t.sent,u=s.hash,t.abrupt("return",u);case 10:throw t.prev=10,t.t0=t["catch"](1),M(y(t.t0.message)),t.t0;case 14:return t.prev=14,C.value=!1,t.finish(14);case 17:case"end":return t.stop()}}),t,null,[[1,10,14,17]])})))}function k(){var t,r;return O(this,void 0,void 0,(0,f.A)().mark((function a(){var s,c,u,l,v,m,p;return(0,f.A)().wrap((function(a){while(1)switch(a.prev=a.next){case 0:if(s=e.transferData,c=s.amount,u=s.address,l=s.selectedAsset,c&&u&&l){a.next=3;break}return a.abrupt("return");case 3:return a.next=5,_({amount:c,recipient:u,selectedAsset:l});case 5:v=a.sent,v&&(m=h(i.yv.bitcoin),p={hash:v,pending:!0,transactionOwner:null===m||void 0===m?void 0:m.address,protocol:i.yv.bitcoin,tx:{amount:Number(c),callerId:null===m||void 0===m?void 0:m.address,contractId:l.contractId,senderId:null===m||void 0===m?void 0:m.address,type:"SpendTx",recipientId:u,arguments:[],fee:null!==(r=null===(t=e.transferData.fee)||void 0===t?void 0:t.toNumber())&&void 0!==r?r:0}},x(null===m||void 0===m?void 0:m.address,p)),o.push({name:d.value}),n("success");case 9:case"end":return a.stop()}}),a)})))}return{PROTOCOLS:i.yv,BTC_SYMBOL:A.HF,loading:C,submit:k}}});var h=n(66262);const w=(0,h.A)(g,[["render",d],["__scopeId","data-v-96985f64"]]),x=w;n(76918),n(23288),n(38781);var C=n(53751);function M(e,t,n,a,o,s){var i=(0,r.g2)("TransferSendRecipient"),c=(0,r.g2)("BtnMaxAmount"),u=(0,r.g2)("TransferSendAmount"),l=(0,r.g2)("TransactionSpeedPicker"),d=(0,r.g2)("DetailsItem"),f=(0,r.g2)("TransferSendFormBase");return(0,r.uX)(),(0,r.Wv)(f,(0,r.v6)(e.$attrs,{"transfer-data":e.transferData,fee:e.numericFee,"fee-symbol":e.BTC_SYMBOL,protocol:e.PROTOCOLS.bitcoin,"custom-title":e.$t("modals.send.sendAsset",{name:e.BTC_COIN_NAME}),class:"transfer-send-form"}),{recipient:(0,r.k6)((function(){return[(0,r.bF)(i,{modelValue:e.formModel.address,"onUpdate:modelValue":t[0]||(t[0]=function(t){return e.formModel.address=t}),modelModifiers:{trim:!0},placeholder:e.$t("modals.send.recipientPlaceholderProtocol",{name:e.PROTOCOLS.bitcoin}),errors:e.errors,protocol:e.PROTOCOLS.bitcoin,"validation-rules":{account_address:[e.PROTOCOLS.bitcoin,e.activeNetwork.type]},onOpenQrModal:e.openScanQrModal},null,8,["modelValue","placeholder","errors","protocol","validation-rules","onOpenQrModal"])]})),amount:(0,r.k6)((function(){return[(0,r.bF)(u,{modelValue:e.formModel.amount,"onUpdate:modelValue":t[1]||(t[1]=function(t){return e.formModel.amount=t}),errors:e.errors,"selected-asset":e.formModel.selectedAsset,readonly:"",protocol:e.PROTOCOLS.bitcoin,"validation-rules":Object.assign(Object.assign(Object.assign({},+e.balance.minus(e.fee)>0?{max_value:e.max.toString()}:{}),{enough_coin:[e.fee.toString(),e.BTC_SYMBOL]}),e.activeNetwork.type===e.NETWORK_TYPE_TESTNET?{}:{min_value_exclusive:e.toBitcoin(e.DUST_AMOUNT)}),onAssetSelected:e.handleAssetChange},{"label-after":(0,r.k6)((function(){var t,n;return[(0,r.bF)(c,{"is-max":(null===(n=null===(t=e.formModel)||void 0===t?void 0:t.amount)||void 0===n?void 0:n.toString())===e.max.toString(),onClick:e.setMaxAmount},null,8,["is-max","onClick"])]})),_:1},8,["modelValue","errors","selected-asset","protocol","validation-rules","onAssetSelected"])]})),extra:(0,r.k6)((function(){return[(0,r.bo)((0,r.bF)(d,{label:e.$t("modals.send.transactionSpeed")},{value:(0,r.k6)((function(){return[(0,r.bF)(l,{modelValue:e.feeSelectedIndex,"onUpdate:modelValue":t[2]||(t[2]=function(t){return e.feeSelectedIndex=t}),"fee-list":e.feeList},null,8,["modelValue","fee-list"])]})),_:1},8,["label"]),[[C.aG,e.activeNetwork.type!==e.NETWORK_TYPE_TESTNET]])]})),_:1},16,["transfer-data","fee","fee-symbol","protocol","custom-title"])}n(9868);var y=n(14673),_=n(92350),k=n(31189),R=n(12589),B=n(72402),D=n(6162),N=n(43863),P=n(40477),E=n(14117),I=n(70654),L=n(94386),F=n(35240),K=n(71403),j=function(e,t,n,r){function a(e){return e instanceof n?e:new n((function(t){t(e)}))}return new(n||(n=Promise))((function(n,o){function s(e){try{c(r.next(e))}catch(t){o(t)}}function i(e){try{c(r["throw"](e))}catch(t){o(t)}}function c(e){e.done?n(e.value):a(e.value).then(s,i)}c((r=r.apply(e,t||[])).next())}))};const V=(0,r.pM)({name:"BtcTransferSendForm",components:{BtnMaxAmount:I.A,TransactionSpeedPicker:E.A,DetailsItem:b.A,TransferSendAmount:P.A,TransferSendRecipient:N.A,TransferSendFormBase:D.A},model:{prop:"transferData"},props:{transferData:{type:Object,required:!0}},emits:["update:transferData","success","error"],setup:function(e,t){var n=t.emit,a=c.C.getAdapter(i.yv.bitcoin),o=(0,v.lq)(),l=(0,m.s9)(),d=l.t,p=(0,u.fI)(),b=p.activeNetwork,S=(0,u.ty)(),O=S.balance,g=(0,u.oV)(),h=g.activeAccount,w=(0,s.KR)(!1),x=(0,s.KR)(!1),C=(0,_.x)({transferData:e.transferData}),M=C.formModel,D=C.errors,N=C.hasError,P=C.invoiceId,E=C.invoiceContract,I=C.clearPayload,V=C.openScanQrModal,W=C.handleAssetChange,U=C.updateFormModelValues,Y=(0,s.KR)(1),X=(0,s.KR)(new T.A(2e-5)),$=(0,s.KR)(new T.A(2e-5)),Q=(0,s.KR)(new T.A(2e-5)),q=(0,r.EW)((function(){return[{fee:X.value,time:3540,label:d("common.transferSpeed.slow")},{fee:$.value,time:600,label:d("common.transferSpeed.medium")},{fee:Q.value,time:25,label:d("common.transferSpeed.fast")}]})),H=(0,r.EW)((function(){return q.value[Y.value].fee})),z=(0,r.EW)((function(){return+H.value.toFixed()})),G=(0,r.EW)((function(){return O.value.minus(H.value)}));function Z(){var e,t=Object.assign(Object.assign({},M.value),{fee:H.value,total:z.value+ +((null===(e=M.value)||void 0===e?void 0:e.amount)||0),invoiceId:P.value,invoiceContract:E.value});return n("update:transferData",t),(0,r.dY)()}function J(){return j(this,void 0,void 0,(0,f.A)().mark((function e(){return(0,f.A)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(N.value){e.next=4;break}return e.next=3,Z();case 3:n("success");case 4:case"end":return e.stop()}}),e)})))}function ee(){M.value.amount=G.value.isPositive()?G.value.toString():"0"}function te(){return j(this,void 0,void 0,(0,f.A)().mark((function e(){var t,n,r,o,s;return(0,f.A)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,a.constructAndSignTx(0,M.value.address||h.value.address,Object.assign({fee:0},h.value));case 3:return t=e.sent.virtualSize(),n=b.value.protocols.bitcoin.nodeUrl,e.next=7,(0,k.x6)("".concat(n,"/fee-estimates"));case 7:r=e.sent["5"],o=new T.A(.5),s=new T.A(Math.ceil(r*t)),X.value=new T.A((0,y.toBitcoin)(Math.ceil(s.minus(s.times(o)).toNumber()))),$.value=new T.A((0,y.toBitcoin)(s.toNumber()*(b.value.type===i.Oj?2:1))),Q.value=new T.A((0,y.toBitcoin)(Math.ceil(s.plus(s.times(o)).toNumber()))),e.next=18;break;case 15:e.prev=15,e.t0=e["catch"](0),R.A.write(e.t0);case 18:case"end":return e.stop()}}),e,null,[[0,15]])})))}var ne=null;return(0,r.sV)((function(){ne=(0,k.mX)((function(){te()}),5e3);var e=o.query;U(Object.assign(Object.assign({},e),{token:e.token}))})),(0,r.hi)((function(){ne&&clearInterval(ne)})),(0,r.wB)(N,(function(e){return n("error",e)}),{deep:!0}),(0,r.wB)(M,(function(){Z()}),{deep:!0}),{INFO_BOX_TYPES:B.F,BTC_SYMBOL:A.HF,BTC_COIN_NAME:A.OX,DUST_AMOUNT:A.uR,PROTOCOLS:i.yv,NETWORK_TYPE_TESTNET:i.Oj,hasMultisigTokenWarning:w,formModel:M,isUrlTippingEnabled:x,activeNetwork:b,fee:H,feeList:q,feeSelectedIndex:Y,numericFee:z,activeAccount:h,errors:D,balance:O,max:G,clearPayload:I,openScanQrModal:V,handleAssetChange:W,EditIcon:L.A,DeleteIcon:F.A,PlusCircleIcon:K.A,submit:J,setMaxAmount:ee,toBitcoin:y.toBitcoin}}}),W=(0,h.A)(V,[["render",M]]),U=W,Y=(0,r.pM)({name:i.iP,components:{TransferSendBase:l.A},props:l.g,setup:function(e){var t=(0,u.ZN)(),n=t.marketData,a=(0,u.ty)(),l=a.balance,d=(0,s.KR)(),f=(0,s.KR)(i.x0.form),v=(0,s.KR)(!1),m=(0,s.KR)({address:e.address,amount:e.amount,payload:e.payload,selectedAsset:c.C.getAdapter(i.yv.bitcoin).getDefaultCoin(n.value,+l.value)});function p(){d.value.submit()}function b(){f.value=i.x0.review}function S(){v.value=!1,f.value=i.x0.form}var A=(0,o.A)((0,o.A)({},i.x0.form,{component:U,onSuccess:b}),i.x0.review,{component:x,onSuccess:e.resolve}),T=(0,r.EW)((function(){return A[f.value]}));return{TRANSFER_SEND_STEPS:i.x0,PROTOCOLS:i.yv,currentRenderedComponent:d,steps:A,currentStep:f,error:v,transferData:m,currentStepConfig:T,proceedToNextStep:p,editTransfer:S}}}),X=(0,h.A)(Y,[["render",a]]),$=X}}]);