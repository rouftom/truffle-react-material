import React from "react";
import {_web3Instance} from "./Web3Context";
import truffleContract from "@truffle/contract";
import constractABI from "../contracts/MyContract.json";

const instance = truffleContract(constractABI);
instance.setProvider(_web3Instance.currentProvider);
// Default ganache network id is 5777.
// Replace it with your working network id
instance.setNetwork(5777);

export const MyContract = instance;
export const MyContractContext = React.createContext();

