import { Prisma } from "@/libs/prisma"
import Task from "@/components/TaskCard"

async function loadTasks(){
  //obteniendo de la base de datos
  const tasks = await Prisma.task.findMany();
  return tasks
  // console.log(tasks)
}

// export const revalidate = 60;
export const dynamic = 'force-dynamic';

async function HomePage() {

  const tasks = await loadTasks()
  console.log(tasks)
  return (
    <section className="container mx-auto">
      <div className="grid grid-cols-3 gap-3">
      {
        tasks.map((task)=> (
          <Task task={task} key={task.id}/>
        ))
      }
    </div>
    </section>
  )
}

export default HomePage
