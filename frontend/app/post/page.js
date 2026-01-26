"use client"
import ProtectedRoute from '@/components/auth/ProtectedRoute';
import Button from '@/components/ui/Button';
import FileUpload from '@/components/ui/FileUpload';
import Input from '@/components/ui/Input';
import PopupForm from '@/components/ui/PopupForm';
import Post from '@/components/ui/Post';
import { useAuth } from '@/context/AuthContext';
import api from '@/libs/api';
import imageCompression from 'browser-image-compression';
import React, { useState } from 'react'

const page = () => {
    const [title, setTitle] = useState("What's on your Mind");
    const [caption, setCaption] = useState("make it short and sweet :)");
    const [imgUrl, setImgUrl] = useState("/assets/UploadPlaceholder.png");
    const [fileName, setFileName] = useState("No image")
    const data = useAuth();
    const user = data?.user;
    console.log(user?.username)
    const handleFileChange = async(e) => {
        const file = e.target.files[0];
        const compressedFile = await imageCompression(file, {
            maxSizeMB: .5,         // target max size in MB
            maxWidthOrHeight: 1024,  // max width/height
            useWebWorker: true,
        });
        setFileName(file.name)

        console.log(compressedFile)
        if (!compressedFile) return;

        try {
            const reader = new FileReader()
            reader.onloadend=()=>{
                setImgUrl(reader.result);
                console.log(reader.result)
            }
            reader.readAsDataURL(compressedFile)
        }catch{
            console.log("file is too large")
        }
    }
    const handlePost = async () => {
        try{
            await api.post("/api/create-post",{
            title,
            caption,
            imgUrl
        })
        console.log(posted)
        }catch(e){
            console.log("failed to post")
        }
    }
     const dummy = {
        _id : "asfadf",
        title : "Sankari Today",
        imgUrl : "https://i.pinimg.com/736x/d5/a1/ee/d5a1eed890a8c1cfa4746368a5b1a06b.jpg",
        caption : "I look too cute today ;)",
        author : "Sankari",
        views : 45,
        likeCount : 678
    }
    
  return (
    <ProtectedRoute>
        <div className='w-full h-full flex justify-center px-4'>
            <section className='w-full h-full flex flex-col items-center justify-start mt-32 pb-4 '>
                <PopupForm title='post' onSubmit={handlePost} className='space-y-4 py-4 w-full'>
                    <Input
                        label={"Title"}
                        placeholder='title'
                        value={title}
                        onChange={(e)=>setTitle(e.target.value)}
                    />
                    <Input
                        label={"Caption"}
                        placeholder='caption'
                        value={caption}
                        onChange={(e)=>setCaption(e.target.value)}
                    />
                    <FileUpload fileName={fileName} onChange={handleFileChange}/>
                    <div className='w-full h-[600px] flex flex-col items-center justify-center px-4 gap-y-8 '>
                        <Post type='preview' data={{title,caption,imgUrl,title,caption,_id:"preview",author : user ? user.username : "loading"}}/>
                        <Button type='submit' className='w-full'>
                            Post
                        </Button>
                    </div>
                    {/* <button type='submit'>post</button> */}
                </PopupForm>
            </section>
        </div>
    </ProtectedRoute>
  )
}

export default page