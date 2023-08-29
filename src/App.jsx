import { useState, useRef } from 'react'
import './App.css'
import { LocomotiveScrollProvider } from 'react-locomotive-scroll'

import Avatar from './assets/avatar.png';
import Avatar2 from './assets/avatar2.png';
import Coding from './assets/grey_coding.png';
import Design from './assets/grey_design.png';

import Navbar from './components/Navbar';

function App() {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const options = { smooth: true, multiplier: 3 }

  return (
    <LocomotiveScrollProvider options={options} containerRef={ref}>
      <main data-scroll-container ref={ref}>
        <section id='landing_page' data-scroll-section>
          <Navbar />
          <div className='section-container'>
            <div className='main-info'>
              <img src={Avatar2} alt='avatar image' />
              <div className='description'>
                <span>Hello and Welcome!<br />
                  My name is <span className='orange-text'>Anna Jegorova</span> and I’m a future <span className='orange-text'>Front-End Developer</span>.</span></div>
            </div>
            <div className='secondary-info'>
              <div className='secondary-description'>
                <img src={Design} alt='design icon' />
                <h5>UX/UI Design</h5>

                <div className='description-container'>
                  I utilize the best design practices for shaping
                  holistic  and modern interfaces
                </div>
              </div>
              <div className='secondary-description'>
                <img src={Coding} alt='coding icon' />
                <h5>Software Development</h5>
                <div className='description-container'>
                  ..and turn them into code using latest
                  technologies
                </div>
              </div>

            </div>
          </div>
        </section>

        <section id='about_page' data-scroll-section>
          <div className='about_page-container'>
            <div className='heading'>Designing + Coding</div>
            <div className='technologies-list'>
              <ul>
                <li>Javascript</li>
                <li>ReactJS</li>
                <li>NodeJS</li>
                <li>PostgreSQL</li>
                <li>MongoDB</li>
                <li>Figma</li>
              </ul>

            </div>
          </div>
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
