import React, { useState } from 'react'
import { Flame, UserRoundPen, Atom   } from 'lucide-react';
import { DarkMode } from '../DarkMode/DarkMode';
import { NavModal } from './NavModal';
import { useNavigate } from "react-router";
import { ShoppingCart } from 'lucide-react';

export const Nav = () => {
    let navigate = useNavigate();
    const [modal, setModal] = useState(false);
    const toggleModal = () => {
        setModal(!modal);
    };
    
    if(modal) {
        document.body.classList.add('active-modal')
      } else {
        document.body.classList.remove('active-modal')
      }

  return (
    <header>
        <div  className='nav-left'>
            <div className='logo' onClick={() => {navigate('/');}}>
                <Atom />
                <p>Rando LMS</p>
            </div>
            <a href="/public-courses">Explore Courses</a>
            <div className='pointer nav-pro'>
                <Flame />
                <a href="/pro">Pro</a>
            </div>
        </div>
        <div className='nav-right'>
            <div className='pointer nav-pro'>
                <a href="/my-course">My Course</a>
            </div>
            <div className='pointer'>
                <a className='cart-con' href="/cart">
                    <ShoppingCart  />
                </a>
            </div>

            <DarkMode />
            <UserRoundPen className='pointer profile' onClick={toggleModal}/>
        </div>
        {modal && (
            <NavModal modal={modal} toggleModal={toggleModal} />
        )}
    </header>
  )
}
