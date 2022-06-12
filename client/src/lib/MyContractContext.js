import React from "react";
import {_web3Instance, _getLocalProvider} from "./Web3Context";
import truffleContract from "@truffle/contract";
import constractABI from "../contracts/MyContract.json";

const instance = truffleContract(constractABI);
// If _web3Instance is undefined, fallback to local network
if (!_web3Instance) {
  instance.setProvider(_getLocalProvider()?.currentProvider);
} else {
  instance.setProvider(_web3Instance.currentProvider);
}
// Default ganache network id is 5777.
// Replace it with your working network id
instance.setNetwork(parseInt(process.env.NETWORK_ID));

export const MyContract = instance;
export const MyContractContext = React.createContext();

