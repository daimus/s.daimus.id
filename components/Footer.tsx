const Footer = () => {
    return (
        <>
            <footer className="px-3 sm:px-0 mb-20">
                <div className="container text-center mx-auto">
                    <div className="md:w-4/6 mx-auto">
                        <ul className="py-6 flex justify-center">
                            <li className="mr-3 inline">
                                <a className="text-green-400  hover:text-green-600"
                                   href="mailto:daimus.suudi@gmail.com" rel="noopener"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                         className="dark:fill-white">
                                        <path
    d="M20 4H4c-1.103 0-2 .897-2 2v12c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V6c0-1.103-.897-2-2-2zm0 2v.511l-8 6.223-8-6.222V6h16zM4 18V9.044l7.386 5.745a.994.994 0 0 0 1.228 0L20 9.044 20.002 18H4z"/>
                                    </svg>
                                </a>
                            </li>
                            <li className="mr-3 inline">
                                <a className="text-green-400  hover:text-green-600"
                                   href="tel:6287773775774" rel="noopener"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                         className="dark:fill-white">
                                        <path
    d="M17 2H7c-1.103 0-2 .897-2 2v16c0 1.103.897 2 2 2h10c1.103 0 2-.897 2-2V4c0-1.103-.897-2-2-2zM7 16.999V5h10l.002 11.999H7z"/>
                                    </svg>
                                </a>
                            </li>
                            <li className="mr-3 inline">
                                <a className="text-green-400  hover:text-green-600"
                                   href="https://github.com/daimus" target="_blank" rel="noopener"
                                   >
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                         className="dark:fill-white">
                                        <path fillRule="evenodd" clipRule="evenodd"
    d="M12.026 2c-5.509 0-9.974 4.465-9.974 9.974 0 4.406 2.857 8.145 6.821 9.465.499.09.679-.217.679-.481 0-.237-.008-.865-.011-1.696-2.775.602-3.361-1.338-3.361-1.338-.452-1.152-1.107-1.459-1.107-1.459-.905-.619.069-.605.069-.605 1.002.07 1.527 1.028 1.527 1.028.89 1.524 2.336 1.084 2.902.829.091-.645.351-1.085.635-1.334-2.214-.251-4.542-1.107-4.542-4.93 0-1.087.389-1.979 1.024-2.675-.101-.253-.446-1.268.099-2.64 0 0 .837-.269 2.742 1.021a9.582 9.582 0 0 1 2.496-.336 9.554 9.554 0 0 1 2.496.336c1.906-1.291 2.742-1.021 2.742-1.021.545 1.372.203 2.387.099 2.64.64.696 1.024 1.587 1.024 2.675 0 3.833-2.33 4.675-4.552 4.922.355.308.675.916.675 1.846 0 1.334-.012 2.41-.012 2.737 0 .267.178.577.687.479C19.146 20.115 22 16.379 22 11.974 22 6.465 17.535 2 12.026 2z"/>
                                    </svg>
                                </a>
                            </li>
                            <li className="mr-3 inline">
                                <a className="text-green-400  hover:text-green-600"
                                   href="https://www.linkedin.com/in/daimus" target="_blank" rel="noopener"
                                   >
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                         className="dark:fill-white">
                                        <circle cx="4.983" cy="5.009" r="2.188"/>
                                        <path
    d="M9.237 8.855v12.139h3.769v-6.003c0-1.584.298-3.118 2.262-3.118 1.937 0 1.961 1.811 1.961 3.218v5.904H21v-6.657c0-3.27-.704-5.783-4.526-5.783-1.835 0-3.065 1.007-3.568 1.96h-.051v-1.66H9.237zm-6.142 0H6.87v12.139H3.095z"/>
                                    </svg>
                                </a>
                            </li>
                            <li className="mr-3 inline">
                                <a className="text-green-400  hover:text-green-600"
                                   href="https://twitter.com/daimus_suudi" target="_blank" rel="noopener"
                                   >
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                         className="dark:fill-white">
                                        <path
    d="M19.633 7.997c.013.175.013.349.013.523 0 5.325-4.053 11.461-11.46 11.461-2.282 0-4.402-.661-6.186-1.809.324.037.636.05.973.05a8.07 8.07 0 0 0 5.001-1.721 4.036 4.036 0 0 1-3.767-2.793c.249.037.499.062.761.062.361 0 .724-.05 1.061-.137a4.027 4.027 0 0 1-3.23-3.953v-.05c.537.299 1.16.486 1.82.511a4.022 4.022 0 0 1-1.796-3.354c0-.748.199-1.434.548-2.032a11.457 11.457 0 0 0 8.306 4.215c-.062-.3-.1-.611-.1-.923a4.026 4.026 0 0 1 4.028-4.028c1.16 0 2.207.486 2.943 1.272a7.957 7.957 0 0 0 2.556-.973 4.02 4.02 0 0 1-1.771 2.22 8.073 8.073 0 0 0 2.319-.624 8.645 8.645 0 0 1-2.019 2.083z"/>
                                    </svg>
                                </a>
                            </li>
                            <li className="mr-3 inline">
                                <a className="text-green-400  hover:text-green-600"
                                   href="https://facebook.com/daimus.suudi" target="_blank" rel="noopener"
                                   >
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                         className="dark:fill-white">
                                        <path
    d="M13.397 20.997v-8.196h2.765l.411-3.209h-3.176V7.548c0-.926.258-1.56 1.587-1.56h1.684V3.127A22.336 22.336 0 0 0 14.201 3c-2.444 0-4.122 1.492-4.122 4.231v2.355H7.332v3.209h2.753v8.202h3.312z"/>
                                    </svg>
                                </a>
                            </li>
                            <li className="mr-3 inline">
                                <a className="text-green-400  hover:text-green-600"
                                   href="https://instagram.com/daimus.suudi" target="_blank" rel="noopener"
                                   >
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                         className="dark:fill-white">
                                        <path
    d="M11.999 7.377a4.623 4.623 0 1 0 0 9.248 4.623 4.623 0 0 0 0-9.248zm0 7.627a3.004 3.004 0 1 1 0-6.008 3.004 3.004 0 0 1 0 6.008z"/>
                                        <circle cx="16.806" cy="7.207" r="1.078"/>
                                        <path
    d="M20.533 6.111A4.605 4.605 0 0 0 17.9 3.479a6.606 6.606 0 0 0-2.186-.42c-.963-.042-1.268-.054-3.71-.054s-2.755 0-3.71.054a6.554 6.554 0 0 0-2.184.42 4.6 4.6 0 0 0-2.633 2.632 6.585 6.585 0 0 0-.419 2.186c-.043.962-.056 1.267-.056 3.71 0 2.442 0 2.753.056 3.71.015.748.156 1.486.419 2.187a4.61 4.61 0 0 0 2.634 2.632 6.584 6.584 0 0 0 2.185.45c.963.042 1.268.055 3.71.055s2.755 0 3.71-.055a6.615 6.615 0 0 0 2.186-.419 4.613 4.613 0 0 0 2.633-2.633c.263-.7.404-1.438.419-2.186.043-.962.056-1.267.056-3.71s0-2.753-.056-3.71a6.581 6.581 0 0 0-.421-2.217zm-1.218 9.532a5.043 5.043 0 0 1-.311 1.688 2.987 2.987 0 0 1-1.712 1.711 4.985 4.985 0 0 1-1.67.311c-.95.044-1.218.055-3.654.055-2.438 0-2.687 0-3.655-.055a4.96 4.96 0 0 1-1.669-.311 2.985 2.985 0 0 1-1.719-1.711 5.08 5.08 0 0 1-.311-1.669c-.043-.95-.053-1.218-.053-3.654 0-2.437 0-2.686.053-3.655a5.038 5.038 0 0 1 .311-1.687c.305-.789.93-1.41 1.719-1.712a5.01 5.01 0 0 1 1.669-.311c.951-.043 1.218-.055 3.655-.055s2.687 0 3.654.055a4.96 4.96 0 0 1 1.67.311 2.991 2.991 0 0 1 1.712 1.712 5.08 5.08 0 0 1 .311 1.669c.043.951.054 1.218.054 3.655 0 2.436 0 2.698-.043 3.654h-.011z"/>
                                    </svg>
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