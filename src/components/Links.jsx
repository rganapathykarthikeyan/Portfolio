import React from 'react'
import mail from '../assets/mail-svgrepo-com.svg'
import git from '../assets/github-142-svgrepo-com.svg'
import ln from '../assets/linkedin-svgrepo-com.svg'

const Links = () => {
  return (
    <div className='flex flex-col p-6'>
        <a href="mailto:rganapathykarthikeyan8@gmail.com" target="_blank" rel="noopener noreferrer">
            <button className='border-none bg-transparent'>
                <img src={mail} alt='mail' className='h-10'/>
            </button>
        </a>
        <a href="https://github.com/rganapathykarthikeyan" target="_blank" rel="noopener noreferrer">
            <button className='border-none bg-transparent'>
                <img src={git}  alt='github' className='h-10'/>
            </button>
        </a>
        <a href="https://www.linkedin.com/in/ganapathy-karthikeyan-r/" target="_blank" rel="noopener noreferrer">
            <button className='border-none bg-transparent'>
                <img src={ln} alt="LinkedIn" className='h-10'/>
            </button>
        </a>
    </div>
  )
}

export default Links