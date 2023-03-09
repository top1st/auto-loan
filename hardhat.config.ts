import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import "@nomiclabs/hardhat-ethers"
import "hardhat-deploy"
import "@nomicfoundation/hardhat-foundry";
import "dotenv/config"

const privateKey = process.env.PRIVATE_KEY
const INFURA_ID = process.env.INFURA_ID

const config: HardhatUserConfig = {
  solidity: {
    compilers: [
      {
        version: "0.8.18",
        settings: {
          optimizer: {
            enabled: true,
            runs: 200
          }
        }
      }
    ]
  },
  networks: {
    mainnet: {
      url: 'https://mainnet.infura.io/v3/' + INFURA_ID,
      accounts: [`${privateKey}`],
      verify: {
        etherscan: {
          apiKey: process.env.ETHERSCAN_API_KEY
        }
      }
    }
  },
};

export default config;
