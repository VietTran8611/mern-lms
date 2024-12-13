import React, { useEffect } from 'react'
import { Nav } from '../../components/Nav/Nav'
import { Footer } from '../../components/Footer/Footer'
import { useAuthStore } from '../../store/authStore';
import { useNavigate } from "react-router";
import { Plans } from '../../components/Plans/Plans';


export const Pro = () => {


  return (
    <div>
        <Nav />
        <Plans />
        <Footer />
    </div>
  )
}
