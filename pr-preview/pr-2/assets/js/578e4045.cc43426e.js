"use strict";(self.webpackChunkcelestia_docs=self.webpackChunkcelestia_docs||[]).push([[4081],{4137:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>h});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),c=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},b=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=c(a),b=n,h=d["".concat(s,".").concat(b)]||d[b]||u[b]||o;return a?r.createElement(h,l(l({ref:t},p),{},{components:a})):r.createElement(h,l({ref:t},p))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,l=new Array(o);l[0]=b;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[d]="string"==typeof e?e:n,l[1]=i;for(var c=2;c<o;c++)l[c]=a[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}b.displayName="MDXCreateElement"},7222:(e,t,a)=>{a.d(t,{Z:()=>r});const r=Object.freeze({"app-latest-tag":"v1.0.0-rc14","app-latest-sha":"cdc6bff4cde817a0f9fd6b30b57a02ad44698d17","core-latest-tag":"v2.0.0-tm-v0.37.2-rc0","core-latest-sha":"8f3e050209c43e883ff5076e2b01e9d7588044a7","node-latest-tag":"v0.11.0-rc13","node-latest-sha":"8ca777e1a3f04b7d0494e3bae8a1c1bcf68c5d8c"})},6213:(e,t,a)=>{a.d(t,{Z:()=>r});const r=Object.freeze({golangNodeBSR:"1.21.1",golangNodeMocha:"1.21.1",golangNodeArabica:"1.21.1",golangApp:"1.21.1",golangCore:"1.21.1",golang:"1.21.1",arabicaChainId:"arabica-10",bsrChainId:"blockspacerace-0",mochaChainId:"mocha-4",arabicaRollkitVersion:"v0.10.2",mochaRollkitVersion:"v0.10.2",bsrRollkitVersion:"v0.8.1",localCelestiaDevnetVersion:"v0.8.2",golangQGB:"1.20.2",orchrelayVersion:"v0.2.0-app-v0.13.2-beta"})},1942:(e,t,a)=>{a.d(t,{Z:()=>r});const r=Object.freeze({"app-latest-tag":"v1.0.0-rc14","app-latest-sha":"cdc6bff4cde817a0f9fd6b30b57a02ad44698d17","core-latest-tag":"v1.24.0-tm-v0.34.28","core-latest-sha":"d24c81afe0ecc4ccfbb7eb543a45a11794f04db4","node-latest-tag":"v0.11.0-rc12","node-latest-sha":"d803cf847cfac3640b1272b3accc7f5940068888"})},5294:(e,t,a)=>{a.d(t,{Z:()=>n});var r=a(7294);const n=e=>{let{arabicaVersions:t,constants:a}=e;return r.createElement("ul",null,r.createElement("li",null,"Celestia Chain ID - ",r.createElement("a",{href:`https://github.com/celestiaorg/networks/tree/master/${a.arabicaChainId}`,target:"_blank",rel:"noopener noreferrer"},a.arabicaChainId)),r.createElement("li",null,"Celestia Node - ",r.createElement("a",{href:`https://github.com/celestiaorg/celestia-node/releases/tag/${t["node-latest-tag"]}`,target:"_blank",rel:"noopener noreferrer"},t["node-latest-tag"])),r.createElement("li",null,"Celestia App - ",r.createElement("a",{href:`https://github.com/celestiaorg/celestia-app/releases/tag/${t["app-latest-tag"]}`,target:"_blank",rel:"noopener noreferrer"},t["app-latest-tag"])),r.createElement("li",null,"Rollkit - ",r.createElement("a",{href:`https://github.com/rollkit/rollkit/releases/tag/${a.arabicaRollkitVersion}`,target:"_blank",rel:"noopener noreferrer"},a.arabicaRollkitVersion)))}},3638:(e,t,a)=>{a.d(t,{Z:()=>n});var r=a(7294);const n=e=>{let{mochaVersions:t,constants:a}=e;return r.createElement("ul",null,r.createElement("li",null,"Celestia Chain ID - ",r.createElement("a",{href:`https://github.com/celestiaorg/networks/tree/master/${a.mochaChainId}`,target:"_blank",rel:"noopener noreferrer"},a.mochaChainId)),r.createElement("li",null,"Celestia Node - ",r.createElement("a",{href:`https://github.com/celestiaorg/celestia-node/releases/tag/${t["node-latest-tag"]}`,target:"_blank",rel:"noopener noreferrer"},t["node-latest-tag"])),r.createElement("li",null,"Celestia App - ",r.createElement("a",{href:`https://github.com/celestiaorg/celestia-app/releases/tag/${t["app-latest-tag"]}`,target:"_blank",rel:"noopener noreferrer"},t["app-latest-tag"])),r.createElement("li",null,"Rollkit - ",r.createElement("a",{href:`https://github.com/rollkit/rollkit/releases/tag/${a.mochaRollkitVersion}`,target:"_blank",rel:"noopener noreferrer"},a.mochaRollkitVersion)))}},2039:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>b,contentTitle:()=>d,default:()=>g,frontMatter:()=>p,metadata:()=>u,toc:()=>h});var r=a(7462),n=(a(7294),a(4137)),o=a(3638),l=a(5294),i=a(7222),s=a(1942),c=a(6213);const p={sidebar_label:"Participate in the Celestia testnets",description:"Celestia testnets that you can participate in."},d="Participate in the Celestia testnets",u={unversionedId:"nodes/participate",id:"nodes/participate",title:"Participate in the Celestia testnets",description:"Celestia testnets that you can participate in.",source:"@site/docs/nodes/participate.mdx",sourceDirName:"nodes",slug:"/nodes/participate",permalink:"/pr-preview/pr-2/nodes/participate",draft:!1,editUrl:"https://github.com/celestiaorg/docs/tree/main/docs/nodes/participate.mdx",tags:[],version:"current",frontMatter:{sidebar_label:"Participate in the Celestia testnets",description:"Celestia testnets that you can participate in."},sidebar:"nodes",previous:{title:"Overview",permalink:"/pr-preview/pr-2/nodes/overview"},next:{title:"Arabica devnet",permalink:"/pr-preview/pr-2/nodes/arabica-devnet"}},b={},h=[{value:"Network upgrades",id:"network-upgrades",level:2}],m={toc:h},f="wrapper";function g(e){let{components:t,...a}=e;return(0,n.kt)(f,(0,r.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"participate-in-the-celestia-testnets"},"Participate in the Celestia testnets"),(0,n.kt)("p",null,"Celestia currently has three existing testnets that you can participate in:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/pr-preview/pr-2/nodes/arabica-devnet"},"Arabica devnet"),": A devnet focused on developers who\nwant to deploy sovereign rollups on the latest changes from Celestia's codebase.\nArabica will be updated frequently and might be unstable at times given new updates.\nValidators won't be able to validate on Arabica as it is not designed for\nvalidators to participate.",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Compatible software versions",(0,n.kt)(l.Z,{arabicaVersions:i.Z,constants:c.Z,mdxType:"ArabicaVersionTags"})))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/pr-preview/pr-2/nodes/mocha-testnet"},"Mocha testnet"),": A testnet focused on enabling validators\nto test out their infrastructure by running nodes connected to the network. Developers\ncan also deploy sovereign rollups on Mocha, it just will always be behind Arabica\nas Mocha upgrades are slower given they need to be done via hardforks in coordination\nwith the validator community on Mocha.",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Compatible software versions",(0,n.kt)(o.Z,{mochaVersions:s.Z,constants:c.Z,mdxType:"MochaVersionTags"}))))),(0,n.kt)("h2",{id:"network-upgrades"},"Network upgrades"),(0,n.kt)("p",null,"Join our ",(0,n.kt)("a",{parentName:"p",href:"https://t.me/+smSFIA7XXLU4MjJh"},"Telegram announcement channel"),"\nfor network upgrades."))}g.isMDXComponent=!0}}]);