import React from 'react'
import './services.css';
import Image1 from '../assets/c++.svg';
import Image2 from '../assets/react.svg';
import Image3 from '../assets/js.svg';
import Image4 from '../assets/html.svg';
import Image5 from '../assets/css.svg';
import Image6 from '../assets/node.svg';
import Image7 from '../assets/boot.svg';
import Image8 from '../assets/mongo.svg';
import Image9 from '../assets/mysql.svg';
import Image10 from '../assets/py.svg';

const data = [
  {
    id: 1,
    image: Image1,
    title: 'C++',
  },
  {
    id: 2,
    image: Image2,
    title: 'ReactJS',
  },
  {
    id: 3,
    image: Image3,
    title: 'JavaScript',
  },
  {
    id: 4,
    image: Image4,
    title: 'HTML',
  },
  {
    id: 5,
    image: Image5,
    title: 'CSS',
  },
  {
    id: 6,
    image: Image6,
    title: 'NodeJS',
  },
  {
    id: 7,
    image: Image7,
    title: 'BootStrap',
  },
  {
    id: 8,
    image: Image8,
    title: 'MongoDB',
  },
  {
    id: 9,
    image: Image9,
    title: 'MySQl',
  },
  {
    id: 10,
    image: Image10,
    title: 'Python',
  },
];


const Services = () => {
  return (
    <section className="services container section" id='services'>
      <h2 className='section_title'>Skills</h2>
     
      <div className='services_container grid'>
        {data.map(({id, image, title, description})=>{
          return(
            <div className='services_card' key={id}>
              <img src={image} alt='' className='services_img'/>

              <h3 className='services_title'>{title}</h3>
              <p className='services_description'>{description}</p>
            </div>
          );
        })}
      </div>
    </section>
  )
}

export default Services
