import {
    useState
} from 'react'
import {
    useNavigate, //Navigate 组件js跳转
    useLocation
}from 'react-router-dom'

const Login = () => {
    const location = useLocation()
    // console.log(location.state.form)
    const navigate =useNavigate() //获得navigate的能力
    const [username,setUsername]=useState('')
    const [password,setPassword]=useState('')
    const handleSubmit = (event)=>{
        event.preventDefault()
        if (username === 'admin' && password === '123456') {
            localStorage.setItem('isLogin', 'true');
            navigate(location?.state?.from||'/')
        } else {
            alert('用户名或密码错误');
        }
    }
  return (
   <form onSubmit={handleSubmit}>
    <h1>登录页面</h1>
    <input 
    type="text" 
    placeholder="请输入用户名" 
    required
    value={username}
    onChange={(event)=>setUsername(event.target.value)}
    />
      <input 
    type="password" 
    placeholder="请输入密码" 
    required
    value={password}
    onChange={(event)=>setPassword(event.target.value)}
    />
    <button type='submit'>确定</button>
   </form>
  )
}
export default Login