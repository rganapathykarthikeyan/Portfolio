import {React} from 'react'
import Intro from './components/Intro'
import Projects from './components/Projects'

const App = () => {
  return (
    <div className='bg-BlueBg bg-cover bg-center bg-no-repeat'>
      <section className="h-screen w-screen snap-center"><Intro /></section>
      <section className="h-screen w-screen snap-center"><Projects /></section>
      <section className="h-screen w-screen snap-center"><Projects /></section>
    </div>
  )
}

export default App
