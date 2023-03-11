import {useEffect, useState} from "react";
import {useWeb3React} from "@web3-react/core";
import {parseUnits} from "@ethersproject/units";
import Icon from "@/components/Icon";
import {cn} from "@/utils";

interface DonateProps {
    setError: any
}

const Donate = ({setError}: DonateProps) => {
    const [isLoading, setIsLoading] = useState(false)
    const [network, setNetwork] = useState<any>()
    const [hash, setHash] = useState<string>()
    const [showInfo, setShowInfo] = useState(false)
    const { active, chainId, account, library, deactivate } = useWeb3React()
    const [amount, setAmount] = useState(1)
    const handleAmountChange = (value: string) => {
        setAmount(parseFloat(value))
    }

    useEffect(() => {
        getNetworkData()
        library.provider.on("networkChanged", (newChainId : number) => {
            getNetworkData(newChainId)
        })
    }, [])

    const getNetworkData = async (networkChainId?: number) => {
        try {
            setIsLoading(true)
            const res = await fetch(`/api/chain/${networkChainId ?? chainId}`);
            const data = await res.json();
            setNetwork(data)
        } catch (err: any) {
            setError(err.message)
        } finally {
            setIsLoading(false)
        }
    }

    const donate = async () => {
        try {
            const parsedAmount = parseUnits(amount.toString())
            const result = await library.provider.request({
                method: "eth_sendTransaction",
                params: [
                    {
                        from: account,
                        to: '0x96A8FdE42e9d74bc4EAd67b927265061D5e00987',
                        gas: '0x76c0',
                        gasPrice: '0x9184e72a000',
                        value: parsedAmount._hex
                    },
                ]
            })
            setHash(result)
            alert("Thank you for donating :)")
        } catch (e: any){
            setError(e.message)
        }
    }



    return (
        <>
            <div className={cn("text-right", showInfo && "hidden")}>
                <button className="p-1 rounded-lg" type="button" onClick={() => setShowInfo(!showInfo)}>
                    <Icon icon="info-circle" />
                </button>
            </div>
            {
                showInfo && <div className="flex p-4 mb-4 text-blue-800 rounded-lg bg-blue-50 dark:bg-gray-800 dark:text-blue-400" role="alert">
                    <div className="flex flex-col">

                        <div className="mt-2 text-sm font-medium">
                            <p className="mb-3">
                                <Icon icon="wallet-alt" className="text-sm" /> <span>{account}</span>
                            </p>
                            <p className="mb-3">
                                <Icon icon="globe" className="text-sm" /> <span>{network?.name}</span>
                            </p>
                            <button type="button" onClick={() => deactivate()} className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-3 py-1 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">
                                Disconnect
                            </button>
                        </div>
                    </div>
                    <button type="button" className="ml-auto -mx-1.5 -my-1.5 bg-blue-50 text-blue-500 rounded-lg focus:ring-2 focus:ring-blue-400 p-1.5 hover:bg-blue-200 inline-flex h-8 w-8 dark:bg-gray-800 dark:text-blue-400 dark:hover:bg-gray-700" onClick={() => setShowInfo(!showInfo)} >
                        <span className="sr-only">Close</span>
                        <Icon icon="x" />
                    </button>
                </div>
            }
            <p className="text-center font-bold text-4xl mt-3 mb-1 dark:text-gray-50">{amount}</p>
            <div className="relative pt-1">
                <input type="range" min={0.001} max={10} step={0.001} value={amount} className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700 focus:outline-none focus:ring-0 focus:shadow-none" onChange={(event) => handleAmountChange(event.target.value)}
                />
            </div>
            <div className="text-center mt-8">
                <button type="button" className="text-gray-900 bg-gray-100 hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-500 mr-2 mb-2" onClick={donate}>
                    Donate with {network?.nativeCurrency.name}
                </button>
            </div>
        </>
    )
}

export default Donate