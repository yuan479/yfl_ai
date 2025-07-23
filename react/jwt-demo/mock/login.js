import jwt from "jsonwebtoken";

const { sign } = jwt;
const secret = 'O0OOoo0O0ooO0O0o0' // 密钥  安全性 编码的时候加密，解码时解密

// login 模块 mock 
export default [
    {
        url: '/api/login',
        method: 'post',
        timeout: 2000, // 请求耗时
        response: (req, res) => {
            // req, username, password
            const { username, password } = req.body;
            if (username !== 'admin' || password !== '123456') {
                return {
                    code: 1,
                    messgae: '用户名或密码错误'
                }
            }
            // 接下来生成token 颁发令牌
            //json 用户数据，把它编码到token里面去
            const token = jwt.sign({
                user: {
                    id: "001",
                    username: "admin",
                }
            }, secret, {
                expiresIn: 3600
            })

            console.log(token, "<--------token")

            return {
                token,
               data:{
                id:'001',
                username:"admin"
               }
            }
        }
    },
    {
        url: '/api/user',
        method: 'get',
        response: (req, res) => {
            // 用户端，token也是通过headers传递的
            const token = req.headers["authorization"].split("")[1]; // Bearer token;
            console.log(token, "<--这是token")
            try {
                const decode = jwt.decode(token, secret)
                console.log(decode, "<--------这是decode")
                return {
                    code: 0,
                    data: decode.user
                }
            } catch (err) {
                return {
                    code: 1,
                    message: "无效的token"
                }
            }
            /*   return{
                  token
              } */
        }
    }
]