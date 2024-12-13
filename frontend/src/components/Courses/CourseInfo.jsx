import React, { useState } from 'react'
import { useOrderStore } from '../../store/orderStore';
import toast from 'react-hot-toast';

export const CourseInfo = ({instructorName,level, curriculum, pricing,title,image,course,user, orders }) => {
  const { createOrder } = useOrderStore();
  const [newOrder, setNewOrder] = useState({
    userId: user._id,
    userName: user.name,
    userEmail: user.email,
    orderStatus: 'pending',
    orderDate: Date.now,
    instructorName: instructorName,
    courseImage: image,
    courseTitle: title,
    courseId: course._id,
    coursePricing: pricing,
  });  

  const handleOnClick = async (e) =>{
    e.preventDefault();
    const { success, message } = await createOrder(newOrder);
    if (!success) {
        toast.error("Error")
    } else {
        toast.success("success")
    }
  }

  return (
    <div className='course-info'>
        <img src={image} alt="" />
        <div className='course-summary'>
          <h3>{title}</h3>
          <p>Created by <span className='bold'>{instructorName} </span> </p>
          <p>{curriculum.length} Lectures - {level} level</p>
          <div className='course-sumarry-price'>
            <h3>${pricing}</h3>
            {orders.find((element) => element.courseId === course._id) ? <button>Already in cart</button> : <button onClick={handleOnClick}>Add to cart</button>}
            
          </div>
        </div>
    </div>
  )
}
