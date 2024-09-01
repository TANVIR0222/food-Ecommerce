"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { SliedUp } from "./Hero";

const Banner = () => {
  return (
    <section>
      <div className="container mt-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-14  place-items-center">
          {/* img sectoons */}
          <div className="relative">
            {/*  */}
            <motion.div
              initial={{ opacity: 0, x: -100, y: 100 }}
              whileInView={{ x: 0, opacity: 1, y: 0 }}
            //   whileHover={{
            //     scale: 1.2,
            //     rotate: 15,
            //     x: 50,
            //     y: -50,
            //   }}
              transition={{
                duration: 0.8,
                delay: 0.5,
                scale: { duration: 0.5 },
              }}
              className=""
            >
              <Image
                className="relative z-10 w-full lg:max-w-[350px] img-shadow "
                src="/banner.png"
                width={350}
                height={350}
                alt=""
              />
            </motion.div>
            
          </div>
          {/* text sections */}
          <div className=" space-y-5 lg:max-w-[400px]">
            <motion.h1
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
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
