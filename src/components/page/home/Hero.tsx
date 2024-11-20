"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

// Typing effect animation function
const typingEffect = (text: string) => {
  return text.split("").map((char, index) => ({
    key: index,
    char,
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    transition: {
      delay: index * 0.1, // Delay each character appearance
      duration: 0.1, // Speed of typing
    },
  }));
};

const HeroSection = () => {
  const text = "Enter _ Plantify _  Arena"; // The text for typing effect
  const animatedText = typingEffect(text); // Applying the typing effect to the text

  return (
    <div className="relative bg-gradient-to-r from-green-400 via-teal-500 to-blue-600 text-white overflow-hidden">
      <div className="max-w-screen-xl mx-auto flex flex-col items-center justify-center h-[80vh] py-20">
        {/* Typing effect for the headline */}
        <motion.h1 className="text-5xl md:text-6xl font-extrabold text-center mb-6 drop-shadow-lg">
          {animatedText.map((item) => (
            <motion.span
              key={item.key}
              initial={item.initial}
              animate={item.animate}
              transition={item.transition}
              className="inline-block"
            >
              {item.char}
            </motion.span>
          ))}
        </motion.h1>

        <motion.p
          className="text-lg md:text-xl text-center mb-10 max-w-3xl px-4"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
        >
          Explore expert gardening tips and guides tailored for every gardener.
          Whether you are just starting or looking to expand your garden, we
          have got everything you need to succeed.
        </motion.p>

        <motion.button
          className="bg-white text-green-600 font-semibold px-8 py-4 rounded-lg shadow-xl hover:bg-green-200 transition duration-300"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.5 }}
        >
          <Link href={`/post`}>Explore Now</Link>
        </motion.button>
      </div>
    </div>
  );
};

export default HeroSection;
