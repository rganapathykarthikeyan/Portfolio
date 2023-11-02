import React from 'react'
import Links from './Links'
import Info from './Info'
import ImageShow from './ImageShow'

const Intro = () => {
  return (
    <>
        <div className='h-screen w-screen flex flex-row items-center justify-center'>
            <Links />
            <Info />
            <ImageShow />
        </div>
    </>
  )
}

export default Intro