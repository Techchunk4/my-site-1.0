import Header from '@/components/Header'
import Hero from '@/components/Hero'
import React from 'react'

type Props = {}

function index({}: Props) {
  return (
    <div className='bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory'>
      <header>
        <title>Abdelkader's Portfolio</title>
      </header>

      <Header />

      <section id='hero' className='snap-start'>
        <Hero />
      </section>
    </div>
  )
}

export default index