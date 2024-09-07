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
                                <a className="text-green-400  hover:text-green-600" href="https://github.com/daimus" target="_blank" rel="noopener">
                                    <Icon icon="github" type="logo" className="text-2xl" />
                                </a>
                            </li>
                            <li className="mr-3 inline">
                                <a className="text-green-400  hover:text-green-600" href="https://www.linkedin.com/in/daimus" target="_blank" rel="noopener">
                                    <Icon icon="linkedin" type="logo" className="text-2xl" />
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer