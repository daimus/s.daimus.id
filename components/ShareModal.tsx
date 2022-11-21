import {useRef, useState} from "react";

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
                                            Share
                                        </h3>
                                    </div>
                                    <div className="px-2">
                                        <ul className="my-4 space-y-3">
                                            <li>
                                                <a href={`https://www.facebook.com/sharer/sharer.php?u=${props.url}`}
                                                   target="_blank"
                                                   className="flex items-center p-3 text-base font-bold text-gray-900 rounded-lg hover:bg-gray-100 group hover:shadow dark:hover:bg-gray-500 dark:text-white">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                         viewBox="0 0 24 24" style={{fill: 'rgba(66, 103, 178, 1)'}}>
                                                        <path
                                                            d="M13.397 20.997v-8.196h2.765l.411-3.209h-3.176V7.548c0-.926.258-1.56 1.587-1.56h1.684V3.127A22.336 22.336 0 0 0 14.201 3c-2.444 0-4.122 1.492-4.122 4.231v2.355H7.332v3.209h2.753v8.202h3.312z"/>
                                                    </svg>
                                                    <span className="flex-1 ml-3 whitespace-nowrap">Facebook</span>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                         viewBox="0 0 24 24" className="dark:fill-white">
                                                        <path
                                                            d="M10.707 17.707 16.414 12l-5.707-5.707-1.414 1.414L13.586 12l-4.293 4.293z"/>
                                                    </svg>
                                                </a>
                                            </li>
                                            <li>
                                                <a href={`https://twitter.com/intent/tweet?url=${props.url}`}
                                                   target="_blank"
                                                   className="flex items-center p-3 text-base font-bold text-gray-900 rounded-lg hover:bg-gray-100 group hover:shadow dark:hover:bg-gray-500 dark:text-white">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                         viewBox="0 0 24 24" style={{fill: 'rgb(0,172,238)'}}>
                                                        <path
                                                            d="M19.633 7.997c.013.175.013.349.013.523 0 5.325-4.053 11.461-11.46 11.461-2.282 0-4.402-.661-6.186-1.809.324.037.636.05.973.05a8.07 8.07 0 0 0 5.001-1.721 4.036 4.036 0 0 1-3.767-2.793c.249.037.499.062.761.062.361 0 .724-.05 1.061-.137a4.027 4.027 0 0 1-3.23-3.953v-.05c.537.299 1.16.486 1.82.511a4.022 4.022 0 0 1-1.796-3.354c0-.748.199-1.434.548-2.032a11.457 11.457 0 0 0 8.306 4.215c-.062-.3-.1-.611-.1-.923a4.026 4.026 0 0 1 4.028-4.028c1.16 0 2.207.486 2.943 1.272a7.957 7.957 0 0 0 2.556-.973 4.02 4.02 0 0 1-1.771 2.22 8.073 8.073 0 0 0 2.319-.624 8.645 8.645 0 0 1-2.019 2.083z"/>
                                                    </svg>
                                                    <span className="flex-1 ml-3 whitespace-nowrap">Twitter</span>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                         viewBox="0 0 24 24" className="dark:fill-white">
                                                        <path
                                                            d="M10.707 17.707 16.414 12l-5.707-5.707-1.414 1.414L13.586 12l-4.293 4.293z"/>
                                                    </svg>
                                                </a>
                                            </li>
                                            <li>
                                                <a href={`https://wa.me/?text=${props.url}`} target="_blank"
                                                   className="flex items-center p-3 text-base font-bold text-gray-900 rounded-lg hover:bg-gray-100 group hover:shadow dark:hover:bg-gray-500 dark:text-white">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                         viewBox="0 0 24 24" style={{fill: 'rgb(37,211,102)'}}>
                                                        <path fillRule="evenodd" clipRule="evenodd"
                                                              d="M18.403 5.633A8.919 8.919 0 0 0 12.053 3c-4.948 0-8.976 4.027-8.978 8.977 0 1.582.413 3.126 1.198 4.488L3 21.116l4.759-1.249a8.981 8.981 0 0 0 4.29 1.093h.004c4.947 0 8.975-4.027 8.977-8.977a8.926 8.926 0 0 0-2.627-6.35m-6.35 13.812h-.003a7.446 7.446 0 0 1-3.798-1.041l-.272-.162-2.824.741.753-2.753-.177-.282a7.448 7.448 0 0 1-1.141-3.971c.002-4.114 3.349-7.461 7.465-7.461a7.413 7.413 0 0 1 5.275 2.188 7.42 7.42 0 0 1 2.183 5.279c-.002 4.114-3.349 7.462-7.461 7.462m4.093-5.589c-.225-.113-1.327-.655-1.533-.73-.205-.075-.354-.112-.504.112s-.58.729-.711.879-.262.168-.486.056-.947-.349-1.804-1.113c-.667-.595-1.117-1.329-1.248-1.554s-.014-.346.099-.458c.101-.1.224-.262.336-.393.112-.131.149-.224.224-.374s.038-.281-.019-.393c-.056-.113-.505-1.217-.692-1.666-.181-.435-.366-.377-.504-.383a9.65 9.65 0 0 0-.429-.008.826.826 0 0 0-.599.28c-.206.225-.785.767-.785 1.871s.804 2.171.916 2.321c.112.15 1.582 2.415 3.832 3.387.536.231.954.369 1.279.473.537.171 1.026.146 1.413.089.431-.064 1.327-.542 1.514-1.066.187-.524.187-.973.131-1.067-.056-.094-.207-.151-.43-.263"/>
                                                    </svg>
                                                    <span className="flex-1 ml-3 whitespace-nowrap">WhatsApp</span>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                         viewBox="0 0 24 24" className="dark:fill-white">
                                                        <path
                                                            d="M10.707 17.707 16.414 12l-5.707-5.707-1.414 1.414L13.586 12l-4.293 4.293z"/>
                                                    </svg>
                                                </a>
                                            </li>
                                            <li>
                                                <a href={`https://www.linkedin.com/sharing/share-offsite/?url=${props.url}`}
                                                   target="_blank"
                                                   className="flex items-center p-3 text-base font-bold text-gray-900 rounded-lg hover:bg-gray-100 group hover:shadow dark:hover:bg-gray-500 dark:text-white">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                         viewBox="0 0 24 24" style={{fill: 'rgb(0,114,177)'}}>
                                                        <circle cx="4.983" cy="5.009" r="2.188"/>
                                                        <path
    d="M9.237 8.855v12.139h3.769v-6.003c0-1.584.298-3.118 2.262-3.118 1.937 0 1.961 1.811 1.961 3.218v5.904H21v-6.657c0-3.27-.704-5.783-4.526-5.783-1.835 0-3.065 1.007-3.568 1.96h-.051v-1.66H9.237zm-6.142 0H6.87v12.139H3.095z"/>
                                                    </svg>
                                                    <span className="flex-1 ml-3 whitespace-nowrap">LinkedIn</span>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                         viewBox="0 0 24 24" className="dark:fill-white">
                                                        <path
                                                            d="M10.707 17.707 16.414 12l-5.707-5.707-1.414 1.414L13.586 12l-4.293 4.293z"/>
                                                    </svg>
                                                </a>
                                            </li>
                                            <li>
                                                <a href={`https://mail.google.com/mail/u/0/?view=cm&to&&body=${props.url}`}
                                                   target="_blank"
                                                   className="flex items-center p-3 text-base font-bold text-gray-900 rounded-lg hover:bg-gray-100 group hover:shadow dark:hover:bg-gray-500 dark:text-white">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                         viewBox="0 0 24 24" style={{fill: 'rgb(199,22,16)'}}>
                                                        <path
                                                            d="m18.73 5.41-1.28 1L12 10.46 6.55 6.37l-1.28-1A2 2 0 0 0 2 7.05v11.59A1.36 1.36 0 0 0 3.36 20h3.19v-7.72L12 16.37l5.45-4.09V20h3.19A1.36 1.36 0 0 0 22 18.64V7.05a2 2 0 0 0-3.27-1.64z"/>
                                                    </svg>
                                                    <span className="flex-1 ml-3 whitespace-nowrap">GMail</span>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                         viewBox="0 0 24 24" className="dark:fill-white">
                                                        <path
                                                            d="M10.707 17.707 16.414 12l-5.707-5.707-1.414 1.414L13.586 12l-4.293 4.293z"/>
                                                    </svg>
                                                </a>
                                            </li>
                                            <li className="mt-4">
                                                <div
                                                    className="border rounded-lg bg-gray-50 hover:bg-gray-100 p-4 cursor-pointer flex justify-between">
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