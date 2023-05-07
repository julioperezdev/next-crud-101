'use client'
import {createContext} from 'react'
import { TaskContextInterface } from './TaskContextInterface';

export const TaskContext = createContext<TaskContextInterface | null>(null);


