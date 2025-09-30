import { useEffect, useState } from "react"
import type{User} from '../types/types'
import {UserList} from '../components/UserList'


export const Dashboard = () => {
    const [users, setUsers] = useState<User[]>([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState<string | null>(null)
    
useEffect(() => {
    const fetchUsers = async () => {
        try {
            setLoading(true)
            const res = await("https://jsonplaceholder.typicode.com/users")
            if (!res.ok) throw new Error('Error al obtener los usuarios')
            const data: User[] = await res.json()
            setUsers(data)
            
        } catch (err) {
            setError((err as Error).message)
            
        }finally{
            setLoading(false)
        }
    }
    fetchUsers()
},[])

if (loading) return <p className="text-blue-600">Cargando...</p>
if (error) return <p className="text-red-600">Error: {error}</p>

  return (
    <div className="p-6">
        <h1 className="text-2xl font-bold mb-4">Usuarios</h1>
        <UserList user={users} />
    </div>
  )
}
