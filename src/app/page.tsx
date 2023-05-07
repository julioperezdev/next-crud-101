'use client'
import {useTasks} from '../context/task/UseTask'
import TaskCard from '@/components/TaskCard';

export default function HomePage() {
  const {tasks} = useTasks();
  return (
    <>
    {tasks.map(particularTask => (
      <TaskCard
      key={particularTask.id}
      task={particularTask}/>
    ))}
    </>
  )
}

//rfce