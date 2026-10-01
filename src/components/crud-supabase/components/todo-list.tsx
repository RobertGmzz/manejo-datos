import { useState, useEffect } from 'react'
import { getTodos, createTodo, updateTodo, deleteTodo } from './todo-service'
import type { Todo } from '../utils/types'

export function TodoApp() {
    const [todos, setTodos] = useState<Todo[]>([])
    const [newTitle, setNewTitle] = useState('')

    useEffect(() => {
        const fetchTodos = async () => {
            try {
                const data = await getTodos()
                setTodos(data)
            } catch (err) {
                alert('No se pudieron cargar las tareas')
            }
        }

        fetchTodos()
    }, [])

    const handleCreate = async () => {
        if (!newTitle.trim()) return
        try {
            const created = await createTodo({ task: newTitle, is_completed: false })
                setTodos([created, ...todos])
                setNewTitle('')
            } catch (err) {
                alert('Error al crear')
        }
    }

    const handleToggleComplete = async (todo: Todo) => {
        try {
            const updated = await updateTodo(todo.id, { is_completed: !todo.is_completed })
            setTodos(todos.map(t => t.id === todo.id ? updated : t))
        } catch (err) {
            alert('Error al actualizar')
        }
    }

    const handleDelete = async (id: number) => {
        try {
            await deleteTodo(id)
            setTodos(todos.filter(t => t.id !== id))
        } catch (err) {
            alert('Error al eliminar')
        }
    }
    
    return (
    <div style={{ padding: '20px' }}>
      <h1>Mis Tareas con Supabase</h1>
      
      {/* Input para agregar */}
      <input 
        type="text" 
        value={newTitle} 
        onChange={(e) => setNewTitle(e.target.value)} 
        placeholder="Nueva tarea..."
      />
      <button onClick={handleCreate}>Agregar</button>

      {/* Lista de tareas */}
      <ul>
        {todos.map(todo => (
          <li key={todo.id} style={{ margin: '10px 0' }}>
            <span 
              onClick={() => handleToggleComplete(todo)}
              style={{ textDecoration: todo.is_completed ? 'line-through' : 'none', cursor: 'pointer' }}
            >
              {todo.task}
            </span>
            <button onClick={() => handleDelete(todo.id)} style={{ marginLeft: '10px' }}>
              Eliminar
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}