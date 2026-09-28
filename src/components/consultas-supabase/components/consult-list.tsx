import { useState, useEffect } from 'react'
import { supabase } from '../utils/supabase'

interface Todos {
    id: string,
    task: string,
    completed: boolean,
}

export function ConsultList() {
    const [todos, setTodos] = useState<Todos[]>([])
    
    useEffect(() => {
        async function getTodos() {
            const { data, error } = await supabase
            .from('todo-list')
            .select('*')

        if (error) {
            console.error('Error al obtener los datos:', error.message)
            return
        }

        if(data) {
            setTodos(data as Todos[])
        }
    }
    
    getTodos()
    }, [])
    
    return (
        <ul>
            {todos.map((todo) => (
                <li key={todo.id}>
                    <span>{todo.task}</span>
                    <input type="checkbox" />
                </li>
            ))}
        </ul>
    )
}