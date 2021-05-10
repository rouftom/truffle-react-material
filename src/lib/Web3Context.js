import React from "react"
import Web3 from 'web3'

let web3Instance = null

if (typeof window.Web3 !== 'undefined') {
  // We use metamask provider
  web3Instance = new Web3(web3.currentProvider)
} else {
  // We use default We use web3 provider
  // set the provider you want from Web3.providers
  web3Instance = new Web3(new Web3.providers.WebsocketProvider("ws://localhost:7545"))
}


export const _web3Instance = web3Instance
export const Web3Context = React.createContext()
