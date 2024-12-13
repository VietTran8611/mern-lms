import React, { useState } from 'react'

import toast from 'react-hot-toast';
import { useCourseStore } from '../../store/courseStore';
function convertToBase64(file){
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);
      fileReader.onload = () => {
        resolve(fileReader.result)
      };
      fileReader.onerror = (error) => {
        reject(error)
      }
    })
  }

export const AddCourse = () => {
    const { createCourse } = useCourseStore();
    const [newLesson,setLesson] = useState({
      title: '',
      videoUrl: '',
    })

    const [newCourse, setNewCourse] = useState({
        instructorName: '',
        date: Date.now,
        title: '',
        category: '',
        level: '',
        primaryLanguage: 'English',
        subtitle: '',
        description: '',
        image: '',
        pricing: 0,
        curriculum: [],
        students: [],
        isPublised: true,
	});  

    const handleFileUpload = async (e) => {
        const file = e.target.files[0];
        const base64 = await convertToBase64(file);
        setNewCourse({ ...newCourse, image : base64 })
    }

    const handleSubmit = async  (e) => {
        e.preventDefault();
        const { success, message } = await createCourse(newCourse);
        if (!success) {
            toast.error("Error")
		    } else {
            toast.success("success")
            setNewCourse({         
              instructorName: '',
              date: Date.now,
              title: '',
              category: '',
              level: '',
              primaryLanguage: 'English',
              subtitle: '',
              description: '',
              image: '',
              pricing: 0,
              curriculum: [],
              isPublised: true,});
		        }
    }

    const handlePushLesson = (e) =>{
      e.preventDefault();
      newCourse.curriculum.push(newLesson)
      setLesson({
        title: '',
        videoUrl: '',
      })
    }
  return (
    <div>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="name"
                    value={newCourse.title}
                    placeholder='Course Title'
                    onChange={(e) => setNewCourse({ ...newCourse, title: e.target.value })}
                />
                <input
                    type="text"
                    name="instructorName"
                    value={newCourse.instructorName}
                    placeholder='instructorName'
                    onChange={(e) => setNewCourse({ ...newCourse, instructorName: e.target.value })}
                />
                <input
                    type="text"
                    name="category"
                    value={newCourse.category}
                    placeholder='category'
                    onChange={(e) => setNewCourse({ ...newCourse, category: e.target.value })}
                />
                <input
                    type="text"
                    name="level"
                    value={newCourse.level}
                    placeholder='level'
                    onChange={(e) => setNewCourse({ ...newCourse, level: e.target.value })}
                />
                <input
                    type="text"
                    name="subtitle"
                    value={newCourse.subtitle}
                    placeholder='subtitle'
                    onChange={(e) => setNewCourse({ ...newCourse, subtitle: e.target.value })}
                />
                <input
                    type="text"
                    name="description"
                    value={newCourse.description}
                    placeholder='description'
                    onChange={(e) => setNewCourse({ ...newCourse, description: e.target.value })}
                />
                
                <input 
                    type="file"
                    lable="Image"
                    name="myFile"
                    id='input1'
                    accept='.jpeg, .png, .jpg'
                    onChange={(e) => handleFileUpload(e)}
                />
                <button className='submit-btn' type='submit'>Submit</button>
            </form>
            <p>curriculum</p>
            <form >
                <input
                    type="text"
                    name="name"
                    value={newLesson.title}
                    placeholder='curriculum Title'
                    onChange={(e) => setLesson({ ...newLesson, title: e.target.value })}
                />
                <input
                    type="text"
                    name="name"
                    value={newLesson.videoUrl}
                    placeholder='curriculum url'
                    onChange={(e) => setLesson({ ...newLesson, videoUrl: e.target.value })}
                />
            </form>
            <button  onClick={handlePushLesson} type='submit'>Add lesson</button>
            <button onClick={()=>{console.log(newCourse)}}>btn</button>
    </div>
  )
}
