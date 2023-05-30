import React, { useState } from 'react'
import './sidebar.css'
import Logo from "../assets/avatar-3.svg";

const Sidebar = () => {
  const [toggle, showMenu] = useState(false);
  return (
    <>
  <aside className = {toggle? 'aside show-menu': 'aside'}>
    <a href='#home' className='nav_logo'>
      <img src={Logo} alt="Logo"/>
    </a>

    <nav className='nav'>
      <div className='nav_menu'>
        <ul className='nav_list'>
           
          <li className='nav_item'>
            <a href='#home' className='nav_link'>
            <i class="fa-solid fa-house"></i>
            </a>
          </li>

          <li className='nav_item'>
            <a href='#about' className='nav_link'>
            <i class="fa-solid fa-user"></i>
            </a>
          </li>

          <li className='nav_item'>
            <a href='#services' className='nav_link'>
            <i class="fa-sharp fa-solid fa-briefcase"></i>
            </a>
          </li>

          <li className='nav_item'>
            <a href='#resume' className='nav_link'>
            <i class="fa-solid fa-graduation-cap"></i>
            </a>
          </li>

          <li className='nav_item'>
          <a href='#portfolio' className='nav_link'>
          <i class="fa-solid fa-certificate"></i>
            </a>
          </li>

          <li className='nav_item'>
          <a href='#testimonials' className='nav_link'>
            <i className='icon-user'></i>
            </a>
          </li>

          <li className='nav_item'>
            <a href='#blog' className='nav_link'>
            <i class="fa-solid fa-diagram-project"></i>
            </a>
          </li>

          <li className='nav_item'>
            <a href='#contact' className='nav_link'>
            <i class="fa-regular fa-message"></i>
            </a>
          </li>

        </ul>
      </div>
    </nav> 

    <div className='nav_footer'>
      <span className='copyright'>Copyright @ 2023 </span>
    </div>

  </aside>

  <div className={toggle ? 'nav_toggle nav_toggle-open' 
  : 'nav_toggle'}onClick={()=> showMenu(!toggle)}>
    <i className="icon-menu"></i>
  </div>
  </>
  );
};

export default Sidebar
