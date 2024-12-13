import React from 'react'
import { useAuthStore } from '../../store/authStore'
import { useNavigate } from 'react-router-dom';
import { DarkMode } from '../../components/DarkMode/DarkMode';
import { Nav } from '../../components/Nav/Nav';
import { Footer } from '../../components/Footer/Footer';
import { Hero } from '../../components/Hero/Hero';
// import "../../index.css";


export const HomePage = () => {


  return (
    <div>
        <Nav />
        <Hero />
        {/* <iframe width="560" height="315" src="https://www.youtube.com/embed/pmvEgZC55Cg?si=P5NTYrlShDWD2KaW" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe> */}
        <Footer />
    </div>
  )
}
