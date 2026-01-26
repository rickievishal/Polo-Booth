"use client"
import React from 'react'
import Button from '../ui/Button'
import { useAuth } from '@/context/AuthContext'
import api from '@/libs/api';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
const Navbar = () => {
    const data = useAuth();
    // console.log(data)
    const {user,isLoading} =data;
    const router = useRouter()
    if (isLoading) return null;
    const handleLogout = async() => {
        try{
            const res = await api.get("/api/logout")
            console.log(res.data.message);
            data.setUser(null);
            router.refresh()
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
            <span className='font-bold text-sm'>
                Poloroid
            </span>
            <ul className='flex items-center gap-x-4'>
                <li className='font-bold'>
                    <Link className='font-bold hover:cursor-pointer text-sm' href='/home'>
                        feed
                    </Link>
                </li>
                <li className='font-bold'>
                    <Link className='font-bold hover:cursor-pointer text-sm' href='/post'>
                        upload
                    </Link>
                </li>
                <li > {
                    !user ?
                    (<Link className='font-bold hover:cursor-pointer text-sm' href='/login'>
                        <Button>
                            Login
                        </Button>
                    </Link>) : 
                    (
                        <Button onClick={handleLogout}>
                            Logout
                        </Button>
                    )
}
                </li>
            </ul>
        </nav>
    </div>
  )
}

export default Navbar