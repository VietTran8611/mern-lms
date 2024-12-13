import React, { useEffect } from 'react'
import { useCourseStore } from '../../store/courseStore';
import { useAuthStore } from '../../store/authStore';
import { Spinner } from '../Spinner/Spinner';
import { StudentCourseCard } from './StudentCourseCard';

export const MyCourseContainer = () => {
    const {  isCheckCourse, fetStudentCourse, stdCourses} = useCourseStore();
    const {  user, isCheckingAuth } = useAuthStore();
    useEffect(() => {
        fetStudentCourse(user._id)
	}, [fetStudentCourse]);

    if (!isCheckCourse && !isCheckingAuth) return <Spinner />;
  return (
    <div className='container course-container'>
        <h3>My Courses</h3>
        <div className='stdcourse-container'>
            {stdCourses.map((course)=>{
                return(
                    <StudentCourseCard stdCourses={course}/>
                )
            })}
                        {stdCourses.map((course)=>{
                return(
                    <StudentCourseCard stdCourses={course}/>
                )
            })}
        </div>
    </div>
  )
}
