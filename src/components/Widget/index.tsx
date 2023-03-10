import Links from "@/components/Widget/Links";
import Donation from "@/components/Widget/Donation";

const Widget = () => {
    return (
        <>
            <main className="flex px-3 sm:px-0 my-8">
                <ul className="w-full md:w-4/5 lg:w-3/6 mx-4 md:mx-auto">
                    <Links />
                    <Donation />
                </ul>
            </main>
        </>
    )
}

export default Widget