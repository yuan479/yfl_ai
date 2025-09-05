import { NextRequest,NextResponse } from "next/server";
import { verifyToken } from "@/lib/jwt";

const protectedPath = ['/dashboard','/profile']

export async function middleware(request:NextRequest){
    const path = request.nextUrl.pathname
    
    // 如果是登录页面或API路由，直接通过
    if(path.startsWith('/login') || path.startsWith('/api/') || path === '/'){
        return NextResponse.next()
    }
    
    // 检查是否是需要保护的路径
    const isProtectedPath = protectedPath.some(p => path.startsWith(p))
    if(!isProtectedPath){
        return NextResponse.next()
    }
    
    // 检测是否登录
    const accessToken = request.cookies.get('access_Token')?.value
    const refreshToken = request.cookies.get('refresh_Token')?.value
    
    console.log('🔍 中间件检查:', { path, hasAccessToken: !!accessToken, hasRefreshToken: !!refreshToken })
    
    // 如果没有任何token，重定向到登录页
    if(!accessToken && !refreshToken){
        console.log('❌ 没有任何token，重定向到登录页')
        return NextResponse.redirect(new URL('/login', request.url))
    }
    
    // 验证accessToken
    if(accessToken){
        try {
            const accessPayload = await verifyToken(accessToken)
            if(accessPayload){
                console.log('✅ accessToken有效')
                const requestHeaders = new Headers(request.headers)
                requestHeaders.set('x-user-id', accessPayload.userId as string)
                return NextResponse.next({
                    request: {
                        headers: requestHeaders
                    }
                })
            }
        } catch (error) {
            console.log('❌ accessToken无效:', error instanceof Error ? error.message : '未知错误')
        }
    }
    
    // accessToken无效或过期，尝试使用refreshToken刷新
    if(refreshToken){
        try {
            const refreshPayload = await verifyToken(refreshToken)
            if(refreshPayload){
                console.log('🔄 使用refreshToken刷新')
                const refreshUrl = new URL('/api/auth/refresh', request.url)
                refreshUrl.searchParams.set('redirect', request.url)
                return NextResponse.redirect(refreshUrl)
            }
        } catch (error) {
            console.log('❌ refreshToken无效:', error instanceof Error ? error.message : '未知错误')
        }
    }
    
    // 所有验证都失败，重定向到登录页
    console.log('❌ 所有验证失败，重定向到登录页')
    return NextResponse.redirect(new URL('/login', request.url))
}