import React from 'react'
import clsx from "clsx"
import Link from "next/link"
const Button = ({children,onClick, type="button", variant="primary", size="md",className="",href="",disabled=false,...props}) => {
    const base = "font-bold border-2"
    const variants = {
        primary : "bg-[#DC80C5]",
        secondary : "bg-[#EDAF1B]",
        light : "bg-[#E2D2DE]",
    }
    const sizes = {
        sm: "px-4 py-2 text-xs rounded-r-full rounded-l-full",
        md: "px-6 py-3 text-sm rounded-r-full rounded-l-full max-w-[240px]",
        lg: "px-8 py-4 text-base rounded-r-full rounded-l-full",
    }
  return (
    type == "nav-icon" ? (<Link href={href} onClick={onClick} className={clsx(
        "shadow-[6px_6px_0px_0px_black]",
        "cursor-pointer",
        "active:shadow-[0px_0px_0px_0px_black]",
        "active:translate-x-1 active:translate-y-1",
        "transition-all duration-100 ease-in-out",
        sizes[size],
        variants[variant],
        className,
        disabled && "saturate-0 opacity-50 pointer-events-none ",
        base
    )} {...props}>
        {children}
    </Link>) : (<button type={type} onClick={onClick} className={clsx(
        "shadow-[6px_6px_0px_0px_black]",
        "cursor-pointer",
        "active:shadow-[0px_0px_0px_0px_black]",
        "active:translate-x-1 active:translate-y-1",
        "transition-all duration-100 ease-in-out",
        sizes[size],
        variants[variant],
        className,
        disabled && "saturate-0 opacity-50 pointer-events-none ",
        base
    )} {...props}>
        {children}
    </button>)
  )
}

export default Button