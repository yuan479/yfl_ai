import { PrismaClient } from "@/generated/prisma";
//不直接和数据库打交道
//用Prisma
export const prisma = new PrismaClient()