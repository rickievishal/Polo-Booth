"use client"
import React from 'react'
import Button from '../ui/Button'
import { useAuth } from '@/context/AuthContext'
import api from '@/libs/api';

const Navbar = () => {
    const data = useAuth();
    console.log(data)
    const {user,isLoading} =data;
    if (isLoading) return null;

    const handleLogout = async() => {
        try{
            const res = await api.get("/api/logout")
            console.log(res.data.message);

        }catch(e){
            console.log(e)
        }
    }
  return (
    <div className='w-full fixed top-4 left-1/2 50 -translate-x-1/2 px-4 z-50'>
        <nav className='flex items-center justify-between max-w-5xl mx-auto
          rounded-full border-4 border-black
            backdrop-blur
          bg-[var(--primary)]
          px-6 py-3
          shadow-[6px_6px_0px_0px_black]'>
            <span className='font-bold'>
                Poloroid
            </span>
            <ul className='flex items-center gap-x-4'>
                <li >
                    <a className='font-bold hover:cursor-pointer' href='/profile'>
                        Profile
                    </a>
                </li>
                <li className='font-bold'>
                    <a className='font-bold hover:cursor-pointer' href='/home'>
                        Posts
                    </a>
                </li>
                <li > {
                    !user ?
                    (<a className='font-bold hover:cursor-pointer' href='/login'>
                        <Button>
                            Login
                        </Button>
                    </a>) : 
                    (<a className='font-bold hover:cursor-pointer' onClick={handleLogout}>
                        <Button>
                            Logout
                        </Button>
                    </a>)
}
                </li>
            </ul>
        </nav>
    </div>
  )
}

export default Navbar