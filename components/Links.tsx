import {useState} from "react";
import ShareModal from "./ShareModal";
import DonationModal from "./DonationModal";

const Links = () => {

    const [modal, setModal] = useState({
        isShown: false,
        url: 'https://s.daimus.id'
    })
    const [showDonationModal, setShowDonationModal] = useState(false)
    const showShareModal = (url = '') => {
        setModal({
            isShown: true,
            url: url
        })
    }
    const toggleShareModal = () => {
        setModal({
            ...modal,
            isShown: !modal.isShown,
        })
    }
    const toggleDonationModal = () => {
        setShowDonationModal(!showDonationModal)
    }

    return (
        <>
            <main className="flex px-3 sm:px-0 mb-8">
                <ul className="w-full md:w-4/5 lg:w-3/6 mx-4 md:mx-auto">
                    <li className="mb-4 relative dark:hover:fill-white">
                        <a href="https://daimus.id" className="relative transition duration-200 font-bold bg-green-500 border-green-500 border-2 hover:bg-transparent py-4 w-100 block text-center text-gray-800 hover:text-green-400 rounded-lg pl-12 md:px-12 z-10 hover:z-0">
                            <span className="text-3xl absolute left-0 top-0 bottom-0 pl-3 flex items-center">👨‍💻</span>
                            <span>Resume and Portfolio</span>
                        </a>
                        <div
                            className="absolute right-0 top-0 h-full w-24 flex items-center justify-center z-0 hover:z-20">
                            <button type="button" className="p-3 rounded-full hover:bg-gray-50 dark:hover:fill-black" onClick={() => showShareModal('https://daimus.id')}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                    <path
    d="M5.5 15a3.51 3.51 0 0 0 2.36-.93l6.26 3.58a3.06 3.06 0 0 0-.12.85 3.53 3.53 0 1 0 1.14-2.57l-6.26-3.58a2.74 2.74 0 0 0 .12-.76l6.15-3.52A3.49 3.49 0 1 0 14 5.5a3.35 3.35 0 0 0 .12.85L8.43 9.6A3.5 3.5 0 1 0 5.5 15zm12 2a1.5 1.5 0 1 1-1.5 1.5 1.5 1.5 0 0 1 1.5-1.5zm0-13A1.5 1.5 0 1 1 16 5.5 1.5 1.5 0 0 1 17.5 4zm-12 6A1.5 1.5 0 1 1 4 11.5 1.5 1.5 0 0 1 5.5 10z"/>
                                </svg>
                            </button>
                        </div>
                    </li>
                    <li className="mb-4 relative dark:hover:fill-white">
                        <a href="https://wa.me/6287773775774" className="relative transition duration-200 font-bold bg-green-500 border-green-500 border-2 hover:bg-transparent py-4 w-100 block text-center text-gray-800 hover:text-green-400 rounded-lg pl-12 md:px-12 z-10 hover:z-0">
                            <span className="text-3xl absolute left-0 top-0 bottom-0 pl-3 flex items-center">📲</span>
                            <span>Contact Me in WhatsApp</span>
                        </a>
                        <div
                            className="absolute right-0 top-0 h-full w-24 flex items-center justify-center z-0 hover:z-20">
                            <button type="button" className="p-3 rounded-full hover:bg-gray-50 dark:hover:fill-black" onClick={() => showShareModal('https://wa.me/6287773775774')}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                    <path
                                        d="M5.5 15a3.51 3.51 0 0 0 2.36-.93l6.26 3.58a3.06 3.06 0 0 0-.12.85 3.53 3.53 0 1 0 1.14-2.57l-6.26-3.58a2.74 2.74 0 0 0 .12-.76l6.15-3.52A3.49 3.49 0 1 0 14 5.5a3.35 3.35 0 0 0 .12.85L8.43 9.6A3.5 3.5 0 1 0 5.5 15zm12 2a1.5 1.5 0 1 1-1.5 1.5 1.5 1.5 0 0 1 1.5-1.5zm0-13A1.5 1.5 0 1 1 16 5.5 1.5 1.5 0 0 1 17.5 4zm-12 6A1.5 1.5 0 1 1 4 11.5 1.5 1.5 0 0 1 5.5 10z"/>
                                </svg>
                            </button>
                        </div>
                    </li>
                    <li className="mb-4 relative dark:hover:fill-white">
                        <button type="button" className="w-full relative transition duration-200 font-bold bg-green-500 border-green-500 border-2 hover:bg-transparent py-4 w-100 block text-center text-gray-800 hover:text-green-400 rounded-lg pl-12 md:px-12 z-10 hover:z-0" onClick={toggleDonationModal} >
                            <span className="text-3xl absolute left-0 top-0 bottom-0 pl-3 flex items-center">🪙</span>
                            <span>Donation</span>
                        </button>
                    </li>
                </ul>
            </main>
            <ShareModal show={modal.isShown} url={modal.url} toggleModal={toggleShareModal} />
            <DonationModal show={showDonationModal} toggleModal={toggleDonationModal} />
        </>
    )
}

export default Links