"use client";

import foo1 from "../../public/food.png";
import foo2 from "../../public/food2-plate.png";
import foo3 from "../../public/banner.png";
import Image from "next/image";
import { motion } from "framer-motion";
import { SliedUp } from "./Hero";

// rounded-full img-shadow transition-all duration-700 group-hover:rotate-[50deg]

const PopularRecipeData = [
  {
    id: 1,
    name: "Hot Chocolate",
    image: foo1,
    price: "$5.99",
    delay: 0.4,
  },
  {
    id: 2,
    name: "Hot Salat",
    image: foo2,
    price: "$5.99",
    delay: 0.6,
  },
  {
    id: 3,
    name: "Hot Meat",
    image: foo3,
    price: "$5.99",
    delay: 0.7,
  },
];

const PopularRecipe = () => {
  return (
    <section>
      <div className="container py-24 ">
        <motion.h1
          variants={SliedUp(0.5)}
          initial="hidden"
          whileInView="show"
          className="text-4xl text-center font-league font-semibold uppercase py-8"
        >
          Our Popular Recipe
        </motion.h1>

        {/* cart sections  */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 place-items-center ">
          {PopularRecipeData.map((item) => (
            <div key={item.id} className='group space-y-3 text-center bg-white/50 shadow-xl rounded-md p-3'>
              <Image
                className="
                 mx-auto img-shadow group-hover:scale-x-110  group-hover:translate-y-[-50px] group-hover:translate-x-10 group-hover:rotate-[50deg] transition-all duration-400 " 
                src={item.image}
                width={150}
                height={150}
                alt=""
              />
              <div className="">
                <button
                  //   variants={SliedUp(2)}
                  //   initial="hidden"
                  //   whileInView="show"
                  className="bg-green-500 flex mx-auto py-2  text-white px-2 rounded-full  hover:scale-105
               group-hover:mb-3 opacity-0 group-hover:opacity-100
              "
                >
                  Order Now
                </button>
                <p className=' text-xl font-semibold'>{item.name}</p>
                <p className=' text-xl font-semibold text-yellow-500' >{item.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularRecipe;
