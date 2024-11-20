"use client";
/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Container from "@/components/shared/Container/Container";

const quotes = [
  "Plant seeds of happiness, hope, success, and love; it will all come back to you in abundance.",
  "A garden is a friend you can visit anytime.",
  "He who plants a tree plants a hope.",
  "Gardening simply does not allow one to be mentally old because too many hopes and dreams are yet to be realized.",
  "The earth laughs in flowers.",
];

const QuotesSection: React.FC = () => {
  return (
    <Container className="pb-20 bg-gradient-to-b from-green-100 via-green-200 to-green-50">
      <h2 className="text-4xl font-extrabold text-teal-800 text-center mb-12">
        🌱 Inspiring Gardening Quotes 🌸
      </h2>
      <div className="flex md:flex-row flex-col items-center gap-10">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="w-full md:w-1/3 flex justify-center"
        >
          <Image
            src="https://i.ibb.co.com/xg4pJYV/gard.webp" // Updated image URL
            width={400}
            height={400}
            alt="Beautiful garden"
            className="rounded-xl shadow-lg"
          />
        </motion.div>
        <motion.div
          className="md:w-2/3 w-full px-6 space-y-6"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          {quotes.map((quote, index) => (
            <motion.div
              key={index}
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-white border-l-4 border-teal-500 p-6 rounded-md shadow-md"
            >
              <p className="text-lg text-teal-700 font-semibold">"{quote}"</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </Container>
  );
};

export default QuotesSection;
