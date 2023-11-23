import React from 'react'
import photo from '../assets/ProfileImg.jpeg'
import { Tilt } from 'react-tilt';
import {motion} from 'framer-motion'

const ImageShow = () => {
  return (
    <Tilt>
      <motion.div initial={{opacity: 0, scale: 0.5}} whileInView={{opacity:1, scale:1}} transition={{duration: 0.8}}>
        <div className='p-6' options={{max: 45, scale: 0.5, speed: 450}}>
          <img src={photo} className='h-72 w-72 rounded-3xl' alt='Profile' />
        </div>
    </motion.div>
    </Tilt>
  )
}

export default ImageShow