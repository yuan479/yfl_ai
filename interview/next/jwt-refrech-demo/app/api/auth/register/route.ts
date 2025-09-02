import { NextRequest, NextResponse } from "next/server";
import { prisma } from '@/lib/db'
import bcrypt from 'bcryptjs'
//result
// . 什么都匹配 +一次或多次 @邮箱必备字符 \. 转义 一定要有. 
const emailRegex = /.+@.+\..+/;//正则表达式
const passwordRegex = /^(?!^\d+$)^[a-zA-Z0-9!@#$%^&*]{6,18}$/

export async function POST(request: NextRequest) {
    try {
        const {
            email,
            password
        } = await request.json()

        if (!email || !emailRegex.test(email)) {
            return NextResponse.json({ error: '邮箱格式无效' }, { status: 400 })
        }
        if (!password || !passwordRegex.test(password)) {
            return NextResponse.json(
                { error: '密码需6-18位，且不能全为数字' },
                { status: 400 }
            )
        }

        // 成功路径：这里先返回成功占位，后续可添加注册逻辑（如 prisma 操作）
        /* return NextResponse.json({ message: '注册成功' }, { status: 201 }) */
        const hashedPassword = await bcrypt.hash(password, 10) //加密10级难度
        console.log(hashedPassword)
        const user = await prisma.user.create({
            data: {
                email,
                password: hashedPassword
            }
        })
        return NextResponse.json({
            message: '登录成功'
        }, {
            status: 201
        })
    } catch (err) {
        return NextResponse.json({ error: '服务器错误' }, { status: 500 })
    }
}