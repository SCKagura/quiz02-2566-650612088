"use client";

import { PostOwner } from "@/components/PostOwner";
import { Comment } from "@/components/Comment";
import { Reply } from "@/components/Reply";
export default function HomePage() {
  return (
    <div
      style={{ minHeight: "100vh", backgroundColor: "#18191A" }}
      className="p-3"
    >
      {/* Entire App Container */}
      <div
        style={{ maxWidth: "700px", backgroundColor: "#242526" }}
        className="mx-auto p-3 rounded rounded-3 shadow-sm"
      >
        {/* Post Owner Example*/}
        <PostOwner />

        {/* Comment Example */}
        <div className="d-flex gap-2 my-2"></div>
        <Comment
          username="Lisa"
          userImagePath="/profileImages/lisa.jpg"
          commentText="จริงค่า"
          likeNum="999 คน"
        ></Comment>
      </div>

      {/* Reply Example */}
      <div className="d-flex gap-2 my-2 ps-5">
        <Reply></Reply>
      </div>
    </div>
  );
}
