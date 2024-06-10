import { NextResponse } from "next/server";
import {Prisma} from "@/libs/prisma"

export async function GET(){
    const tasks  = await Prisma.task.findMany();
    return NextResponse.json(tasks)
}

export async function POST(request){
    const {title,description} = await request.json()
    // console.log(data)
    const newTask = await Prisma.task.create({
        data: { 
            title: title,
            description: description
        }
    })
    return NextResponse.json(newTask)
}