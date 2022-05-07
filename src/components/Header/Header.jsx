import React from 'react';
import { Link } from 'react-router-dom';
import './Header.scss'

const Header = () => {
   return (
      <header>
         <h1>Matheus Ferreira</h1>

         <nav>
            <ul>
               <li>
                  <Link to='/'>Início</Link>
               </li>
               <li>
                  <Link to='/about'>Sobre mim</Link>
               </li>
               <li>
                  <Link to='/skills'>Habilidades</Link>
               </li>
               <li>
                  <Link to='/projects'>Portfolio</Link>
               </li>
            </ul>
         </nav>
      </header>
   )
}

export default Header