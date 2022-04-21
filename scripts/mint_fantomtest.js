const hre = require("hardhat");
async function main() {
  const account = "0xB159360D79869D524D87f1947e59445156Dcbb04";
  const OmniChainNFT = await hre.ethers.getContractFactory("OmniChainNFT");
  const omniChainNFT = await OmniChainNFT.attach(
    "0x454e01CA826ac64Df965560C3A6D957B2b9ff602"
  );
  await omniChainNFT.mint();
  const balance = await omniChainNFT.balanceOf(account);
  console.log("Fnatom NFT balance: ", balance.toString());
  const owner = await omniChainNFT.ownerOf(1);
  console.log("Token 1 owner: ", owner);
}
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});