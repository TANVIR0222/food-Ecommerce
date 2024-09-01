"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const Footers = () => {
  return (

    <motion.footer
    initial={{ opacity: 0 }}
      animate={{  opacity: 1 }}
      transition={{duration: 1 }}
     className="bg-yellow-200 rounded-t-3xl ">
      <div className="container py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="space-y-3 lg:max-w-[300px]">
            <Image
              className=""
              src="/logo2.png"
              width={150}
              height={150}
              alt=""
            />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
              nihil in eveniet explicabo
            </p>
            <a href="#" className="inline-block mt-6 text-sm">
              tanvirislam3912@gmail.com
            </a>
          </div>
           {/* Quick Link */}
      <div className="col-span-2 grid grid-cols-2 md:grid-cols-3 gap-6">
        <div className="">
        <h1 className="text-xl font-semibold"> Quick Links </h1>
        <ul className="space-y-3 mt-6">
          <li className="footer-link">Home</li>
          <li className="footer-link">About</li>
          <li className="footer-link">Contact</li>
          <li className="footer-link">Food</li>
        </ul>
        </div>
        <div className="">
        <h1 className="text-xl font-semibold"> Quick Links </h1>
        <ul className="space-y-3 mt-6">
          <li className="footer-link">Home</li>
          <li className="footer-link">About</li>
          <li className="footer-link">Contact</li>
          <li className="footer-link">Food</li>
        </ul>
        </div>
        <div className="">
        <h1 className="text-xl font-semibold"> Quick Links </h1>
        <ul className="space-y-3 mt-6">
          <li className="footer-link">Home</li>
          <li className="footer-link">About</li>
          <li className="footer-link">Contact</li>
          <li className="footer-link">Food</li>
        </ul>
        </div>
      </div>
        </div>
        
      </div>
     
    </motion.footer>
 
  );
};

export default Footers;
