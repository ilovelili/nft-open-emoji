# Open Emoji NFT

Open Emoji NFT hinted by `https://opensea.io/collection/boredapeyachtclub`

## Technology Stack & Tools

- Solidity (Writing Smart Contract)
- Javascript (React & Testing)
- [Web3](https://web3js.readthedocs.io/en/v1.5.2/) (Blockchain Interaction)
- [Truffle](https://www.trufflesuite.com/docs/truffle/overview) (Development Framework)
- [Ganache](https://www.trufflesuite.com/ganache) (For Local Blockchain)
- [Infura.io](https://infura.io/) (For copying the Ethereum mainnet)
- [MetaMask](https://metamask.io/) (Ethereum Wallet)
- [Fleek](https://fleek.co/) (Website Deployment)

## Requirements For Initial Setup

- Install [NodeJS](https://nodejs.org/en/), I recommend using node version 10.16.3 to avoid any potential dependency issues
- Install [Truffle](https://www.trufflesuite.com/docs/truffle/overview), In your terminal, you can check to see if you have truffle by running `truffle --version`. To install truffle run `npm i -g truffle`.
- Install [Ganache](https://www.trufflesuite.com/ganache).
- Install [MetaMask](https://metamask.io/) in your browser.

## Setting Up

### 1. Clone/Download the Repository

### 2. Install Dependencies

```bash
yarn install
```

### 3. Setup .env File

Create a .env file or rename the .env.example file, and update the values. The API & IPFS keys are technically optional for local testing, if you plan to deploy to the testnet or mainnet, you'll need to update those values.

### 4. Start Ganache

### 5. Migrate Smart Contracts

`$ truffle migrate --reset`

### 6. Run Frontend Application

In a separate CMD prompt/terminal run:
`$ yarn start`

### 7. (Optional) Test Smart Contracts

`$ truffle test`

## Preparing for Contract Deployment

- Create or log in to your [Infura.io](https://infura.io/login) account and create a new project, and save your project ID located in your project settings, you'll need this if deploying to Ethereum Mainnet, or Rinkeby Testnet.

- If deploying to Polygon, you may need to setup the network in MetaMask. To do this, open MetaMask, in the top right click on your profile icon -> Settings -> Networks -> Add Network.
  - For **Polygon Mainnet** fill in the following:
    1. **Network Name**: Polygon
    2. **New RPC URL**: `https://rpc-mainnet.maticvigil.com/`
    3. **Chain ID**: 137
    4. **Currency Symbol**: MATIC
    5. **Block Explorer URL**: `https://polygonscan.com/`
  - For the **Polygon Mumbai Testnet** fill in the following:
    1. **Network Name**: Polygon Mumbai
    2. **New RPC URL**: `https://rpc-mumbai.maticvigil.com/`
    3. **Chain ID**: 80001
    4. **Currency Symbol**: MATIC
    5. **Block Explorer URL**: `https://mumbai.polygonscan.com/`

### Funding your MetaMask Wallet

- If deploying to Polygon Mainnet, you will need to fund your MetaMask account with MATIC on the polygon chain, How you decide to transfer/fund is entirely upto you. Keep in mind if you have MATIC currently on the Ethereum Mainnet, you will need to bridge your MATIC over to the polygon chain. You can do this by visiting [https://wallet.polygon.technology/](https://wallet.polygon.technology/), also keep in mind you will have to have ETH in your account to cover gas fees!

- If deploying to Rinkeby testnet, you may use this ETH faucet supplied by chainlink to fund your account: [https://faucets.chain.link/rinkeby](https://faucets.chain.link/rinkeby).

- If deploying to Polygon Mumbai testnet, you may use this MATIC faucet: [https://faucet.polygon.technology/](https://faucet.polygon.technology/)

### 1. Setup your .env file

Create a .env file in the root directory of your project, and fill in the following:

- DEPLOYER_PRIVATE_KEY="YOUR_PRIVATE_KEY"
- INFURA_API_KEY="PROJECT_ID"
- PROJECT_NAME="YOUR_PROJECT_NAME"
- PROJECT_SYMBOL="YOUR_PROJECT_SYMBOL"
- IPFS_IMAGE_METADATA_CID="IPFS_CID"
- IPFS_HIDDEN_IMAGE_METADATA_CID="IPFS_CID"
- NFT_MINT_DATE="Oct 27, 2021 20:00:00"

### 2. Run your migrations

- For Rinkeby testnet: `yarn deploy:sm:rinkeby`
- For Polygon Mainnet: `yarn deploy:sm:matic`

### 3. Deployed smart contract

- Rinkeby: 0xA0478ac71ca62702BaD0C2f15cCB61E546B1eB9F

### 4. Docker deployment

- Docker build: `yarn docker:build`
- Docker run: `yarn docker:run`
