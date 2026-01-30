"use client"

import {createContext, useContext, useEffect, useState} from "react";
import api from "@/libs/api";
import { useRouter } from "next/navigation";

const AuthContext = createContext(null);

export const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const router = useRouter();

    useEffect(()=>{
            const fetchUser = async() =>{
                try{
                    const res = await api.get("/api/validate");
                    setUser(res.data.user);
                    console.log(res.data.user)

                }catch(e){
                    console.log("Sign In, you are currently signed out")
                    
                }finally{
                    setIsLoading(false)
                }
            }
            fetchUser();
        
    },[])
    return(
        <AuthContext.Provider value={{user, isLoading, setUser}}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => useContext(AuthContext);