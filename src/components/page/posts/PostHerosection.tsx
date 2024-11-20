/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React, { useEffect } from "react";
import { useGetCategoryQuery } from "@/redux/features/category/category.api";
import { Input, Select, SelectItem } from "@nextui-org/react";

const PostHero = ({
  setSearchTerm,
  setCategory,
  setPremium,
  srcValue,
  category,
}: {
  category: string;
  srcValue: string;
  setSearchTerm: any;
  setCategory: any;
  setPremium: any;
}) => {
  const { data, isLoading } = useGetCategoryQuery({});
  const availableCategories = data?.data;

  useEffect(() => {
    setPremium(false);
  }, [srcValue, category]);

  return (
    <section className="relative w-full text-gray-800 bg-gradient-to-br from-blue-200 via-white to-indigo-300 py-12">
      {/* Wave background */}
      <div
        className="absolute top-0 left-0 w-full h-full bg-cover bg-no-repeat"
        style={{ backgroundImage: "url(/wave-pattern.svg)" }}
      ></div>

      <div className="relative container mx-auto px-6">
        {/* Card Container */}
        <div className="bg-white shadow-xl rounded-2xl py-10 px-8 max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold text-center mb-4">
            Welcome to the posts
          </h1>
          <p className="text-center text-gray-600 mb-6">
            Search articles, filter by categories, and unlock premium content
            with ease.
          </p>

          {/* Search Bar */}
          <div className="flex justify-center items-center mb-6">
            <Input
              type="text"
              placeholder="Search for posts..."
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full max-w-lg p-3 text-gray-800 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
            />
          </div>

          {/* Category Selector */}
          <div className="flex justify-center items-center mb-6">
            <Select
              isDisabled={isLoading}
              label="Choose a Category"
              size="sm"
              className="max-w-xs"
              onChange={(e: any) => setCategory(e.target.value)}
            >
              <SelectItem key={""} value="">
                All Categories
              </SelectItem>
              {availableCategories?.map(
                (cat: { category: string; image: string; _id: string }) => (
                  <SelectItem key={cat._id} value={cat._id}>
                    {cat.category}
                  </SelectItem>
                )
              )}
            </Select>
          </div>

          {/* Premium Access Button */}
          <div className="flex justify-center items-center">
            <button
              onClick={() => setPremium(true)}
              className="py-3 px-8 font-semibold text-white bg-indigo-500 rounded-lg shadow-md hover:bg-indigo-600 transition-transform duration-300 transform hover:scale-105"
            >
              Unlock Premium
            </button>
          </div>
        </div>
      </div>

      {/* Decorative Circles */}
      <div className="absolute top-10 right-10 w-24 h-24 bg-blue-300 rounded-full opacity-50"></div>
      <div className="absolute bottom-10 left-10 w-36 h-36 bg-indigo-400 rounded-full opacity-40"></div>
    </section>
  );
};

export default PostHero;
