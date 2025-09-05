import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/db";
import path from "path";
import fs from "fs/promises";

export async function GET() {
    try {
        const dataPath = path.join(process.cwd(), "data", "posts.json.txt");
        const fileContent = await fs.readFile(dataPath, "utf-8");
        const data = JSON.parse(fileContent);
        if (!data.posts || !Array.isArray(data.posts)) {
            return NextResponse.json({ error: "数据格式错误" }, { status: 400 });
        }
        const posts = data.posts
        for (const post of posts) {
            const createdPost = await prisma.post.create({
                data: {
                    title: post.title,
                    content: post.content,
                    published: true,
                    authorId: 1,
                }
            })
        }
        return NextResponse.json({ message: "数据导入成功" ,total:posts.length}, { status: 200 });
    } catch (err) {
        return NextResponse.json({ error: "数据导入失败" }, { status: 500 });
    } finally {
        await prisma.$disconnect();
    }
}