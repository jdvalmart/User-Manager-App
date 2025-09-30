import { useEffect, useState } from "react"
import type  {User} from '../types/types'


export const useFetchUsers = (url:string) => {
    const [data, setData] = useState<User[]>([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState<string | null>(null)

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true)
                const res = await fetch(url)
                if (!res.ok) throw new Error('Error al obtener los usuarios')
                const data: User[] = await res.json()
                setData(data)
                
            } catch (err) {
                setError((err as Error).message)
                
            }finally{
                setLoading(false)
            }
        }
        fetchData()
    },[url])

  return {data, loading, error}
}
