import {React} from 'react'
import Intro from './pages/Intro'
import Projects from './pages/Projects'
import About from './pages/About'

const App = () => {
  return (
    <div className='bg-BlueBg bg-cover bg-center bg-no-repeat'>
      <section className="h-screen w-screen snap-center"><Intro /></section>
      <section className="h-screen w-screen snap-center"><About /></section>
      <section className="h-screen w-screen snap-center"><Projects /></section>
    </div>
  )
}

export default App
