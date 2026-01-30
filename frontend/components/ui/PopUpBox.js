import React from 'react'

const PopUpBox = ({title="Warning",message,icon,description,actionName="Action"}) => {
  return (
    <div className='w-[300px] px-2 py-2 border-2 border-black rounded-lg bg-(--secondary)  mx-3 flex flex-col items-center justify-between'>
        <p className='w-full text-sm flex flex-col'>
             <span className='font-semibold'>
            {title}
            </span>
            <span>
            {message}
            </span>
            <span>
                {description}
            </span>
        </p>
        <p className='w-full text-sm text-right flex items-center justify-end font-semibold'>
            <span>
                 {actionName}
            </span>
            {icon && (<span className='text-lg'>
            {icon}
        </span>)}
        </p>
    </div>
  )
}

export default PopUpBox