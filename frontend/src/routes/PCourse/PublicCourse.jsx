import React, { useEffect } from 'react'
import { Nav } from '../../components/Nav/Nav'
import { Footer } from '../../components/Footer/Footer'
import { Spinner } from '../../components/Spinner/Spinner';
import { useCourseStore } from '../../store/courseStore';
import { AllCourses } from '../../components/Courses/AllCourses';
import { useAuthStore } from '../../store/authStore';
import { useOrderStore } from '../../store/orderStore';
import { UnAuthNav } from '../../components/Nav/UnAuthNav';
import { AllCoursePublic } from '../../components/Courses/AllCoursePublic';

export const PublicCourse = () => {
      const { courses, isCheckCourse,  fetchAllCourses,fetchFilteredCOurse} = useCourseStore();
      const { orders, isCheckOrders, fetchOrders } = useOrderStore();
      const {  user } = useAuthStore();
    
      useEffect(() => {
        fetchAllCourses()
    }, [fetchAllCourses ]);

    if (!isCheckCourse) return <Spinner />;
  return (
    <div>
        <UnAuthNav />
        <AllCoursePublic user={user} courses={courses} fetchFilteredCOurse={fetchFilteredCOurse}/>
        <Footer />
    </div>
  )
}
