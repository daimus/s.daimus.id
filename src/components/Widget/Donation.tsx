import {useState} from "react";
import DonationModal from "@/components/Modal/Donation";

const Donation = () => {
    const [showDonationModal, setShowDonationModal] = useState(false)
    const toggleDonationModal = () => {
        setShowDonationModal(!showDonationModal)
    }
    return (
        <>
            <li className="mb-4 relative dark:hover:fill-white">
                <button type="button" className="w-full relative transition duration-200 font-bold bg-green-500 border-green-500 border-2 hover:bg-transparent py-4 w-100 block text-center text-gray-800 dark:hover:text-green-400 rounded-lg pl-12 md:px-12 z-10 hover:z-0" onClick={toggleDonationModal} >
                    <span className="text-3xl absolute left-0 top-0 bottom-0 pl-3 flex items-center">🪙</span>
                    <span>Donation</span>
                </button>
                <DonationModal show={showDonationModal} toggleModal={toggleDonationModal} />
            </li>
        </>
    )
}

export default Donation