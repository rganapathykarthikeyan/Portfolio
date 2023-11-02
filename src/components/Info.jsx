import React, {useEffect} from 'react'
import { gsap } from 'gsap'
import SplitTextJS from 'split-text-js';
import classes from './info.module.css'

const Info = () => {

  useEffect(() => {
    const variables = gsap.utils.toArray('li');
    const tl = gsap.timeline();
    const lastTitle = variables.pop();
    variables.forEach(title => {
      const splitTitle = new SplitTextJS(title);
      tl.from(splitTitle.chars, { opacity: 0, y: 80, rotateX: -90, stagger: 0.02 }, "<0").to(splitTitle.chars, { opacity: 0, y: -80, rotateX: 90, stagger: 0.02 }, "<1")
    })
    const splitTitle = new SplitTextJS(lastTitle)
    tl.from(splitTitle.chars, { opacity: 0, y: 80, rotateX: -90, stagger: 0.02 }, "<").to(splitTitle.chars, { opacity: 1, y: 0, rotateX: 0 }, "<1")
  }, [])

  return (
    <div className='p-16 border-r border-l'>
      <div className='pt-2'>
        <p className='font-Pacifico text-xl'>Hi. I am</p>
      </div>
      <div className={`pt-4 ${classes.main}`}>
        <p className={`font-BlackOps text-6xl ${classes.title}`}>GANAPATHY</p>
        <p className={`font-BlackOps text-6xl ${classes.title2}`}>KARTHIKEYAN R</p>
      </div>
        <div style={{lineHeight: 0, listStyle:'none'}} className='mt-6 text-3xl'>
          <li className='font-Oswald'>HTML</li>
          <li className='font-Oswald'>CSS</li>
          <li className='font-Oswald'>JavaScript</li>
          <li className='font-Oswald'>React JS</li>
          <li className='font-Oswald'>Web Developer</li>
        </div>
    </div>
  )
}

export default Info