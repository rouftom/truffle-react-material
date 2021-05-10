import React from "react"
import {_web3Instance} from "./Web3Context"
import truffleContract from "@truffle/contract"
import contract from "../../build/contracts/MyContract.json"

const contractInstance = truffleContract(contract)
contractInstance.setProvider(_web3Instance.currentProvider)
// Default ganache network id is 5777. 
// Replace it with your working network id 
contractInstance.setNetwork(5777)

export const MyContract = contractInstance
export const MyContractContext = React.createContext()
