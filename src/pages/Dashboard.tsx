
import {UserList} from '../components/UserList'
import { useFetchUsers } from '../hooks/useFetchUsers'


export const Dashboard = () => {

    const {data: users, loading, error} = useFetchUsers (
        "https://jsonplaceholder.typicode.com/users"
    )

    if (loading) return <p className="text-blue-600">Cargando...</p>
    if (error) return <p className="text-red-600">Error: {error}</p>
 
  return (
    <div className="p-6">
        <h1 className="text-2xl font-bold mb-4">Usuarios</h1>
        <UserList users={users} />
    </div>
  )
}
  