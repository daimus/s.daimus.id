import Profile from "@/components/Hero/Profile";
import Widget from "@/components/Widget";
import Head from "next/head";

export default function Home() {
  return (
    <>
        <Head>
            <title>Daimus Suudi</title>
        </Head>
        <Profile />
        <Widget />
    </>
  )
}
