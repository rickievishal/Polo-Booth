import React from 'react'


const Polaroid = ({data}) => {
    const {imgUrl,author} = data;
  return (
    <div className='w-full min-w-[250px] max-w-[300px] relative '>
    <div className='w-full  h-[380px] bg-gray-150 border-2 rounded-lg bg-[url("@/public/assets/polaroid-style-1.png")] p-[10px] shadow-lg overflow-hidden'>
        <div className='w-full h-[280px] bg-gray-50 rounded-lg border-2 overflow-hidden'>
            <img className='w-full h-full object-cover' src={imgUrl}/>
        </div>
    </div>
    <div className='absolute px-2 py-2 rounded-lg border-2 bg-[var(--primary)] right-[-12px] bottom-[-18px]  text-sm -rotate-6 shadow-[4px_4px_0px_0px_black] '>
            {author}
    </div>
    </div>
  )
}

export default Polaroid