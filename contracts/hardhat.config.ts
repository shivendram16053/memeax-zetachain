require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config(); // Load env variables

module.exports = {
  solidity: "0.8.24",
  networks: {
    fuji: {
      url: "https://api.avax-test.network/ext/bc/C/rpc",
      accounts: [process.env.PRIVATE_KEY]
    }
  }
};
