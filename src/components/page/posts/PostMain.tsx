/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import React, { useState } from "react";
import PostHero from "./PostHerosection";

import PostCardsSection from "./postCardSection";
import Container from "../../shared/Container/Container";
import { useGetAllPostQuery } from "@/src/redux/features/post/postApi";

const PostMain = () => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [category, setCategory] = useState<string>("");
  const { data } = useGetAllPostQuery({ searchTerm, category });

  console.log(data?.data);
  return (
    <div>
      <PostHero setCategory={setCategory} setSearchTerm={setSearchTerm} />
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 p-6">
          {data?.data?.map(
            (
              post: {
                _id: string;
                title: string;
                post: any;
                userId: any;
                category: { category: string };
              },
              idx: number
            ) => <PostCardsSection post={post} key={idx} />
          )}
        </div>
      </Container>
    </div>
  );
};

export default PostMain;