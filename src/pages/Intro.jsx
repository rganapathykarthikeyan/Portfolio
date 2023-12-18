import React from 'react'
import Links from '../components/Links'
import Info from '../components/Info'
import ImageShow from '../components/ImageShow'
import {motion} from 'framer-motion'

const Intro = () => {
  return (
    <>
        <div className='h-full w-full flex flex-col items-center justify-start lg:flex-row lg:justify-center'>
            <Links />
            <Info />
            <ImageShow />
        </div>
        <div className='absolute xs:bottom-3 bottom-10 w-full flex justify-center items-start'>
          <div className='w-[30px] h-[50px] rounded-3xl border-4 border-slate-300 flex justify-center item-start p-1'>
            <motion.div animate={{y: [0,15,0]}} transition={{duration: 1.5, repeat: Infinity, repeatType: 'loop'}} className='w-3 h-3 rounded-full bg-slate-300 m-1' />
          </div>
        </div>
    </>
  )
}

export default Intro