import React from 'react'
import LoadingAnimation from './LoadingAnimation'

const LoadingPage = () => {
  return (
    <div className='w-screen h-screen flex flex-col items-center justify-center gap-y-2 fixed top-0 left-0'>
        <p>
            Rolling..
        </p>
        <LoadingAnimation/>
    </div>
  )
}

export default LoadingPage