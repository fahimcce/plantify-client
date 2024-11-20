"use client";
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Tpost } from "@/types";
import Image from "next/image";
import React from "react";

const extractFirstImage = (html: string) => {
  const imgTagMatch = html.match(/<img[^>]+src="([^">]+)"/);
  return imgTagMatch ? imgTagMatch[1] : null;
};

const TopNotchPostSectionDetail = ({ post }: { post: Tpost }) => {
  const firstImage = extractFirstImage(post?.post);

  return (
    <div className="border p-4 rounded-lg shadow-md mb-4">
      <h2 className="text-2xl font-bold mb-2">{post?.title}</h2>
      <div className="relative w-full ">
        <Image
          width={400}
          height={600}
          src={firstImage || "/default-image.jpg"}
          alt="Post Image"
          className="w-full h-64 object-cover mb-2 rounded-t-lg"
        />
      </div>

      <div className="flex items-center mb-4">
        <Image
          width={300}
          height={300}
          src={post?.userId?.profilePhoto}
          alt={post?.userId?.name}
          className="w-10 h-10 rounded-full mr-2"
        />
        <div>
          <h4 className="font-semibold">{post?.userId?.name}</h4>
          <p className="text-gray-600 text-sm">{post?.userId?.role}</p>
        </div>
      </div>
      {/* <p className="text-gray-500 text-sm">Posted on: {new Date(createdAt).toLocaleDateString()}</p> */}
      <div className="mt-4">
        <h4 className="font-semibold border-b">Activity</h4>
        {post?.activity?.map((item: any, index: number) => {
          if (item?.comment < 1) {
            return;
          }
          return (
            <div key={index} className="border-b py-2">
              {/* <p className="font-medium">{item?.name}</p> */}
              {item?.comment
                ?.slice(0, 4)
                .map((comment: string, idx: number) => (
                  <p key={idx} className="text-gray-700">
                    {comment}
                  </p>
                ))}
            </div>
          );
        })}
      </div>
      <div className="mt-4">
        <h4 className="font-semibold">Votes</h4>
        <p>Upvotes: {post?.upVotes.length}</p>
        <p>Downvotes: {post?.downVotes.length}</p>
      </div>
    </div>
  );
};

export default TopNotchPostSectionDetail;
