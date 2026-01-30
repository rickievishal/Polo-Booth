"use client"
import Menubar from '@/components/layout/Menubar';
import Button from '@/components/ui/Button';
import Polaroid from '@/components/ui/Polaroid';
import PopUpBox from '@/components/ui/PopUpBox';
import Post from '@/components/ui/Post';
import { FiArrowRight } from "react-icons/fi";
import api from '@/libs/api'
import axios from 'axios'
import { useEffect, useState } from 'react';
import { FaPlus } from "react-icons/fa6";
import { useAuth } from '@/context/AuthContext';


const page = () => {
    const [posts, setPosts] = useState(null)
    const {user,setUser,isLoading} = useAuth();

    const fetchPost = async() => {
        try{
            const res = await api.get("/api/get-posts");
            console.log(res.data);
            setPosts(res.data);
        }catch(e){
            console.log(e)
        }
    }
    useEffect(() => {
      fetchPost();
    }, [])
    const postData = [
            {
                _id : "asfadf",
                title : "Havin a great Dayyyy ;)",
                imgUrl : "/assets/vk-2.jpg",
                // imgUrl : "https://i.pinimg.com/736x/d5/a1/ee/d5a1eed890a8c1cfa4746368a5b1a06b.jpg",

                caption : "slayed for good ;)",
                author : "@torovdroro",
                views : 45,
                likeCount : 678
            },
            // {
            //     _id : "asfaafasdfdf",
            //     title : "wass funnnn! xD",
            //     imgUrl : "/assets/vk-1.jpeg",
            //     caption : "heeee heeeee...",
            //     author : "@torovdoro",
            //     viewCont : 45,
            //     likeCount : 678
            // },
    ]
  return (
    
    <div className='w-full max-w-screen overflow-x-hidden ' >
        <section className='w-full max-w-screen overflow-x-hidden px-4'>
            <div className='mx-auto max-w-[350px] flex flex-col items-center overflow-x-hidden relative gap-y-4 py-32'>
                <div className='w-screen h-screen fixed top-0 left-0 z-40 pb-12'>
                    <div className='w-full max-w-[350px] h-screen mx-auto flex justify-end items-end'>
                    <Menubar className={"mb-10 translate-y-6"}/>
                    </div>
                </div>
                {
                    !user && isLoading && (<PopUpBox title='Warning' actionName='Login' message={"You are currently Signed out :)"} icon={<FiArrowRight />}/>)
                }                   
                {posts?.map((data) => (<Post data={data} key={data._id}/>))}
            </div>
        </section>
    </div>
  )
}

export default page