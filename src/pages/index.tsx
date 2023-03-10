import { Inter } from 'next/font/google'
import Profile from "@/components/Hero/Profile";
import Widget from "@/components/Widget";

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
        <Profile />
        <Widget />
    </>
  )
}
