require("@nomiclabs/hardhat-waffle");

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
 // https://hardhat.org/config/
 module.exports = {
  solidity: "0.8.9",
  networks: {
        hardhat: {},
        fantomtest: {
            chainID: 0xfa2,
            url: "https://rpc.testnet.fantom.network",
            accounts: ['']
        },
        fuji: {
            url: "https://api.avax-test.network/ext/bc/C/rpc",
            accounts: ['']
        },
     
        mumbai: {
            url: "https://rpc-mumbai.maticvigil.com/v1/yourid",
            chainID: 80001,
            accounts: ['']
        },
  },

};
