import { useWeb3Modal } from "@web3modal/react";
import {useAccount, useDisconnect, useNetwork, usePrepareSendTransaction, useProvider, useSendTransaction} from 'wagmi'
import {useState} from "react";
import {BigNumber} from "ethers";
import {parseUnits} from "ethers/lib/utils";

const DonationModal = (props: { show: boolean; toggleModal: any; }) => {
    const { isOpen, open, close } = useWeb3Modal();
    const { address, connector, isConnecting, isConnected, isDisconnected } = useAccount()
    const { chain, chains } = useNetwork()
    const { disconnect } = useDisconnect()
    const [amount, setAmount] = useState(1)
    const { config } = usePrepareSendTransaction({
        request: { to: '0x96A8FdE42e9d74bc4EAd67b927265061D5e00987', value: BigNumber.from('10000000000000000') },
    })
    const { data, isLoading, isSuccess, sendTransaction } = useSendTransaction(config)

    const handleAmountChange = (value: string) => {
        setAmount(parseFloat(value))
    }
    return (
        <>
            <div className={`relative z-50 ${!props.show && 'hidden'}`} aria-labelledby="modal-title" role="dialog" aria-modal="true">
                <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"/>

                <div className="fixed inset-0 z-50 overflow-y-auto">
                    <div className="flex min-h-full items-center justify-center p-4 text-center sm:items-center sm:p-0">
                        <div
                            className="relative transform overflow-hidden rounded-lg bg-white dark:bg-gray-800 text-left shadow-xl transition-all w-full max-w-2xl mx-4 sm:mx-8 sm:max-w-lg z-50">
                            <div className="bg-white px-4 pt-5 pb-4 sm:p-4 sm:pb-2 dark:bg-gray-800">
                                <div className="relative">
                                    <button type="button" onClick={props.toggleModal}
                                            className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"
                                            data-modal-toggle="crypto-modal">
                                        <svg aria-hidden="true" className="w-5 h-5" fill="currentColor"
                                             viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                            <path fillRule="evenodd"
                                                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                                  clipRule="evenodd"/>
                                        </svg>
                                        <span className="sr-only">Close modal</span>
                                    </button>
                                    <div className="py-4 px-6 rounded-t">
                                        <h3 className="text-base font-semibold text-gray-900 lg:text-xl dark:text-white">
                                            {
                                                !isConnected ? <span>Connect to Wallet</span> : <>
                                                    <span>Connected with {connector?.name}</span>
                                                    <button type="button" onClick={() => disconnect()}>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" className="cursor-pointer ml-2 fill-red-500 dark:fill-red-200"><path d="m2 12 5 4v-3h9v-2H7V8z"/><path d="M13.001 2.999a8.938 8.938 0 0 0-6.364 2.637L8.051 7.05c1.322-1.322 3.08-2.051 4.95-2.051s3.628.729 4.95 2.051 2.051 3.08 2.051 4.95-.729 3.628-2.051 4.95-3.08 2.051-4.95 2.051-3.628-.729-4.95-2.051l-1.414 1.414c1.699 1.7 3.959 2.637 6.364 2.637s4.665-.937 6.364-2.637c1.7-1.699 2.637-3.959 2.637-6.364s-.937-4.665-2.637-6.364a8.938 8.938 0 0 0-6.364-2.637z"/></svg>
                                                    </button>
                                                </>
                                            }
                                        </h3>
                                    </div>
                                    <div className="px-2 h-96">
                                        {
                                            isConnected && <>
                                            <div className="w-full h-full flex justify-start flex-col">
                                                <p className="text-center dark:text-gray-50">{ chain?.name }</p>
                                                <div className="w-full flex justify-center mt-2">
                                                    <img className="block text-center w-12 h-12" src="https://cryptoicons.org/api/color/bnb/50" alt="Crypto currency icon"/>
                                                </div>
                                                <p className="text-center font-bold text-4xl mt-3 mb-1 dark:text-gray-50">{amount} { chain?.nativeCurrency?.symbol }</p>
                                                <div className="">
                                                    <p className="text-center text-xs text-gray-400 dark:text-gray-200 truncate">{ address } </p>
                                                </div>
                                                <div className="relative pt-1">
                                                    <input type="range" min={0.01} max={10} step={0.01} className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700 focus:outline-none focus:ring-0 focus:shadow-none" onChange={(event) => handleAmountChange(event.target.value)}
                                                    />
                                                </div>
                                                <div className="text-center mt-8">

                                                    <button type="button" onClick={() => sendTransaction?.({
                                                        recklesslySetUnpreparedRequest: {
                                                            to: '0x96A8FdE42e9d74bc4EAd67b927265061D5e00987',
                                                            value: parseUnits(String(amount))._hex,
                                                            gasLimit: parseUnits("0.0000001", 'gwei').toString(),
                                                        }
                                                    })}
                                                            className="text-gray-900 bg-gray-100 hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-500 mr-2 mb-2">
                                                        <img className="block w-4 h-4 mr-2" src="https://cryptoicons.org/api/color/bnb/50" alt="Crypto currency icon"/>
                                                        Donate with { chain?.nativeCurrency?.name }
                                                    </button>
                                                </div>
                                            </div>
                                            </>
                                        }
                                        {
                                            isDisconnected && <>
                                            <div className="flex justify-center items-center w-full h-full">
                                                <button type="button" onClick={() => open()} className="text-gray-900 bg-gray-100 hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-500 mr-2 mb-2">
                                                    {
                                                        isConnecting && <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" className="animate-spin mr-2 fill-black dark:fill-white"><path d="M12 22c5.421 0 10-4.579 10-10h-2c0 4.337-3.663 8-8 8s-8-3.663-8-8c0-4.336 3.663-8 8-8V2C6.579 2 2 6.58 2 12c0 5.421 4.579 10 10 10z"/></svg>
                                                    }
                                                    Connect your Wallet
                                                </button>
                                            </div>
                                            </>
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default DonationModal;