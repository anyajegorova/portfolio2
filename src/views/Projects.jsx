import { useState, useEffect } from 'react';

import './Projects.css';
import Cat1 from '../project_images/cat1.jpg';
import Cat2 from '../project_images/cat2.jpg';
import Cat3 from '../project_images/cat3.jpg';
import Cat4 from '../project_images/cat4.jpg';

const Projects = () => {
    const [currentImage, setCurrentImage] = useState(Cat1);
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
                    <div className='project-name' onMouseOver={() => setCurrentImage(Cat1)}>
                        <h5>Project 1</h5>
                        <h6>Website</h6>
                    </div>
                    <div className='project-name' onMouseOver={() => setCurrentImage(Cat2)}>
                        <h5>Project 2</h5>
                        <h6>Website</h6>
                    </div>
                    <div className='project-name' onMouseOver={() => setCurrentImage(Cat3)}>
                        <h5>Project 3</h5>
                        <h6>UX/UI Design</h6>
                    </div>
                    <div className='project-name' onMouseOver={() => setCurrentImage(Cat4)}>
                        <h5>Project 4</h5>
                        <h6>School Team Project</h6>
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