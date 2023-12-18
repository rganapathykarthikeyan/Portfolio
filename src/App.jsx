import {React} from 'react'
import Intro from './pages/Intro'
import Projects from './pages/Projects'
import About from './pages/About'
import Contact from './pages/Contact'

const App = () => {
  return (
    <div className='bg-BlueBg bg-cover bg-center bg-no-repeat'>
      <section className="h-screen w-screen"><Intro /></section>
      <section className="h-screen w-screen"><About /></section>
      <section className="h-screen w-screen"><Projects /></section>
      <section className="h-screen w-screen"><Contact /></section>
    </div>
  )
}

export default App
