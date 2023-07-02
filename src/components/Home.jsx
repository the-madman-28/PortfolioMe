import React from 'react'
import './home.css';
import Me from '../assets/avatar-1.svg';
import HeaderSocials from './HeaderSocials.jsx';
import ScrollDown from './ScrollDown';
import Shapes from './Shapes';

const Home = () => {  
  return (
    <section className='home container' id='home'>
      <div className='intro'>
        <img src={Me} alt='Home' className='home_img'/>
        <h1 className='home_name'>Hello !!!</h1>
        <h1 className='home_name'>I am Nitin Babu</h1>
        
        <span className='home_education'>And I am a Full-Stack Developer</span>
        <br />
        <br />
        <span className='home_education'>You can contact me on the given platforms</span>

        <HeaderSocials/>

        <a href='https://drive.google.com/file/d/1NurC0G15cpDzDLbeJjeh4uf0pbjGXVkA/view?usp=sharing' className='btn'>Hire Me</a>

        <ScrollDown/>
      </div>
      <Shapes/> 
    </section>
  )
}

export default Home
 
