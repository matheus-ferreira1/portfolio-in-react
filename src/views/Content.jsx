import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Inicio from './Inicio'
import Sobre from './Sobre'
import Skills from './Skills'
import Projetos from './Projetos'
import NotFound from './NotFound'
import Contato from './Contato'

const Content = () => {
   return (
      <div>
         <Routes>
            <Route path='/' exact element={<Inicio />} />
            <Route path='/about' element={<Sobre />} />
            <Route path='/skills' element={<Skills />} />
            <Route path='/projects' element={<Projetos />} />
            <Route path='/contato' element={<Contato />} />
            <Route path='/*' element={<NotFound />} />
         </Routes>
      </div>
   )
}

export default Content