import Image from "next/image";

const Profile = () => {
    return (
        <>
            <div className="md:w-4/6 mx-auto text-center">
                <Image src="/profile.png" width={600} height={600} alt="Daimus Suudi"
                       className="h-48 w-48 rounded-full mx-auto mb-5"/>
                <h1 className="font-bold">Daimus Suudi</h1>
                <p>Software Engineer</p>
            </div>
        </>
    )
}

export default Profile