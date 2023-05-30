import React from 'react'
import './testimonials.css';
import Image1 from '../assets/cloud.svg';
import Image2 from '../assets/hackathon.jpg'; 
import Image3 from '../assets/game.jpg'; 

import { Pagination} from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
 
const data = [
    {
      id: 1,
      image: Image1,
      title: "Basics Of Cloud Engineering",
      subtitle: "Google Cloud",
      stitle: 'April 2022 - August 2022',
      comment:
        "I was introduced to Cloud computing, Application development, Big Data, and Machine Learning through the Google Cloud Console. I gained hands-on experience using the actual Google Cloud Platform called Qwiklabs, which provided self-paced cloud labs. Unlike simulators, Qwiklabs offered real-world training, allowing me to learn and explore the cloud using the genuine Google cloud environment.",
    },
    {
      id: 2,
      image: Image2,
      title: "Hackathon",
      subtitle: "Smart India Hackathon",
      stitle: 'March 2022 - May 2022',
      comment:
        "As a member of a talented team, I successfully competed in SIH 2022 at the university level with our innovative idea of developing an app to assist physically disabled individuals. Through our collaboration, we designed an application powered by maps, location services, voice assistants, and text-to-speech functionality. Our teamwork was instrumental in crafting a solution that enables people with physical disabilities to effortlessly locate nearby accessible facilities, fostering inclusivity and independence.",
    },
    {
        id: 3,
        image: Image3,
        title: "Sportathon - Sports Fest",
        subtitle: "Bundelkhand University, Jhansi",
        stitle: 'March 2021',
        comment:
          "Organized a successful sports fest in college, overseeing all aspects from planning to execution. Managed event logistics, including venue selection, team registrations, scheduling, and coordinating with participants. Coordinated with a team of volunteers, ensuring smooth operations and adherence to safety protocols. Promoted the event through various channels, resulting in high participation and positive feedback. Demonstrated strong organizational and leadership skills in delivering a memorable sports fest experience.",
      },
  ];

const Testimonials = () => {
  return (
    <section className='testimonials container section'>
        <h2 className='section_title'>Extras</h2>

        <Swiper className='testimonials_container grid' 
        modules={[Pagination]}
        spaceBetween={30}
        slidesPerView={1}
        loop={true}
        grabCursor={true}
        pagination={{ clickable: true }}>
            {data.map(({id, image, title, subtitle, stitle, comment}) => {
                return (
                    <SwiperSlide className='testimonial_item' key={id}>
                        <div className='thumb'>
                            <img src={image} alt=''/>
                        </div>
                        <h3 className='testimonials_title'>{title}</h3>
                        <span className='subtitle'>{subtitle}</span>
                        <br />
                        <span className='subtitle'>{stitle}</span>
                        <div className='comment'>{comment}</div>
                    </SwiperSlide>
                )
            })}
        </Swiper>
      
    </section>
  )
}

export default Testimonials
