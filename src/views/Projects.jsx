import { useState, useEffect } from 'react';

import './Projects.css';
import Tastybites from '../project_images/tastybites_design.png';
import Tastybites2 from '../project_images/tastybites_mockup.png';
import Room from '../project_images/room_collage_blender.png'
import Clock from '../project_images/clock.png';
import CourseApp from '../project_images/courseapp_marvel.png';

import Wave5 from '../assets/wave05.png'

const Projects = () => {
    const [currentImage, setCurrentImage] = useState(Tastybites);
    const [option, setOption] = useState('design');

    useEffect(() => {
        toggleOption();
    }, []);

    const toggleOption = () => {
        if (option == 'design') {
            return (
                <div>
                    <div className='project-name' onMouseOver={() => setCurrentImage(CourseApp)}>
                        <h5>UX App</h5>
                        <h6>Team Project, Axure</h6>
                    </div>

                    <div className='project-name' onMouseOver={() => setCurrentImage(Tastybites)}>
                        <h5>Tastybites</h5>
                        <h6>UI Design, Figma</h6>
                    </div>

                    <div className='project-name' onMouseOver={() => setCurrentImage(Room)}>
                        <h5>3D Room</h5>
                        <h6>3D Design, Blender</h6>
                    </div>

                    <div className='project-name' onMouseOver={() => setCurrentImage(Clock)}>
                        <h5>3D Clock</h5>
                        <h6>3D Design, Blender</h6>
                    </div>
                </div>
            )
        } else if (option == 'code') {
            return (
                <div>
                    <div className='project-name' onMouseOver={() => setCurrentImage(CourseApp)}>
                        <h5>Project 1</h5>
                        <h6>Webpage, ReactJS</h6>
                    </div>

                    <div className='project-name' onMouseOver={() => setCurrentImage(Tastybites)}>
                        <h5>Tastybites</h5>
                        <h6>HTML, CSS, ReactJS</h6>
                    </div>

                    <div className='project-name' onMouseOver={() => setCurrentImage(Room)}>
                        <h5>Project 3</h5>
                        <h6>Mobile App, React Native</h6>
                    </div>

                    <div className='project-name' onMouseOver={() => setCurrentImage(Clock)}>
                        <h5>Portfolio</h5>
                        <h6>HTML, CSS, ReactJS</h6>
                    </div>
                </div>
            )
        }
    }

    return (
        <>


            <div className='main-container'>
                <div className='projects-list-container'>
                    <div className='toggle-container' data-scroll data-scroll-speed="3">
                        <button className='toggle-button' id={option === 'design' ? 'selected' : 'notSelected'} onClick={() => setOption('design')}>Design</button>
                        <button className='toggle-button' id={option === 'code' ? 'selected' : 'notSelected'} onClick={() => setOption('code')}>Code</button>
                    </div>
                    <div className='projects-list' data-scroll data-scroll-speed="3">
                        {toggleOption()}
                    </div>
                </div>
                <div className='projects-image'>
                    <img src={currentImage} alt='image of the project' />
                </div>

            </div>
            <img src={Wave5} id='wave-projects'></img>
        </>
    )
}

export default Projects;