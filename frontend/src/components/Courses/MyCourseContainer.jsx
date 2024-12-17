import React, { useEffect } from 'react'
import { useCourseStore } from '../../store/courseStore';
import { useAuthStore } from '../../store/authStore';
import { Spinner } from '../Spinner/Spinner';
import { StudentCourseCard } from './StudentCourseCard';
import { useProgressStore } from '../../store/progressStore';

export const MyCourseContainer = () => {
    const {  isCheckCourse, fetStudentCourse, stdCourses} = useCourseStore();
    const {  user, isCheckingAuth } = useAuthStore();
    const { progresses, fetchProgresses, isCheckProgress } = useProgressStore();
    useEffect(() => {
        fetchProgresses(user._id)

	}, [fetchProgresses]);

    if (!isCheckProgress && !isCheckingAuth) return <Spinner />;
  return (
    <div className='container course-container'>
        <h3>My Courses</h3>
        <div className='stdcourse-container'>
            {progresses.map((course)=>{
                return(
                    <StudentCourseCard stdCourses={course}/>
                )
            })}
        </div>
    </div>
  )
}
