/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import { motion } from "framer-motion";
import { FaThumbsDown, FaThumbsUp } from "react-icons/fa";

import { FieldValues, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { Tooltip } from "@nextui-org/react";

import { toast } from "sonner";
import {
  useHandleCommentMutation,
  useHandleVotesMutation,
} from "@/src/redux/features/post/postApi";
import { useLocalUser } from "@/src/context/user.Provider";
import GFrom from "../../forms/GFrom";
import { commetValidationSchema } from "@/src/validationSchema/validationSchema";
import GTeaxtArea from "../../forms/GTextArea";

const PostActivitiy = ({
  postId,
  activity,
}: {
  postId: string;
  activity: { userId: string; comments: string[]; votes: boolean }[];
}) => {
  const [handlevotes] = useHandleVotesMutation();
  const [addComment] = useHandleCommentMutation();
  const { user: localUser } = useLocalUser();
  const myActivity = activity.find(
    (item: any) => item?.userId?._id == localUser?._id
  );

  const handleVotes = async (votes: boolean) => {
    const res = (await handlevotes({
      postId: postId,
      userId: localUser?._id,
      votes,
    })) as any;
    if (res?.data?.success) {
      toast.success(res?.data?.message);
    } else {
      toast.error(res?.error?.data?.message);
    }
    console.log(res);
  };

  const handleComment: SubmitHandler<FieldValues> = async (data) => {
    const res = (await addComment({
      postId: postId,
      userId: localUser?._id,
      comment: data?.comment,
    })) as any;
    console.log(res);
  };
  return (
    <div className="flex flex-col space-x-4">
      <h3 className="mb-4 font-roboto_slab text-center md:text-lg">
        Your valueable feedback will increase our experiences
      </h3>
      <div className="flex items-center justify-stretch gap-10 mb-5 ml-5">
        <Tooltip content="Upvote">
          <motion.button
            disabled={myActivity?.votes === true}
            whileTap={{ scale: 0.9 }}
            className="flex items-center text-green-500 hover:text-green-600 disabled:text-gray-300"
            onClick={() => handleVotes(true)}
          >
            <FaThumbsUp className="mr-2" size={40} />
          </motion.button>
        </Tooltip>
        <Tooltip content="Downvote">
          <motion.button
            disabled={myActivity?.votes === false}
            whileTap={{ scale: 0.9 }}
            className="flex items-center text-red-500 hover:text-red-600 disabled:text-gray-300"
            onClick={() => handleVotes(false)}
          >
            <FaThumbsDown className="mr-2" size={40} />
          </motion.button>
        </Tooltip>
      </div>
      <div className="flex flex-col gap-5">
        {/* Input for typing a comment */}
        <GFrom
          onSubmit={handleComment}
          resolver={zodResolver(commetValidationSchema)}
        >
          <GTeaxtArea
            type="text"
            className="flex-grow border rounded-l-md p-2 w-full text-gray-700 focus:outline-none"
            placeholder="Write a comment..."
            label="Comment"
            name="comment"
          />
          {/* Button to submit the comment */}
          <motion.button
            type="submit"
            whileTap={{ scale: 0.95 }} // Adds a tap animation
            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md w-full mt-5"
            // onClick={handleAddComment} // Adds the comment to the list
          >
            Comment
          </motion.button>
        </GFrom>
      </div>
    </div>
  );
};

export default PostActivitiy;
