"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[504],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>m});var i=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,i,a=function(e,n){if(null==e)return{};var t,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=i.createContext({}),c=function(e){var n=i.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},u=function(e){var n=c(e.components);return i.createElement(l.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},d=i.forwardRef((function(e,n){var t=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(t),m=a,k=d["".concat(l,".").concat(m)]||d[m]||p[m]||r;return t?i.createElement(k,o(o({ref:n},u),{},{components:t})):i.createElement(k,o({ref:n},u))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=t.length,o=new Array(r);o[0]=d;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var c=2;c<r;c++)o[c]=t[c];return i.createElement.apply(null,o)}return i.createElement.apply(null,t)}d.displayName="MDXCreateElement"},7199:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>p,frontMatter:()=>r,metadata:()=>s,toc:()=>c});var i=t(7462),a=(t(7294),t(3905));const r={description:"Token Distribution example.",sidebar_label:"Simple Token Distribution",sidebar_position:6},o="Simple Token Distribution",s={unversionedId:"gettingstarted/tokens-distribution",id:"gettingstarted/tokens-distribution",title:"Simple Token Distribution",description:"Token Distribution example.",source:"@site/docs/gettingstarted/tokens-distribution.md",sourceDirName:"gettingstarted",slug:"/gettingstarted/tokens-distribution",permalink:"/docs/gettingstarted/tokens-distribution",draft:!1,editUrl:"https://github.com/bloxbean/cardano-client/tree/main/docs/docs/gettingstarted/tokens-distribution.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{description:"Token Distribution example.",sidebar_label:"Simple Token Distribution",sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"Simple Ada Transfer",permalink:"/docs/gettingstarted/simple-transfer"},next:{title:"Multi-sig transfer with Native script",permalink:"/docs/gettingstarted/multisig-quickstart"}},l={},c=[{value:"Select a Network and Provider",id:"select-a-network-and-provider",level:2},{value:"Create a Sender account",id:"create-a-sender-account",level:2},{value:"Create Backend Service",id:"create-backend-service",level:2},{value:"Simple Transfer - Using Composable Functions",id:"simple-transfer---using-composable-functions",level:2},{value:"Composable function ?",id:"composable-function-",level:3},{value:"Define Expected Outputs",id:"define-expected-outputs",level:3},{value:"Define transaction using TxBuilder and out-of-box composable functions",id:"define-transaction-using-txbuilder-and-out-of-box-composable-functions",level:3},{value:"Build and Sign the transaction",id:"build-and-sign-the-transaction",level:3},{value:"Submit the transaction to Cardano network",id:"submit-the-transaction-to-cardano-network",level:3},{value:"Full Source Code",id:"full-source-code",level:3},{value:"Simple Token Distribution - Using High Level Api",id:"simple-token-distribution---using-high-level-api",level:2},{value:"Simple Token Distribution - Using Low Level Api",id:"simple-token-distribution---using-low-level-api",level:2}],u={toc:c};function p(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,i.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"simple-token-distribution"},"Simple Token Distribution"),(0,a.kt)("h1",{id:"overview"},"Overview"),(0,a.kt)("p",null,"In this section, we will go through the steps required to do a simple token distribution from a\nsender account to 5 receiver addresses."),(0,a.kt)("h2",{id:"select-a-network-and-provider"},"Select a Network and Provider"),(0,a.kt)("p",null,"First we need to select a network for our transaction. You can choose one of the available public test network."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Preprod")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Preview"))),(0,a.kt)("p",null,"Similarly, choose a backend provider to interact with Cardano blockchain. You can select either Koios or Blockfrost as\nbackend provider."),(0,a.kt)("p",null,"Please check ",(0,a.kt)("a",{parentName:"p",href:"/docs/gettingstarted/dependencies"},"dependencies")," page to find the required dependency for your selected backend provider."),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"For ",(0,a.kt)("strong",{parentName:"p"},"Blockfrost")," as backend provider, you need to first create an account on ",(0,a.kt)("a",{parentName:"p",href:"https://blockfrost.io"},"blockfrost.io")," and get\na ",(0,a.kt)("inlineCode",{parentName:"p"},"Project Id")," for the selected network."),(0,a.kt)("p",{parentName:"admonition"},"For ",(0,a.kt)("strong",{parentName:"p"},"Koios")," backend provider, you don't need any registration.")),(0,a.kt)("h2",{id:"create-a-sender-account"},"Create a Sender account"),(0,a.kt)("p",null,"We need only one sender account for this example. As we are going to use one of the test\nnetwork, the following code will generate one testnet address."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"Account senderAccount = new Account(Networks.testnet());\nString senderAddress = senderAccount.baseAddress();\nString senderMnemonic = senderAccount.mnemonic();\n")),(0,a.kt)("p",null,"If you already have mnemonic for an existing account, you can create a sender account from the mnemonic. For this example,\nwe just need sender account's mnemonic."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'String senderMnemonic = "<24 words mnemonic>";\nAccount senderAccount = new Account(Networks.testnet(), senderMnemonic);\n')),(0,a.kt)("p",null,"The Account created need to have some Fungible Tokens so we can distribute them to other addresses.\nIn This Example let's assume we have some Charlie3 Tokens already in possession in our Sender Account Base Address.\nUnlike other account-based blockchains, Cardano supports multiple outputs in a single transaction.\nSo let's define a csv file with our receiving addresses and amount of tokens per address."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csv"},"addr_test1qxz3zrldxkkwlawrdx2w8ycsnz578r5nrrj96d7e2na9n32cd7gh928plcchqknd3duaxpl5zu86g5gqkd3npv58vvgs8tgtk0,114.0\naddr_test1q8ggrexl20slswsnlrct7wm4uhl48eu563rkl75sv3453murys96l34r0lvxd5576q7w806fd8qq3swv45hka0uehkls4vxjka,547.2\naddr_test1qyx6htpm9smwvg2w3f4eldtpq3p5ty38perhaafw86gfhgqa4dnr2pglwk0wgejy788uss82tkfxs78qnd0uleds7a9qkadf08,91.2\naddr_test1qxzgdkjhepeytjyls3u2ed2x9cfvd4pm40lwsjgk53hm0n7m9j088cqfhvm934lnlsprhwq2c3ha4hl72cs3ul057p2swdlz5u,15.2\naddr_test1q9hp9mja7fjyh9hy8mkstn6uuxtn98z3fgryy75qh8hpmhp3hdmcfrjy06m5f7ht8mecgegjt8jerm6l8jwdxcvjuxgsl907rj,15.2\n")),(0,a.kt)("h2",{id:"create-backend-service"},"Create Backend Service"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"For Blockfrost :")),(0,a.kt)("p",null,"Use the correct Blockfrost url for the selected network and project id to create an instance of BackendService."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'String bfProjectId = "preprod...";\nBackendService backendService =\n        new BFBackendService(Constants.BLOCKFROST_PREPROD_URL, bfProjectId);\n')),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Note:")," You can find Blockfrost urls for the supported networks in ",(0,a.kt)("inlineCode",{parentName:"p"},"com.bloxbean.cardano.client.backend.blockfrost.common.Constants"),"."),(0,a.kt)("p",null,"or,"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"For Koios :")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"BackendService backendService = new KoiosBackendService(KOIOS_TESTNET_URL);\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Note:")," You can find other Koios urls in ",(0,a.kt)("inlineCode",{parentName:"p"},"com.bloxbean.cardano.client.backend.koios.Constants")),(0,a.kt)("h2",{id:"simple-transfer---using-composable-functions"},"Simple Transfer - Using Composable Functions"),(0,a.kt)("p",null,"Let's start with a brief introduction about composable functions."),(0,a.kt)("h3",{id:"composable-function-"},"Composable function ?"),(0,a.kt)("p",null,"A set of ",(0,a.kt)("inlineCode",{parentName:"p"},"FunctionalInterface")," which can be used to implement composable functions. These functions\ncan be used to build various different types of transactions. The library provides many useful out-of-box implementations of these functions\nto reduce boilerplate code. You can also write your own function and use it with existing functions."),(0,a.kt)("p",null,"The followings are the main FunctionalInterface"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"TxBuilder"),(0,a.kt)("li",{parentName:"ul"},"TxOutputBuilder"),(0,a.kt)("li",{parentName:"ul"},"TxInputBuilder"),(0,a.kt)("li",{parentName:"ul"},"TxSigner")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"TxBuilder :")," This functional interface helps to transform a transaction object. The ",(0,a.kt)("inlineCode",{parentName:"p"},"apply")," method in this interface takes\na ",(0,a.kt)("inlineCode",{parentName:"p"},"TxBuilderContext")," and a ",(0,a.kt)("inlineCode",{parentName:"p"},"Transaction")," object as input parameters. The role of this function is to transform the input transaction\nobject with additional attributes or update existing attributes."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"TxOutputBuilder :")," This functional interface helps to build a ",(0,a.kt)("inlineCode",{parentName:"p"},"TransactionOutput")," object and add that to the transaction output list.\nThe accept method in this interface takes a ",(0,a.kt)("inlineCode",{parentName:"p"},"TxBuilderContext")," and a list of ",(0,a.kt)("inlineCode",{parentName:"p"},"TransactionOutput"),"."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"TxInputBuilder :")," This functional interface is responsible to build inputs from the expected outputs."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"TxSigner :")," This interface is responsible to provide transaction signing capability."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Now we have everything to build and submit our first transfer transaction.")),(0,a.kt)("h3",{id:"define-expected-outputs"},"Define Expected Outputs"),(0,a.kt)("p",null,"First we need to define the expected output. Let's define our TxOutputBuilder to read our csv file and add all accumulate all outputs."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'TxOutputBuilder txOutputBuilder = (txBuilderContext, list) -> {};\nScanner scanner = new Scanner(getFileFromResource("file1.csv"));\nString policyId = "8e51398904a5d3fc129fbf4f1589701de23c7824d5c90fdb9490e15a";\nString assetName = "434841524c4933";\nwhile (scanner.hasNextLine()) {\n    String line = scanner.nextLine();\n    String[] parts = line.split(",");\n    System.out.println(parts[0]);\n    System.out.println(parts[1]);\n\n    Tuple<String, String> policyAssetName = AssetUtil.getPolicyIdAndAssetName(policyId+assetName);\n    Output output = Output.builder()\n    .address(parts[0])\n    .qty((new BigDecimal(parts[1]).multiply(BigDecimal.valueOf(1000000.0))).toBigInteger())\n    .policyId(policyAssetName._1)\n    .assetName(policyAssetName._2).build();\n\n    txOutputBuilder = txOutputBuilder.and(output.outputBuilder());\n}\n')),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"Note:\nWe Multiplied the quantity Value by the amount of decimals this specific token is registered under.\nin this case, for Charlie3 Token it is 6 zeros after the decimal point, Hence, we multiplied the quantity by a million.")),(0,a.kt)("h3",{id:"define-transaction-using-txbuilder-and-out-of-box-composable-functions"},"Define transaction using TxBuilder and out-of-box composable functions"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Line-1")," Create ",(0,a.kt)("inlineCode",{parentName:"p"},"TxBuilder")," from ",(0,a.kt)("inlineCode",{parentName:"p"},"txOutputBuilder"),"."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Line-2,")," Invoke ",(0,a.kt)("inlineCode",{parentName:"p"},"TxOutputBuilder.buildInputs")," with a ",(0,a.kt)("inlineCode",{parentName:"p"},"TxInputBuilder")," function. ",(0,a.kt)("inlineCode",{parentName:"p"},"TxInputBuilder")," function builds required\ninputs based on the expected outputs."),(0,a.kt)("p",null,"You can select an appropriate composable function from ",(0,a.kt)("inlineCode",{parentName:"p"},"InputBuilders")," helper class to get a ",(0,a.kt)("inlineCode",{parentName:"p"},"TxInputBuilder"),". In the below example,\n",(0,a.kt)("inlineCode",{parentName:"p"},"InputBuilders.createFromSender(String sender, String changeAddress)")," out-of-box composable function is used."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Line-3,")," Use ",(0,a.kt)("inlineCode",{parentName:"p"},"FeeCalculators.feeCalculator(senderAddress, 1)")," composable function to calculate fee needed in this transaction."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Line-4,")," Use ",(0,a.kt)("inlineCode",{parentName:"p"},"ChangeOutputAdjustments.adjustChangeOutput(senderAddress, 1)")," composable function to adjust change output in a Transaction to meet min ada requirement."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java",metastring:"showLineNumbers",showLineNumbers:!0},"TxBuilder builder = txOutputBuilder\n                .buildInputs(InputBuilders.createFromSender(senderAddress, senderAddress))\n                .andThen(FeeCalculators.feeCalculator(senderAddress, 1))\n                .andThen(ChangeOutputAdjustments.adjustChangeOutput(senderAddress, 1));\n")),(0,a.kt)("h3",{id:"build-and-sign-the-transaction"},"Build and Sign the transaction"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Line-1 & Line-2,")," Create ",(0,a.kt)("inlineCode",{parentName:"p"},"UtxoSupplier")," & ",(0,a.kt)("inlineCode",{parentName:"p"},"ProtocolParamsSupplier")," from the ",(0,a.kt)("inlineCode",{parentName:"p"},"BackendService")," instance."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Line-4,")," Initialize ",(0,a.kt)("inlineCode",{parentName:"p"},"TxBuilderContext")," using ",(0,a.kt)("inlineCode",{parentName:"p"},"UtxoSupplier")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"ProtocolParamsSupplier"),"."),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"Using ",(0,a.kt)("inlineCode",{parentName:"p"},"TxBuilderContext")," you can customize few behaviors during transaction building."),(0,a.kt)("p",{parentName:"admonition"},(0,a.kt)("strong",{parentName:"p"},"For example:")," Select a different ",(0,a.kt)("inlineCode",{parentName:"p"},"UtxoSelectionStrategy")," implementation")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Line-5,")," Create ",(0,a.kt)("inlineCode",{parentName:"p"},"TxSigner")," function using ",(0,a.kt)("inlineCode",{parentName:"p"},"SignerProviders.signerFrom(Account... signers)")," and use it to build\nand sign the transaction."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java",metastring:"showLineNumbers",showLineNumbers:!0},"UtxoSupplier utxoSupplier = new DefaultUtxoSupplier(backendService.getUtxoService());\nProtocolParamsSupplier protocolParamsSupplier = new DefaultProtocolParamsSupplier(backendService.getEpochService());\n\nTransaction signedTransaction = TxBuilderContext.init(utxoSupplier, protocolParamsSupplier)\n                                    .buildAndSign(txBuilder, signerFrom(senderAccount));\n")),(0,a.kt)("h3",{id:"submit-the-transaction-to-cardano-network"},"Submit the transaction to Cardano network"),(0,a.kt)("p",null,"Now we are ready to submit the transaction to the network. In this example, we are going to submit this transaction through\n",(0,a.kt)("inlineCode",{parentName:"p"},"BackendService"),". Alternatively, you can submit the generated transaction using your own ",(0,a.kt)("inlineCode",{parentName:"p"},"TransactionProcessor")," implementation."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"Result<String> result = backendService.getTransactionService().submitTransaction(signedTransaction.serialize());\n        System.out.println(result);\n")),(0,a.kt)("p",null,"If successful, ",(0,a.kt)("inlineCode",{parentName:"p"},"result.isSuccessful()")," will return true."),(0,a.kt)("h3",{id:"full-source-code"},"Full Source Code"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java",metastring:"showLineNumbers",showLineNumbers:!0},'import com.bloxbean.cardano.client.account.Account;\nimport com.bloxbean.cardano.client.api.UtxoSupplier;\nimport com.bloxbean.cardano.client.api.exception.ApiException;\nimport com.bloxbean.cardano.client.api.model.ProtocolParams;\nimport com.bloxbean.cardano.client.api.model.Result;\nimport com.bloxbean.cardano.client.backend.api.BackendService;\nimport com.bloxbean.cardano.client.backend.api.DefaultUtxoSupplier;\nimport com.bloxbean.cardano.client.backend.api.TransactionService;\nimport com.bloxbean.cardano.client.backend.koios.Constants;\nimport com.bloxbean.cardano.client.backend.koios.KoiosBackendService;\nimport com.bloxbean.cardano.client.backend.model.TransactionContent;\nimport com.bloxbean.cardano.client.common.model.Networks;\nimport com.bloxbean.cardano.client.exception.CborSerializationException;\nimport com.bloxbean.cardano.client.function.*;\nimport com.bloxbean.cardano.client.function.helper.ChangeOutputAdjustments;\nimport com.bloxbean.cardano.client.function.helper.FeeCalculators;\nimport com.bloxbean.cardano.client.function.helper.InputBuilders;\nimport com.bloxbean.cardano.client.transaction.spec.Transaction;\nimport com.bloxbean.cardano.client.util.AssetUtil;\nimport com.bloxbean.cardano.client.util.JsonUtil;\nimport com.bloxbean.cardano.client.util.Tuple;\n\nimport java.io.File;\nimport java.io.FileNotFoundException;\nimport java.math.BigDecimal;\nimport java.net.URISyntaxException;\nimport java.net.URL;\nimport java.util.Scanner;\n\nimport static com.bloxbean.cardano.client.function.helper.SignerProviders.signerFrom;\n\npublic class Main {\n\n    private final BackendService backendService;\n    private final TransactionService transactionService;\n    private final UtxoSupplier utxoSupplier;\n    private final ProtocolParams protocolParams;\n\n    public Main() throws ApiException {\n        backendService = new KoiosBackendService(Constants.KOIOS_MAINNET_URL);\n        transactionService = backendService.getTransactionService();\n        utxoSupplier = new DefaultUtxoSupplier(backendService.getUtxoService());\n        protocolParams = backendService.getEpochService().getProtocolParameters().getValue();\n    }\n\n    public static void main(String[] args) throws CborSerializationException, ApiException, FileNotFoundException, URISyntaxException {\n        Main mai = new Main();\n        mai.transferMultiAssetMultiPayments_whenSingleSender_multipleToken();\n    }\n\n    public void transferMultiAssetMultiPayments_whenSingleSender_multipleToken() throws FileNotFoundException, URISyntaxException, CborSerializationException, ApiException {\n        String senderMnemonic = "mnemonic"; //TODO Seed Phrase\n        Account sender = new Account(Networks.mainnet(), senderMnemonic);\n        String senderAddress = sender.baseAddress();\n        TxOutputBuilder txOutputBuilder = (txBuilderContext, list) -> {};\n\n        //System.out.println(senderAddress);\n\n        Scanner scanner = new Scanner(getFileFromResource("file1.txt"));\n        String policyId = "8e51398904a5d3fc129fbf4f1589701de23c7824d5c90fdb9490e15a";\n        String assetName = "434841524c4933";\n        while (scanner.hasNextLine()) {\n            String line = scanner.nextLine();\n            String[] parts = line.split(",");\n            System.out.println(parts[0]);\n            System.out.println(parts[1]);\n\n            Tuple<String, String> policyAssetName = AssetUtil.getPolicyIdAndAssetName(policyId+assetName);\n            Output output = Output.builder()\n                    .address(parts[0])\n                    .qty((new BigDecimal(parts[1]).multiply(BigDecimal.valueOf(1000000.0))).toBigInteger())\n                    .policyId(policyAssetName._1)\n                    .assetName(policyAssetName._2).build();\n\n            txOutputBuilder = txOutputBuilder.and(output.outputBuilder());\n        }\n\n        TxBuilder builder = txOutputBuilder\n                .buildInputs(InputBuilders.createFromSender(senderAddress, senderAddress))\n                .andThen(FeeCalculators.feeCalculator(senderAddress, 1))\n                .andThen(ChangeOutputAdjustments.adjustChangeOutput(senderAddress, 1));\n\n        Transaction signedTransaction = TxBuilderContext.init(utxoSupplier,protocolParams)\n                .buildAndSign(builder, signerFrom(sender));\n\n        System.out.println(signedTransaction);\n\n        Result<String> result = backendService.getTransactionService().submitTransaction(signedTransaction.serialize());\n        System.out.println(result);\n\n        waitForTransaction(result);\n    }\n\n    public void waitForTransaction(Result<String> result) {\n        try {\n            if (result.isSuccessful()) { //Wait for transaction to be mined\n                int count = 0;\n                while (count < 60) {\n                    Result<TransactionContent> txnResult = transactionService.getTransaction(result.getValue());\n                    if (txnResult.isSuccessful()) {\n                        System.out.println(JsonUtil.getPrettyJson(txnResult.getValue()));\n                        break;\n                    } else {\n                        System.out.println("Waiting for transaction to be mined ....");\n                    }\n\n                    count++;\n                    Thread.sleep(2000);\n                }\n            }\n        } catch (Exception e) {\n            e.printStackTrace();\n        }\n    }\n\n    private File getFileFromResource(String fileName) throws URISyntaxException {\n        ClassLoader classLoader = getClass().getClassLoader();\n        URL resource = classLoader.getResource(fileName);\n        if (resource == null) {\n            throw new IllegalArgumentException("file not found! " + fileName);\n        } else {\n            // failed if files have whitespaces or special characters\n            //return new File(resource.getFile());\n            return new File(resource.toURI());\n        }\n    }\n}\n')),(0,a.kt)("h2",{id:"simple-token-distribution---using-high-level-api"},"Simple Token Distribution - Using High Level Api"),(0,a.kt)("p",null,"//TODO"),(0,a.kt)("h2",{id:"simple-token-distribution---using-low-level-api"},"Simple Token Distribution - Using Low Level Api"),(0,a.kt)("p",null,"//TODO"))}p.isMDXComponent=!0}}]);