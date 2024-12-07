import React, { useState } from 'react'
import { Flame, UserRoundPen, Atom   } from 'lucide-react';
import { DarkMode } from '../DarkMode/DarkMode';
import { NavModal } from './NavModal';

export const Nav = () => {
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
        <div className='nav-left'>
            <Atom />
            <p>Rando LMS</p>
        </div>
        <div className='nav-right'>
            <div className='pointer nav-pro'>
                <Flame />
                <a href="">Pro</a>
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
