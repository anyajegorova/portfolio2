import { useRef } from 'react';
import './Contact.css';
import emailjs from '@emailjs/browser';

import LinkedIn from '../assets/linkedin_light.png';
import X from '../assets/x_light.png';
import GitHub from '../assets/github_light.png';

import Wave from '../assets/Wave0.png';

const Contact = () => {
    const form = useRef();

    const handleClick = (event, reason) => {
        if (reason === 'clickaway') {
            return
        }
        setOpen(false);
    }

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_ivkah3m', 'template_fbfq4dm', form.current, 'lMaEZmQbs-phf2SCI')
            .then((result) => {
                console.log(result.text);
                console.log(e);
            }, (error) => {
                console.log(error.text);
            })
            .then(
                (result) => {
                    form.current.reset();
                }
            )
    };

    return (
        <>
            <div className='contact-container'>
                <div className='form' data-scroll data-scroll-speed="3">
                    <p>Message me now!</p>
                    <form ref={form} onSubmit={sendEmail}>
                        <input type='text' name='user_name' placeholder='Name..' />
                        <input type='email' name='user_email' placeholder='Email..' />
                        <textarea name='message' placeholder='Message..' />
                        <button type='submit' onClick={handleClick}> Send </button>
                    </form>
                </div>
                <footer>
                    <p>
                        All Rights Reserved <span style={{ color: '#ff5e00' }}>@2023</span>
                    </p>
                    <div id='social-media-links'> <a><img src={LinkedIn} /></a>
                        <a><img src={GitHub} /></a>

                        <a><img src={X} /></a>
                    </div>

                    <img src={Wave} id='wave-footer'></img>
                </footer>
            </div>
        </>
    )
}

export default Contact;