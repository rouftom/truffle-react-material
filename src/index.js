import React from 'react'
import ReactDOM from 'react-dom'
import {Web3Context, _web3Instance} from "./lib/Web3Context"
import {MyContractContext, MyContract} from "./lib/MyContractContext"
import App from './App'


ReactDOM.render(
  <Web3Context.Provider value={_web3Instance}>
    <MyContractContext.Provider value={MyContract}>
      <App />
    </MyContractContext.Provider>
  </Web3Context.Provider>,
	document.getElementById('root')
)