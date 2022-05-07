import React from 'react';
import MyLink from './MyLink';
import { FaLinkedin, FaGithub } from "react-icons/fa";
import './Header.scss'

const Header = () => {

   return (
      <header>
         <h1>Matheus Ferreira</h1>

         <nav>
            <ul>
               <MyLink to='/'>Início</MyLink>
               <MyLink to='/about'>Sobre mim</MyLink>
               <MyLink to='/skills'>Habilidades</MyLink>
               <MyLink to='/projects'>Portfolio</MyLink>
               <MyLink to='/contato'>Contato</MyLink>
            </ul>

            <div className="social-links">
               <a
                  rel="noreferrer"
                  target='_blank'
                  href="https://www.linkedin.com/in/matheus-ferreira33/"
               >
                  <FaLinkedin />
               </a>
               <a
                  rel="noreferrer"
                  target='_blank'
                  href="https://github.com/matheus-ferreira1"
               >
                  <FaGithub />
               </a>
            </div>
         </nav>
      </header>
   )
}

export default Header