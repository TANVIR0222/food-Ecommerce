"use client";

import foo1 from "../../public/food.png";
import foo2 from "../../public/food2-plate.png";
import foo3 from "../../public/banner.png";
import Image from "next/image";
import { motion } from "framer-motion";
import { SliedUp } from "./Hero";


const HotDessertData = [
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

const HotDesset = () => {
  return (
    <section>
      <div className="container">
        {/* heading */}
        <motion.h3 
        variants={SliedUp(0)}
        initial="hidden"
        whileInView="show"
        className="text-2xl  font-semibold text-green-500 uppercase py-8">
          Hot Dessert
        </motion.h3>
        {/* grid sections  */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {HotDessertData.map((item) => (
            <motion.div 
            variants={SliedUp(item.delay)}
            initial="hidden"
            whileInView="show"
            key={item.id} className=" group bg-white/50  shadow-md p-3  flex items-center gap-3">
              <Image
                className=" rounded-full img-shadow group-hover:scale-125 transition-all duration-700 group-hover:rotate-[50deg]"
                src={item.image}
                width={150}
                height={150}
                alt=""
              />
              <div className="">
                <h3 className="text-xl font-bold">{item.name}</h3>
                <p className="text-xl  text-yellow-400">{item.price}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HotDesset;
