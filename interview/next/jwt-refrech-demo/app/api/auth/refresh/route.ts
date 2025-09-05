import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/db";
import { createTokens, verifyToken } from "@/lib/jwt";


export async function GET(request: NextRequest) {
    try {
        console.log('refresh---------------')
        const refreshToken = request.cookies.get('refresh_Token')?.value
        const redirectUrl = request.nextUrl.searchParams.get('redirect') || "/dashboard"
        if (!refreshToken) {
            return NextResponse.redirect(new URL('/login', request.url))

        }
        const refreshPayload = await verifyToken(refreshToken)
        if (!refreshPayload || !refreshPayload.userId) {
            return NextResponse.redirect(new URL('/login', request.url))
        }
        const userId = refreshPayload.userId as number
        //能不能刷新？
        const user = await prisma.user.findUnique({
            where: {
                id: userId
            }
        })
        if (!user || user.refreshToken !== refreshToken) {
            return NextResponse.redirect(new URL('/login', request.url))
        }
        const { 
            accessToken: newAccessToken,
            refreshToken: newRefreshToken
        } = await createTokens(userId)
        await prisma.user.update({
            where: {
                id: userId
            },
            data: {
                refreshToken: newRefreshToken
            }
        })
        const response = NextResponse.redirect(new URL(redirectUrl, request.url))
        response.cookies.set('access_Token', newAccessToken, {
            httpOnly: true,
            maxAge: 15 * 60 * 1000,
            sameSite: 'strict',
            path: '/'
        })
        response.cookies.set('refresh_Token', newRefreshToken, {
            httpOnly: true,
            maxAge: 7 * 24 * 60 * 60 * 1000,
            sameSite: 'strict',
            path: '/'
        })

        return response
    } catch (error) {
        console.error('refresh error', error)
        return NextResponse.redirect(new URL('/login', request.url))

    }
}