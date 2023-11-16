import React from 'react'
import Links from './Links'
import Info from './Info'
import ImageShow from './ImageShow'

const Intro = () => {
  return (
    <>
        <div className='h-full w-9/10 flex flex-col items-center justify-start lg:flex-row lg:items-center lg:justify-center'>
            <Links />
            <Info />
            <ImageShow />
        </div>
    </>
  )
}

export default Intro