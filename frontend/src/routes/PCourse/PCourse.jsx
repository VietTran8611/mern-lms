import React, { useEffect } from 'react'
import { Nav } from '../../components/Nav/Nav'
import { Footer } from '../../components/Footer/Footer'
import { Spinner } from '../../components/Spinner/Spinner';
import { useCourseStore } from '../../store/courseStore';
import { AllCourses } from '../../components/Courses/AllCourses';
import { useAuthStore } from '../../store/authStore';
import { useOrderStore } from '../../store/orderStore';

export const PCourse = () => {

  const { courses, isCheckCourse,  fetchAllCourses,fetchFilteredCOurse} = useCourseStore();
  const { orders, isCheckOrders, fetchOrders } = useOrderStore();
  const {  user } = useAuthStore();

  useEffect(() => {
		fetchFilteredCOurse("","",user._id);
    fetchOrders(user._id);
	}, [fetchFilteredCOurse, fetchOrders]);

	if (!isCheckCourse && !isCheckOrders) return <Spinner />;
  return (
    <div>
        <Nav />
        <AllCourses orders={orders} user={user} courses={courses} fetchFilteredCOurse={fetchFilteredCOurse}/>
        <Footer />
        
    </div>
  )
}
