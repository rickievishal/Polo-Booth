import clsx from 'clsx'
import React, { useId } from 'react'

const Input = ({value="",onChange,placeholder="placeholder",variant="primary",size="md",label,type="text",disabled}) => {
    const base = "border-2 font-bold"
    const variants = {
        primary : "bg-[#EDAF1B]"
    }
    const id = useId();
    const sizes = {
        md : {
            label : "text-lg font-bold",
            input : "w-full px-4 py-2 text-base rounded-lg"
        }
    }
  return (
    <>
    <div className='space-y-1'>
        {label && <label id={id} className={clsx(
            sizes[size].label
        )}>
            {label}
            </label>}
        <input disabled={disabled} id={id} onChange={onChange} type={type} value={value} placeholder={placeholder} className={clsx(
        base,
        "shadow-[6px_6px_0px_0px_black]",
        variants[variant],
        disabled && "saturate-0 opacity-50",
        sizes[size].input

    )}/>
    </div>
    </>
  )
}

export default Input