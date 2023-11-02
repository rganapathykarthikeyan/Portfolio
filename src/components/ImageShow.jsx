import React from 'react'
import photo from '../assets/ProfileImg.jpeg'

const ImageShow = () => {
  return (
    <div className='p-6'>
      <img src={photo} className='h-80 w-80 rounded-3xl' alt='Profile' />
    </div>
  )
}

export default ImageShow