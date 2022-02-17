/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { GovernorAlpha, GovernorAlphaInterface } from "../GovernorAlpha";

const _abi = [
  {
    inputs: [],
    name: "proposalCount",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
];

export class GovernorAlpha__factory {
  static readonly abi = _abi;
  static createInterface(): GovernorAlphaInterface {
    return new utils.Interface(_abi) as GovernorAlphaInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): GovernorAlpha {
    return new Contract(address, _abi, signerOrProvider) as GovernorAlpha;
  }
}
