'use client'
import { useState } from "react";
import { TaskContext } from "./TaskContext";
import { Task } from "./TaskContextInterface";
import { v4 as uuid } from 'uuid';


export const TaskProvider = ({ children }: { children: any }) => {

    const [tasks, setTasks] = useState<Task[]>([
        {
            id: uuid(),
            title: 'my first task',
            description: 'some task'
        },
        {
            id: uuid(),
            title: 'my second task',
            description: 'some second task'
        },
        {
            id: uuid(),
            title: 'my third task',
            description: 'some third task'
        }
    ])

    function getTaskById(id: string): Task | undefined {
        return tasks.find(particularTask => particularTask.id === id)
    }

    function createTask(title: string, description: string): void {
        setTasks([...tasks, {
            id: uuid(),
            title,
            description
        }])
    }

    function deleteTaskById(id: string) {
        setTasks([...tasks.filter(task => task.id != id)])
    }

    function updateTaskById(task: Task) {
        setTasks([...tasks.map(particularTask =>
            particularTask.id === task.id
                ? { ...particularTask, ...task }
                : particularTask)])
    }

    return <TaskContext.Provider value={{
        tasks,
        createTask,
        deleteTaskById,
        getTaskById,
        updateTaskById
    }}>{children}</TaskContext.Provider>
}