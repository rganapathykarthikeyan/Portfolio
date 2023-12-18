import React from 'react';
import mail from '../assets/mail-svgrepo-com.svg';
import git from '../assets/github-142-svgrepo-com.svg';
import ln from '../assets/linkedin-svgrepo-com.svg';
import {motion} from 'framer-motion';

const Links = () => {
    return (
        <div className='flex flex-row p-4 w-full justify-between items-center border-b lg:border-b-0 lg:w-fit lg:flex-col'>
            <motion.div className='flex h-full justify-center items-center text-[#ffffff] lg:hidden font-Teko text-2xl sm:text-4xl'
                initial={{opacity: 0, scale: 0.5}} whileInView={{opacity:1, scale:1}} transition={{duration: 0.8}}>
                REACT DEVELOPER
            </motion.div>
            <motion.div className='flex flex-row lg:p-6 lg:flex-col'
                initial={{opacity: 0, x:-25}} whileInView={{opacity:1, x:0}} transition={{duration: 1.5}}>
                <a href="mailto:rganapathykarthikeyan8@gmail.com" target="_blank" rel="noopener noreferrer">
                    <button className='border-none bg-transparent'>
                        <img src={mail} alt='mail' className='h-6 sm:h-10 lg:h-10' />
                    </button>
                </a>
                <a href="https://github.com/rganapathykarthikeyan" target="_blank" rel="noopener noreferrer">
                    <button className='border-none bg-transparent'>
                        <img src={git} alt='github' className='h-6 sm:h-10 lg:h-10' />
                    </button>
                </a>
                <a href="https://www.linkedin.com/in/ganapathy-karthikeyan-r/" target="_blank" rel="noopener noreferrer">
                    <button className='border-none bg-transparent'>
                        <img src={ln} alt="LinkedIn" className='h-6 sm:h-10 lg:h-10' />
                    </button>
                </a>
            </motion.div>
        </div>
    )
}

export default Links