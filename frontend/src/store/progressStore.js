import {create} from 'zustand'
import axios from 'axios'

const API_URL = import.meta.env.MODE === "development" ? "http://localhost:5000/api/progress" : "/api/progress";

export const useProgressStore = create((set)=>({
    progresses: [],
    cProgresses: [],
    currProgress:[],
    isLoading: false,
    isCheckProgress: true,
    error:null,
    fetchProgresses: async(pid)=>{
        set({ isCheckProgress: true, error: null });
        try {
            const res = await fetch(`${API_URL}/${pid}`);
            const data = await res.json();
            set({ progresses: data.data });
            
        } catch (error) {
            set({error:error.response.data.message || "error fetching progress", isCheckOrders:false})
            throw error
        }
    },
    fetchCompletedProgresses: async(pid)=>{
      set({ isCheckProgress: true, error: null });
      try {
          const res = await fetch(`${API_URL}/complete/${pid}`);
          const data = await res.json();
          set({ cProgresses: data.data });
          
      } catch (error) {
          set({error:error.response.data.message || "error fetching progress", isCheckOrders:false})
          throw error
      }
  },
    fetchCurrProgresses: async(pid)=>{
        set({ isCheckProgress: true, error: null });
        try {
            const res = await fetch(`${API_URL}/get/${pid}`);
            const data = await res.json();
            set({ currProgress: data.data });
            
        } catch (error) {
            set({error:error.response.data.message || "error fetching progress", isCheckOrders:false})
            throw error
        }
    },
    createProgress: async (newProgress) => {
        set({isLoading:true,error:null})
        try{
          const response = await axios.post(API_URL, newProgress)
          set((state) => ({ progresses: [...state.progresses, response.data.data],isLoading:false }));
          return { success: true, message: "Progress created successfully" };
        }catch(error){
          console.log(error)
        }
    },markProgress: async (userId, courseId, lectureId) => {
        set({isLoading:true,error:null})
        try{
          const res = await axios.put(`${API_URL}/mark`, {
            userId:userId,
            courseId:courseId,
            lectureId:lectureId
          })
          set({ currProgress: res.data.data });
          return { success: true, message: "Progress update successfully" };
        }catch(error){
          console.log(error)
        }
    },
}))    