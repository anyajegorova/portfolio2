import { useRef } from 'react';
import './Contact.css';
import emailjs from '@emailjs/browser';

import LinkedIn from '../assets/linkedin_white.png';
import Facebook from '../assets/facebook_white.png';
import X from '../assets/x_white.png';
import GitHub from '../assets/github_white2.png';
import Arrow from '../assets/arrow_top_white.png';

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
                <div className='social-media-links'>
                    <a href='https://www.linkedin.com/in/anna-jegorova-b625a31b8/'><img src={LinkedIn} alt='LinkedIn icon' /></a>
                    <img src={X} alt='X icon (Twitter)' />
                    <img src={Facebook} alt='Facebook icon' />
                    <a href='https://github.com/anyajegorova'><img src={GitHub} alt='GitHub icon' /></a>
                </div>

            </div>
        </>
    )
}

export default Contact;