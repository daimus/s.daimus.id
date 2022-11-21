import Head from 'next/head'
import Header from "../components/Header";
import Footer from "../components/Footer";
import Links from "../components/Links";

export default function Home() {
    return (
        <div className="flex flex-col min-h-screen bg-gray-200 dark:bg-gray-800">
            <Head>
                <title>Muhammad Daimus Suudi</title>
                <meta name="description" content="Daimus short link"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>

            <Header/>
            <Links/>
            <Footer/>
        </div>
    )
}
