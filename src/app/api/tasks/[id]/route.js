import { NextResponse } from "next/server";
import {Prisma} from '@/libs/prisma';

export async function GET(request, {params}){
    // console.log(params.id)
   const task = await Prisma.task.findUnique({
        where:{
            id: Number(params.id)
        }
    })
    console.log(task)
    return NextResponse.json("obteniendo tarea " + params.id)
}

export async function PUT(request, {params}){
    const data = await request.json()
    const taskUpdate = await Prisma.task.update({
        where:{
            id: Number(params.id)
        },
        data:data
    })
    return NextResponse.json(taskUpdate)
}

export async function DELETE(request, {params}){
    try {
        const taskRemoved = await Prisma.task.delete({
            where:{ id: Number(params.id)}
        })
        // console.log(taskRemoved);
        return NextResponse.json(taskRemoved)
    } catch (error) {
        return NextResponse.json(error.message)
    }
}