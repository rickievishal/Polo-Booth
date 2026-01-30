"use client";



import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const HideLogin = ({ children }) => {
  const router = useRouter();
  const { user, isLoading } =  useAuth();

  useEffect(() => {
    if (!isLoading && user) {
      router.replace("/home");
    }
  }, [user, isLoading, router]);


  if (isLoading) return null;


  if (user) return null;

  return children;
};

export default HideLogin;
