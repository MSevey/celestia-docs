"use strict";(self.webpackChunkcelestia_docs=self.webpackChunkcelestia_docs||[]).push([[8929],{4137:(e,t,l)=>{l.d(t,{Zo:()=>c,kt:()=>k});var r=l(7294);function o(e,t,l){return t in e?Object.defineProperty(e,t,{value:l,enumerable:!0,configurable:!0,writable:!0}):e[t]=l,e}function n(e,t){var l=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),l.push.apply(l,r)}return l}function i(e){for(var t=1;t<arguments.length;t++){var l=null!=arguments[t]?arguments[t]:{};t%2?n(Object(l),!0).forEach((function(t){o(e,t,l[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(l)):n(Object(l)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(l,t))}))}return e}function a(e,t){if(null==e)return{};var l,r,o=function(e,t){if(null==e)return{};var l,r,o={},n=Object.keys(e);for(r=0;r<n.length;r++)l=n[r],t.indexOf(l)>=0||(o[l]=e[l]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)l=n[r],t.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(e,l)&&(o[l]=e[l])}return o}var s=r.createContext({}),p=function(e){var t=r.useContext(s),l=t;return e&&(l="function"==typeof e?e(t):i(i({},t),e)),l},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var l=e.components,o=e.mdxType,n=e.originalType,s=e.parentName,c=a(e,["components","mdxType","originalType","parentName"]),u=p(l),m=o,k=u["".concat(s,".").concat(m)]||u[m]||d[m]||n;return l?r.createElement(k,i(i({ref:t},c),{},{components:l})):r.createElement(k,i({ref:t},c))}));function k(e,t){var l=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var n=l.length,i=new Array(n);i[0]=m;var a={};for(var s in t)hasOwnProperty.call(t,s)&&(a[s]=t[s]);a.originalType=e,a[u]="string"==typeof e?e:o,i[1]=a;for(var p=2;p<n;p++)i[p]=l[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,l)}m.displayName="MDXCreateElement"},5626:(e,t,l)=>{l.r(t),l.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>n,metadata:()=>a,toc:()=>p});var r=l(7462),o=(l(7294),l(4137));const n={sidebar_label:"Rollkit",description:"Learn how to build Cosmos-SDK applications that connect to Celestia's Data Availability Layer via Rollkit."},i="Rollkit",a={unversionedId:"developers/rollkit",id:"developers/rollkit",title:"Rollkit",description:"Learn how to build Cosmos-SDK applications that connect to Celestia's Data Availability Layer via Rollkit.",source:"@site/docs/developers/rollkit.mdx",sourceDirName:"developers",slug:"/developers/rollkit",permalink:"/pr-preview/pr-2/developers/rollkit",draft:!1,editUrl:"https://github.com/celestiaorg/docs/tree/main/docs/developers/rollkit.mdx",tags:[],version:"current",frontMatter:{sidebar_label:"Rollkit",description:"Learn how to build Cosmos-SDK applications that connect to Celestia's Data Availability Layer via Rollkit."},sidebar:"developers",previous:{title:"Deploy a Rollup",permalink:"/pr-preview/pr-2/category/deploy-a-rollup"},next:{title:"Optimism",permalink:"/pr-preview/pr-2/category/optimism"}},s={},p=[{value:"Tutorials",id:"tutorials",level:2}],c={toc:p},u="wrapper";function d(e){let{components:t,...n}=e;return(0,o.kt)(u,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"rollkit"},"Rollkit"),(0,o.kt)("p",null,"Validator nodes allow you to participate in consensus in the Celestia network."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"rollkit",src:l(8942).Z,width:"2500",height:"2825"})),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://rollkit.dev"},"Rollkit")," is an ABCI\n(Application Blockchain Interface) implementation for sovereign\nrollups to deploy on top of Celestia."),(0,o.kt)("p",null,"It is built by replacing Tendermint, the Cosmos-SDK\nconsensus layer, with a drop-in replacement that\ncommunicates directly with Celestia's Data Availability layer."),(0,o.kt)("p",null,"It spins up a sovereign rollup, which collects transactions into blocks and\nposts them onto Celestia for consensus and data availability."),(0,o.kt)("p",null,"The goal of Rollkit is to enable anyone to design and\ndeploy a sovereign rollup on Celestia in minutes."),(0,o.kt)("p",null,'Furthermore, while Rollkit allows you to build sovereign rollups\non Celestia, it currently does not support fraud proofs yet and is\ntherefore running in "pessimistic" mode, where nodes would need to\nre-execute the transactions to check the validity of the chain\n(i.e. a full node). Furthermore, Rollkit currently only supports\na single sequencer.'),(0,o.kt)("h2",{id:"tutorials"},"Tutorials"),(0,o.kt)("p",null,"The following tutorials will help you get started building\nCosmos-SDK applications that connect to Celestia's Data Availability\nLayer via Rollkit. We call those chains Sovereign Rollups."),(0,o.kt)("p",null,"You can get started with the following tutorials:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://rollkit.dev/tutorials/gm-world"},"GM World rollup")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://rollkit.dev/tutorials/gm-world-frontend"},"GM World frontend")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://rollkit.dev/tutorials/recipe-book"},"Recipe Book rollup")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://rollkit.dev/tutorials/wordle"},"Wordle app")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://rollkit.dev/tutorials/cosmwasm"},"CosmWasm rollup")),(0,o.kt)("li",{parentName:"ul"},"EVM rollup - Coming soon!"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/pr-preview/pr-2/developers/full-stack-modular-development-guide/"},"Full stack modular blockchain development guide"))))}d.isMDXComponent=!0},8942:(e,t,l)=>{l.d(t,{Z:()=>r});const r=l.p+"assets/images/rollkit-a3c303985129391d591d82877628422a.png"}}]);