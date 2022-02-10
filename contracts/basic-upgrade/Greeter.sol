//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

import "hardhat/console.sol";
import "@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol";
import "@openzeppelin/contracts-upgradeable/token/ERC20/ERC20Upgradeable.sol";

contract Greeter is Initializable, ERC20Upgradeable {
    string private greeting;

    function initialize(string memory _greeting, address safeAddress) public initializer {
        console.log("Deploying a Greeter with greeting:", _greeting);
        greeting = _greeting;
        __ERC20_init("GreeterDAO", "SER");
        super._mint(safeAddress, 696969696969696969);
    }


    function greet() public view returns (string memory) {
        return greeting;
    }

    function setGreeting(string memory _greeting) public {
        console.log("Changing greeting from '%s' to '%s'", greeting, _greeting);
        greeting = _greeting;
    }
}
