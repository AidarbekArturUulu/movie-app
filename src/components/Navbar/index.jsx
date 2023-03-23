import React from 'react';
import { NavLink } from 'react-router-dom';
import Search from '../Search';
import cls from './Navbar.module.scss'

const Navbar = () => {
   const links = [
      {
         title: 'Каталог',
         id: 0,
         to: '/catalog'
      },
      {
         title: 'Избранные',
         id: 1,
         to: '/favorites'
      }
   ]
   return (
      <nav className={cls.root}>
         <NavLink to={'/'} className={cls.logo}> Movie-App</NavLink>
         <ul className={cls.menu}>
            {
               links.map(({ id, title, to }) => (
                  <li key={id}
                     className={cls.link}
                  >
                     <NavLink
                        to={to}
                        className={({ isActive }) => isActive ? cls.active : ''}
                     > {title}
                     </NavLink>
                  </li>
               ))
            }
         </ul>
         <div className={cls.search}><Search /> </div>


      </nav>
   );
};

export default Navbar;