import React, { useState } from 'react'
import { ArrowRight ,ArrowLeft } from 'lucide-react';
import { useNavigate } from "react-router";
import toast from 'react-hot-toast';



export const CourseVIdeo = ({course, params, currProgress,markProgress,user}) => {
    let navigate = useNavigate();
    const [checked, setChecked] = useState(true);
    const handleChange = () => {
        setChecked(!checked);
      };

      const handleRoute=(idex)=>{
        navigate(`/my-course/${currProgress._id}/${course._id}/${idex}`)

    }

    const handleOnClick = async (e) =>{
        const { success, message } = await markProgress(user._id,course._id,course.curriculum[params.index]._id);
        if (!success) {
            toast.error("Error")
        } else {
            toast.success("success")
        }
      }
    
  return (
    <>
            {(currProgress.lecturesProgress && course.curriculum) && (
            <div className='lesson'>
                <h3>{course.curriculum[params.index].title}</h3>
                <iframe className='video' width="100%" src={course.curriculum[params.index].videoUrl} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                <div className='lesson-control'>
                    <div class="checkbox-wrapper-13">
                        <input onChange={handleOnClick} id="c1-13" type="checkbox" checked={currProgress.lecturesProgress.filter(obj=>obj.lectureId === course.curriculum[params.index]._id).length === 1}/>
                        <label for="c1-13">Mark as complete</label>
                    </div>
                    <div className='arrow-con'>
                        <div onClick={()=>{handleRoute(parseInt(params.index)-1)}} className={parseInt(params.index) === 0 ? 'arrow not-allow' : 'arrow'}>
                            <ArrowLeft />
                        </div>
                        <div onClick={()=>{handleRoute(parseInt(params.index)+1)}}  className={parseInt(params.index)+1 === course.curriculum.length ? 'arrow not-allow' : 'arrow'}>
                            <ArrowRight />
                        </div>

                    </div>
                </div>
                {/* <button onClick={()=>{console.log(currProgress.lecturesProgress.filter(obj=>obj.lectureId === course.curriculum[params.index]._id ))}}>butt</button> */}
            </div>
        )}
    </>
  )
}
