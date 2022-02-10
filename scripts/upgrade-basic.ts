// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// When running the script with `npx hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
import { ethers, upgrades } from "hardhat";

async function main() {
  // We get the contract to deploy
  const GreeterV2 = await ethers.getContractFactory("GreeterV2");
  const instance = await GreeterV2.deploy("Hello, Hardhat!");
  await instance.deployed();

	const upgraded = await upgrades.upgradeProxy(instance.address, GreeterV2);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
