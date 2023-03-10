import {useEffect, useState} from "react";
import {useWeb3React} from "@web3-react/core";
import {parseUnits} from "@ethersproject/units";

interface DonateProps {
    setError: any
}

const Donate = ({setError}: DonateProps) => {
    const [isLoading, setIsLoading] = useState(false)
    const [network, setNetwork] = useState<any>()
    const [hash, setHash] = useState<string>()
    const { active, chainId, account, library } = useWeb3React()
    const [amount, setAmount] = useState(1)
    const handleAmountChange = (value: string) => {
        setAmount(parseFloat(value))
    }

    useEffect(() => {
        getNetworkData()
    }, [])

    const getNetworkData = async () => {
        try {
            setIsLoading(true)
            const res = await fetch(`/api/chain/${chainId}`);
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
            console.log("error >> ", e)
            setError(e.message)
        }
    }

    return (
        <>
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