import React, { useEffect } from 'react'
import { useCourseStore } from '../../store/courseStore';
import { useAuthStore } from '../../store/authStore';
import { useParams } from "react-router"
import { Nav } from '../../components/Nav/Nav';
import { ProgressList } from '../../components/CourseProgress/ProgressList';
import { CourseVIdeo } from '../../components/CourseProgress/CourseVIdeo';
import { Footer } from '../../components/Footer/Footer';
import { useProgressStore } from '../../store/progressStore';
import { Spinner } from '../../components/Spinner/Spinner';

export const CourseProgress = () => {
    const { currCourse, isCheckCourse, fetchCourse } = useCourseStore();
    const { isCheckingAuth, user } = useAuthStore();
    const { currProgress, fetchCurrProgresses, isCheckProgress, markProgress } = useProgressStore();
    let params = useParams()
    useEffect(() => {
        fetchCourse(params.course);
        fetchCurrProgresses(params.id)
    }, [fetchCourse,fetchCurrProgresses]);

    if (!isCheckCourse && !isCheckProgress) return <Spinner />;
  return (
    <div>
        <Nav />
        <div className='progress-container'>
            <ProgressList course={currCourse} params={params} currProgress={currProgress} />
            <CourseVIdeo course={currCourse} params={params} currProgress={currProgress} markProgress={markProgress} user={user}/>
        </div>

    </div>
  )
}
