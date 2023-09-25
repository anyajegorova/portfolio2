import './About.css';

import Wave0 from '../assets/Wave00.png';
import Wave1 from '../assets/Wave01.png';
import Wave2 from '../assets/Wave02.png';
import Wave3 from '../assets/Wave03.png';
import Wave4 from '../assets/Wave004.png';

const About = () => {
    return (
        <>
 <div className='about_page-container'>

<div className='technologies-list'  >
  <div className='heading'>Designing + Coding</div>
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
        </>
    )
}

export default About;