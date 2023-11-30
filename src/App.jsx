import {React} from 'react'
import Intro from './pages/Intro'
import Projects from './pages/Projects'
import About from './pages/About'
import Contact from './pages/Contact'

const App = () => {
  return (
    <div className='bg-BlueBg bg-cover bg-center bg-no-repeat'>
      <section className="h-screen w-screen snap-center"><Intro /></section>
      <section className="h-screen w-screen snap-center"><About /></section>
      <section className="h-screen w-screen snap-center"><Projects /></section>
      <section className="h-screen w-screen snap-center"><Contact /></section>
    </div>
  )
}

export default App
