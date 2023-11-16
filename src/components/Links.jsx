import React from 'react'
import mail from '../assets/mail-svgrepo-com.svg'
import git from '../assets/github-142-svgrepo-com.svg'
import ln from '../assets/linkedin-svgrepo-com.svg'

const Links = () => {
    return (
        <div className='flex flex-row p-6 w-full justify-between items-center border-b lg:border-b-0 lg:w-fit lg:flex-col '>
            <div className='flex lg:hidden lg:justify-center lg:items-center'>
                React Developer
            </div>
            <div className='flex flex-row p-2 lg:p-6 lg:flex-col'>
                <a href="mailto:rganapathykarthikeyan8@gmail.com" target="_blank" rel="noopener noreferrer">
                    <button className='border-none bg-transparent'>
                        <img src={mail} alt='mail' className='h-7 lg:h-10' />
                    </button>
                </a>
                <a href="https://github.com/rganapathykarthikeyan" target="_blank" rel="noopener noreferrer">
                    <button className='border-none bg-transparent'>
                        <img src={git} alt='github' className='h-7 lg:h-10' />
                    </button>
                </a>
                <a href="https://www.linkedin.com/in/ganapathy-karthikeyan-r/" target="_blank" rel="noopener noreferrer">
                    <button className='border-none bg-transparent'>
                        <img src={ln} alt="LinkedIn" className='h-7 lg:h-10' />
                    </button>
                </a>
            </div>
        </div>
    )
}

export default Links