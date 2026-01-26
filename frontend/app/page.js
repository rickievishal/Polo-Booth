"use client"
import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import PopupForm from "@/components/ui/PopupForm";
import { useAuth } from "@/context/AuthContext";
import Image from "next/image";

export default function Home() {
  const {user,isLoading} = useAuth();
  console.log(user,isLoading)
  return (
    <div className="h-screen w-screen flex flex-col min-h-screen font-sans pt-24">
         <div className="w-full">
          <section className="max-w-7xl mx-auto">
              
          </section>
         </div>
    </div>
  );
}
