import {useWeb3React} from "@web3-react/core";
import {AbstractConnector} from "@web3-react/abstract-connector";
import {CoinbaseWallet, Injected, WalletConnect} from "@/utils/connector";
import {MetamaskIcon} from "@/components/Icon/Metamask";
import {CoinbaseIcon} from "@/components/Icon/Coinbase";
import {WalletConnectIcon} from "@/components/Icon/WalletConnect";

interface ConnectWalletProps {
    setError: any
}

const ConnectWallet = ({setError}: ConnectWalletProps) => {
    const { activate, deactivate } = useWeb3React()
    const connect = (connector: AbstractConnector) => {
        if (connector === Injected){
            // @ts-ignore
            if (window?.ethereum === undefined){
                return window.open("https://metamask.app.link/dapp/s.daimus.id", "_self")
            }
        }
        activate(connector, error => {
            setError(error.message)
        })
    }

    const connectors = [{
        id: 1,
        name: "Metamask",
        icon: <MetamaskIcon />,
        connector: Injected
    }, {
        id: 2,
        name: "Coinbase",
        icon: <CoinbaseIcon />,
        connector: CoinbaseWallet
    }, {
        id: 3,
        name: "Wallet Connect",
        icon: <WalletConnectIcon />,
        connector: WalletConnect
    }]
    return (
        <>
            <div className="flex flex-col">
                {
                    connectors.map(connector => <div className="text-center w-full" key={connector.id}>
                        <button type="button" className="w-full text-gray-900 bg-white hover:bg-gray-100 border border-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-600 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 mr-2 mb-2" onClick={() => connect(connector.connector)}>
                            {connector.icon} {connector.name}
                        </button>
                    </div>)
                }
            </div>
        </>
    )
}

export default ConnectWallet