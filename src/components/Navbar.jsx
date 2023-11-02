import './Navbar.css';
import { useState } from 'react';

import Menu from '../assets/hamburger_white.png';
import CloseMenu from '../assets/cross_white3.png';


const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const handleClick = () => {
        menuOpen ? setMenuOpen(false) : setMenuOpen(true);
    }

    return (
        <div className='navbar-container' >
            <nav>
                <a>About</a>
                <a>Projects</a>
                <a>Contact</a>
                {menuOpen ? <img src={CloseMenu} onClick={handleClick} id='hamburger_menu' /> : <img src={Menu} id='hamburger_menu' onClick={handleClick} />}
            </nav>
            {menuOpen ? <menu className='down'>
                <ul>
                    <li>
                        <a>About</a>
                    </li>
                    <li>
                        <a>Projects</a>
                    </li>
                    <li>
                        <a>Contact</a>
                    </li>
                </ul>
            </menu> : <menu className='up'>
                <ul>
                    <li>
                        <a>About</a>
                    </li>
                    <li>
                        <a>Projects</a>
                    </li>
                    <li>
                        <a>Contact</a>
                    </li>
                </ul>
            </menu> }
            
        </div>
    )
}

export default Navbar;