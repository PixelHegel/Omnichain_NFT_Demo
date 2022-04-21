// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// When running the script with `npx hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.

// Hardhat always runs the compile task when running scripts with its command
// line interface.
//
// If this script is run directly using `node` you may want to call compile
// manually to make sure everything is compiled
// await hre.run('compile');



const hre = require("hardhat");
async function main() {
  const OmniChainNFT = await hre.ethers.getContractFactory("OmniChainNFT");
  const omniChainNFT = await OmniChainNFT.deploy(
    "0x7dcAD72640F835B0FA36EFD3D6d3ec902C7E5acf",
    0,
    100
  );
  await omniChainNFT.deployed();
  console.log(
    "Fantom testnet ----- omniChainNFT deployed to:",
    omniChainNFT.address
  );
}
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});