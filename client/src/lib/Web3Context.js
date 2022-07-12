import React from "react";
import Web3 from 'web3';

const getLocalProvider = () => {
  console.log('No web3 instance injected, using Local web3.');
  return new Web3(
    new Web3
      .providers
      .WebsocketProvider("ws://localhost:7545")
  );
}

const getProvider = async () => {
  try {
    // Wait for loading completion to avoid race conditions with web3 injection timing.
    if (window.ethereum) {
      let provider = new Web3(window.ethereum);
      // Request account access if needed
      // window.ethereum.enable() is deprecated
      // use ethereum.request api instead
      await window.ethereum.request({ method: 'eth_requestAccounts' });
      return provider;
    }
    // Legacy dapp browsers...
    if (window.web3) {
      // Use Mist/MetaMask's provider.
      return  window.web3;
    }
  } catch (e) {
    console.log(e);
    // Fallback to localhost; use dev console port by default...
    return getLocalProvider();
  }
}

export const _web3Instance = await getProvider();
export const _getLocalProvider = getLocalProvider;
export const Web3Context = React.createContext();
