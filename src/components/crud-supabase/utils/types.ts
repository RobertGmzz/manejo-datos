export interface Todo {
    id: number,
    task: string,
    is_completed: boolean,
}

export type TodoCreate = Omit<Todo, 'id'>
export type TodoUpdate = Partial<TodoCreate>