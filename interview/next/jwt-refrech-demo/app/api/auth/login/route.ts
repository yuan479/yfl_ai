import { NextRequest, NextResponse } from "next/server";
import { emailRegex, passwordRegex } from '@/lib/regexp'
import bcrypt from 'bcryptjs'
import { createTokens, setAuthCokies } from '@/lib/jwt'
import { prisma } from "@/lib/db";


export async function POST(request: NextRequest) {
    try {
        const {
            email,
            password
        } = await request.json()

        console.log('🔍 登录请求:', { email, password: password ? '***' : 'undefined' })

        if (!email || !emailRegex.test(email)) {
            console.log('❌ 邮箱格式错误:', email)
            return NextResponse.json(
                { error: 'Email 有误' },
                { status: 400 }
            )
        }
        if (!password || !passwordRegex.test(password)) {
            console.log('❌ 密码格式错误')
            return NextResponse.json(
                { error: 'password 有误' },
                { status: 400 }
            )
        }
        
        console.log('🔍 查询用户:', email)
        const user = await prisma.user.findUnique({
            where: {
                email
            }
        })
        
        console.log('👤 用户查询结果:', user ? '用户存在' : '用户不存在')
        
        if (!user) {
            console.log('❌ 用户不存在，返回 401')
            return NextResponse.json({
                error: "invalid credentials"
            }, {
                status: 401
            })
        }
        console.log('🔐 验证密码...')
        const isPassword = await bcrypt.compare(password, user.password)
        console.log('🔐 密码验证结果:', isPassword ? '密码正确' : '密码错误')
        
        if (!isPassword) {
            console.log('❌ 密码错误，返回 401')
            return NextResponse.json({
                error: '密码错误'
            }, {
                status: 401
            })
        }
        const { accessToken, refreshToken } = await createTokens(user.id)


        await prisma.user.update({
            where: {
                id: user.id
            },
            data: {
                refreshToken: refreshToken
            }
        })

        
        await setAuthCokies(accessToken, refreshToken)

        return NextResponse.json({
            message: "登录成功"
        })
    } catch (err) {
        console.error(err)
        return NextResponse.json({
            error: "服务器错误"
        }, {
            
            status: 500
        })

    } finally {
        //释放数据库对象
        await prisma.$disconnect()
    }
}
