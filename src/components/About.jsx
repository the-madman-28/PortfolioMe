import React from 'react'
import './about.css';
import Image from '../assets/avatar-2.svg';


const About = () => {
  return (
      <section className='about container section' id='about'>
        <h2 className='section_title'>About Me</h2>
        
        <div className='about_container grid '>
          <img src={Image} alt='' className='about_img'/>

          <div className='about_data grid'>
            <div className='about_info'>
              <p className='about_description'>"I'm Nitin Babu, a passionate fresher in Computer Science and Engineering, 
              specializing in Web Development, Software Development, and Database Management. Proficient in multiple programming languages 
              and frameworks, I aim to contribute to innovative projects by leveraging my strong foundation, curiosity for emerging 
              technologies, and dedication to delivering high-quality solutions."</p>
              <a href='https://drive.google.com/file/d/14fAOfKFG67V7Xgp0F99SSflT00nllONn/view?usp=share_link' className='btn'>Download Resume</a>
            </div>

            <div className='about_skills grid'>
              <div className='skills_data'>
                <div className='skills_titles'>
                  <h3 className='skills_name'>Web Development</h3>
                  <span className='skills_number'>85%</span> 
                </div>

                <div className='skills_bar'>
                  <span className='skills_percentage development'></span>
                </div>
              </div>

              <div className='skills_data'>
                <div className='skills_titles'>
                  <h3 className='skills_name'>Software Development</h3>
                  <span className='skills_number'>80%</span> 
                </div>

                <div className='skills_bar'>
                  <span className='skills_percentage ui_design'></span>
                </div>
              </div>

              <div className='skills_data'>
                <div className='skills_titles'>
                  <h3 className='skills_name'>Database</h3>
                  <span className='skills_number'>75%</span> 
                </div>

                <div className='skills_bar'>
                  <span className='skills_percentage photography'></span>
                </div>
              </div>

            </div> 
          </div>
        </div>

        
      </section>
    
  )
}

export default About
