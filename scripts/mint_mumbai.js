const hre = require("hardhat");
async function main() {
  const account = "0xB159360D79869D524D87f1947e59445156Dcbb04";
  const OmniChainNFT = await hre.ethers.getContractFactory("OmniChainNFT");
  const omniChainNFT = await OmniChainNFT.attach(
    "0x7616B896086f4E276c68fB457cA67Cb790B050B7"
  );
  await omniChainNFT.mint();
  const balance = await omniChainNFT.balanceOf(account);
  console.log("Mumbai NFT balance: ", balance.toString());
  const owner = await omniChainNFT.ownerOf(1);
  console.log("Token 1 owner: ", owner);
}
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});