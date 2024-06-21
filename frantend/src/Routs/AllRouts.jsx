import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../Pages/Home'
import ProductView from '../Componentes/ProductView'
import AllProducts from '../Pages/AllProducts'

const AllRouts = () => {
  return (
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/products' element={<AllProducts/>} />
      <Route path='/productView/:id' element={<ProductView/>} />
      {/* <Route path='' element={} /> */}
    </Routes>
  )
}

export default AllRouts
