import { useState, useEffect } from 'react'
import { supabase } from '../utils/supabase'

interface UserData {
    id: string,
    user_id: string,
    patients: string,
    consults: string
}

export function ConsultList() {
    const [consults, setConsults] = useState<UserData[]>([])
    
    useEffect(() => {
        async function getConsults() {
            const { data, error } = await supabase
            .from('consultas-medicas')
            .select('*')

        if (error) {
            console.error('Error al obtener los datos:', error.message)
            return
        }

        if(data) {
            setConsults(data as UserData[])
        }
    }
    
    getConsults()
    }, [])
    
    return (
        <ul>
            {consults.map((consult) => (
                <li key={consult.id}>
                    <span>{consult.patients}</span>
                    <p>{consult.consults}</p>
                </li>
            ))}
        </ul>
    )
}