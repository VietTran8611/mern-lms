import React from 'react'
import { useAuthStore } from '../../store/authStore';

export const NavModal = (props) => {
    const {logout,isLoading,error,user,isAuthenticated,checkAuth} = useAuthStore()
    const handleLogout = async (e) => {
        e.preventDefault();
        await logout() 
    };

  return (
    <div className='modal'>
    <div onClick={props.toggleModal} className="overlay"></div>
    <div className="modal-content create-modal">
        <h3>{user.email}</h3>
        <button className='submit-btn' onClick={handleLogout}>Log out</button>
        <button className="close-modal" onClick={props.toggleModal}>
          Cancel
        </button>
    </div>
</div>
  )
}