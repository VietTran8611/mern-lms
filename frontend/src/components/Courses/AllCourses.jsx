import React, { useState } from 'react'
import { Category } from './Category'
import { Level } from './Level'
import { Language } from './Language'
import { CourseInfo } from './CourseInfo'

export const AllCourses = ({courses, fetchFilteredCOurse,user, orders}) => {
    const [category,setCategory]= useState("")
    const [level,setLevel]= useState("")
    const [lang,setLang]= useState("")
    // {instructorName,level, curriculum, pricing,title }

  return (
    <div className='container course-container'>
        <div className='course-content'>
            <div className='course-filter'>
                <Category user={user} level={level} lang={lang} fetchFilteredCOurse={fetchFilteredCOurse} setCategory={setCategory}/>
                <Level user={user} category={category} lang={lang}  fetchFilteredCOurse={fetchFilteredCOurse} setLevel={setLevel}/>
                <Language setLang={setLang}/>
            </div>
            <div className='course-info-container'>
                {courses.map((object, i)=>{return(
                    <CourseInfo orders={orders}  user={user} course={object} image={object.image} key={i} instructorName={object.instructorName} level={object.level} curriculum={object.curriculum} pricing={object.pricing} title={object.title}/>
                )})}
            </div>
        </div>
        {/* <button onClick={()=>{console.log(category)}}>butt</button>
        <button onClick={()=>{console.log(level)}}>butt</button>
        <button onClick={()=>{console.log(courses)}}>butt</button> */}
    </div>
  )
}
