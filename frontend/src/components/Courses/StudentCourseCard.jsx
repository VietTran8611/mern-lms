import React from 'react'
import { AlarmClock } from 'lucide-react';
import { useNavigate } from "react-router";


export const StudentCourseCard = ({stdCourses}) => {
  let navigate = useNavigate();

  const handleOnclick=()=>{

    navigate(`/my-course/${stdCourses._id}/${stdCourses.courseId}/0`)

  }
  return (
    <div className='stdcourse-card'>
        <div className='stdcourse-card-content'>
            <img src={stdCourses.courseImage} alt="" />
            <p>{stdCourses.title}</p>
            <p>By: {stdCourses.instructorName}</p>
        </div>
        <button onClick={handleOnclick}><AlarmClock/> <span>Start watching</span></button>
    </div>
  )
}
