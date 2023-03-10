import { useState} from "react";
import Icon from "@/components/Icon";

const ShareModal = (props: {
    show: boolean,
    url: string,
    toggleModal: any
}) => {
    const [copy, setCopy] = useState({
        text: 'Copy',
        class: ''
    })
    const copyUrl = () => {
        try {
            navigator.clipboard.writeText(props.url).then(r => {});
            const copyText = document.getElementById('copy-text')
            setCopy({
                text: 'Copied!',
                class: 'text-green-500'
            })
            setTimeout(function (){
                setCopy({
                    text: 'Copy',
                    class: ''
                })
            }, 1200)
        } catch (err) {
            alert('Oops, unable to copy');
        }
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
                                        <Icon icon="x" className="text-2xl" />
                                        <span className="sr-only">Close modal</span>
                                    </button>
                                    <div className="py-4 px-6 rounded-t">
                                        <h3 className="text-base font-semibold text-gray-900 lg:text-xl dark:text-white">
                                            Share
                                        </h3>
                                    </div>
                                    <div className="px-2">
                                        <ul className="my-4 space-y-3">
                                            <li>
                                                <a href={`https://www.facebook.com/sharer/sharer.php?u=${props.url}`}
                                                   target="_blank"
                                                   className="flex items-center p-3 text-base font-bold text-gray-900 rounded-lg hover:bg-gray-100 group hover:shadow dark:hover:bg-gray-500 dark:text-white">
                                                    <Icon icon="facebook" type="logo" className="text-2xl text-[#4267b2] dark:text-[#4267b2]" />
                                                    <span className="flex-1 ml-3 whitespace-nowrap">Facebook</span>
                                                    <Icon icon="chevron-right" className="text-2xl" />
                                                </a>
                                            </li>
                                            <li>
                                                <a href={`https://twitter.com/intent/tweet?url=${props.url}`}
                                                   target="_blank"
                                                   className="flex items-center p-3 text-base font-bold text-gray-900 rounded-lg hover:bg-gray-100 group hover:shadow dark:hover:bg-gray-500 dark:text-white">
                                                    <Icon icon="twitter" type="logo" className="text-2xl text-[#00abee] dark:text-[#00abee]" />
                                                    <span className="flex-1 ml-3 whitespace-nowrap">Twitter</span>
                                                    <Icon icon="chevron-right" className="text-2xl" />
                                                </a>
                                            </li>
                                            <li>
                                                <a href={`https://wa.me/?text=${props.url}`} target="_blank"
                                                   className="flex items-center p-3 text-base font-bold text-gray-900 rounded-lg hover:bg-gray-100 group hover:shadow dark:hover:bg-gray-500 dark:text-white">
                                                    <Icon icon="whatsapp" type="logo" className="text-2xl text-[#25d365] dark:text-[#25d365]" />
                                                    <span className="flex-1 ml-3 whitespace-nowrap">WhatsApp</span>
                                                    <Icon icon="chevron-right" className="text-2xl" />
                                                </a>
                                            </li>
                                            <li>
                                                <a href={`https://www.linkedin.com/sharing/share-offsite/?url=${props.url}`}
                                                   target="_blank"
                                                   className="flex items-center p-3 text-base font-bold text-gray-900 rounded-lg hover:bg-gray-100 group hover:shadow dark:hover:bg-gray-500 dark:text-white">
                                                    <Icon icon="linkedin" type="logo" className="text-2xl text-[#0073b1] dark:text-[#0073b1]" />
                                                    <span className="flex-1 ml-3 whitespace-nowrap">LinkedIn</span>
                                                    <Icon icon="chevron-right" className="text-2xl" />
                                                </a>
                                            </li>
                                            <li>
                                                <a href={`https://mail.google.com/mail/u/0/?view=cm&to&&body=${props.url}`}
                                                   target="_blank"
                                                   className="flex items-center p-3 text-base font-bold text-gray-900 rounded-lg hover:bg-gray-100 group hover:shadow dark:hover:bg-gray-500 dark:text-white">
                                                    <Icon icon="gmail" type="logo" className="text-2xl text-[#c71610] dark:text-[#c71610]" />
                                                    <span className="flex-1 ml-3 whitespace-nowrap">GMail</span>
                                                    <Icon icon="chevron-right" className="text-2xl" />
                                                </a>
                                            </li>
                                            <li className="mt-4">
                                                <div
                                                    className="border rounded-lg bg-gray-50 hover:bg-gray-100 p-4 cursor-pointer flex justify-between text-black">
                                                    <p className="line-clamp-1 mr-4">{props.url}</p>
                                                    <span className={`block ${copy.class}`} onClick={copyUrl}>{copy.text}</span>
                                                </div>
                                            </li>
                                        </ul>
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

export default ShareModal