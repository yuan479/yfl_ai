import { SignJWT, jwtVerify } from 'jose';
import { cookies } from 'next/headers'

const getJwtSecretKey = () => {
    const secret = process.env.JWT_SECRET_KEY
    if (!secret) {
        throw new Error('JWT_SECRET_KEY 未发现')
    }
    return new TextEncoder().encode(secret)
}

export const createTokens = async (userId: number) => {
    const accessToken = await new SignJWT({ userId })
        //创建JWT载荷
        //设置头部，指定使用HS256算法签名
        .setProtectedHeader({ alg: 'HS256' })
        //设置颁发时间为当前时间
        .setIssuedAt()
        //设置过期时间为7天
        .setExpirationTime('7d')
        //使用secretKey 签名
        .sign(getJwtSecretKey())

    const refreshToken = await new SignJWT({ userId })
        .setProtectedHeader({ alg: 'HS256' })
        .setIssuedAt()
        .setExpirationTime('15m')
        .sign(getJwtSecretKey())

    return {
        accessToken,
        refreshToken

    }
}

export const setAuthCokies = async (accessToken: string, refreshToken: string) => {
    const cookieStore = await cookies()
    cookieStore.set('access_Token', accessToken, {
        //黑客XSS 攻击js，操作cookie
        httpOnly: true,//不能被js操作cookie
        maxAge: 7 *  60 *  1000,
        sameSite: 'strict',
        path:'/'
    })
    cookieStore.set('refresh_Token', refreshToken, {
        httpOnly: true,
        maxAge: 7 * 24 *  60 * 60 * 1000,
        sameSite: 'strict',
        path:'/'
    })
}

export const verifyToken = async (token: string) => {
    try{
        const {payload} = await jwtVerify(token,getJwtSecretKey())
        return payload
    }catch(error){
        return null
    }
}