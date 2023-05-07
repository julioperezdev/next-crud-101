'use client'
import { useEffect } from 'react'
import { useTasks } from '@/context/task/UseTask'
import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'
import { toast } from 'react-hot-toast'


export default function TaskForm({ taskId }: { taskId: string | null }) {

    const TITLE_FIELD: string = 'title';
    const DESCRIPTION_FIELD: string = 'description';

    const router = useRouter();
    const { register, handleSubmit, setValue, formState: { errors } } = useForm();
    const taskService = useTasks();

    const onSubmit = handleSubmit((data) => {
        if (data.title == null || data.description == null) throw new Error('task cant be null');
        (taskId)
            ? executeUpdateTaskById(taskId, data.title, data.description)
            : executeCreateTask(data.title, data.description);
        router.push('/')
    });

    function executeUpdateTaskById(id: string, title: string, description: string) {
        taskService.updateTaskById({id,title,description})
        toast.success('task updated successfully')
     }
    function executeCreateTask(title: string, description: string) { 
        taskService.createTask(title,description);
        toast.success('task created successfully')
    }


    useEffect(() => {
        if (!taskId) return
        const taskFound = taskService.getTaskById(taskId)
        if (!taskFound) return
        setValue(TITLE_FIELD, taskFound.title)
        setValue(DESCRIPTION_FIELD, taskFound.description)
    }, [])

    return (
        <form onSubmit={onSubmit}>
            <input
                placeholder='Write a title'
                {...register(TITLE_FIELD, { required: true })} />
            {errors.title && (<span>this field is required</span>)}
            <textarea
                placeholder='Write a description'
                {...register(DESCRIPTION_FIELD, { required: true })} />
            {errors.description && (<span>this field is required</span>)}
            <button>Save</button>
        </form>
    )
}
