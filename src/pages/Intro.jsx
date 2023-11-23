import React from 'react'
import Links from '../components/Links'
import Info from '../components/Info'
import ImageShow from '../components/ImageShow'

const Intro = () => {
  return (
    <>
        <div className='h-full w-9/10 flex flex-col items-center justify-start lg:flex-row lg:justify-center'>
            <Links />
            <Info />
            <ImageShow />
        </div>
    </>
  )
}

export default Intro