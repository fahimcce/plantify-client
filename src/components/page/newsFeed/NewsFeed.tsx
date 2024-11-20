/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import {
  useGetAllPostQuery,
  useGetTotalPostDocumentQuery,
} from "@/redux/features/post/postApi";
import { Tpost } from "@/types";
import React, { useState, useEffect } from "react";
import PostDetails from "../posts/PostDetails";
import { useInView } from "react-intersection-observer";
import { Divider, Spinner } from "@nextui-org/react";
import Container from "@/components/shared/Container/Container";
import NewsFeedLeft from "./NewsFeedLeft";
import { useLocalUser } from "@/context/user.Provider";
import { useGetPostByUserIdQuery } from "@/redux/features/post/postApi";
import Link from "next/link";
import EachPopularPost from "../home/EachPopularPost";
import NoDataFound from "@/components/shared/NotDataFound";

const NewsFeed = () => {
  const [limit, setLimit] = useState<number>(1); // Start by loading 1 post
  const { data, isFetching, isLoading } = useGetAllPostQuery({ limit });
  const { ref: inViewRef, inView } = useInView();
  const { data: totalPost } = useGetTotalPostDocumentQuery({});
  const [allPostsLoaded, setAllPostsLoaded] = useState<boolean>(false);
  const { user } = useLocalUser();
  const { data: posts } = useGetPostByUserIdQuery(`${user?._id}`);

  useEffect(() => {
    if (inView && !allPostsLoaded && !isFetching) {
      if (data?.data?.length === totalPost?.data) {
        setAllPostsLoaded(true); // All posts have been loaded
      } else {
        setLimit((prevLimit) => prevLimit + 1); // Increase the limit to load the next post
      }
    }
  }, [inView, isFetching, data, allPostsLoaded]);

  return (
    <Container className="bg-gray-50 p-4 md:p-6 rounded-lg shadow-lg">
      {isLoading ? (
        <div className="flex justify-center items-center h-screen">
          <Spinner />
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Sidebar */}
          <div className="hidden lg:block col-span-3 bg-white rounded-lg shadow-md p-4">
            <NewsFeedLeft />
          </div>

          {/* Main Content */}
          <div className="col-span-1 lg:col-span-6">
            {data?.data?.map((item: Tpost, idx: number) => (
              <div
                key={idx}
                className="bg-white rounded-lg overflow-hidden shadow-md mb-8 p-4"
              >
                <PostDetails id={item?._id} />
                <Divider className="my-6" />
              </div>
            ))}

            {!allPostsLoaded && (
              <div ref={inViewRef} className="text-center mt-8">
                {isFetching ? (
                  <ContentLoading />
                ) : (
                  <p className="text-gray-500">Loading more posts...</p>
                )}
              </div>
            )}

            {allPostsLoaded && (
              <p className="text-center mt-8 text-gray-600 font-semibold">
                No more posts available.
              </p>
            )}
          </div>

          {/* Right Sidebar */}
          <div className="hidden lg:block col-span-3 bg-white rounded-lg shadow-md p-4">
            <h3 className="font-semibold text-xl mb-4">Your Posts</h3>
            {posts?.data?.length < 1 ? (
              <NoDataFound />
            ) : (
              posts?.data?.map((post: any, idx: number) => (
                <div key={idx} className="mb-4">
                  <Link key={post._id} href={`post/${post?._id}`}>
                    <EachPopularPost post={post} />
                  </Link>
                </div>
              ))
            )}
          </div>
        </div>
      )}
    </Container>
  );
};

export default NewsFeed;

export const ContentLoading = () => {
  return (
    <div className="flex justify-center items-center mt-16">
      <Spinner size="lg" className="text-blue-500" aria-label="Loading" />
    </div>
  );
};
