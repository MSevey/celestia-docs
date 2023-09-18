"use strict";(self.webpackChunkcelestia_docs=self.webpackChunkcelestia_docs||[]).push([[1047],{6213:(e,t,a)=>{a.d(t,{Z:()=>o});const o=Object.freeze({golangNodeBSR:"1.21.1",golangNodeMocha:"1.21.1",golangNodeArabica:"1.21.1",golangApp:"1.21.1",golangCore:"1.21.1",golang:"1.21.1",arabicaChainId:"arabica-10",bsrChainId:"blockspacerace-0",mochaChainId:"mocha-4",arabicaRollkitVersion:"v0.10.2",mochaRollkitVersion:"v0.10.2",bsrRollkitVersion:"v0.8.1",localCelestiaDevnetVersion:"v0.8.2",golangQGB:"1.20.2",orchrelayVersion:"v0.2.0-app-v0.13.2-beta"})},2709:(e,t,a)=>{a.d(t,{Z:()=>n});var o=a(7294);const n=e=>{let{children:t,constant:a}=e;return o.createElement("span",{style:{display:"inline"}},t,a)}},4145:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>m,default:()=>C,frontMatter:()=>p,metadata:()=>c,toc:()=>k});var o=a(7462),n=(a(7294),a(4137)),i=a(6213),s=a(2709),l=a(5944);const r=a.p+"assets/images/cosmostation-8c70d33eb6795a7cf61d44e89b29fb2a.gif",p={sidebar_label:"Cosmostation integration",description:"How you can add Celestia network parameters to Cosmostation wallet."},m="Cosmostation integration with Celestia",c={unversionedId:"developers/cosmostation",id:"developers/cosmostation",title:"Cosmostation integration with Celestia",description:"How you can add Celestia network parameters to Cosmostation wallet.",source:"@site/docs/developers/cosmostation.mdx",sourceDirName:"developers",slug:"/developers/cosmostation",permalink:"/pr-preview/pr-1/developers/cosmostation",draft:!1,editUrl:"https://github.com/celestiaorg/docs/tree/main/docs/developers/cosmostation.mdx",tags:[],version:"current",frontMatter:{sidebar_label:"Cosmostation integration",description:"How you can add Celestia network parameters to Cosmostation wallet."},sidebar:"developers",previous:{title:"Leap integration",permalink:"/pr-preview/pr-1/developers/leap"},next:{title:"Wallet with Celestia App",permalink:"/pr-preview/pr-1/developers/celestia-app-wallet"}},d={},k=[{value:"Install Cosmostation",id:"install-cosmostation",level:2},{value:"Add Celestia network parameters",id:"add-celestia-network-parameters",level:2}],h={toc:k},u="wrapper";function C(e){let{components:t,...p}=e;return(0,n.kt)(u,(0,o.Z)({},h,p,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"cosmostation-integration-with-celestia"},"Cosmostation integration with Celestia"),(0,n.kt)("p",null,"This guide will go over how you can add Celestia network parameters to Cosmostation wallet."),(0,n.kt)("p",null,"The example in this guide is for ",(0,n.kt)(s.Z,{constant:i.Z.mochaChainId,mdxType:"InlineText"})," testnet, and the same workflow can be used for any Celestia network."),(0,n.kt)("h2",{id:"install-cosmostation"},"Install Cosmostation"),(0,n.kt)("p",null,"Cosmostation is a popular Cosmos-based wallet that allows anyone\nto connect to Cosmos chains from their browser or phone."),(0,n.kt)("p",null,"Learn more and download Cosmostation ",(0,n.kt)("a",{parentName:"p",href:"https://cosmostation.io/"},"here"),"."),(0,n.kt)("p",null,"Download the Chrome extension from this\n",(0,n.kt)("a",{parentName:"p",href:"https://cosmostation.io/products/cosmostation_extension"},"page"),".\nFollow the instructions to install the extension."),(0,n.kt)("h2",{id:"add-celestia-network-parameters"},"Add Celestia network parameters"),(0,n.kt)("p",null,'Click the hamburger menu icon in the top corner of Cosmostation wallet. Scroll down and\nclick "Add Custom Chain"'),(0,n.kt)(l.Z,{img:r,width:400,mdxType:"Image"}),(0,n.kt)("p",null,"You can\nthen add the following parameters:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Custom Chain name: ",(0,n.kt)("inlineCode",{parentName:"li"},"Mocha Testnet")),(0,n.kt)("li",{parentName:"ul"},"Rest URL: ",(0,n.kt)("inlineCode",{parentName:"li"},"https://api-mocha.pops.one")),(0,n.kt)("li",{parentName:"ul"},"New RPC URL: ",(0,n.kt)("inlineCode",{parentName:"li"},"https://rpc-mocha.pops.one")),(0,n.kt)("li",{parentName:"ul"},"Currency symbol: ",(0,n.kt)("inlineCode",{parentName:"li"},"TIA")),(0,n.kt)("li",{parentName:"ul"},"Address prefix: ",(0,n.kt)("inlineCode",{parentName:"li"},"celestia")),(0,n.kt)("li",{parentName:"ul"},"Demon: ",(0,n.kt)("inlineCode",{parentName:"li"},"utia")),(0,n.kt)("li",{parentName:"ul"},"Symbol image URL (optional): ",(0,n.kt)("inlineCode",{parentName:"li"},"https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/celestiatestnet/images/celestia.svg")),(0,n.kt)("li",{parentName:"ul"},"Explorer URL (optional): ",(0,n.kt)("inlineCode",{parentName:"li"},"https://testnet.mintscan.io/celestia-testnet")),(0,n.kt)("li",{parentName:"ul"},"Coin Type: ",(0,n.kt)("inlineCode",{parentName:"li"},"118")),(0,n.kt)("li",{parentName:"ul"},"Decimals: ",(0,n.kt)("inlineCode",{parentName:"li"},"6")),(0,n.kt)("li",{parentName:"ul"},"Gas rate Tiny: ",(0,n.kt)("inlineCode",{parentName:"li"},"0.1")),(0,n.kt)("li",{parentName:"ul"},"Gas rate Low: ",(0,n.kt)("inlineCode",{parentName:"li"},"0.25")),(0,n.kt)("li",{parentName:"ul"},"Gas rate Average: ",(0,n.kt)("inlineCode",{parentName:"li"},"0.5"))),(0,n.kt)("p",null,"Now, click ",(0,n.kt)("inlineCode",{parentName:"p"},"Add a custom chain")," and you will be able to view your Celestia\naccount balance and transactions in Cosmostation wallet."),(0,n.kt)("p",null,"Switch chains to \"Mocha Testnet\" and you'll see that you're connected to Celestia's Mocha Testnet!"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"cosmostation",src:a(2191).Z,width:"300",height:"431"})))}C.isMDXComponent=!0},2191:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a.p+"assets/images/cosmostation-fe27a58edc2414e80e655ba8c7e200bf.png"}}]);