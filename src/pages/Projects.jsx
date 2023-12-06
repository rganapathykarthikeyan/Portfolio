import React, { useState } from 'react'
import { motion } from "framer-motion"
import Taiyo from '../assets/img/taiyo.png'
import Fuzzy from '../assets/img/Fuzzy.png'
import Gamenotes from '../assets/img/gamenotes.jpg'
import SmartBin from '../assets/img/SmartBin.jpg'
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
      module: ["React", "CSS", "react-query", "chart.js", "leaflet", "react-redux", "react-router"]
    },
    {
      id: 1,
      name: "Fuzzy API Search",
      image: Fuzzy,
      module: ["React", "Material UI", "fuse.js", "Modal", "JSON"]
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
      module: ["React", "Tailwind CSS", "TypeScript", "Framer-motion", "split-text-js"]
    }
  ]

  return (
    <div className='h-screen flex flex-col items-center justify-start p-8'>
      <motion.div initial={{ opacity: 0, scale: 0.5 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8 }}>
        <div className='font-Abril text-4xl text-white sm:text-6xl'>PROJECTS</div>
      </motion.div>
      <div className='w-screen flex flex-col-reverse lg:flex-row'>
        <motion.div initial={{ opacity: 0, y: -35 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.8, duration: 0.8 }} className='h-full flex-1 sm:mt-5'>
          <div className='flex flex-row flex-wrap lg:flex-col'>
            {Projects.map(project => {

              if (proj === project.id) {
                return (
                  <button onClick={() => { onselectProj(project.id) }} key={project.id} className='bg-transparent border-white focus:outline-none shadow-lg shadow-[#192230] text-left'>
                    <span className='font-Teko text-l lg:text-7xl border-none'>{project.name}</span>
                  </button>
                )
              }
              else {
                return (
                  <button onClick={() => { onselectProj(project.id) }} key={project.id} className='bg-transparent border-none text-left'>
                    <span className='font-Teko text-l lg:text-7xl  border-none'>{project.name}</span>
                  </button>
                )
              }
            })}
          </div>
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 35 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.8, duration: 0.8 }} className='flex-1 flex-col p-5 sm:mt-5' >
          <div className='flex justify-center items-center mb-3'>
            <div className='border-slate-400 border p-2 rounded-lg  '>
              <img src={Projects[proj].image} className='h-52 lg:h-96' />
            </div>
          </div>
          <div className='p-2 rounded-lg bg-[#1e293ba8] border-[#0095ff] border flex flex-row flex-wrap'>
            {Projects[proj].module.map((mod, i) => {
              return (
                <div key={i} className='p-2 flex flex-row'>
                  <img src={tick} className='h-6' />{mod}
                </div>
              )
            })}
          </div>
          <div className='w-full flex m-2 mr-4 justify-end'>
            <button onClick={nextOne} className='bg-[#1e293ba8]'>Next</button>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default Projects;