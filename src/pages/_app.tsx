import '@/styles/globals.css'
import {Web3ReactProvider, createWeb3ReactRoot} from '@web3-react/core'
import { Web3Provider } from "@ethersproject/providers";
import type {AppProps} from 'next/app'
import Header from "@/components/Header";
import Footer from "@/components/Footer";

import { WalletLinkConnector } from "@web3-react/walletlink-connector";
import { WalletConnectConnector } from "@web3-react/walletconnect-connector";
import { InjectedConnector } from "@web3-react/injected-connector";

const getLibrary = (provider: any) => {
    return new Web3Provider(provider);
}

export default function App({Component, pageProps}: AppProps) {
    return (
        <>
            <Header/>
            <Web3ReactProvider getLibrary={getLibrary}>
                    <Component {...pageProps} />
            </Web3ReactProvider>
            <Footer/>
        </>
    )
}
