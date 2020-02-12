A simple ERC20 Ethereum smart contract. 

## Getting Started

You can see this contract in action by downloading [this digital wallet](https://github.com/allanclempe/ether-wallet-flutter/releases), or install [MetaMask extension](https://metamask.io/)

### 1. Secret file

Create a .secret file in the root directory containing your seed phrase. If you don't have one, [generate here](https://iancoleman.io/bip39/)

### 2. Launch :rocket:

Running on your local blockchain, e.g. [Ganache](https://github.com/trufflesuite/ganache-cli)

```console
$ truffle migrate
```

or specify the network

```console
# truffle migrate --network ropsten
```

## Testing

```console
# truffle test
```
