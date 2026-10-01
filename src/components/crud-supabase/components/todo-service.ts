import { supabase } from "../utils/supabase-client"
import type { Todo, TodoCreate, TodoUpdate } from "../utils/types"

//READ
export const getTodos = async (): Promise<Todo[]> => {
    const { data, error } = await supabase
        .from('todo-list')
        .select('*')

        if (error) {
            console.error('Error al obtener la lista de tareas:', error.message)
            throw error
        }

        return data as Todo[]
}

//CREATE
export const createTodo = async (newTodo: TodoCreate): Promise<Todo> => {
    const { data, error } = await supabase
        .from('todo-list')
        .insert([newTodo])
        .select()

        if (error) {
            console.error('Error al crear la tarea:', error.message)
            throw error
        }

        return data[0] as Todo
}

//UPDATE
export const updateTodo = async (id: number, updates: TodoUpdate): Promise<Todo> => {
        const { data, error } = await supabase
        .from('todo-list')
        .update(updates)
        .eq('id', id)
        .select()

        if (error) {
            console.error('Error al actualizar el todo:', error.message)
            throw error
        }

        return data[0] as Todo
}

//DELETE
export const deleteTodo = async (id: number): Promise<void> => {
    const { error } = await supabase
        .from('todo-list')
        .delete()
        .eq('id', id)

        if (error) {
            console.error('Error al eliminar la tarea:', error.message)
            throw error
        }
}