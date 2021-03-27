A simple ERC20 Ethereum smart contract.

## Getting Started

You can see this contract in action by downloading [this digital wallet](https://github.com/allanclempe/ether-wallet-flutter), or install [MetaMask extension](https://metamask.io/)

### 1. Secret file

Create a .secret file in the root directory containing your seed phrase (mnemonic). If you don't have one, [generate here](https://iancoleman.io/bip39/), file example:

```
sign endless vast upset century flavor execute wise provide pizza one mad engage fix verb
```

### 2. Install packages

```
$ npm i
$ npm i -g truffle
```

### 3. Run your blockchain

```cmd
$ npm i -g ganache-cli
$ ganache-cli
```

for more info check [https://github.com/trufflesuite/ganache-cli](https://github.com/trufflesuite/ganache-cli)

### 4. Deploy :rocket:

```cmd
$ truffle migrate
```

or specify the network (testnet or mainnet)

```console
# truffle migrate --network ropsten
```

<details>
  <summary>Click here to see how the output should be like</summary>
  
```cmd
$ truffle migrate

Compiling your contracts...
===========================
> Compiling .\contracts\Migrations.sol
> Compiling .\contracts\TrargaryenCoin.sol
> Artifacts written to \ether-wallet-contract\build\contracts
> Compiled successfully using:
   - solc: 0.5.16+commit.9c3226ce.Emscripten.clang



Starting migrations...
======================
> Network name:    'development'
> Network id:      5777
> Block gas limit: 6721975 (0x6691b7)


1_initial_migration.js
======================
Account to load with ETH:  0x8BFF27A0a8672a0c080824D7258Ed18B8887E0BA

   Deploying 'Migrations'
   ----------------------
   > transaction hash:    0x548b75d4c2dbea28b06df02f2cde37ee60a1293672e657e522a951d81627ec2c
   > Blocks: 0            Seconds: 0
   > contract address:    0x15EF8E891d3C7913F99bc049ABc4a84727c65664
   > block number:        1
   > block timestamp:     1616578257
   > account:             0x8BFF27A0a8672a0c080824D7258Ed18B8887E0BA
   > balance:             99.999999999999730248
   > gas used:            269752 (0x41db8)
   > gas price:           0.000000001 gwei
   > value sent:          0 ETH
   > total cost:          0.000000000000269752 ETH


   > Saving migration to chain.
   > Saving artifacts
   -------------------------------------
   > Total cost:     0.000000000000269752 ETH


2_deploy_contract.js
====================
[
  '0x8BFF27A0a8672a0c080824D7258Ed18B8887E0BA',
  '0x069a98954cddc9fB1E80d1b7BF387013490484a8',
  '0xAe4a40D84Acf15D9Dd75732A63f560fd5d5F38B7',
  '0x6f7e8076404Ee47f60Ac4FbfF2d8929eD79E75e0',
  '0x143B9C8c7B794806699b38a3450c87A6DE46FA28',
  '0xDA5f591A17d0bCdE958c99026735b04E6BC0943F',
  '0x986a5C56cceB1178261Da99C0B4AC4BE7202bF6E',
  '0x2F3289431bCe36EF2Bf5E275641A3f4D82A18356',
  '0xA29aDE0ab16bdFe434AC325B8EC1a21C3B74C35c',
  '0xf4fE5a6aC7620FFCbe2D73e54821bcDb18baC6A7'
]

   Deploying 'TargaryenCoin'
   -------------------------
   > transaction hash:    0x72e8613f5f9405fff8d8274904666621ffa7c7b026bafb90eff0710c26465149
   > Blocks: 0            Seconds: 0
   > contract address:    0x437b94177B3cf6D89cDd12e24eB6bF86cD06aCC2
   > block number:        3
   > block timestamp:     1616578259
   > account:             0x8BFF27A0a8672a0c080824D7258Ed18B8887E0BA
   > balance:             99.999999999998860432
   > gas used:            827456 (0xca040)
   > gas price:           0.000000001 gwei
   > value sent:          0 ETH
   > total cost:          0.000000000000827456 ETH


   > Saving migration to chain.
   > Saving artifacts
   -------------------------------------
   > Total cost:     0.000000000000827456 ETH


Summary
=======
> Total deployments:   2
> Final cost:          0.000000000001097208 ETH
```
</details>


### 5. Interact with your contract

If you got this far it's because you have your contract deployed and perhaps wondering how to interact with it. One way is using [metamask](https://metamask.io/), or you can create a custom digital wallet. 

5.1 - Instructions how to use with [flutter ether wallet](https://github.com/allanclempe/ether-wallet-flutter):

1. Change `app_config.dart` your `dev` configuration, IP address, port and contract address (output of step 4 have it, grab it from there)
2. Change `main.dart` to use `dev` configuration.
3. Run! 

After initialized, you must create or import a wallet. The owner of the contract (who deployed the contract) owns all tokens because is defined in the constructor of the contract. To have access to it you have to choose the option to import and add the private key of the account used to deploy the contract. Confusing? Let's do it in steps.

4. Bring up the deployment output again (step 4) and grab the account used to deploy the contract.
```cmd 
1_initial_migration.js
======================
Account to load with ETH:  0x96cb8F8d4d9fEb96efA57648fA1604220817c56E
```
5. Bring up the ganache-cli output and find in what position is the account used to deploy the contract. (usually is the first one, position 0)
6. Find the correspondent private key right below.
7. Back on the App, click on import.
8. Choose private key.
9. Copy private key and save.

You should have 100 ETH and 100000000 TGE coins. 

Enjoy Hacking !

5.2 - Instructions how to use with [metamask](https://metamask.io/):

1. Install metamask extension on your preferable browser. (recommended to carefully save your seed phrase if you are going to use this wallet in the mainnet)
2. Select `localhost 8545` (if you're not using the default port create a custom connection) 
3. Find you private key in ganache console output (check steps 5.1 - 4, 5 and 6 above)
4. Back in metamask, click on the top right-hand corner and `Import account`
5. Past you private key and confirm
6. You should have `Account 2` imported and loaded with ~100 ETH.
7. Click on `Add token` and select custom token
8. Find your contract address in the deployment (output from step 4).
9. Past it in `Token contract address`. Token symbol and precision should be auto loaded from the contract.
10. Next and add token. 

Done! 

### Proxying

If you using emulators poxy might be necessary. [iisexpress-proxy](https://www.npmjs.com/package/iisexpress-proxy) is a lightweight proxy. Even tough the main utility for it is to proxy iis express, you can use to proxy **ganache** port.

cmd: `iisexpress-proxy 8545 to 8546`

## Testing

```console
# truffle test
```

### Buy me a coffee

If you enjoy my work, a small donation would be greatly appreciated.

|                                    BTC                                     |                                     ETH                                      |
| :------------------------------------------------------------------------: | :--------------------------------------------------------------------------: |
| <img src="https://faucet.clempe.dev/images/btc-address.png" width="150" /> | <img src="https://faucet.clempe.dev/images/eth-address.png"  width="150"  /> |

---

dart wallet cryto flutter eth smart contracts - by [Allan Clempe](https://twitter.com/aclempe)
