import axios from 'axios';
axios.defaults.baseURL='http://localhost:5175/api'
// 拦截器
axios.interceptors.request.use(config=>{
    const token = localStorage.getItem('token')||""
    if(token){
        config.headers.Authorization =`Bearer ${token}`
    }
   /*  const token =localStorage.getItem('token')
    if(token){ */
    //console.log(config,"<--------这是config")
  //  let token = localStorage.getItem('token')||""
    //config.headers.Authorization =token
        //config.headers.Authorization=token
  /*   } */
    return config;
})
axios.interceptors.response.use(res=>{
    console.log(res,"<--------这是res")
    return res.data;
})

export default  axios