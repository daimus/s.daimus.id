import Image from "next/image";

const Profile = () => {
    return (
        <>
            <div className="md:w-4/6 mx-auto text-center">
                <Image src="/profile.jpg" width={120} height={120} alt="Muhammad Daimus Suudi"
                       className="h-32 w-32 rounded-full mx-auto mb-5"/>
                <h1 className="font-bold">Daimus Suudi</h1>
                <p>Software Engineer</p>
            </div>
        </>
    )
}

export default Profile