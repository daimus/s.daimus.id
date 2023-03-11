import {useEffect, useState} from "react";
import Icon from "@/components/Icon";
import {useWeb3React} from "@web3-react/core";
import ConnectWallet from "@/components/Modal/Donation/ConnectWallet";
import Donate from "@/components/Modal/Donation/Donate";

const Index = (props: { show: boolean; toggleModal: any; }) => {
    const { active, chainId, account } = useWeb3React()
    const [error, setError] = useState<string>()

    useEffect(() => {
        setError("")
    }, [active])

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
                                        <Icon icon="x" className="text-2xl" />
                                        <span className="sr-only">Close modal</span>
                                    </button>
                                    <div className="py-4 px-6 rounded-t">
                                        <h3 className="text-base font-semibold text-gray-900 lg:text-xl dark:text-white">
                                            Donation
                                        </h3>
                                    </div>
                                    <div className="px-2 h-96">
                                        <div className="w-full h-full flex justify-start flex-col">
                                            {
                                                error && <div className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
                                                    {error}
                                                </div>
                                            }
                                            {
                                                active ? <Donate setError={setError} /> : <ConnectWallet setError={setError} />
                                            }
                                        </div>
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

export default Index;