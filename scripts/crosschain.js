const hre = require("hardhat");
const { ethers } = require("ethers");
async function main() {
  const OmniChainNFT = await hre.ethers.getContractFactory("OmniChainNFT");
  const omniChainNFT = await OmniChainNFT.attach(
    "0x454e01CA826ac64Df965560C3A6D957B2b9ff602"
  );
  await omniChainNFT.crossChain(
    10009,
    "0x7616B896086f4E276c68fB457cA67Cb790B050B7",
    ethers.BigNumber.from("1"),
    { value: ethers.utils.parseEther("5") }
  );
}
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});