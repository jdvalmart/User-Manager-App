import React, { useState } from "react"
import type { User } from '../types/types';


export const UserForm = ()=> {
    // estado para el formulario
    const [formData, setFormData] = useState<User>({name:'', email:'',role:'viewer'})

    // estado para mostrar y ocultar el formulario
    const [showForm, setShowForm] = useState(true)

    // manejo de cambio en los inputs
    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
            const {name, value} = e.target
            setFormData((prev) => ({
                ...prev,
                [name]:value,
            }))
        }
    

    //manejo del submit
    const handleSubmit = (e: React.FormEvent) =>{
        e.preventDefault()
        console.log("datos del formulario:", formData)
    }

  return (
    <div className="p-4 border rounded-xl shadow-md bg-white max-w-sm mx-auto" >
        <button
        onClick={()=> setShowForm((prev)=>!prev)}
        className="mb-4 px-3 py-1 rounded bg-blue-500 text-white hover:bg-blue-600 transition"
        >
            {showForm ? 'Ocultar formulario' : 'Mostar formulario'}
        </button>

        {showForm && (
            <form onSubmit={handleSubmit} className="space-y-3">
                <div>
                    <label className="block text-sm font-medium text-gray-700">Nombre</label>
                    <input 
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="mt-1 block w-full border rounded px-2 py-1"
                    
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700">Correo</label>
                    <input 
                        type="text"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="mt-1 block w-full border rounded px-2 py-1"
                    
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700">Rol</label>
                    <select name="role" value={formData.role} className="mt-1 border rounded px-2 py-1">
                        <option value='admin'>Admin</option>
                        <option value='editor'>Editor</option>
                        <option value='viewer'>Viewer</option>
                    </select>
                </div>
                <button
                    type="submit"
                    className="px-4 py-2 rounded bg-green-500 text-white hover:bg-green-600 transition"
                
                >Enviar</button>
            </form>

           
        )}
        
    </div>
  )
}
