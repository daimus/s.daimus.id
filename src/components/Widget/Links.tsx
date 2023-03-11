import Icon from "@/components/Icon";
import ShareModal from "@/components/Modal/Share";
import Link from "next/link";
import {useState} from "react";

const Links = () => {
    const [modal, setModal] = useState({
        isShown: false,
        url: 'https://s.daimus.id'
    })
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

    const links = [{
        id: 1,
        icon: "👨‍💻",
        title: "Resume and Portfolio",
        link: "https://daimus.id"
    }, {
        id: 2,
        icon: "📲",
        title: "Contact Me in WhatsApp",
        link: "https://wa.me/6287773775774"
    }]
    return (
        <>
            {
                links.map(link => <li className="mb-4 relative dark:hover:fill-white" key={link.id}>
                    <Link href={link.link} className="relative transition duration-200 font-bold bg-green-500 border-green-500 border-2 hover:bg-transparent py-4 w-100 block text-center text-gray-800 dark:hover:text-green-400 rounded-lg pl-12 md:px-12 z-10 hover:z-0">
                        <span className="text-3xl absolute left-0 top-0 bottom-0 pl-3 flex items-center">{link.icon}</span>
                        <span>{link.title}</span>
                    </Link>
                    <div
                        className="absolute right-0 top-0 h-full w-24 flex items-center justify-center z-0 hover:z-20">
                        <button type="button" className="p-3 rounded-full hover:bg-gray-50" onClick={() => showShareModal(link.link)}>
                            <Icon icon="share-alt" className="text-black dark:text-white  hover:dark:text-black w-6 leading-6" />
                        </button>
                    </div>
                </li>)
            }
            <ShareModal show={modal.isShown} url={modal.url} toggleModal={toggleShareModal} />
        </>
    )
}

export default Links