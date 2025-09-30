import React from 'react'
import type { User } from '../types/types';

interface UserCardProps {
  user: User;
}


export const UseCard = ({user}:UserCardProps) => {
  return (
    <div className='max-w-sm rounded-2xl shadow-md bg-white p-4 border hover:shadow-lg transition'>
           <h2 className='text-xl font-bold text-gray-800'>{user.name}</h2>
           <p className='text-gray-600'>{user.email}</p>
           <span className='mt-2 inline-block px-3 py-1 text-sm rounded-full bg-blue-800 '>{user.role}</span>
    </div>
  )
}
