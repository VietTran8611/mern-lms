import React, { useEffect } from 'react'
import { useOrderStore } from '../../store/orderStore';
import { Spinner } from '../../components/Spinner/Spinner';
import { Nav } from '../../components/Nav/Nav'
import { useAuthStore } from '../../store/authStore';
import { CartCard } from '../../components/Cart/CartCard';
import toast from 'react-hot-toast';
import { useCourseStore } from '../../store/courseStore';
import { useProgressStore } from '../../store/progressStore';



export const Cart = () => {
    const { orders, isCheckOrders, fetchOrders, checkout } = useOrderStore();
    const { isCheckingAuth, user } = useAuthStore();
    const { course, updateCourse } = useCourseStore();
    const { progresses, createProgress } = useProgressStore();


    const handleSubmit = async (e) =>{
        e.preventDefault();
        orders.map((order)=>{ updateCourse(order.courseId, {
            studentId: user._id,
            studentName: user.name,
            studentEmail: user.email,
            paidAmount: order.coursePricing
        })})

        orders.map((order)=>{ createProgress({
          instructorName: order.instructorName,
          courseImage: order.courseImage,
          courseTitle: order.courseTitle,
          userId:user._id,
          courseId: order.courseId,
          completed:false
        })})
        const { success, message } = await checkout(user._id);
        
      }
    
      useEffect(() => {
		fetchOrders(user._id);
	}, [fetchOrders]);

      if (!isCheckOrders && !isCheckingAuth ) return <Spinner />;

  return (
    <div>
    <Nav />
    <div className='container margin-nav'>
      <h1>Your Cart</h1>
          <div className='cart-content'>
            <div className='cart-left'>        
              {orders.map((object, i) => { 
                return <CartCard order={object}/>
              })}
            </div>
            <div className='cart-sum'>
                <h3>Summary:</h3>
                <div className='cart-sum-content-container'>
                  <div className='cart-sum-content'>
                    <p>Subtotal:</p>
                    <p>$ {orders.reduce(
                        (accumulator, currentValue) => accumulator + parseInt(currentValue.coursePricing,10),
                            0,
                        )
                    }</p>
                  </div>
                  <div className='cart-sum-content'>
                    <p>Discount:</p>
                    <p>-$0.00</p>
                  </div>
                  <div className='cart-sum-content'>
                    <p>Tax:</p>
                    <p>$0.00</p>
                  </div>
                </div>
                <div className='cart-sum-content'>
                  <h3>Balance</h3>
                  <p>$ {orders.reduce(
                        (accumulator, currentValue) => accumulator + parseInt(currentValue.coursePricing,10),
                            0,
                        )
                    }</p>
                </div>
                <button onClick={handleSubmit}>Check Out</button>
            </div>
          </div>
    </div>
  </div>
  )
}
