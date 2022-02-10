// scripts/propose-upgrade.js
import { defender, ethers } from 'hardhat';

async function main() {
	// This should be the upgradeable Greeter address
  const proxyAddress = '0x1EbbeB5A561A460Bd63fB019D5113a98B9eC223d';

  const PoliteGreeter = await ethers.getContractFactory("GreeterV2");
  console.log("Preparing proposal...");
  const proposal = await defender.proposeUpgrade(proxyAddress, PoliteGreeter);
  console.log("Upgrade proposal created at:", proposal.url);
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  })