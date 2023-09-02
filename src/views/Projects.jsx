import { useState, useEffect } from 'react';

import './Projects.css';
import Tastybites from '../project_images/tastybites_design.png';
import Tastybites2 from '../project_images/tastybites_mockup.png';
import Room from '../project_images/room_collage_blender.png'
import Clock from '../project_images/clock.png';
import CourseApp from '../project_images/courseapp_marvel.png';

const Projects = () => {
    const [currentImage, setCurrentImage] = useState(Tastybites);
    // const images = [{ name: 'Project 1', src: Cat1 }, { name: 'Project 2', src: Cat2 }, { id: 'Project 3', src: Cat3 }, { id: 'Project 4', src: Cat4 }]

    // const handleChange = (e) => {
    //     console.log(currentImage);
    //     console.log(e.target)
    //     for (let i = 1; i <= images.length - 1; i++) {
    //         e.target.value == images[i].name ? setCurrentImage(images[i].src) : setCurrentImage('Error');
    //         console.log(images[i].name)
    //     }
    // }





    return (
        <>
            <div className='main-container'>
                <div className='projects-list' data-scroll data-scroll-speed="3">
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
                    <div className='project-name' onMouseOver={() => setCurrentImage(CourseApp)}>
                        <h5>UX App</h5>
                        <h6>Team Project, Marvel</h6>
                    </div>
                </div>
                <div className='projects-image'>
                    <img src={currentImage} alt='image of the project' />
                </div>
            </div>
        </>
    )
}

export default Projects;