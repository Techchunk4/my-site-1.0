import React from 'react'
import Image from 'next/image'
import profilePic from '../images/profile-pic.jpg'
import { Cursor, useTypewriter } from 'react-simple-typewriter'

type Props = {}

export default function Hero({}: Props) {
    const [text, count] = useTypewriter({
        words: [
            "Hi, I'm Abdelkader",
            "A Guy-who-loves-coding.tsx",
            "<ButlovesCloudComputing more />"
        ],
        loop: true,
        delaySpeed: 2000,
    })
  return (
    <div className='h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden'>
        <Image 
        className='relative rounded-full h-32 w-32 mx-auto object-cover'
        src={profilePic} alt='profile'
        />
        <div className='z-20'>
         <h2 className='text-xs uppercase text-gray-500 tracking-[15px]'>
            Software | Cloud | Engineer
         </h2>
         <h1 className='text-5xl lg:text-6xl font-semibold px-10'>
            <span className='mr-3'>{text}</span>
            <Cursor cursorColor='#F7AB0A' />
         </h1>
        </div>

    </div>
  )
}