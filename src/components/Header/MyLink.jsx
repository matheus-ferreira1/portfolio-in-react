import React from 'react';
import { Link, useMatch } from 'react-router-dom';
import './Header.scss'

const MyLink = ({ children, to }) => {
   const match = useMatch(to);

   return (
      <li>
         <Link
            to={to}
            className={match ? 'activeLink' : ''}
         >
            {children}
         </Link>
      </li>
   )
}

export default MyLink