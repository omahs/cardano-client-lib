"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[738],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>m});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),p=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},l=function(e){var t=p(e.components);return a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=p(n),m=r,k=d["".concat(c,".").concat(m)]||d[m]||u[m]||i;return n?a.createElement(k,o(o({ref:t},l),{},{components:n})):a.createElement(k,o({ref:t},l))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var p=2;p<i;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},7282:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var a=n(7462),r=(n(7294),n(3905));const i={description:"Example :- Multi-signature transfer with native script",sidebar_label:"Multi-sig transfer with Native script",sidebar_position:7},o="Multi-sig Transfer using Native Script",s={unversionedId:"gettingstarted/multisig-quickstart",id:"gettingstarted/multisig-quickstart",title:"Multi-sig Transfer using Native Script",description:"Example :- Multi-signature transfer with native script",source:"@site/docs/gettingstarted/multisig-quickstart.md",sourceDirName:"gettingstarted",slug:"/gettingstarted/multisig-quickstart",permalink:"/docs/gettingstarted/multisig-quickstart",draft:!1,editUrl:"https://github.com/bloxbean/cardano-client/tree/main/docs/docs/gettingstarted/multisig-quickstart.md",tags:[],version:"current",sidebarPosition:7,frontMatter:{description:"Example :- Multi-signature transfer with native script",sidebar_label:"Multi-sig transfer with Native script",sidebar_position:7},sidebar:"tutorialSidebar",previous:{title:"Simple Token Distribution",permalink:"/docs/gettingstarted/tokens-distribution"},next:{title:"Key Apis",permalink:"/docs/gettingstarted/key-apis"}},c={},p=[{value:"Overview",id:"overview",level:2},{value:"What&#39;s Native Script or Multi-Sig Script ?",id:"whats-native-script-or-multi-sig-script-",level:2},{value:"Types",id:"types",level:3},{value:"Simple Transfer from a multi-sig script address",id:"simple-transfer-from-a-multi-sig-script-address",level:2},{value:"Accounts Setup",id:"accounts-setup",level:2},{value:"Create Multi-sig script with 2 regular accounts and 1 payment key pair",id:"create-multi-sig-script-with-2-regular-accounts-and-1-payment-key-pair",level:2},{value:"Create Script Address",id:"create-script-address",level:2},{value:"Topup script address with test Ada",id:"topup-script-address-with-test-ada",level:2},{value:"Create a Backend Service",id:"create-a-backend-service",level:2},{value:"Claim fund from script address and transfer to account1 and account2",id:"claim-fund-from-script-address-and-transfer-to-account1-and-account2",level:2},{value:"Define expected output",id:"define-expected-output",level:3},{value:"Define Transaction",id:"define-transaction",level:3},{value:"Build and Sign",id:"build-and-sign",level:3},{value:"Submit the transaction to Cardano network",id:"submit-the-transaction-to-cardano-network",level:3},{value:"Full Source Code",id:"full-source-code",level:3},{value:"What&#39;s next ?",id:"whats-next-",level:3}],l={toc:p};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"multi-sig-transfer-using-native-script"},"Multi-sig Transfer using Native Script"),(0,r.kt)("h2",{id:"overview"},"Overview"),(0,r.kt)("p",null,"In this guide, we will go through an example of multi-sig transaction using native script. The example will demonstrate the\nsteps required to create a multi-sig script and claim fund from the script address."),(0,r.kt)("p",null,"Let's go through some theory first. Click ",(0,r.kt)("a",{parentName:"p",href:"#simple-transfer-from-a-multi-sig-script-address"},"here")," to directly jump to the example section."),(0,r.kt)("h2",{id:"whats-native-script-or-multi-sig-script-"},"What's Native Script or Multi-Sig Script ?"),(0,r.kt)("p",null,"A native script is a set of rules that defines how you can spend a UTxO. Native scripts are used\nto make script addresses where the authorisation condition for a transaction to use that address is that the transaction has\nsignatures from multiple cryptographic keys. Examples include M of N schemes, where a transaction can be authorized if at\nleast M distinct keys, from a set of N keys, sign the transaction. "),(0,r.kt)("p",null,"Some key points about native scripts in Cardano"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"A native script can be encoded as a json text file"),(0,r.kt)("li",{parentName:"ul"},"It uses a simple language for expressing witness requirements for spending an output, minting or burning transaction"),(0,r.kt)("li",{parentName:"ul"},"Keys are identified in the script by hash of public key"),(0,r.kt)("li",{parentName:"ul"},"It also provides support for time-locking, so the script is valid for a specific time range")),(0,r.kt)("p",null,"The simplest native script requires just one key"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example:")," "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'{\n  "type": "sig",\n  "keyHash": "e09d36c79dec9bd1b3d9e152247701cd0bb860b5ebfd1de8abb6735a"\n}\n')),(0,r.kt)("h3",{id:"types"},"Types"),(0,r.kt)("p",null,"There are six supported constructors in a multi-sig script. The following section briefly explains about each constructor and\ncorresponding ",(0,r.kt)("strong",{parentName:"p"},"type")," in json file."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"RequireSignature"),": has the hash of a verification key.",(0,r.kt)("br",{parentName:"p"}),"\n","This expression evaluates to true if the transaction is signed by a particular key, identified by its verification key hash.",(0,r.kt)("br",{parentName:"p"}),"\n","",(0,r.kt)("strong",{parentName:"p"},"Type:"),' "sig"')),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"RequireAllOf:")," has a list of multisig sub-expressions.",(0,r.kt)("br",{parentName:"p"}),"\n","This expression evaluates to true if (and only if) all the sub-expressions evaluate to true.",(0,r.kt)("br",{parentName:"p"}),"\n","",(0,r.kt)("strong",{parentName:"p"},"Type:"),' "all"')),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"RequireAnyOf:")," has a list of multisig sub-expressions.",(0,r.kt)("br",{parentName:"p"}),"\n","This expression evaluates to true if (and only if) any the sub-expressions evaluate to true.",(0,r.kt)("br",{parentName:"p"}),"\n","",(0,r.kt)("strong",{parentName:"p"},"Type:"),' "any"')),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"RequireMOf:")," has a number M and a list of multisig sub-expressions.",(0,r.kt)("br",{parentName:"p"}),"\n","This expression evaluates to true if (and only if) at least M of the sub-expressions evaluate to true.",(0,r.kt)("br",{parentName:"p"}),"\n","",(0,r.kt)("strong",{parentName:"p"},"Type:"),' "atLeast"')),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"RequireTimeBefore:")," has a slot number X.",(0,r.kt)("br",{parentName:"p"}),"\n","This condition guarantees that the actual slot number in which the transaction is included is (strictly) less than slot number X.",(0,r.kt)("br",{parentName:"p"}),"\n","",(0,r.kt)("strong",{parentName:"p"},"Type:"),' "before"')),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"RequireTimeAfter:")," has a slot number X.",(0,r.kt)("br",{parentName:"p"}),"\n","This condition guarantees that the actual slot number in which the transaction is included is greater than or equal to slot number X.",(0,r.kt)("br",{parentName:"p"}),"\n","",(0,r.kt)("strong",{parentName:"p"},"Type:"),' "after"'))),(0,r.kt)("p",null,"You can find more info about native script ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/input-output-hk/cardano-node/blob/master/doc/reference/simple-scripts.md"},"here")),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("strong",{parentName:"p"},"Cardano Client Lib")," provides apis and helpers to create and manage native scripts in Java.")),(0,r.kt)("h2",{id:"simple-transfer-from-a-multi-sig-script-address"},"Simple Transfer from a multi-sig script address"),(0,r.kt)("p",null,"In this example we are going to simulate a joint account use case using a multi-sig script. So a muti-sig account between three parties\nwhich specifies that at least any two members need to sign to spend fund from the account."),(0,r.kt)("p",null,"In next few sections, we are going to "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Create a multi-sig script with three key hashes (2 regular accounts, 1 payment key pair(skey & vkey))"),(0,r.kt)("li",{parentName:"ul"},"Create script address for the multi-sig script"),(0,r.kt)("li",{parentName:"ul"},"Top up multi-sig address with some fund"),(0,r.kt)("li",{parentName:"ul"},"Claim fund from the multi-sig address and distribute to two regular accounts")),(0,r.kt)("h2",{id:"accounts-setup"},"Accounts Setup"),(0,r.kt)("p",null,"We will use 2 regular accounts and 1 payment key pair (Ed25519 keys) for our example. "),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"The payment key pair is not mandatory, but it is included to demonstrate the transaction signing capability using ",(0,r.kt)("inlineCode",{parentName:"p"},"SecretKey"),".")),(0,r.kt)("p",null,"To spend fund from our multi-sig script address, we need to sign the transaction with at least 2 keys. Any of the below should work for our use case"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Sign with 2 regular accounts"),(0,r.kt)("li",{parentName:"ul"},"Sign with 1 regular account and payment secret key"),(0,r.kt)("li",{parentName:"ul"},"Sign with 2 regular account and payment secret key")),(0,r.kt)("p",null,"To create two new regular accounts, check ",(0,r.kt)("a",{parentName:"p",href:"/docs/gettingstarted/account-setup#create-sender-and-receiver-accounts"},"here"),"."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Create ",(0,r.kt)("strong",{parentName:"li"},"account-1")," and ",(0,r.kt)("strong",{parentName:"li"},"account-2")," from existing mnemonics")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'String account1Mnemonic = "<24 words mnemonic>";\nAccount account1 = new Account(Networks.testnet(), account1Mnemonic);\n\nString account2Mnemonic = "<24 words mnemonic>";\nAccount account2 = new Account(Networks.testnet(), account2Mnemonic);\n')),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"Create a new payment key pair (Ed25519 secret key / verification key)")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"Keys keys = KeyGenUtil.generateKey();\nVerificationKey verificationKey = keys.getVkey();\nSecretKey secretKey = keys.getSkey();\nString paymentSigningKeyCborHex = secretKey.getCborHex();\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Alternatively,")," you can create a ",(0,r.kt)("inlineCode",{parentName:"p"},"SecretKey")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"VerificationKey")," from an existing payment secret key. "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'String paymentSigningKeyCborHex = "58205d9ccc4202bde1785708c10f8b13231d5a57078c326d0e0ff172191f975a983e";\nSecretKey secretKey = new SecretKey(paymentSigningKeyCborHex);\nVerificationKey verificationKey = KeyGenUtil.getPublicKeyFromPrivateKey(secretKey);\n')),(0,r.kt)("h2",{id:"create-multi-sig-script-with-2-regular-accounts-and-1-payment-key-pair"},"Create Multi-sig script with 2 regular accounts and 1 payment key pair"),(0,r.kt)("p",null,'We are going to create a multi-sig script with "',(0,r.kt)("strong",{parentName:"p"},"RequireMOf"),'" constructor or "',(0,r.kt)("strong",{parentName:"p"},"atLeast"),'" type.',(0,r.kt)("br",{parentName:"p"}),"\n","For our example, we first need to create verification keys for account1 and account2 using their public key. These verification\nkeys, including the one from payment key pair, are then used to create corresponding ",(0,r.kt)("inlineCode",{parentName:"p"},"ScriptPubKey")," (sig type native script) instances. "),(0,r.kt)("p",null,"Finally, all three ",(0,r.kt)("inlineCode",{parentName:"p"},"ScriptPubKey")," instances can be composed to build a ",(0,r.kt)("inlineCode",{parentName:"p"},"ScriptAtLeast")," instance."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Create ",(0,r.kt)("inlineCode",{parentName:"li"},"VerificationKey")," instances using public keys of account1 and account2. Use verification keys to create ",(0,r.kt)("inlineCode",{parentName:"li"},"ScriptPubKey")," instances.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"VerificationKey account1Vk = VerificationKey.create(account1.publicKeyBytes());\nVerificationKey account2Vk = VerificationKey.create(account2.publicKeyBytes());\n\nScriptPubkey scriptPubkey1 = ScriptPubkey.create(account1Vk);\nScriptPubkey scriptPubkey2 = ScriptPubkey.create(account2Vk);\n")),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"Use ",(0,r.kt)("inlineCode",{parentName:"li"},"VerificationKey")," of payment key pair (3rd key) to create the third ",(0,r.kt)("inlineCode",{parentName:"li"},"ScriptPubKey"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"ScriptPubkey scriptPubkey3 = ScriptPubkey.create(verificationKey);\n")),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},"Now we can use the above ",(0,r.kt)("inlineCode",{parentName:"li"},"ScriptPubKey"),' instances to create a multi-sig "',(0,r.kt)("strong",{parentName:"li"},"atLeast"),'" instance')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"ScriptAtLeast scriptAtLeast = new ScriptAtLeast(2)\n                .addScript(scriptPubkey1)\n                .addScript(scriptPubkey2)\n                .addScript(scriptPubkey3);\n")),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"If you convert ",(0,r.kt)("inlineCode",{parentName:"p"},"scriptAtLeast")," object to json, you will see something similar"),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "type" : "atLeast",\n  "required" : 2,\n  "scripts" : [ {\n    "type" : "sig",\n    "keyHash" : "0d30c6d716fd6c48ab546f0b66fd5faaa3a2f0ccecf0a72ea8c04a30"\n  }, {\n    "type" : "sig",\n    "keyHash" : "1737dd414cf68676312db8af317fc89167292302b97d65a2d1def5a2"\n  }, {\n    "type" : "sig",\n    "keyHash" : "cdba7678210358a58160183551f23589fb68ca0f71cd74ce776257fe"\n  } ]\n}\n'))),(0,r.kt)("h2",{id:"create-script-address"},"Create Script Address"),(0,r.kt)("p",null,"Now let's use ",(0,r.kt)("inlineCode",{parentName:"p"},"AddressService")," to generate a script address from our muti-sig native script.  "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},"String scriptAddress = AddressService.getInstance().getEntAddress(scriptAtLeast, Networks.testnet()).toBech32();\n")),(0,r.kt)("h2",{id:"topup-script-address-with-test-ada"},"Topup script address with test Ada"),(0,r.kt)("p",null,"Based on your selected network (",(0,r.kt)("strong",{parentName:"p"},"preprod")," / ",(0,r.kt)("strong",{parentName:"p"},"preview"),"), get some test Ada from the below faucet. You need to provide ",(0,r.kt)("inlineCode",{parentName:"p"},"scriptAddress"),"\ngenerated in the previous section to get some test Ada."),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://docs.cardano.org/cardano-testnet/tools/faucet"},"https://docs.cardano.org/cardano-testnet/tools/faucet")),(0,r.kt)("h2",{id:"create-a-backend-service"},"Create a Backend Service"),(0,r.kt)("p",null,"Please check ",(0,r.kt)("a",{parentName:"p",href:"account-setup#create-backend-service"},"here")," to create a ",(0,r.kt)("inlineCode",{parentName:"p"},"BackendService")," instance."),(0,r.kt)("h2",{id:"claim-fund-from-script-address-and-transfer-to-account1-and-account2"},"Claim fund from script address and transfer to account1 and account2"),(0,r.kt)("p",null,"Now we are ready to claim fund from the script address. "),(0,r.kt)("h3",{id:"define-expected-output"},"Define expected output"),(0,r.kt)("p",null,"Let's say we want to claim total ",(0,r.kt)("strong",{parentName:"p"},"50 Ada")," from the script address and transfer ",(0,r.kt)("strong",{parentName:"p"},"25 Ada")," to account1 and ",(0,r.kt)("strong",{parentName:"p"},"25 Ada")," to account2."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"String address1 = account1.baseAddress();\nOutput output1 = Output.builder()\n        .address(address1)\n        .assetName(LOVELACE)\n        .qty(adaToLovelace(25))\n        .build();\n\nString address2 = account2.baseAddress();\nOutput output2 = Output.builder()\n        .address(address2)\n        .assetName(LOVELACE)\n        .qty(adaToLovelace(25))\n        .build();      \n")),(0,r.kt)("h3",{id:"define-transaction"},"Define Transaction"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Line-1"),", ",(0,r.kt)("strong",{parentName:"p"},"Line-2")," Create ",(0,r.kt)("inlineCode",{parentName:"p"},"TxOutputBuilder")," from ",(0,r.kt)("inlineCode",{parentName:"p"},"output1")," and compose it with another ",(0,r.kt)("inlineCode",{parentName:"p"},"TxOutputBuilder"),"\ngenerated from ",(0,r.kt)("inlineCode",{parentName:"p"},"output2"),"."),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("strong",{parentName:"p"},"Note:")," Check out various helper methods in ",(0,r.kt)("inlineCode",{parentName:"p"},"com.bloxbean.cardano.client.function.helper.OutputBuilders")," to create ",(0,r.kt)("inlineCode",{parentName:"p"},"TxOutputBuilder"),".")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Line-3,")," Invoke ",(0,r.kt)("inlineCode",{parentName:"p"},"TxOutputBuilder.buildInputs")," with a ",(0,r.kt)("inlineCode",{parentName:"p"},"TxInputBuilder")," function. ",(0,r.kt)("inlineCode",{parentName:"p"},"TxInputBuilder")," function builds required\ninputs based on the expected outputs."),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"As we are claiming fund from script address, both ",(0,r.kt)("strong",{parentName:"p"},"sender address")," and ",(0,r.kt)("strong",{parentName:"p"},"change address")," are set to ",(0,r.kt)("strong",{parentName:"p"},"scriptAddress"),"\nin ",(0,r.kt)("inlineCode",{parentName:"p"},"TxInputBuilder createFromSender")," method call.")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Line-5"),", Add ",(0,r.kt)("inlineCode",{parentName:"p"},"scriptAtLeast")," multi-sig script to transaction's witnessset."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Line-7,")," Use ",(0,r.kt)("inlineCode",{parentName:"p"},"BalanceTxBuilders.balanceTx")," composable function to balance the unbalanced transaction.\nIt handles the followings to balance a transaction"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Fee calculation"),(0,r.kt)("li",{parentName:"ul"},"Adjust the outputs (if required)")),(0,r.kt)("p",null,"The first parameter is change address which is set to ",(0,r.kt)("inlineCode",{parentName:"p"},"scriptAddress")," as the fee is deducted from scriptAddress."),(0,r.kt)("p",null,"The second parameter is \"no of signatures'. This is set to 2 as we have two signers for this transaction. This info is required\nto calculate correct fee as fee calculation depends on transaction size."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java",metastring:"showLineNumbers",showLineNumbers:!0},"TxBuilder txBuilder = output1.outputBuilder()\n                .and(output2.outputBuilder())\n                .buildInputs(createFromSender(scriptAddress, scriptAddress))\n                .andThen((context, txn) -> {\n                    txn.getWitnessSet().getNativeScripts().add(scriptAtLeast);\n                })\n                .andThen(balanceTx(scriptAddress, 2));\n")),(0,r.kt)("h3",{id:"build-and-sign"},"Build and Sign"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Line-1 & Line-2,")," Create ",(0,r.kt)("inlineCode",{parentName:"p"},"UtxoSupplier")," & ",(0,r.kt)("inlineCode",{parentName:"p"},"ProtocolParamsSupplier")," from the ",(0,r.kt)("inlineCode",{parentName:"p"},"BackendService")," instance."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Line-4 & Line-5,")," Create ",(0,r.kt)("inlineCode",{parentName:"p"},"TxSigner")," function by composing ",(0,r.kt)("inlineCode",{parentName:"p"},"SignerProviders.signerFrom(Account... signers)")," &\n",(0,r.kt)("inlineCode",{parentName:"p"},"SignerProviders.signerFrom(SecretKey sk)"),". Then use ",(0,r.kt)("inlineCode",{parentName:"p"},"TxSigner")," to sign the transaction.\nIn this case we are signing the transaction with ",(0,r.kt)("inlineCode",{parentName:"p"},"account1")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"secretkey")," (third key) as we need at least 2 signatures\nas per the rule defined in the multi-sig script."),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Alternatively, you can also sign with account1 and account2.")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Line-6,")," Initialize ",(0,r.kt)("inlineCode",{parentName:"p"},"TxBuilderContext")," using ",(0,r.kt)("inlineCode",{parentName:"p"},"UtxoSupplier")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"ProtocolParamsSupplier"),"."),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Using ",(0,r.kt)("inlineCode",{parentName:"p"},"TxBuilderContext")," you can customize few behaviors during transaction building."),(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("strong",{parentName:"p"},"For example:")," Select a different ",(0,r.kt)("inlineCode",{parentName:"p"},"UtxoSelectionStrategy")," implementation")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java",metastring:"showLineNumbers",showLineNumbers:!0},"UtxoSupplier utxoSupplier = new DefaultUtxoSupplier(backendService.getUtxoService());\nProtocolParamsSupplier protocolParamsSupplier = new DefaultProtocolParamsSupplier(backendService.getEpochService());\n\nTxSigner signers = signerFrom(account1)\n                .andThen(signerFrom(secretKey)); //3rd sk/vk pair\nTransaction signedTransaction = TxBuilderContext.init(utxoSupplier, protocolParamsSupplier)\n                .buildAndSign(txBuilder, signers);\n\n")),(0,r.kt)("h3",{id:"submit-the-transaction-to-cardano-network"},"Submit the transaction to Cardano network"),(0,r.kt)("p",null,"Now we are ready to submit the transaction to the network. In this example, we are going to submit this transaction through\n",(0,r.kt)("inlineCode",{parentName:"p"},"BackendService"),". Alternatively, you can submit the generated transaction using your own ",(0,r.kt)("inlineCode",{parentName:"p"},"TransactionProcessor")," implementation."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"Result<String> result = backendService.getTransactionService().submitTransaction(signedTransaction.serialize());\nSystem.out.println(result);\n")),(0,r.kt)("p",null,"If successful, ",(0,r.kt)("inlineCode",{parentName:"p"},"result.isSuccessful()")," will return true.  "),(0,r.kt)("p",null,"Now copy the transaction id from the output and then go to a\nCardano explorer, ",(0,r.kt)("a",{parentName:"p",href:"https://cardanoscan.io"},"Cardanoscan")," or ",(0,r.kt)("a",{parentName:"p",href:"https://cexplorer.io"},"Cardano Explorer"),", to check the transaction\ndetails. You may need to wait for few secs to a min depending on the blockchain load."),(0,r.kt)("h3",{id:"full-source-code"},"Full Source Code"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java",metastring:"showLineNumbers",showLineNumbers:!0},'import com.bloxbean.cardano.client.account.Account;\nimport com.bloxbean.cardano.client.address.AddressService;\nimport com.bloxbean.cardano.client.api.ProtocolParamsSupplier;\nimport com.bloxbean.cardano.client.api.UtxoSupplier;\nimport com.bloxbean.cardano.client.api.model.Result;\nimport com.bloxbean.cardano.client.backend.api.BackendService;\nimport com.bloxbean.cardano.client.backend.api.DefaultProtocolParamsSupplier;\nimport com.bloxbean.cardano.client.backend.api.DefaultUtxoSupplier;\nimport com.bloxbean.cardano.client.backend.blockfrost.common.Constants;\nimport com.bloxbean.cardano.client.backend.blockfrost.service.BFBackendService;\nimport com.bloxbean.cardano.client.common.model.Networks;\nimport com.bloxbean.cardano.client.crypto.KeyGenUtil;\nimport com.bloxbean.cardano.client.crypto.SecretKey;\nimport com.bloxbean.cardano.client.crypto.VerificationKey;\nimport com.bloxbean.cardano.client.function.Output;\nimport com.bloxbean.cardano.client.function.TxBuilder;\nimport com.bloxbean.cardano.client.function.TxBuilderContext;\nimport com.bloxbean.cardano.client.function.TxSigner;\nimport com.bloxbean.cardano.client.transaction.spec.Transaction;\nimport com.bloxbean.cardano.client.transaction.spec.script.ScriptAtLeast;\nimport com.bloxbean.cardano.client.transaction.spec.script.ScriptPubkey;\n\nimport static com.bloxbean.cardano.client.common.ADAConversionUtil.adaToLovelace;\nimport static com.bloxbean.cardano.client.common.CardanoConstants.LOVELACE;\nimport static com.bloxbean.cardano.client.function.helper.BalanceTxBuilders.balanceTx;\nimport static com.bloxbean.cardano.client.function.helper.InputBuilders.createFromSender;\nimport static com.bloxbean.cardano.client.function.helper.SignerProviders.signerFrom;\n\npublic class MultiSigTransfer {\n\n    public void transfer() throws Exception {\n        //First account\n        String account1Mnemonic = "turkey elder dad veteran they lumber feature garment race answer file erase riot resist sting process law deputy turtle foil legal calm exist civil";\n        Account account1 = new Account(Networks.testnet(), account1Mnemonic);\n\n        //Second account\n        String account2Mnemonic = "report crowd trophy rough twin column access include evolve awkward world random bounce pave select rocket vote junk farm group main boat tissue mad";\n        Account account2 = new Account(Networks.testnet(), account2Mnemonic);\n\n        //Third account payment key\n        String paymentSigningKeyCborHex = "58205d9ccc4202bde1785708c10f8b13231d5a57078c326d0e0ff172191f975a983e";\n        SecretKey secretKey = new SecretKey(paymentSigningKeyCborHex);\n        VerificationKey verificationKey = KeyGenUtil.getPublicKeyFromPrivateKey(secretKey);\n\n        //Derive verification key for account1 and account2\n        VerificationKey account1Vk = VerificationKey.create(account1.publicKeyBytes());\n        VerificationKey account2Vk = VerificationKey.create(account2.publicKeyBytes());\n\n        //Create native script with type=sig for each verification key\n        ScriptPubkey scriptPubkey1 = ScriptPubkey.create(account1Vk);\n        ScriptPubkey scriptPubkey2 = ScriptPubkey.create(account2Vk);\n        ScriptPubkey scriptPubkey3 = ScriptPubkey.create(verificationKey);\n\n        //Create multi-sig script with type "atLeast"\n        ScriptAtLeast scriptAtLeast = new ScriptAtLeast(2)\n                .addScript(scriptPubkey1)\n                .addScript(scriptPubkey2)\n                .addScript(scriptPubkey3);\n\n        //addr_test1wr6fvn0y3rumu30ch3lrggss4vmgsr65cxly2t6dulvwamq3y98et\n        String scriptAddress = AddressService.getInstance().getEntAddress(scriptAtLeast, Networks.testnet()).toBech32();\n\n        // For Blockfrost\n        String bf_projectId = "preprod...";\n        BackendService backendService = new BFBackendService(Constants.BLOCKFROST_PREPROD_URL, bf_projectId);\n        // For Koios\n        //BackendService backendService = new KoiosBackendService(KOIOS_TESTNET_URL);\n\n        //Define outputs\n        String address1 = account1.baseAddress();\n        Output output1 = Output.builder()\n                .address(address1)\n                .assetName(LOVELACE)\n                .qty(adaToLovelace(25))\n                .build();\n\n        String address2 = account2.baseAddress();\n        Output output2 = Output.builder()\n                .address(address2)\n                .assetName(LOVELACE)\n                .qty(adaToLovelace(25))\n                .build();\n\n        TxBuilder txBuilder = output1.outputBuilder()\n                .and(output2.outputBuilder())\n                .buildInputs(createFromSender(scriptAddress, scriptAddress))\n                .andThen((context, txn) -> {\n                    txn.getWitnessSet().getNativeScripts().add(scriptAtLeast);\n                })\n                .andThen(balanceTx(scriptAddress, 2));\n\n\n        UtxoSupplier utxoSupplier = new DefaultUtxoSupplier(backendService.getUtxoService());\n        ProtocolParamsSupplier protocolParamsSupplier = new DefaultProtocolParamsSupplier(backendService.getEpochService());\n\n        TxSigner signers = signerFrom(account1)\n                .andThen(signerFrom(secretKey)); //3rd sk/vk pair\n        Transaction signedTransaction = TxBuilderContext.init(utxoSupplier, protocolParamsSupplier)\n                .buildAndSign(txBuilder, signers);\n\n        Result<String> result = backendService.getTransactionService().submitTransaction(signedTransaction.serialize());\n        System.out.println(result);\n\n    }\n\n    public static void main(String[] args) throws Exception {\n        new MultiSigTransfer().transfer();\n    }\n}\n\n')),(0,r.kt)("h3",{id:"whats-next-"},"What's next ?"),(0,r.kt)("p",null,"Update the multi-sig script to support time-lock. For example, evaluate to true if minimum 2 signatures and slot number is after X."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Hint:")," Use ",(0,r.kt)("strong",{parentName:"p"},"RequireTimeAfter")," with ",(0,r.kt)("strong",{parentName:"p"},"RequireMOf")," to create multi-sig script."))}u.isMDXComponent=!0}}]);