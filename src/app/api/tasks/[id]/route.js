import { NextResponse } from "next/server";

export function GET(request, {params}){
    return NextResponse.json("obteniendo tarea " + params.id)
}

export function PUT(request, {params}){
    return NextResponse.json("actualizando tarea " + params.id)
}

export function DELETE(request, {params}){
    return NextResponse.json("eliminando tarea " + params.id)
}