import './LandingPage.css';

import Typewriter from 'typewriter-effect';

import Avatar2 from '../assets/avatar2.png';
import Coding from '../assets/dark_grey_coding.png';
import Design from '../assets/grey_design.png';

import WaveLandingPage from '../assets/WaveLandingPage.png';
const LandingPage = () => {
    return (
        <>
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

                <div className='secondary-info' >
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
                <img src={WaveLandingPage} className='wave' />
            </div>
        </>
    )
}

export default LandingPage;
