import { useRef } from 'react'
import './App.css'
import './locomotive-scroll.css';
import { LocomotiveScrollProvider } from 'react-locomotive-scroll'

import LandingPage from './views/LandingPage';
import About from './views/About';
import Projects from './views/Projects';
import Contact from './views/Contact';

function App() {

  const ref = useRef(null);
  const options = { smooth: true, multiplier: 2 }


  return (
    <LocomotiveScrollProvider options={options} containerRef={ref}>
      <main data-scroll-container ref={ref}>

        <section id='landing_page' data-scroll-section>
          <LandingPage />
        </section>

        <section id='about_page' data-scroll-section >
          <About />
        </section>

        <section id='project_page' data-scroll-section>
          <Projects />
        </section>

        <section id='contact_page' data-scroll-section>
          <Contact />

        </section>
      </main>

    </LocomotiveScrollProvider>

  )
}

export default App;
