import React from 'react'
import './blog.css';

import Image2 from '../assets/clock.jpg';
import Image1 from '../assets/dice.jpg';
import Image3 from '../assets/todo.png';

const Blog = () => {
  return (
    <section className='blog container section' id='blog'>
      <h2 className='section_title'>Projects</h2>

      <div className='blog_container grid'>

        <div className='blog_card'>
          <div className='blog_thumb'>
            <a href='https://github.com/the-madman-28/Dice-game'><span className='blog_category'>Dice Game</span></a>
            <a href='https://dice-game-psi-two.vercel.app/'><img src={Image1} alt="" className='blog_img' /></a>
          </div>
          <div className='blog_details'>
            <p className='blog_title'>This online game is created using HTML, JavaScript, and CSS. 
            It involves 2 dice, and the player who rolls the highest number emerges as the winner. 
            If both players roll the same number, the game ends in a draw.</p>
            <div className='blog_meta'>
              <span>January, 2023</span>
            </div>
          </div>
        </div>

        <div className='blog_card'>
          <div className='blog_thumb'>
            <a href='https://github.com/the-madman-28/Ana_Clock'><span className='blog_category'>Analog Clock</span></a>
            <a href='https://analclock.netlify.app/'><img src={Image2} alt="" className='blog_img' /></a>
          </div>
          <div className='blog_details'>
            <p className='blog_title'>This resembles an everyday analog clock with hour, minute, and second hands. 
            Developed using HTML, CSS, and JavaScript, it replicates the appearance of a traditional analog clock with 
            its dial and accurately displays the current time.</p>
            <div className='blog_meta'>
              <span>February, 2023</span>
            </div>
          </div>
        </div>

        <div className='blog_card'>
          <div className='blog_thumb'>
            <a href='https://github.com/the-madman-28/To-do-list'><span className='blog_category'>To-Do App</span></a>
            <a href='https://to-do-list-l8wu6w8sv-the-madman-28.vercel.app/'><img src={Image3} alt="" className='blog_img' /></a>
          </div>
          <div className='blog_details'>
            <p className='blog_title'>The app is built with Vite and ReactJS, utilizing hooks like useEffect and useState. These hooks enable functionality such as task completion and deletion, enhancing the app's interactive capabilities.</p>
            <div className='blog_meta'>
              <span>June, 2023</span>
            </div>
          </div>
        </div>

      </div>
      
    </section>
  ) 
}

export default Blog
