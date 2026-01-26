"use client"

import React, { useState } from 'react'
import api from '@/libs/api'
import Input from '@/components/ui/Input'
import Button from '@/components/ui/Button'
import PopupForm from '@/components/ui/PopupForm'
import { useRouter } from 'next/navigation'


const LoginForm = () =>{
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isLoading, setIsLoading] = useState(false)
    const router = useRouter();
    const handleLogin = async(e)=> {
        e.preventDefault();
        setIsLoading(true);
        try{
            await api.post("/api/login",{
                email,
                password
            })
            console.log("signed in")
            setIsLoading(false);
            router.replace("/home")
        }catch(e){
            console.log(e)
            setIsLoading(false);
        }
    }
    return (
        <PopupForm title='Login to your account' className='flex flex-col gap-y-4 pb-8 px-4' onSubmit={handleLogin}>
            <div className='max-w-sm'>
            
            <Input
            label={"Email"}
                placeholder='email'
                value={email}
                onChange={(e)=>setEmail(e.target.value)}
            />
            </div>

            <div className='max-w-sm'>
            <Input
            label={"Password"}
                placeholder='password'
                value={password}
                onChange={(e)=>setPassword(e.target.value)}
            />
            </div>

            <Button type='submit' className='mt-2' disabled={isLoading}>Sign in</Button>
       </PopupForm>
    )
}

const SignUpForm = () => {
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isLoading, setIsLoading] = useState(false)
    const handleSignUp = async(e) => {
        e.preventDefault();
        setIsLoading(true)
        try{
            await api.post("/api/create-account",{
                username,
                email,
                password
            });

            alert("signed up")
            setIsLoading(false);

        }catch(err){
            setIsLoading(false);
            // alert(err.response?.data?.message || "Signup Failed");
        }
    }
    return (
        <PopupForm title='Create your account' className='flex flex-col gap-y-4 pb-8 px-4' onSubmit={handleSignUp}>
            <div className='max-w-xs'>
                <Input
                label={"Username"}
                placeholder='Username123'
                value={username}
                onChange={(e)=>setUsername(e.target.value)}
                />
            </div>
            <div className='max-w-sm'>
            <Input
                label={"Email"}
                placeholder='email@gamil.com'
                value={email}
                onChange={(e)=>setEmail(e.target.value)}
            />
            </div>
            <div className='max-w-sm'>
            <Input
                label={"Password"}
                placeholder='password@123'
                value={password}
                onChange={(e)=>setPassword(e.target.value)}
            />
            </div>
            <Button type='submit' className='mt-2' disabled={isLoading}>Sign in</Button>
       </PopupForm>
    )
}
const page = () => {
   
    const [form, setForm] = useState("sign-up")
    const toggleLogin = () =>{
        setForm("sign-up");
        console.log("sign-up")
    }
     const toggleSignUp = () =>{
        setForm("login");
    }
  return (
    <div className='w-full h-full flex flex-col items-center py-32 bg-pink-50'>
        <section className='mx-auto max-w-5xl flex flex-col items-center gap-y-4 px-4'>
            <div className='w-50 h-10 border rounded-r-full rounded-l-full px-1 py-1 gap-x-1 flex items-center justify-center bg-pink-100 shadow-[3px_3px_0px_0px_black]'>
                <div className={`w-1/2 h-full flex items-center justify-center border rounded-r-full rounded-l-full hover:cursor-pointer bg-pink-50 ${form === "login" &&  "bg-pink-400"}`} onClick={()=>toggleSignUp()}>
                        Login
                </div>
                <div className={`w-1/2 h-full flex items-center justify-center border rounded-r-full rounded-l-full hover:cursor-pointer bg-pink-50 ${form === "sign-up" && "bg-pink-400"}`} onClick={()=>toggleLogin()}>
                        SignUp
                </div>
            </div>
            <div className='w-full'>
                {
                    form == "sign-up" ? <SignUpForm/> : <LoginForm/>
                }
            </div>
        </section>
    </div>
  )
}

export default page