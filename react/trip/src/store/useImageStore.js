import{getImages} from '../api/home'
import {create} from 'zustand'

export const useImageStore = create((set,get)=>({
    images:[],
    page:1,
    loading:false,
    fetchMore:async()=>{
        if(get().loading) return;//如果还在请求中，那么则不再请求
        set({loaging:true})
        const res = await getImages(get().page)
        console.log(res)
       const newImages =res.data
        
        set((state)=>({ //拿到之前的状态
            images:[...state.images,...newImages],
            page:state.page+1,
            loading:false
        }))
    }
}))