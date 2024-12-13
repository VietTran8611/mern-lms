import {create} from 'zustand'
import axios from 'axios'

const API_URL = import.meta.env.MODE === "development" ? "http://localhost:5000/api/order" : "/api/order";

export const useOrderStore = create((set)=>({
    orders: [],
    isLoading: false,
    isCheckOrders: true,
    error:null,
    fetchOrders: async(pid)=>{
        set({ isCheckOrders: true, error: null });
        try {
            const res = await fetch(`${API_URL}/${pid}`);
            const data = await res.json();
            set({ orders: data.data });
            
        } catch (error) {
            set({error:error.response.data.message || "error fetching image", isCheckOrders:false})
            throw error
        }
    },
    createOrder: async (newOrder) => {
        set({isLoading:true,error:null})
        try{
          const response = await axios.post(API_URL, newOrder)
          set((state) => ({ orders: [...state.orders, response.data.data],isLoading:false }));
          return { success: true, message: "Course created successfully" };
        }catch(error){
          console.log(error)
        }
    },deleteOrder: async (pid) => {
        set({isLoading:true,error:null})
        try{
            const response = await axios.delete(`${API_URL}/${pid}`)
            set((state) => ({ orders: state.orders.filter((product) => product._id !== pid),isLoading:false}));
            return { success: true, message: "Order edit successfully" };
          }catch(error){
            console.log(error)
          }
    },checkout: async (pid) => {
        set({isLoading:true,error:null})
        try{
            const response = await axios.post(`${API_URL}/update/${pid}`)
            set((state) => ({ orders:[],isLoading:false }));
            return { success: true, message: "checkout successfully" };
          }catch(error){
            console.log(error)
          }
      },
    
}))