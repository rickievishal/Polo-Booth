import React from 'react'
import Polaroid from './Polaroid'
import { IoMdFlash } from "react-icons/io";
import { MdRemoveRedEye } from "react-icons/md";

const flashCount = () => {

}
const Post = ({data,type="post"}) => {
    const {title,caption,author,viewCount,likeCount} = data
  return (
    
    <div className='w-full max-w-[300px] flex flex-col justify-start items-center gap-y-2'>
        <div className='w-full space-y-1'>
            <h2 className='text-lg font-bold text-wrap'>
                {title}
            </h2>
            <p className='text-sm'>
                {caption}
            </p>
        </div>
        <Polaroid data={data}/>
        {
            type === "post" && (
                <div className='w-full flex justify-start items-center gap-x-8'>
                    <p className='space-x-2 flex items-center'>
                        <span>
                            <IoMdFlash className='text-xl' />
                        </span>
                        <span className='font-semibold'>
                            {likeCount}
                        </span>
                        
                    </p>
                <p className='space-x-2 flex items-center'>
                        <span >
                            <MdRemoveRedEye className='text-xl' />
                        </span>
                        <span className='font-semibold'>
                            {viewCount}
                        </span>
                        
                    </p>
                </div>
            )
        }
    </div>
  )
}

export default Post