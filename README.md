A ERC20 Ethereum smart contract. 

## Getting Started

### 1. Install Truffle

```console
$ npm install -g truffle
```
### 2. Secret file
Create a .secret file in the root directory containing your mnemonic. If you don't have one, [generate here](https://iancoleman.io/bip39/)

### 3. Launch :rocket:

Running on your local blockchain, e.g. [Ganache](https://github.com/trufflesuite/ganache-cli)

```console
$ truffle migrate
```
or specify the network
```console
# truffle migrate --network ropsten
```

### 4. Testing

```console
# truffle test
```
