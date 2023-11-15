import React from 'react'
import { motion } from 'framer-motion'
import ExpierenceCard from './ExpierenceCard'
import { useMediaQuery } from 'react-responsive'

type Props = {}

function WorkExperience({}: Props) {
  const isSmallScreen = useMediaQuery({ query: '(max-width: 767px)' });

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className={`h-screen flex relative overflow-hidden flex-col text-left md:flex-row max-w-full px-5 md:px-10 justify-evenly mx-auto items-center ${isSmallScreen ? 'space-y-5' : ''}`}
    >
      <h3 className='absolute top-6 uppercase tracking-[20px] text-gray-500 text-2xl'>
        Experience
      </h3>

      <div className={`w-full flex ${isSmallScreen ? 'flex-col' : 'space-x-5'} overflow-x-scroll pt-10 snap-x snap-mandatory scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80`}>
        <ExpierenceCard />
        
      </div>
    </motion.div>
  )
}

export default WorkExperience
