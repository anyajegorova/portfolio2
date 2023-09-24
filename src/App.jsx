import { useState, useRef } from 'react'
import './App.css'
import './locomotive-scroll.css';
import { LocomotiveScrollProvider } from 'react-locomotive-scroll'
import Typewriter from 'typewriter-effect';


import Avatar from './assets/avatar.png';
import Avatar2 from './assets/avatar2.png';
import Coding from './assets/dark_grey_coding.png';
import Design from './assets/grey_design.png';

import Wave0 from './assets/Wave00.png';
import Wave1 from './assets/Wave01.png';
import Wave2 from './assets/Wave02.png';
import Wave3 from './assets/Wave03.png';
import Wave4 from './assets/Wave004.png';


import WaveLandingPage from './assets/WaveLandingPage.png';
import WaveProjectsBottom from './assets/WaveProjectsBottom.png';
import WaveFooter from './assets/WaveFooter.png';

import Footer from './components/Footer';

import Contact from './views/Contact';
import Projects from './views/Projects';

function App() {

  const ref = useRef(null);
  const options = { smooth: true, multiplier: 2 }


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
              <div className='secondary-description' id='design-description' >
                <img src={Design} alt='design icon' />
                <h5>UX/UI Design</h5>
                <div className='description-container'>
                  I utilize the best design practices for shaping
                  holistic  and modern interfaces
                </div>
              </div>
              <div className='secondary-description' id='grey-color-description' >
                <img src={Coding} alt='coding icon' />
                <h5>Software Development</h5>
                <div className='description-container' >
                  ..and turn them into code using latest
                  technologies
                </div>
              </div>
            </div>
            <img src={WaveLandingPage} className='wave'/>
          </div>
        </section>

        <section id='about_page' data-scroll-section >
          <div className='about_page-container'>

            <div className='technologies-list'>
              <div className='heading' >Designing + Coding</div>
              <ul>
                <li data-scroll data-scroll-direction="horizontal" data-scroll-speed="-2" >Javascript</li>
                <li data-scroll data-scroll-direction="horizontal" data-scroll-speed="2" style={{ marginLeft: 150 }}>ReactJS</li>
                <li data-scroll data-scroll-direction="horizontal" data-scroll-speed="-2" style={{marginRight: 15}}>NodeJS</li>
                <li data-scroll data-scroll-direction="horizontal" data-scroll-speed="2" style={{ marginLeft: 190 }}>PostgreSQL</li>
                <li data-scroll data-scroll-direction="horizontal" data-scroll-speed="-2" style={{ marginLeft: 90 }}>MongoDB</li>
                <li data-scroll data-scroll-direction="horizontal" data-scroll-speed="2" style={{ marginLeft: 30}}>Figma</li>
              </ul>

            </div>

            <div className='wave-container'>
              <img data-scroll data-scroll-speed="0.5" src={Wave0} />
              <img src={Wave1} />
              <img data-scroll data-scroll-speed="0.2" src={Wave2} />
              <img data-scroll data-scroll-speed="2.1" src={Wave3} />
              <img data-scroll data-scroll-speed="-1" src={Wave4} />
            </div>
          </div>
        </section>

        <section id='project_page' data-scroll-section>
          <Projects />
        </section>

        <section id='contact_page' data-scroll-section>
          <Contact />

        </section>
        {/* <Footer /> */}
      </main>

    </LocomotiveScrollProvider>

  )
}

export default App;
