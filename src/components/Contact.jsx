import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import './contact.css';

const Contact = () => {
  const form = useRef();
  const [isPopupVisible, setIsPopupVisible] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_nhz0ilu',
        'template_14g3btp',
        form.current,
        '2ZUnLBdz5mu5jFNS0'
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log('Message sent successfully!');
          setIsPopupVisible(true);
          setTimeout(() => {
            setIsPopupVisible(false);
          }, 3000); // Close popup after 3 seconds
        },
        (error) => {
          console.log(error.text);
          console.log('Error sending message.');
        }
      );
  
    // Reset the form after submission if needed
    e.target.reset();
  };

  return (
    <section className='contact container section' id='contact'>
      <h2 className='section_title'>Get in Touch</h2>

      <div className='contact_container grid'>
        <div className='contact_info'>
          <h3 className='contact_title'>Let's talk about everything!</h3>
          <p className='contact_details'>Send me an email.</p>
        </div>

        <form ref={form} onSubmit={sendEmail} className='contact_form'>
          <div className='contact_form-group'>
            <div className='contact_form-div'>
              <input
                type='text'
                className='contact_form-input'
                name='Your Name' 
                placeholder='Your Name'
              />
            </div>

            <div className='contact_form-div'>
              <input
                type='email'
                className='contact_form-input'
                name='Your E-mail' 
                placeholder='Your E-mail'
              />
            </div>
          </div>

          <div className='contact_form-div'>
            <input
              type='text'
              className='contact_form-input'
              name='Your Subject' 
              placeholder='Your Subject'
            />
          </div>

          <div className='contact_form-div contact_form-area'>
            <textarea
              cols='30'
              rows='10'
              className='contact_form-input'
              name='Please write your message here'
              placeholder='Please write your message here'></textarea>
          </div>

          <button type='submit' className='btn'>
            Send Message
          </button>
        </form>

        <div className='popup-container' style={{ display: isPopupVisible ? 'block' : 'none' }}>
      <span className='close-popup' onClick={() => setIsPopupVisible(false)}>&times;</span>
      <p>Message sent successfully!</p>
    </div>
      </div>
    </section>
  );
};

export default Contact;
