import React from 'react';
import './App.css';
import Sidebar from './components/Sidebar.jsx';
import Services from './components/Services.jsx';
import Resume from './components/Resume.jsx';
import Home from './components/Home.jsx';
import About from './components/About.jsx';
import Portfolio from './components/Portfolio.jsx';
import Blog from './components/Blog.jsx';
import Contact from './components/Contact.jsx';
import Testimonials from './components/Testimonials.jsx';

const App = () => {
  return (
    <>
      <main className = 'main'>
      <Home/>
      <About/>
      <Services/> 
      <Resume/>
      <Portfolio/>
      <Testimonials/>
      <Blog/>
      <Contact/>
      <div className='nav_footer'>
        <h4>Developed By Nitin Babu</h4>
      <span className='copyright'>Copyright @ 2023 </span>
    </div>
      </main>
      
    </> 
  )
}

export default App
