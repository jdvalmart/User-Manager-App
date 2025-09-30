import { UseCard } from "./components/UseCard"
import { UserForm } from "./components/UserForm"
import type { User } from './types/types'


export default function App() {
  const user: User = {
    name: 'Juan Valencia',
    email: 'juanvalencia@gmail.com',
    role: 'admin'
  }

  return (
    <div className="p-6 flex justify-center">
      <UseCard user={user}/>
      <UserForm/>
    </div>
  )
}

