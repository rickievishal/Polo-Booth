import clsx from 'clsx'
import React from 'react'
import Input from './Input'

const PopupForm = ({children,size="md",variant="primary",title="Title",onSubmit,className=""}) => {
    const base = "shadow-[6px_6px_0px_0px_black] rounded-lg overflow-hidden relative"
    const sizes = {
        md : "lg:min-w-[450px] max-w-[500px] min-h-[300px] border " 
    }
    const variants = {
        primary : {
            nav : "bg-[#DC80C5]",
            field : "px-2 py-2 bg-pink-100 pt-10 flex flex-col gap-2",

        }
    }

  return (
    <div className={clsx(
        base,
        sizes[size],
        variants[variant].field,
    )}>
        {/* title */}
        <div className={clsx(
            "w-full h-8 flex justify-start items-center px-2 gap-1 border-b-1 absolute left-0 top-0",
            variants[variant].nav
        )}>
            <p className='absolute left-[50%] -translate-x-[50%]'>{title}</p>
            <div className='w-3 h-3 border-black border-1 rounded-full bg-[#DC80C5]'>

            </div>
            <div className='w-3 h-3 border-black border-1 rounded-full bg-[#FCC52E]'>
            
            </div>
            <div className='w-3 h-3 border-black border-1 rounded-full bg-pink-100'>
            </div>
        </div>
        <div>
        </div>
        <form className={clsx(
            "w-full h-full",
            className
        )} onSubmit={onSubmit}>
            {children}
        </form>
    </div>
  )
}

export default PopupForm