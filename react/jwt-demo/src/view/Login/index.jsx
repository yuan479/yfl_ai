import {
    useRef
} from 'react';
import {
    useUserStore
} from '../../store/user'
import {
    useNavigate
} from 'react-router-dom'

const Login = () => {
    const usernameRef = useRef();
    const passwordRef = useRef();
    const { login } = useUserStore();
    const handleLogin = (e) => {
        e.preventDefault()
        const username = usernameRef.current.value
        const password = passwordRef.current.value
        if (!username || !password) {
            alert("滚！！！")
            return
        }
        login({ username, password })
        /*  setTimeout(()=>{
            navigate('/')
         },1000) */
    }
    return (
        <>
            <form onSubmit={handleLogin}>
                <div>
                    <label htmlFor="username">Username</label>
                    <input
                        type="text"
                        id="username"
                        ref={usernameRef}
                        placeholder="请输入用户名"
                        required
                    />
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        id="password"
                        ref={passwordRef}
                        placeholder='请输入密码'
                        required
                    />
                </div>
                <div>
                    <button type="submit">Login</button>
                </div>
            </form>
        </>
    )
}
export default Login;