import Image from 'next/image'
import {useEffect, useState} from "react";
import Share from "../Modal/Share";
import Icon from "@/components/Icon";

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
                                <Icon icon="share-alt"/>
                            </button>
                        </div>
                        <div className="flex justify-end items-center gap-3">
                            <div className="inline-flex items-center">
                                <label className="inline-flex relative items-center cursor-pointer">
                                    <input type="checkbox" className="sr-only peer" onChange={toggleTheme}/>
                                    <div className="hidden"/>
                                    <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">
                                        {
                                            theme === 'light' ? <Icon icon="moon" type="solid" /> : <Icon icon="sun" type="solid" />
                                        }
                                    </span>
                                </label>
                            </div>
                        </div>
                    </div>
                </div>


            </header>
            <Share show={modal.isShown} url={modal.url} toggleModal={toggleShareModal} />
        </>
    )
}

export default Header