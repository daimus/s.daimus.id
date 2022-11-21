import Image from 'next/image'
import profile from '../public/images/profile_light.jpeg'
import {useEffect, useState} from "react";
import ShareModal from "./ShareModal";

const Header = () => {

    const [theme, setTheme] = useState('');
    const [modal, setModal] = useState({
        isShown: false,
        url: 'https://s.daimus.id'
    })
    const handleThemeChanged = () => {
        if (localStorage.theme === 'dark') {
            document.documentElement.classList.add('dark')
        } else {
            document.documentElement.classList.remove('dark')
        }
    }
    const toggleTheme = () => {
        if ((!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
            setTheme('dark')
        } else {
            setTheme(localStorage.theme === 'dark' ? 'light' : 'dark')
        }
    }

    const toggleShareModal = () => {
        setModal({
            ...modal,
            isShown: !modal.isShown,
        })
    }

    useEffect(() => {
        if (!theme){
            toggleTheme()
        }
        localStorage.theme = theme
        handleThemeChanged()
    }, [theme])

    return (
        <>
            <header className="container flex flex-col text-center mx-auto py-4 md:py-10">
                <div className="md:w-4/6 lg:w-4/6 mx-6 md:mx-auto">
                    <div className="flex justify-between">
                        <div>
                            <button type="button" onClick={toggleShareModal}
                                    className="w-12 h-12 rounded-full p-2 text-center items-center hover:bg-gray-700 hover:fill-white">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                     className="dark:fill-white">
                                    <path
                                        d="M5.5 15a3.51 3.51 0 0 0 2.36-.93l6.26 3.58a3.06 3.06 0 0 0-.12.85 3.53 3.53 0 1 0 1.14-2.57l-6.26-3.58a2.74 2.74 0 0 0 .12-.76l6.15-3.52A3.49 3.49 0 1 0 14 5.5a3.35 3.35 0 0 0 .12.85L8.43 9.6A3.5 3.5 0 1 0 5.5 15zm12 2a1.5 1.5 0 1 1-1.5 1.5 1.5 1.5 0 0 1 1.5-1.5zm0-13A1.5 1.5 0 1 1 16 5.5 1.5 1.5 0 0 1 17.5 4zm-12 6A1.5 1.5 0 1 1 4 11.5 1.5 1.5 0 0 1 5.5 10z"/>
                                </svg>
                            </button>
                        </div>
                        <div className="flex justify-end items-center gap-3">
                            <div className="inline-flex items-center">
                                <label htmlFor="checked-toggle"
                                       className="inline-flex relative items-center cursor-pointer">
                                    <input type="checkbox" id="checked-toggle" className="sr-only peer"
                                           onChange={toggleTheme}/>
                                    <div className="hidden"/>
                                    <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">
                                        {
                                            theme === 'light' ?
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                     viewBox="0 0 24 24" className="fill-black">
                                                    <path
                                                        d="M12 11.807A9.002 9.002 0 0 1 10.049 2a9.942 9.942 0 0 0-5.12 2.735c-3.905 3.905-3.905 10.237 0 14.142 3.906 3.906 10.237 3.905 14.143 0a9.946 9.946 0 0 0 2.735-5.119A9.003 9.003 0 0 1 12 11.807z"/>
                                                </svg> : <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                              viewBox="0 0 24 24" className="fill-white">
                                                    <path
                                                        d="M6.995 12c0 2.761 2.246 5.007 5.007 5.007s5.007-2.246 5.007-5.007-2.246-5.007-5.007-5.007S6.995 9.239 6.995 12zM11 19h2v3h-2zm0-17h2v3h-2zm-9 9h3v2H2zm17 0h3v2h-3zM5.637 19.778l-1.414-1.414 2.121-2.121 1.414 1.414zM16.242 6.344l2.122-2.122 1.414 1.414-2.122 2.122zM6.344 7.759 4.223 5.637l1.415-1.414 2.12 2.122zm13.434 10.605-1.414 1.414-2.122-2.122 1.414-1.414z"/>
                                                </svg>
                                        }
                                    </span>
                                </label>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="md:w-4/6 mx-auto">
                    <Image src={profile} width={120} height={120} alt="Muhammad Daimus Suudi"
                           className="h-32 w-32 rounded-full mx-auto mb-5"/>
                    <h1 className="font-bold dark:text-gray-50">Muhammad Daimus Suudi</h1>
                    <p className="dark:text-gray-50">Full Stack Developer</p>
                </div>
            </header>
            <ShareModal show={modal.isShown} url={modal.url} toggleModal={toggleShareModal} />
        </>
    )
}

export default Header