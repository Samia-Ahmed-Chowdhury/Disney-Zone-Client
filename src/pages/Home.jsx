import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Hero from '../components/Hero'
import Gallery from '../components/Gallery'
import CategoryTab from '../components/CategoryTab'
import '../App.css'
import Service from '../components/Service'
import VideoPart from '../components/VideoPart'
import useTitle from '../hooks/useTitle'

function Home() {
  //dynamic title
  useTitle('Home')

  useEffect(() => {
    AOS.init();
  }, []);
  

  return (
    <>
      <Hero />
      <Gallery />
      <CategoryTab />
      <Service />
      <VideoPart />
    </>
  )
}

export default Home