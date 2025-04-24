import React, { FC } from 'react';
import { ConnectionProvider, WalletProvider } from '@solana/wallet-adapter-react';
import { WalletAdapterNetwork } from '@solana/wallet-adapter-base';
import { UnsafeBurnerWalletAdapter } from '@solana/wallet-adapter-wallets';
import { WalletConnectButton, WalletDisconnectButton,  WalletModalProvider,WalletMultiButton,} from '@solana/wallet-adapter-react-ui';
import {Airdrop} from "./Airdrop";
// import { clusterApiUrl } from '@solana/web3.js';
// import fs from "fs";
// import express from "express";

// Default styles that can be overridden by your app
import '@solana/wallet-adapter-react-ui/styles.css';
import './App.css'

function App() {
    return (
       <ConnectionProvider endpoint={"https://solana-devnet.g.alchemy.com/v2/4f8VRPkcVMMV4LFLZRrBlF35b9u__uwe"}>
<WalletProvider wallets={[]} autoConnect>
    <WalletModalProvider>
        {/* //remeber not to use <WalletConnectButton></WalletConnectButton> */}
        <WalletMultiButton></WalletMultiButton>
        <WalletDisconnectButton></WalletDisconnectButton>
    <div>
        hii there <b>vidyakant thakur </b>
    </div>
    <Airdrop>  </Airdrop>
    </WalletModalProvider>  
</WalletProvider>
       </ConnectionProvider>    
       )
} 

export default App
