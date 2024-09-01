"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { SliedUp } from "./Hero";

const Testimonial = () => {
  return (
    <section>
      <div className="container mt-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-14  place-items-center">
          {/* text sections */}
          <div className=" space-y-5 lg:max-w-[400px]">
            {/* <motion.h1
              variants={SliedUp(1)}
              initial="hidden"
              whileInView="show"
              className="text-6xl uppercase font-semibold font-league"
            >
              The Best yummy food in the town
            </motion.h1>
            <motion.p
              variants={SliedUp(1.3)}
              initial="hidden"
              whileInView="show"
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero ea
              enim porro!
            </motion.p>
            <motion.button
              variants={SliedUp(1.6)}
              initial="hidden"
              whileInView="show"
              className="bg-green-500 flex  items-center py-2  border-[1px] text-white border-black px-2  hover:rounded-full rounded hover:scale-105"
            >
              Order Now
            </motion.button> */}

            <motion.p 
            variants={SliedUp(0.5)}
            initial="hidden"
            whileInView="show"
            className="text-xl font-serif relative z-10">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti
              blanditiis ipsam, optio molestias sit itaque a. Sint,ptio
              molestias sit itaque a. Sint, vero obcaecati. Ipsam.
            </motion.p>
            <div className="flex items-center gap-4">
            <Image
                className=" rounded-full object-contain"
                src='/photo.jpeg'
                width={50}
                height={50}
                alt=""
              />
            <motion.div
            variants={SliedUp(0.7)}
            initial="hidden"
            whileInView="show"
             className="">
                <h1 className='text-xl font-semibold'>Tanvir Islam</h1>
                <p>Full stack developer -(MERN)</p>
            </motion.div>
          </div>
            </div>

          {/* img sectoons */}
          <div className="relative">
            {/*  */}
            <motion.div
              initial={{ opacity: 0, x: -100, y: 100 }}
              whileInView={{ x: 0, opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.5,
                scale: { duration: 0.5 },
              }}
              className=""
            >
              <Image
                className="relative z-10 w-full lg:max-w-[280px] img-shadow "
                src="/banner.png"
                width={350}
                height={350}
                alt=""
              />
            </motion.div>
            {/* <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="absolute top-[50%] right-[50%] transform translate-x-[50%] translate-y-[-50%] h-[320px] w-[320px]  bg-yellow-300 rounded-full"
            ></motion.div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
