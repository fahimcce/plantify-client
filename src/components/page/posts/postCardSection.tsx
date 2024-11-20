/* eslint-disable @next/next/no-img-element */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { Button, Divider, Tooltip } from "@nextui-org/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

// Function to extract the first image from the post content
const extractFirstImage = (html: string) => {
  const imgTagMatch = html.match(/<img[^>]+src="([^">]+)"/);
  return imgTagMatch ? imgTagMatch[1] : null;
};

// Type for the post prop
interface Post {
  _id: string;
  title: string;
  post: string;
  userId: {
    _id: string;
    name: string;
    profilePhoto: string;
  };
  category: {
    category: string;
  };
}

interface PostSection4Props {
  post: Post;
}

const PostCardsSection: React.FC<PostSection4Props> = ({ post }) => {
  const firstImage = extractFirstImage(post?.post);
  const postOwner = post?.userId;

  return (
    <div className="bg-gradient-to-br from-white via-gray-50 to-gray-200 rounded-lg overflow-hidden transition-shadow duration-300 border border-gray-300">
      {/* Post Image */}
      {firstImage && (
        <Link href={`/post/${post?._id}`}>
          <div className="relative w-full ">
            <Image
              width={400}
              height={600}
              src={firstImage}
              alt="Post Image"
              className="w-full h-64 object-cover mb-2 rounded-t-lg"
            />
          </div>
        </Link>
      )}

      {/* Post Content */}
      <div className="p-5">
        {/* Author & Category */}
        <div className="flex justify-between items-center mb-4">
          <div>
            <h4 className="text-sm text-gray-600">
              <b>Author:</b> {postOwner?.name}
            </h4>
            <h4 className="text-sm text-gray-600">
              <b>Category:</b> {post?.category?.category}
            </h4>
          </div>
          <Tooltip content="View Profile">
            <Link href={`/profile/${postOwner?._id}`}>
              <Image
                src={postOwner?.profilePhoto}
                alt={postOwner?.name}
                width={60}
                height={60}
                className="rounded-full border-2 border-gray-300"
              />
            </Link>
          </Tooltip>
        </div>

        {/* Post Title */}
        <Link href={`/post/${post?._id}`} className="block mb-4">
          <h2 className="text-xl font-semibold text-gray-800 hover:text-blue-500 transition-colors">
            {post?.title}
          </h2>
        </Link>

        {/* Divider */}
        <Divider className="my-4" />

        {/* Read More Button */}
        <div className="text-right">
          <Link href={`/post/${post?._id}`}>
            <Button color="primary" size="md">
              Read More
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PostCardsSection;
