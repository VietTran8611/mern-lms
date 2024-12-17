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
        <Footer />
    </div>
  )
}
