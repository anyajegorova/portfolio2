import { useState, useRef } from 'react'
import './App.css'
import { LocomotiveScrollProvider } from 'react-locomotive-scroll'
import Typewriter from 'typewriter-effect';


import Avatar from './assets/avatar.png';
import Avatar2 from './assets/avatar2.png';
import Coding from './assets/grey_coding.png';
import Design from './assets/grey_design.png';

import Wave0 from './assets/Wave00.png';
import Wave1 from './assets/Wave01.png';
import Wave2 from './assets/Wave02.png';
import Wave3 from './assets/Wave03.png';

import Footer from './components/Footer';

import Contact from './views/Contact';
import Projects from './views/Projects';

function App() {

  const ref = useRef(null);
  const options = { smooth: true, multiplier: 3 }


  return (
    <LocomotiveScrollProvider options={options} containerRef={ref}>
      <main data-scroll-container ref={ref}>

        <section id='landing_page' data-scroll-section>
          {/* <Navbar /> */}
          <div className='section-container'>
            <div className='main-info'>
              <img src={Avatar2} alt='avatar image' />
              <div className='description'>

                <Typewriter
                  onInit={(typewriter) => {
                    typewriter.typeString("Hello and Welcome!")
                      .callFunction(() => {
                        console.log('String typed')
                      })
                      .pauseFor(300)
                      .deleteAll()
                      .pauseFor(300)
                    typewriter.typeString("My name is <span style='color: #FF5E00'>Anna Jegorova</span> and I'm a future <span style='color: #FF5E00'>Front-end Developer</span>!")
                      .start()
                  }}
                />

              </div>
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

        <section id='about_page' data-scroll-section >
          <div className='about_page-container'>
            <div className='heading' data-scroll data-scroll-speed="-4" >Designing + Coding</div>
            <div className='technologies-list'>
              <ul>
                <li data-scroll data-scroll-direction="horizontal" data-scroll-speed="-3" >Javascript</li>
                <li data-scroll data-scroll-direction="horizontal" data-scroll-speed="3" style={{ paddingLeft: 5}}>ReactJS</li>
                <li data-scroll data-scroll-direction="horizontal" data-scroll-speed="-3">NodeJS</li>
                <li data-scroll data-scroll-direction="horizontal" data-scroll-speed="3" style={{ paddingLeft: 12 }}>PostgreSQL</li>
                <li data-scroll data-scroll-direction="horizontal" data-scroll-speed="-3" style={{ paddingLeft: 122}}>MongoDB</li>
                <li data-scroll data-scroll-direction="horizontal" data-scroll-speed="3" style={{ paddingRight: 170 }}>Figma</li>
              </ul>

            </div>

            <div className='wave-container'>
              <img data-scroll data-scroll-speed="0.5" src={Wave0} />
              <img src={Wave1} />
              <img data-scroll data-scroll-speed="0.2" src={Wave2} />
              <img data-scroll data-scroll-speed="2.1" src={Wave3} />
            </div>
          </div>
        </section>

        <section id='project_page' data-scroll-section>
          <Projects />
        </section>

        <section id='contact_page' data-scroll-section>
          <Contact />

        </section>
        <Footer />
      </main>

    </LocomotiveScrollProvider>

  )
}

export default App;
