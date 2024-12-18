import React, { useState } from 'react'
import { Flame, UserRoundPen, Atom   } from 'lucide-react';
import { DarkMode } from '../DarkMode/DarkMode';
import { NavModal } from './NavModal';
import { useNavigate } from "react-router";
import { ShoppingCart } from 'lucide-react';

export const UnAuthNav = () => {
    let navigate = useNavigate();
  return (
        <header>
            <div  className='nav-left'>
                <div className='logo' onClick={() => {navigate('/');}}>
                    <Atom />
                    <p>Rando LMS</p>
                </div>
                <a className='explore' href="/public-courses">Explore Courses</a>
            </div>
            <div className='nav-right'>
                <DarkMode />
                <div onClick={()=>{navigate('/login')}} className='auth-btn'>
                    <UserRoundPen className='pointer profile' />
                    <p>Sign in/Sign up</p>
                </div>
            </div>
        </header>
  )
}
