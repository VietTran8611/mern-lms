import React, { useState } from 'react'
import { useOrderStore } from '../../store/orderStore';
import toast from 'react-hot-toast';
import { useNavigate } from "react-router";


export const CourseInfoPublic = ({instructorName,level, curriculum, pricing,title,image,course }) => {
    let navigate = useNavigate();
    
  return (
    <div className='course-info'>
        <img src={image} alt="" />
        <div className='course-summary'>
        <h3>{title}</h3>
        <p>Created by <span className='bold'>{instructorName} </span> </p>
        <p>{curriculum.length} Lectures - {level} level</p>
        <div className='course-sumarry-price'>
            <h3>${pricing}</h3> 
            <button onClick={()=>{navigate('/login')}}>Sign in to Order</button>            
        </div>
        </div>
    </div>
  )
}
