import React from 'react'
import { useOrderStore } from '../../store/orderStore';

export const CartCard = ({order}) => {
    const { deleteOrder} = useOrderStore();
    const deleteCartItem = async (e)=>{
        e.preventDefault();
        const { success, message } = await deleteOrder(order._id);
        if (!success) {
            toast.error("Error")
		} else {
            toast.success("success")
		}

    }


  return (
    <div className='cart-card'>
    <img src={order.courseImage} alt="" />
    <div className='cart-card-content'>
        <div className='cart-card-content-top'>
            <p>{order.courseTitle}</p>
            <button onClick={deleteCartItem} >x</button>
        </div>
        <div className='cart-card-content-bottom'>
            <p>$ {order.coursePricing}</p>
        </div>
    </div>
</div>
  )
}
