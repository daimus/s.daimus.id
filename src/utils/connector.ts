import {WalletLinkConnector} from "@web3-react/walletlink-connector";
import {WalletConnectConnector} from "@web3-react/walletconnect-connector";
import {InjectedConnector} from "@web3-react/injected-connector";


export const CoinbaseWallet = new WalletLinkConnector({
    url: `https://mainnet.infura.io/v3/${process.env.INFURA_KEY}`,
    appName: "Web3-react Demo",
});

export const WalletConnect = new WalletConnectConnector({
    infuraId: process.env.NEXT_PUBLIC_INFURA_KEY,
    bridge: "https://bridge.walletconnect.org",
    qrcode: true,
});

export const Injected = new InjectedConnector({});