"use client"
import { NextRequest, NextResponse } from "next/server";

import { PrismaClient } from "@prisma/client";
const client = new PrismaClient();

export async function POST (req: NextRequest) {
    const body = await req.json();
    console.log(body);
    const user = await client.user.create({
        data: {
            username: body.username,
            password: body.password
        }
    })

    console.log(user.id);

    return NextResponse.json({
        message: "You are logged in"
    })
}

