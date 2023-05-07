import { Task } from "@/context/task/TaskContextInterface";
import { useRouter } from 'next/navigation'
import { useTasks } from '../context/task/UseTask'
import { toast } from 'react-hot-toast'

export default function TaskCard({ task }: { task: Task }) {

    const router = useRouter();
    const taskService = useTasks()

    function executeDeleteTaskById(event:any){
        event.stopPropagation();
        const accept = window.confirm('are you sure')
        if (accept) {
            taskService.deleteTaskById(task.id);
            toast.success('task deleted successfully')
        }
    }

    return (
        <div
            style={{ background: '#202020', color: 'white' }}
            onClick={() => router.push(`/edit/${task.id}`)}>
            <h1>{task.title}</h1>
            <button
                onClick={executeDeleteTaskById}>Delete</button>
            <button>Update</button>
            <p>{task.description}</p>
        </div>
    )
}