import React from "react";
import "./media.css"

const MediaVideo = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="relative p-2 md:p-6">
        <img
          className="w-full h-full"
          src="https://images.unsplash.com/photo-1606318313647-137d1f3b4d3c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=877&q=80"
          alt="media"
        />
        <img
          className="w-20 h-20 playbtn cursor-pointer"
          src="https://cdn-icons-png.flaticon.com/512/109/109197.png"
          alt="media"
        />

      </div>
      <div className="relative p-2 md:p-6">
        <img
          className="w-full h-full"
          src="https://images.unsplash.com/photo-1606318313647-137d1f3b4d3c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=877&q=80"
          alt="media"
        />
        <img
          className="w-20 h-20 playbtn cursor-pointer"
          src="https://cdn-icons-png.flaticon.com/512/109/109197.png"
          alt="media"
        />

      </div>
    </div>
  );
};

export default MediaVideo;
