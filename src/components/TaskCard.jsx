"use client"
import { useRouter } from "next/navigation"

const TaskCard = ({task}) => {
    const router = useRouter();
  return (
    <div className="bg-slate-900 p-3 hover:bg-slate-800 hover:cursor-pointer"
        onClick={() => {
            router.push('/tasks/edit/' + task.id)
        }}
    >
    <h3 className="font-bold text-2xl mb-2">{task.title}</h3>
    <p>{task.description}</p>
    <p>{new Date(task.createdAt).toLocaleDateString()}</p>
  </div>
  )
}

export default TaskCard
