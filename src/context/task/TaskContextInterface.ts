
export interface TaskContextInterface{
    tasks:Task[]
    createTask: (title: string, description: string) => void
    deleteTaskById: (id:string) => void
    getTaskById: (id: string) => Task|undefined
    updateTaskById: (task: Task) => void
}

export interface Task{
    id:string
    title:string
    description:string
}