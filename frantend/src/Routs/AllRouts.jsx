import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../Pages/Home'
import ProductView from '../Componentes/ProductView'

const AllRouts = () => {
  return (
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/productView/:id' element={<ProductView/>} />
      {/* <Route path='' element={} /> */}
    </Routes>
  )
}

export default AllRouts
