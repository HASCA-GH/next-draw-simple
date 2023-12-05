// import Image from 'next/image'

import Myheader from "@/components/Myheader";
// import MyGraph from "@/components/MyGraph"
import MyCanvas from '@/components/MyCanvas';


export default function Home() {
  return (
    <main>
      <Myheader />
      <MyCanvas />
    </main>
  )
}
