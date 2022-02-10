import { ethers, upgrades } from 'hardhat';
import { expect } from 'chai';

describe('Basic Upgrade', async () => {
	it ('should work before and after upgrade', async () => {
		const Greeter = await ethers.getContractFactory("Greeter");
		let instance = await upgrades.deployProxy(Greeter, ["GM"]);
		// const instance = await Greeter.deploy("GM");

		await instance.deployed();

		expect(await instance.greet()).to.equal("GM");

		// const V2 = await ethers.getContractFactory("GreeterV2");
		// const upgraded = await upgrades.upgradeProxy(instance.address, V2);
		
		// await instance.setGreeting("GM");

		// expect(await instance.greet()).to.equal("GM mothafucka");
	})
})