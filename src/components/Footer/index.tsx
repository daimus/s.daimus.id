import Icon from "@/components/Icon";

const Footer = () => {
    return (
        <>
            <footer className="px-3 sm:px-0 mb-20">
                <div className="container text-center mx-auto">
                    <div className="md:w-4/6 mx-auto">
                        <ul className="py-6 flex justify-center">
                            <li className="mr-3 inline">
                                <a className="text-green-400  hover:text-green-600" href="mailto:daimus.suudi@gmail.com" rel="noopener">
                                    <Icon icon="envelope" className="text-2xl" />
                                </a>
                            </li>
                            <li className="mr-3 inline">
                                <a className="text-green-400  hover:text-green-600" href="tel:6287773775774" rel="noopener">
                                    <Icon icon="mobile" className="text-2xl" />
                                </a>
                            </li>
                            <li className="mr-3 inline">
                                <a className="text-green-400  hover:text-green-600" href="https://github.com/daimus" target="_blank" rel="noopener">
                                    <Icon icon="github" type="logo" className="text-2xl" />
                                </a>
                            </li>
                            <li className="mr-3 inline">
                                <a className="text-green-400  hover:text-green-600" href="https://www.linkedin.com/in/daimus" target="_blank" rel="noopener">
                                    <Icon icon="linkedin" type="logo" className="text-2xl" />
                                </a>
                            </li>
                            <li className="mr-3 inline">
                                <a className="text-green-400  hover:text-green-600" href="https://twitter.com/daimus_suudi" target="_blank" rel="noopener">
                                    <Icon icon="twitter" type="logo" className="text-2xl" />
                                </a>
                            </li>
                            <li className="mr-3 inline">
                                <a className="text-green-400  hover:text-green-600" href="https://facebook.com/daimus.suudi" target="_blank" rel="noopener">
                                    <Icon icon="facebook" type="logo" className="text-2xl" />
                                </a>
                            </li>
                            <li className="mr-3 inline">
                                <a className="text-green-400  hover:text-green-600" href="https://instagram.com/daimus.suudi" target="_blank" rel="noopener">
                                    <Icon icon="instagram" type="logo" className="text-2xl" />
                                </a>
                            </li>
                        </ul>
                        <div className="flex justify-center items-center flex-col text-xs w-full">
                            <p className="dark:text-gray-50 max-w-sm md:max-w-lg">
                                build by
                                <a href="https://daimus.id" className="text-green-600 dark:text-green-400"
                                   rel="noopener"> Daimus Suudi</a>
                            </p>
                            <p className="dark:text-gray-50 max-w-sm md:max-w-lg mt-2">
                                <a href="https://github.com/daimus/s.daimus.id"
                                   className="text-green-600 dark:text-green-400" rel="noopener">s.daimus.id </a>
                                is a bio link alternative to reveal everything you’re sharing. Built with NextJS and TailwindCSS
                            </p>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer