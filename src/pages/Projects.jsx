import React, { useState } from 'react'
import { motion } from "framer-motion"
import Taiyo from '../assets/img/taiyo.png'
import Fuzzy from '../assets/img/Fuzzy.png'
import Gamenotes from '../assets/img/gamenotes.jpg'
import SmartBin from '../assets/img/Smartbin.jpg'
import Portfolio from '../assets/img/portfolio.png'
import tick from '../assets/verified.svg'

const Projects = () => {

  const [proj, setProj] = useState(0);
  const onselectProj = (i) => {
    setProj(i);
    console.log(i)
  }

  const nextOne = () => {
    if (proj !== 4) {
      setProj(prev => prev + 1);
    }
    else {
      setProj(0);
    }
  }

  const Projects = [
    {
      id: 0,
      name: "Covid Map",
      image: Taiyo,
      module: ["React", "CSS", "react-query", "chart.js", "leaflet", "react-redux", "react-router"],
      link: "https://taiyo-challenge.vercel.app/"
    },
    {
      id: 1,
      name: "Fuzzy API Search",
      image: Fuzzy,
      module: ["React", "Material UI", "fuse.js", "Modal", "JSON"],
      link: "https://qmax-challenge.vercel.app/"
    },
    {
      id: 2,
      name: "Game Notes",
      image: Gamenotes,
      module: ["React Native", "CSS", "Firebase", "Async Storage", "Image-picker"]
    },
    {
      id: 3,
      name: "SmartBin",
      image: SmartBin,
      module: ["React Native", "CSS", "Firebase", "Image-picker", "expo-location"]
    },
    {
      id: 4,
      name: "This Portfolio",
      image: Portfolio,
      module: ["React", "Tailwind CSS", "TypeScript", "Framer-motion", "split-text-js"],
      link: "https://rganapathykarthikeyan.vercel.app/"
    }
  ]

  return (
    <div className='h-full w-full flex flex-col items-center justify-start p-8'>
      <motion.div initial={{ opacity: 0, scale: 0.5 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8 }}>
        <div className='font-Abril text-4xl  text-[#ffffff] sm:text-6xl'>PROJECTS</div>
      </motion.div>
      <div className='w-full flex flex-col-reverse lg:flex-row'>
        <motion.div initial={{ opacity: 0, y: -35 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.8, duration: 0.8 }} className='h-full flex-1 sm:mt-5'>
          <div className='flex flex-row flex-wrap lg:flex-col'>
            {Projects.map(project => {

              if (proj === project.id) {
                return (
                  <button onClick={() => { onselectProj(project.id) }} key={project.id} className='bg-transparent border-white focus:outline-none shadow-lg shadow-[#192230] text-left'>
                    <span className='font-Teko text-l  text-[#ffffff] lg:text-7xl border-none'>{project.name}</span>
                  </button>
                )
              }
              else {
                return (
                  <button onClick={() => { onselectProj(project.id) }} key={project.id} className='bg-transparent border-none text-left'>
                    <span className='font-Teko text-l lg:text-7xl text-slate-100 border-none'>{project.name}</span>
                  </button>
                )
              }
            })}
          </div>
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 35 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.8, duration: 0.8 }} className='flex-1 flex-col p-5 sm:mt-5' >
          <div className='flex justify-center items-center mb-3'>
            <div className='border-slate-400 border p-2 rounded-lg hover:border-[#0095ff]'>
              <a href={Projects[proj].link} target='_blank'>
                <img src={Projects[proj].image} className='h-52 lg:h-96' />
              </a>
            </div>
          </div>
          <div className='p-2 rounded-lg bg-[#1e293ba8] border-[#0095ff] border flex flex-row flex-wrap'>
            {Projects[proj].module.map((mod, i) => {
              return (
                <div key={i} className='p-2 flex flex-row  text-[#ffffff]'>
                  <img src={tick} className='h-6' />{mod}
                </div>
              )
            })}
          </div>
          <div className='w-full flex m-2 mr-4 justify-end'>
            <button onClick={nextOne} className='bg-[#1e293ba8] text-[#ffffff]'>Next</button>
          </div>
        </motion.div>
      </div>
      <div className='xs:bottom-3 lg:hidden bottom-10 w-full flex justify-center items-start'>
        <div className='w-[30px] h-[54px] rounded-3xl border-4 border-slate-300 flex justify-center item-start p-1'>
          <motion.div animate={{ y: [0, 15, 0] }} transition={{ duration: 1.5, repeat: Infinity, repeatType: 'loop' }} className='w-3 h-3 rounded-full bg-slate-300 m-1' />
        </div>
      </div>
    </div>
  )
}

export default Projects;