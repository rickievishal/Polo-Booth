import React, { useRef } from 'react'
import Button from './Button';

const FileUpload = ({onChange,fileName}) => {
    const inputRef = useRef(null);
    const handleClick = () => {
        inputRef.current.click();
    }
  return (
    <div className='inline-flex items-center space-x-4'>
        <p>{fileName}</p>
        <Button onClick={handleClick}>
            Chose
        </Button>
        <input ref={inputRef} type='file' className='hidden'  onChange={onChange}/>
    </div>

  )
}

export default FileUpload