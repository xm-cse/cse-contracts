import type { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox-viem";
import { vars } from "hardhat/config";

const config: HardhatUserConfig = {
  solidity: "0.8.28",
  networks: {
    "base-sepolia": {
      url: vars.get("ALCHEMY_RPC_URL"),
      accounts: [vars.get("PRIVATE_KEY")],
    },
  },
  etherscan: {
    apiKey: vars.get("ETHERSCAN_API_KEY"),
  },
};

export default config;
