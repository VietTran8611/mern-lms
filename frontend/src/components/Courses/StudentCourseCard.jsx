import React from 'react'
import { AlarmClock } from 'lucide-react';


export const StudentCourseCard = ({stdCourses}) => {
  return (
    <div className='stdcourse-card'>
        <div className='stdcourse-card-content'>
            <img src={stdCourses.image} alt="" />
            <p>{stdCourses.title}</p>
            <p>By: {stdCourses.instructorName}</p>
        </div>
        <button><AlarmClock/> <span>Start watching</span></button>
    </div>
  )
}
