import { AnimatePresence, motion } from 'framer-motion';
import Link from 'next/link';
import React, { useState } from 'react'
import { FaPlus } from "react-icons/fa6";
import { MdKeyboardArrowDown } from "react-icons/md";
const Menubar = ({className}) => {
    const [isMenuOpen, setIsMenuOpen] = useState(true)
    // const animation = {
    //     initial : {}
    // }
    const handleMenuClick = () => {
        setIsMenuOpen(!isMenuOpen);
    }
  return (

    <div className={`w-full flex flex-col items-end mb-10 ${className}`}>
        <AnimatePresence>
            {
                isMenuOpen && (
                    <motion.div initial={{x:30, y : 80, opacity : 0.3 ,scale : 0.2}} animate={{x:0, y : 0, opacity : 1 ,scale : 1}} exit={{x:20, y : 80, opacity : 0.3 ,scale : 0.2}}  className='inline-flex items-center absolute right-0 bottom-[70px] gap-x-4'>
                        <Link href='/post' className='menu option h-[50px] px-4 space-x-2 rounded-full shadow-[6px_6px_0px_0px_black] flex justify-center items-center border-2 bg-(--primary)  '>
                            <FaPlus className='text-xl'/>
                            <p>
                                Post
                            </p>
                        </Link>
                    </motion.div>
                )
            }
        </AnimatePresence>
        <button className='menu option w-[50px] h-[50px] rounded-full shadow-[6px_6px_0px_0px_black] flex justify-center items-center border-2 bg-(--primary) absolute bottom-0' onClick={()=>handleMenuClick()}>
            <div className='w-full h-full inline-flex relative justify-center items-center m-auto' >
                <AnimatePresence >
                    {
                        isMenuOpen ? (
                            <motion.div key={"close"} className='text-2xl' initial={{rotate : 0,opacity:0}} animate={{rotate :180,opacity:1}} exit={{rotate:0,opacity:0}}>
                                <MdKeyboardArrowDown />
                            </motion.div>
                        )
                         : (
                            <motion.div key={"open"} className='absolute text-xl' initial={{rotate : 0,opacity:0}} animate={{rotate :180,opacity:1}} exit={{rotate:0,opacity:0}}>
                                <FaPlus />
                            </motion.div>

                        )
                    }
                </AnimatePresence>
            </div>
            
        </button>
    </div>
  )
}

export default Menubar