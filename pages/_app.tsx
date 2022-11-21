import '../styles/globals.css'
import type { AppProps } from 'next/app'
import {
  EthereumClient,
  modalConnectors,
  walletConnectProvider,
} from "@web3modal/ethereum";

import {Web3Modal} from "@web3modal/react";
import {Chain, chain, configureChains, createClient, WagmiConfig} from "wagmi";

const bnbTestnet: Chain = {
  id: 97,
  name: 'BNB Smart Chain Testnet',
  network: 'binance',
  nativeCurrency: {
    decimals: 18,
    name: 'Binance',
    symbol: 'BNB',
  },
  rpcUrls: {
    default: 'https://data-seed-prebsc-1-s1.binance.org:8545',
  },
  blockExplorers: {
    default: { name: 'BSC Scan', url: 'https://testnet.bscscan.com' },
  },
  testnet: true,
}

const bnbMainnet: Chain = {
  id: 56,
  name: 'BNB Smart Chain Mainnet',
  network: 'binance',
  nativeCurrency: {
    decimals: 18,
    name: 'Binance',
    symbol: 'BNB',
  },
  rpcUrls: {
    default: 'https://bsc-dataseed1.binance.org/',
  },
  blockExplorers: {
    default: { name: 'BSC Scan', url: 'https://bscscan.com' },
  },
  testnet: true,
}

const chains = [bnbTestnet, bnbMainnet];

// Wagmi client
const {provider} = configureChains(chains, [
  walletConnectProvider({projectId: '21484581f3cf5105795d886808d201d9'}),
]);
const wagmiClient = createClient({
  autoConnect: true,
  connectors: modalConnectors({appName: "s.daimus.id", chains}),
  provider,
});

// Web3Modal Ethereum Client
const ethereumClient = new EthereumClient(wagmiClient, chains);

export default function App({ Component, pageProps }: AppProps) {
  return (
      <>
        <WagmiConfig client={wagmiClient}>
          <Component {...pageProps} />
        </WagmiConfig>
        <Web3Modal
            projectId="21484581f3cf5105795d886808d201d9"
            theme="dark"
            accentColor="default"
            ethereumClient={ethereumClient}
        />
      </>
  )
}
