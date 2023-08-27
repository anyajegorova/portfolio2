import { useState, useRef } from 'react'
import './App.css'
import { LocomotiveScrollProvider } from 'react-locomotive-scroll'

import Avatar from './assets/avatar.png';

function App() {
  const [count, setCount] = useState(0)
  const ref = useRef(null);
  const options = { smooth: true, multiplier: 4 }

  return (
    <LocomotiveScrollProvider options={options} containerRef={ref}>
      <main data-scroll-container ref={ref}>
        <section id='landing_page' data-scroll-section>
          <div className='section-container'>
            <div className='main-info'>
              <img src={Avatar} alt='avatar image' />
              <div className='description'>
                <span>Hello and Welcome!<br />
                  My name is <span className='orange-text'>Anna Jegorova</span> and I’m a future <span className='orange-text'>Front-End Developer</span>.</span></div>
            </div>
          </div>
        </section>
        <section id='about_page' data-scroll-section>
          <h1>About Page</h1>
        </section>
        <section id='project_page' data-scroll-section>
          <h1>Project Page</h1>
        </section>
        <section id='contact_page' data-scroll-section>
          <h1>Contact Page</h1>
        </section>
      </main>
    </LocomotiveScrollProvider>
  )
}

export default App
