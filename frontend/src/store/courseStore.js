import {create} from 'zustand'
import axios from 'axios'

const API_URL = import.meta.env.MODE === "development" ? "http://localhost:5000/api/course" : "/api/course";

export const useCourseStore = create((set)=>({
    courses: [],
    stdCourses:[],
    currCourse: [],
    isLoading: false,
    isCheckCourse: true,
    error:null,
    fetchAllCourses: async()=>{
        set({ isCheckCourse: true, error: null });
        try {
            const res = await fetch(`${API_URL}`);
            const data = await res.json();
            set({ courses: data.data });
            
        } catch (error) {
            set({error:error.response.data.message || "error fetching image", isCheckCourse:false})
            throw error
        }
    },
    fetStudentCourse: async(pid)=>{
        set({ isCheckCourse: true, error: null });
        try {
            const res = await fetch(`${API_URL}/student/${pid}`);
            const data = await res.json();
            set({ stdCourses: data.data });
            
        } catch (error) {
            set({error:error.response.data.message || "error fetching image", isCheckCourse:false})
            throw error
        }
    },
    fetchFilteredCOurse: async(category,level,pid)=>{
        set({ isCheckCourse: true, error: null });
        let api = API_URL + '?'
        if(level!=''){
            api+= `level=${level}&`
        }
        if(category!='' ){
            api+= `category=${category}&`
        }
        if(pid!='' ){
            api+= `student=${pid}&`
        }

        try {
            const res = await fetch(api);
            const data = await res.json();
            set({ courses: data.data });
            
        } catch (error) {
            set({error:error.response.data.message || "error fetching image", isCheckCourse:false})
            throw error
        }
    },createCourse: async (newCourse) => {
        set({isLoading:true,error:null})
        try{
          const response = await axios.post(API_URL, newCourse)
          set((state) => ({ courses: [...state.courses, response.data.data],isLoading:false }));
          return { success: true, message: "Course created successfully" };
        }catch(error){
          console.log(error)
        }
    },updateCourse: async (pid, newCourse) => {
        set({isLoading:true,error:null})
        try{
            const response = await axios.put(`${API_URL}/student/${pid}`, newCourse)
            set((state) => ({ courses: state.courses.map((course) => (course._id === pid ? response.data.data : course)),isLoading:false }));
            return { success: true, message: "Course edit successfully" };
          }catch(error){
            console.log(error)
          }
    },fetchCourse: async(pid)=>{
        set({ isCheckCourse: true, error: null });
        try {
            const res = await fetch(`${API_URL}/${pid}`);
            const data = await res.json();
            set({ currCourse: data.data });
            
        } catch (error) {
            set({error:error.response.data.message || "error fetching course", isCheckCourse:false})
            throw error
        }
    },
    
}))