"use client";

import { MotionConfig } from "framer-motion";
import Image from "next/image";
import { IoCartOutline } from "react-icons/io5";
import { motion } from "framer-motion";


const menu =[
  {
    id:1,
    name:"Home",
    path:'/',
    delay:0.2
  },
  {
    id:3,
    name:"About",
    path:'/about',
    delay:0.3
  },
  {
    id:3,
    name:"Menu",
    path:'/menu',
    delay:0.4
  },
  {
    id:4,
    name:"Delivery",
    path:'/delivery',
    delay:0.5
  },
  {
    id:5,
    name:"Contact Us",
    path:'/contact',
    delay:0.6
  }
]

const SliedDown = (delay) =>{
  return {
    initial: {
      y: "-100%",
      opacity: 0,
      },
      animate: {
        y: 0,
        opacity: 1,
        transition: {
          duration: 0.8,
          delay: delay,
        }
      }
    }
}

const Nabvar = () => {
  return (
      <div className="container flex justify-center items-center font-medium gap-20 ">
        {/*logo sections */}

        <motion.div
        initial={{  opacity: 0 }}
        whileInView={{  opacity: 1 }}
        transition={{ duration: 0.8  , dealy:0.5}}
        >
        <Image src='/logo.png' width={100} height={100} alt='logo' />
        </motion.div>
        {/*menu sections */}
        <div className=" hidden md:block">
          <ul 

          className='flex gap-6' >
            {
              menu.map((items) =>
                <motion.li
                variants={SliedDown(items.delay)}
                initial="initial"
                animate="animate"
                 key={items.id} className='nav-menu' date_delay={items.delay} >
                  <a className=' inline-block px-2 py-2 text-2xl' href={items.path}>{items.name}</a>
              </motion.li>
              )
            }
             </ul>
        </div>
        {/*button sections */}
        <motion.button 
        variants={SliedDown(1)}
        initial="initial"
        animate="animate"
        className='h-[40px] w-[40px] grid place-items-center rounded-full text-white bg-slate-900 ' ><IoCartOutline/></motion.button>
        </div>
  );
};

export default Nabvar;
