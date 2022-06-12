import React from 'react';
import ReactDOM from 'react-dom/client';
import 'dotenv/config';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Web3Context, _web3Instance} from "./lib/Web3Context";
import {MyContractContext, MyContract} from "./lib/MyContractContext";
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Web3Context.Provider value={_web3Instance}>
    <MyContractContext.Provider value={MyContract}>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </MyContractContext.Provider>
  </Web3Context.Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
