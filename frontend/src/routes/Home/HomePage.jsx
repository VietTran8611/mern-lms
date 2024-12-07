import React from 'react'
import { useAuthStore } from '../../store/authStore'
import { useNavigate } from 'react-router-dom';
import { DarkMode } from '../../components/DarkMode/DarkMode';
import { Nav } from '../../components/Nav/Nav';
// import "../../index.css";


export const HomePage = () => {
const {logout,isLoading,error,user,isAuthenticated,checkAuth} = useAuthStore()


  return (
    <div>
        <Nav />
        <h1>HomePage</h1>
    </div>
  )
}
