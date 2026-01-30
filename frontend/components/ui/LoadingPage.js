import React from 'react'
import LoadingAnimation from './LoadingAnimation'

const LoadingPage = () => {
  return (
    <div className='w-screen h-screen flex flex-col items-center justify-center gap-y-2'>
        <p>
            Rolling..
        </p>
        <LoadingAnimation/>
    </div>
  )
}

export default LoadingPage