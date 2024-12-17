import React from 'react'
import ProgressBar from './ProgressBar'
import { useCourseStore } from '../../store/courseStore';
import { useAuthStore } from '../../store/authStore';
import { useProgressStore } from '../../store/progressStore';
import { Spinner } from '../Spinner/Spinner';
import { useNavigate } from "react-router";

export const ProgressList = ({course, params, currProgress}) => {
   
        const {  isCheckCourse, fetchCourse } = useCourseStore();
        const { isCheckingAuth, user } = useAuthStore();
        const {  fetchCurrProgresses, isCheckProgress } = useProgressStore();
        let navigate = useNavigate();
        
        const handleOnclick=(idex)=>{
            navigate(`/my-course/${currProgress._id}/${course._id}/${idex}`)

        }
   
        
  return (
    <>
        {/* <button onClick={()=>{console.log(course)}}>butt</button> */}
        {(currProgress.lecturesProgress && course.curriculum) && (
            <div className='progress-nav'>
                <div className='progress-nav-top'>
                    <h3>{course.title}</h3>
                    <p className='bold'>{currProgress.lecturesProgress.length}/{course.curriculum.length}</p>
                    <ProgressBar bgcolor={"#ef6c00"} completed={Math.floor( (currProgress.lecturesProgress.length/course.curriculum.length) * 100)} />
                </div>
                {course.curriculum.map((item,idx)=>{
                    return(
                        <div onClick={()=>{handleOnclick(idx)}} className={parseInt(params.index)  === idx ? 'progress-topic progress-topic-focus' : 'progress-topic'}>
                            <div>
                                <p className={currProgress.lecturesProgress.filter(obj=>obj.lectureId === course.curriculum[idx]._id).length === 1 ? 'progress-topic-idx green':'progress-topic-idx'}>{idx+1}</p>
                            </div>
                            <p className='bold'>{item.title}</p>
                        </div>
                    )
                })}
                
            </div>
        )}
    </>
  )
}
