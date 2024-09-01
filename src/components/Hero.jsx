"use client";
import Image from "next/image";
import { IoCartOutline } from "react-icons/io5";
import { motion } from "framer-motion";

export const SliedUp = (delay) => {
  return {
    hidden: {
      y: "100%",
      opacity: 0,
    },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        delay: delay,
      },
    },
  };
};

const Hero = () => {
  return (
    <main >
      <div className="container min-h-[600px] flex relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 place-items-center justify-between">
          {/* text container hear  */}
          <div className=" space-y-3 mt-14  text-center md:text-left md:mt-0 " >
            <motion.h1
              variants={SliedUp(0.5)}
              initial="hidden"
              whileInView="show"
              className="relative text-5xl lg:text-7xl xl:text-8xl font-bold uppercase text-outline text-transparent"
            >
              Yummy
              <Image
                className=" absolute w-[50px] top-0 right-0 md:right-[100px]"
                src="/leaf.png"
                width={20}
                height={20}
                alt=""
              />
            </motion.h1>
            <motion.h1
              variants={SliedUp(0.9)}
              initial="hidden"
              whileInView="show"
              className="relative text-5xl lg:text-7xl xl:text-8xl font-bold uppercase"
            >
              breakfast
            </motion.h1>
            <motion.p
              variants={SliedUp(1.3)}
              initial="hidden"
              whileInView="show"
              className="text-sm"
            >
              Welcome to our restaurant, where we serve the best breakfast in
              town. Our menu features a variety of delicious dishes, from
              classic eggs and pancakes to more adventurous options like waffles
              and omelets.
            </motion.p>
            <motion.button
              variants={SliedUp(2)}
              initial="hidden"
              whileInView="show"
              className="bg-green-500 flex  items-center py-2  border-[1px] text-white border-black px-2  hover:rounded-full rounded hover:scale-105"
            >
              <IoCartOutline className="text-xl mr-2" />
              Order Now
            </motion.button>
          </div>
          {/* iamge container hear  */}
          <div className=" relative">
            <motion.div
            initial={{opacity:0 , rotate:20 , x:200, y:100}}
            whileInView={{opacity:1 , rotate:0 , x:0, y:0}}
            transition={{duration:0.8}}
             className="">
            <Image
              src="/food.png"
              className="w-[450px] img-shadow"
              width={300}
              height={300}
              alt=""
            />
            </motion.div>

            <motion.div
             initial={{opacity:0 , rotate:20 , x:200, y:100}}
             whileInView={{opacity:1 , rotate:0 , x:0, y:0}}
             transition={{duration:0.8}}
           >
            <Image
              src="/spoon.png"
              className=" w-[350px] absolute bottom-[-120px] -left-16 rotate-[75deg] img-shadow"
              width={300}
              height={300}
              alt=""
            />
            </motion.div>

           {/* <motion.li 
              initial={{opacity:0 , rotate:0 , x:200, y:100}}
              whileInView={{opacity:1 , rotate:0 , x:0, y:0}}
              transition={{duration:0.8}}
           className="">

           <Image
              src="/banana2.png"
              className="w-[400px] absolute top-[-30px] right-[-130px] md:right-[-160px] img-shadow"
              width={300}
              height={300}
              alt=""
            />
           </motion.li> */}
          </div>
        </div>
      </div>
      {/* Background yellow */}
      <motion.div
     initial={{opacity:0 , rotate:60 , x:200, y:100}}
     whileInView={{opacity:1 , rotate:40 , x:0, y:0}}
     transition={{duration:0.8}}
       className="w-[2500px] h-[2500px]  rounded-3xl bg-yellow-400 absolute top-[-30%] left-[70%] z-0 ">

      </motion.div>
    </main>
  );
};

export default Hero;
