import type { User } from '../types/types'

type UserListProps = {
    users: User[]
}

export const UserList = ({users}:UserListProps) => {
  return (
    <ul className='space-y-2'>
        {users.map((user)=>(
            <li key={user.id}
            className='p-3 border rounded shadow-sm bg-white hover:shadow-md transition'
            >
                <h2 className='font-bold'>{user.name}</h2>
                <p className='text-gray-600'>{user.email}</p>
            </li>
        ))}
    </ul>
  )
}
