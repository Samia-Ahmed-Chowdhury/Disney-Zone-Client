import React from 'react'
import Header from '../shared/Header'
import { Outlet } from 'react-router-dom'
import Footer from '../shared/Footer'
import '../App.css'

function HomeLayout() {
  return (
   <div className='overflow-x-hidden'>
    <Header/>
    <Outlet/>
    <Footer/>
   </div>
  )
}

export default HomeLayout