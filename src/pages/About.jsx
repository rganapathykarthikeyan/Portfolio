import React, { useState } from 'react';
import { motion } from "framer-motion"

import htmlicon from '../assets/htmlicon.svg'
import cssicon from '../assets/cssicon.svg'
import jsicon from '../assets/jsicon.svg'
import reactIcn from "../assets/reacticon.svg"
import pythonicon from '../assets/pythonicon.svg'
import firebaseicon from '../assets/firebaseicon.svg'

import { Refresh } from '../components/refresh';

const icons = [
  {
    id: 1,
    icon: htmlicon,
    name: 'htmlicon',
    title: "HTML"
  },
  {
    id: 2,
    icon: cssicon,
    name: 'cssicon',
    title: "CSS"
  },
  {
    id: 3,
    icon: jsicon,
    name: 'jsicon',
    title: "JS"
  },
  {
    id: 4,
    icon: reactIcn,
    name: 'reactIcn',
    title: "React"
  },
  {
    id: 5,
    icon: pythonicon,
    name: 'pythonicon',
    title: "Python"
  },
  {
    id: 6,
    icon: firebaseicon,
    name: 'firebaseicon',
    title: "Firebase"
  },
]


const About = () => {

  const [refresh, setRefresh] = useState(false);

  const animationVarients = {
    reset: { x: 0, y: 0 },
    rest: {x: 0.1, y: 0.1}
  }

  return (
    <div className='h-full w-9/10 flex flex-col items-center justify-start p-8'>
      <motion.div initial={{ opacity: 0, scale: 0.5 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8 }}>
        <div className='font-BlackOps text-4xl text-white sm:text-6xl'>ABOUT ME</div>
      </motion.div>
      <motion.div className='hidden w-[85%] font-Teko text-slate-300 rounded-lg border text-xl shadow-lg shadow-[#192230] bg-[#1e293ba8] border-[#0095ff]  p-6 m-2 sm:flex hover:border-slate-100' initial={{ opacity: 0, y: 25 }} whileInView={{ opacity: 1, y: 0 }} whileHover={{ scale: 1.1 }} transition={{ duration: 1 }}>
        Hello, I am Ganapathy Karthikeyan, born in Tirunelveli. I have been interested in Computers ever since I was a kid. I pursued my interest and completed my Bachelor's in CS. I had a passion for Web Development and Game Development fields. I like the way the product changes after a few tweaks in the code. As I completed the degree, I learned the web development framework "React" and the basics of Flutter.
      </motion.div>
      <motion.div className='w-[85%] font-Teko text-slate-300 rounded-lg text-base border mb-8 shadow-lg shadow-[#192230] bg-[#1e293ba8] border-[#0095ff] p-6 m-2 hover:border-slate-100 sm:text-xl' initial={{ opacity: 0, y: 25 }} whileInView={{ opacity: 1, y: 0 }} whileHover={{ scale: 1.1 }} transition={{ duration: 1.3 }}>
        I'm a skilled web developer with knowledge and expertise in JavaScript, TypeScript and frameworks like React Js, React Native. I am a quick learner and can collaborate with teammates and clients to improve myself and to create efficient, user-friendly products.
      </motion.div>
      <motion.div className='w-[85%] h-[85%]' initial={{ opacity: 0, y: 25 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 2, duration: 1.5 }}>
        <div className='flex flex-row justify-between items-center pb-3 border-b'>
          <span className='font-Pacifico text-xl'>Skills:</span>
          <div className='border shadow p-2 shadow-[#192230] bg-[#1e293b34] rounded-lg'><Refresh onClick={() => {setRefresh(pre => !pre); console.log(refresh)}} /></div>
        </div>
        <div className='flex flex-row w-full justify-evenly flex-wrap'>
          {icons.map(icon => {
            return (
              <motion.div className=' cursor-pointer flex flex-col items-center p-5'
                variants={animationVarients} 
                animate={refresh ? "reset" : "rest"} 
                transition={{ duration: 3 }} 
                drag dragConstraints={{ top: 0, left: -50, right: 50, bottom: 50 }}>
                <img src={icon.icon} alt={icon.name} className='h-6 sm:h-10 lg:h-10' />
                <span className='font-Teko text-2xl'>{icon.title}</span>
              </motion.div>
            )
          })}
        </div>
      </motion.div>
    </div>
  )
}

export default About;