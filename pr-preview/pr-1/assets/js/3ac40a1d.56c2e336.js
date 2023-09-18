"use strict";(self.webpackChunkcelestia_docs=self.webpackChunkcelestia_docs||[]).push([[9869],{4137:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>g});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var r=a.createContext({}),c=function(e){var t=a.useContext(r),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(r.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,l=e.originalType,r=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=c(n),h=o,g=p["".concat(r,".").concat(h)]||p[h]||d[h]||l;return n?a.createElement(g,s(s({ref:t},u),{},{components:n})):a.createElement(g,s({ref:t},u))}));function g(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var l=n.length,s=new Array(l);s[0]=h;var i={};for(var r in t)hasOwnProperty.call(t,r)&&(i[r]=t[r]);i.originalType=e,i[p]="string"==typeof e?e:o,s[1]=i;for(var c=2;c<l;c++)s[c]=n[c];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},4955:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>r,contentTitle:()=>s,default:()=>d,frontMatter:()=>l,metadata:()=>i,toc:()=>c});var a=n(7462),o=(n(7294),n(4137));const l={sidebar_label:"How to create a vesting account with Celestia App",description:"Learn how to generate a vesting account using Celestia App."},s="How to create a vesting account with Celestia App",i={unversionedId:"developers/celestia-app-vesting",id:"developers/celestia-app-vesting",title:"How to create a vesting account with Celestia App",description:"Learn how to generate a vesting account using Celestia App.",source:"@site/docs/developers/celestia-app-vesting.md",sourceDirName:"developers",slug:"/developers/celestia-app-vesting",permalink:"/pr-preview/pr-1/developers/celestia-app-vesting",draft:!1,editUrl:"https://github.com/celestiaorg/docs/tree/main/docs/developers/celestia-app-vesting.md",tags:[],version:"current",frontMatter:{sidebar_label:"How to create a vesting account with Celestia App",description:"Learn how to generate a vesting account using Celestia App."},sidebar:"developers",previous:{title:"Wallet with Celestia App",permalink:"/pr-preview/pr-1/developers/celestia-app-wallet"},next:{title:"Wallet with Celestia Node",permalink:"/pr-preview/pr-1/developers/celestia-node-key"}},r={},c=[{value:"Local devnet",id:"local-devnet",level:2},{value:"Setting up the local devnet",id:"setting-up-the-local-devnet",level:3},{value:"Run the devnet",id:"run-the-devnet",level:4},{value:"Save the home directory path",id:"save-the-home-directory-path",level:4},{value:"Check the version of the devnet",id:"check-the-version-of-the-devnet",level:4},{value:"Next steps",id:"next-steps",level:4},{value:"Setting up vesting account on devnet",id:"setting-up-vesting-account-on-devnet",level:3},{value:"Create a new key",id:"create-a-new-key",level:4},{value:"List your keys",id:"list-your-keys",level:4},{value:"Set variables",id:"set-variables",level:4},{value:"Create your devnet vesting account",id:"create-your-devnet-vesting-account",level:4},{value:"Query the devnet vesting account details",id:"query-the-devnet-vesting-account-details",level:4},{value:"Query the devnet base account details",id:"query-the-devnet-base-account-details",level:4},{value:"Query the balances of the devnet accounts",id:"query-the-balances-of-the-devnet-accounts",level:4},{value:"Mocha",id:"mocha",level:2},{value:"Create a wallet",id:"create-a-wallet",level:3},{value:"Fund your account",id:"fund-your-account",level:3},{value:"Create a vesting account on Mocha",id:"create-a-vesting-account-on-mocha",level:3},{value:"Optional: Set up a consensus full node or validator",id:"optional-set-up-a-consensus-full-node-or-validator",level:3},{value:"Optional: Change your client.toml",id:"optional-change-your-clienttoml",level:3},{value:"Notes",id:"notes",level:2},{value:"Conclusion",id:"conclusion",level:2}],u={toc:c},p="wrapper";function d(e){let{components:t,...n}=e;return(0,o.kt)(p,(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"how-to-create-a-vesting-account-with-celestia-app"},"How to create a vesting account with Celestia App"),(0,o.kt)("p",null,"In this guide, we will learn how to create a vesting account using\ncelestia-app for both a local devnet and on Mocha testnet."),(0,o.kt)("admonition",{title:"note",type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"The instructions for this tutorial are for a ",(0,o.kt)("strong",{parentName:"p"},"continuous")," vesting account,\nif you'd like to make a delayed vesting account, just add the ",(0,o.kt)("inlineCode",{parentName:"p"},"--delayed"),"\nflag to your vesting transaction.")),(0,o.kt)("h2",{id:"local-devnet"},"Local devnet"),(0,o.kt)("p",null,"First, download and ",(0,o.kt)("a",{parentName:"p",href:"../../nodes/celestia-app"},"install Celestia App"),",\nselecting the\n",(0,o.kt)("a",{parentName:"p",href:"../../nodes/participate"},"network and corresponding version"),"\nthat you would like to use."),(0,o.kt)("h3",{id:"setting-up-the-local-devnet"},"Setting up the local devnet"),(0,o.kt)("h4",{id:"run-the-devnet"},"Run the devnet"),(0,o.kt)("p",null,"Next, change into the ",(0,o.kt)("inlineCode",{parentName:"p"},"$HOME/celestia-app")," directory and\nrun the single-node-devnet script."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"cd $HOME/celestia-app\n./scripts/build-run-single-node.sh\n")),(0,o.kt)("h4",{id:"save-the-home-directory-path"},"Save the home directory path"),(0,o.kt)("p",null,'At the top of the output, you will see a path to the "Home directory",\nfind yours from the output (',(0,o.kt)("strong",{parentName:"p"},"it will be unique every time"),"):"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"./scripts/build-run-single-node.sh\nHome directory: /var/folders/_8/ljj6hspn0kn09qf9fy8kdyh40000gn/T/celestia_app_XXXXXXXXXXXXX.XV92a3qx\n--\x3e Updating go.mod\n")),(0,o.kt)("p",null,"And set the location as the ",(0,o.kt)("inlineCode",{parentName:"p"},"CElESTIA_APP_HOME")," variable. We will use this\nfor the remainder of the devnet section."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"export CElESTIA_APP_HOME=/var/folders/_8/ljj6hspn0kn09qf9fy8kdyh40000gn/T/celestia_app_XXXXXXXXXXXXX.XV92a3qx\n")),(0,o.kt)("admonition",{title:"note",type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"This does not replace the ",(0,o.kt)("inlineCode",{parentName:"p"},"celestia-appd")," binary that was\ninstalled with ",(0,o.kt)("inlineCode",{parentName:"p"},"celestia-appd"),", but builds and runs one\nin the ",(0,o.kt)("inlineCode",{parentName:"p"},"$HOME/celestia-app/build")," directory.")),(0,o.kt)("h4",{id:"check-the-version-of-the-devnet"},"Check the version of the devnet"),(0,o.kt)("p",null,"If you'd like to check the version of your local devnet, you can use:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"cd $HOME/celestia-app/build\n./celestia-appd version\n")),(0,o.kt)("h4",{id:"next-steps"},"Next steps"),(0,o.kt)("p",null,"Congratulations! You now have a private devnet running locally on your machine.\nThe devnet is made up of one validator that is creating new blocks. This is the\nCelestia consensus network on your machine! The key that was created to\nrun the validator also lives in a temporary directory for the devnet."),(0,o.kt)("p",null,"Now you are ready to test creating a vesting account on our devnet before going\nto Mocha, a live testnet."),(0,o.kt)("h3",{id:"setting-up-vesting-account-on-devnet"},"Setting up vesting account on devnet"),(0,o.kt)("p",null,"You already have one key setup, but you will need one more to create\na vesting account."),(0,o.kt)("h4",{id:"create-a-new-key"},"Create a new key"),(0,o.kt)("p",null,"First, create a vesting key:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"cd $HOME/celestia-app/build\n./celestia-appd keys add vesting-key --home $CElESTIA_APP_HOME\n")),(0,o.kt)("p",null,"You will see the address, mnemonic, and more details about your key in the\noutput:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'- address: celestia127fpaygehlsgjdknwvlr2mux7h5uvhkxktgkc5\n  name: vesting-key\n  pubkey: \'{"@type":"/cosmos.crypto.secp256k1.PubKey","key":"A5JF/we+s5gFt6g944XbKVVYgQB9OY+U/l5dhZjLDczO"}\'\n  type: local\n\n\n**Important** write this mnemonic phrase in a safe place.\nIt is the only way to recover your account if you ever forget your password.\n\nindex enter egg broken ostrich duty bitter blind all car hollow coral youth early verify point void anger daring sausage decline net shove oil\n')),(0,o.kt)("h4",{id:"list-your-keys"},"List your keys"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"./celestia-appd keys list --home $CElESTIA_APP_HOME\n")),(0,o.kt)("p",null,"Output:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'- address: celestia1adgkqcmzuxvg7x5avx8a8rjwpmxgzex3ztef6j\n  name: validator\n  pubkey: \'{"@type":"/cosmos.crypto.secp256k1.PubKey","key":"Ahzu6yr9XMPIxLquhgBhj9xL3wIaOz6PE3CvML/oPQym"}\'\n  type: local\n- address: celestia127fpaygehlsgjdknwvlr2mux7h5uvhkxktgkc5\n  name: vesting-key\n  pubkey: \'{"@type":"/cosmos.crypto.secp256k1.PubKey","key":"A5JF/we+s5gFt6g944XbKVVYgQB9OY+U/l5dhZjLDczO"}\'\n  type: local\n')),(0,o.kt)("h4",{id:"set-variables"},"Set variables"),(0,o.kt)("p",null,"Set the keys as varibles, using the validator address as the ",(0,o.kt)("inlineCode",{parentName:"p"},"FROM_ADDRESS"),"\nand the vesting-key as the ",(0,o.kt)("inlineCode",{parentName:"p"},"TO_ADDRESS"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"export FROM_ADDRESS=celestia1adgkqcmzuxvg7x5avx8a8rjwpmxgzex3ztef6j\nexport TO_ADDRESS=celestia127fpaygehlsgjdknwvlr2mux7h5uvhkxktgkc5\n")),(0,o.kt)("h4",{id:"create-your-devnet-vesting-account"},"Create your devnet vesting account"),(0,o.kt)("p",null,"Create the vesting account with the following command:"),(0,o.kt)("admonition",{title:"note",type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"The remainder of the instructions are for a ",(0,o.kt)("strong",{parentName:"p"},"continuous")," vesting account,\nif you'd like to make a delayed vesting account, use the ",(0,o.kt)("inlineCode",{parentName:"p"},"--delayed"),"\nflag."),(0,o.kt)("p",{parentName:"admonition"},"For example, the command to create a delayed vesting account would look like:"),(0,o.kt)("pre",{parentName:"admonition"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"./celestia-appd tx vesting create-vesting-account $TO_ADDRESS 100000utia 1686748051 --from $FROM_ADDRESS --gas auto --fees 100000utia --chain-id private --home $CElESTIA_APP_HOME --delayed\n"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"./celestia-appd tx vesting create-vesting-account $TO_ADDRESS 100000utia 1686748051 --from $FROM_ADDRESS --gas auto --fees 100000utia --chain-id private --home $CElESTIA_APP_HOME\n")),(0,o.kt)("p",null,'Select "Y" to choose "yes".'),(0,o.kt)("admonition",{title:"Optional",type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"If you'd like to run the command with the ",(0,o.kt)("inlineCode",{parentName:"p"},"-y"),' flag, it will\nexecute the transaction without needing to provide the "y" answer as above.'),(0,o.kt)("pre",{parentName:"admonition"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"./celestia-appd tx vesting create-vesting-account $TO_ADDRESS 100000utia 1686748051 --from $FROM_ADDRESS --gas auto --fees 100000utia --chain-id private --home $CElESTIA_APP_HOME -y\n"))),(0,o.kt)("p",null,"Output:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'gas estimate: 96112\nauth_info:\n  fee:\n    amount:\n    - amount: "100000"\n      denom: utia\n    gas_limit: "96112"\n    granter: ""\n    payer: ""\n  signer_infos: []\n  tip: null\nbody:\n  extension_options: []\n  memo: ""\n  messages:\n  - \'@type\': /cosmos.vesting.v1beta1.MsgCreateVestingAccount\n    amount:\n    - amount: "100000"\n      denom: utia\n    delayed: false\n    end_time: "1686748051"\n    from_address: celestia1adgkqcmzuxvg7x5avx8a8rjwpmxgzex3ztef6j\n    to_address: celestia127fpaygehlsgjdknwvlr2mux7h5uvhkxktgkc5\n  non_critical_extension_options: []\n  timeout_height: "0"\nsignatures: []\nconfirm transaction before signing and broadcasting [y/N]: y\ncode: 0\ncodespace: ""\ndata: ""\nevents: []\ngas_used: "0"\ngas_wanted: "0"\nheight: "0"\ninfo: ""\nlogs: []\nraw_log: \'[]\'\ntimestamp: ""\ntx: null\ntxhash: 6093DF76DBA90F04FF63D197FC1569F04ED3DBE64081A0BBA9BAD4E69AA570D2\n')),(0,o.kt)("p",null,"The timestamp for the previous command is in the past, so once you create\nthe vesting account, the tokens will vest. You can check your account\nbalances to verify this."),(0,o.kt)("h4",{id:"query-the-devnet-vesting-account-details"},"Query the devnet vesting account details"),(0,o.kt)("p",null,"Check that the account has been created and works as expected by querying\nthe ",(0,o.kt)("inlineCode",{parentName:"p"},"TO_ADDRESS")," account details:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"./celestia-appd query account $TO_ADDRESS --home $CElESTIA_APP_HOME\n")),(0,o.kt)("p",null,"In the output, you will notice that the account type is a\n",(0,o.kt)("inlineCode",{parentName:"p"},"ContinuousVestingAccount"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'\'@type\': /cosmos.vesting.v1beta1.ContinuousVestingAccount\nbase_vesting_account:\n  base_account:\n    account_number: "7"\n    address: celestia127fpaygehlsgjdknwvlr2mux7h5uvhkxktgkc5\n    pub_key: null\n    sequence: "0"\n  delegated_free: []\n  delegated_vesting: []\n  end_time: "1686748051"\n  original_vesting:\n  - amount: "100000"\n    denom: utia\nstart_time: "1687908352"\n')),(0,o.kt)("h4",{id:"query-the-devnet-base-account-details"},"Query the devnet base account details"),(0,o.kt)("p",null,"Check the ",(0,o.kt)("inlineCode",{parentName:"p"},"FROM_ADDRESS")," account details:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"./celestia-appd query account $FROM_ADDRESS --home $CElESTIA_APP_HOME\n")),(0,o.kt)("p",null,"In the output, you will notice the account type is ",(0,o.kt)("inlineCode",{parentName:"p"},"BaseAccount"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"'@type': /cosmos.auth.v1beta1.BaseAccount\naccount_number: \"0\"\naddress: celestia1adgkqcmzuxvg7x5avx8a8rjwpmxgzex3ztef6j\npub_key:\n  '@type': /cosmos.crypto.secp256k1.PubKey\n  key: Ahzu6yr9XMPIxLquhgBhj9xL3wIaOz6PE3CvML/oPQym\nsequence: \"2\"\n")),(0,o.kt)("h4",{id:"query-the-balances-of-the-devnet-accounts"},"Query the balances of the devnet accounts"),(0,o.kt)("p",null,"Next, we can check the balance of the accounts:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"./celestia-appd query bank balances $TO_ADDRESS --home $CElESTIA_APP_HOME\n")),(0,o.kt)("p",null,"Output will show you the balance of the vesting account:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'balances:\n- amount: "100000"\n  denom: utia\npagination:\n  next_key: null\n  total: "0"\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"./celestia-appd query bank balances $FROM_ADDRESS --home $CElESTIA_APP_HOME\n")),(0,o.kt)("p",null,"The output will show the remaining balance of the validator:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'balances:\n- amount: "999994999800000"\n  denom: utia\npagination:\n  next_key: null\n  total: "0"\n')),(0,o.kt)("p",null,"Congratulations! You've now made your own vesting account on a local devnet.\nNext, you can learn how to create a vesting account on Mocha Testnet."),(0,o.kt)("h2",{id:"mocha"},"Mocha"),(0,o.kt)("p",null,"In the previous section of this tutorial, we learned how to create a vesting\naccount on a local devnet. In this portion of the tutorial, we'll cover how\nto set up a consensus full node and set up a vesting account on\n",(0,o.kt)("a",{parentName:"p",href:"../../nodes/mocha-testnet"},"Mocha Testnet"),"."),(0,o.kt)("p",null,"First, be sure that you have installed Celestia App for the latest\nversion for Mocha Testnet on this ",(0,o.kt)("a",{parentName:"p",href:"../../nodes/celestia-app"},"page"),"."),(0,o.kt)("h3",{id:"create-a-wallet"},"Create a wallet"),(0,o.kt)("p",null,"Set the keyring backend, so you don't need to use the flag for every command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"celestia-appd config keyring-backend test\n")),(0,o.kt)("p",null,"Add a new key for a full node and one for a vesting account:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"celestia-appd keys add origin && celestia-appd keys add vesting\n")),(0,o.kt)("p",null,"List the keys:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"celestia-appd keys list\n")),(0,o.kt)("p",null,"Set your keys as variables:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"export FROM_ADDRESS=address_of_origin_account\nexport TO_ADDRESS=address_of_vesting_account\n")),(0,o.kt)("h3",{id:"fund-your-account"},"Fund your account"),(0,o.kt)("p",null,"Head to the ",(0,o.kt)("a",{parentName:"p",href:"../../nodes/mocha-testnet/#mocha-testnet-faucet"},"faucet"),",\nand fund your ",(0,o.kt)("inlineCode",{parentName:"p"},"origin")," address."),(0,o.kt)("h3",{id:"create-a-vesting-account-on-mocha"},"Create a vesting account on Mocha"),(0,o.kt)("p",null,"To create a vesting account on Mocha, you will need an RPC URL to send\nthe transaction to. You can find an RPC ",(0,o.kt)("a",{parentName:"p",href:"../../nodes/mocha-testnet/#rpc-endpoints"},"here"),"."),(0,o.kt)("p",null,"Set your RPC URL:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"export RPC_URL=https://rpc-mocha.pops.one:443\n")),(0,o.kt)("p",null,"We will use a few flags in our vesting command that are different than the\ndevnet version. Since we aren't using our own validator or full node, we will\nuse an RPC URL."),(0,o.kt)("p",null,"We also need to declare the chain ID as ",(0,o.kt)("inlineCode",{parentName:"p"},"mocha"),"."),(0,o.kt)("p",null,"View the help menu for vesting to understand these flags more:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"celestia-appd tx vesting --help\n")),(0,o.kt)("p",null,"Here's an example command to set up the vesting account:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"celestia-appd tx vesting create-vesting-account $TO_ADDRESS 100000utia 1686748051 --from $FROM_ADDRESS --gas 100000 --fees 100000utia --node $RPC_URL --chain-id mocha --delayed\n")),(0,o.kt)("h3",{id:"optional-set-up-a-consensus-full-node-or-validator"},"Optional: Set up a consensus full node or validator"),(0,o.kt)("p",null,"Running a consensus full node or validator will prevent you from needing\nto use an RPC."),(0,o.kt)("p",null,"You can set up a ",(0,o.kt)("a",{parentName:"p",href:"../../nodes/full-consensus-node"},"validator")," or ",(0,o.kt)("a",{parentName:"p",href:"../../nodes/validator-node"},"full node")," for the previous portion\nof the tutorial."),(0,o.kt)("p",null,"Note: this may take some time depending on how you choose to sync the\nstate of the chain."),(0,o.kt)("h3",{id:"optional-change-your-clienttoml"},"Optional: Change your client.toml"),(0,o.kt)("p",null,"If you edit your client configuration in ",(0,o.kt)("inlineCode",{parentName:"p"},"client.toml"),", you can set both the\nchain ID and the node RPC URL. This will prevent you from needing\nto run each flag for every command line that you use."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-toml"},'# This is a TOML config file.\n# For more information, see https://github.com/toml-lang/toml\n\n###############################################################################\n###                           Client Configuration                            ###\n###############################################################################\n\n# The network chain ID\nchain-id = "mocha"\n# The keyring\'s backend, where the keys are stored (os|file|kwallet|pass|test|memory)\nkeyring-backend = "test"\n# CLI output format (text|json)\noutput = "text"\n# <host>:<port> to Tendermint RPC interface for this chain\nnode = "tcp://rpc-mocha.pops.one:443"\n# Transaction broadcasting mode (sync|async|block)\nbroadcast-mode = "sync"\n')),(0,o.kt)("h2",{id:"notes"},"Notes"),(0,o.kt)("p",null,"Not all vesting accounts can be created with a message, some need to be\nset at genesis. Learn more\n",(0,o.kt)("a",{parentName:"p",href:"https://docs.cosmos.network/v0.46/modules/auth/05_vesting.html#note"},"here"),"."),(0,o.kt)("h2",{id:"conclusion"},"Conclusion"),(0,o.kt)("p",null,"Congratulations! You've learned how to create a local devnet, create a\nvesting account on it, and how to make a vesting account on the Mocha Testnet!"))}d.isMDXComponent=!0}}]);