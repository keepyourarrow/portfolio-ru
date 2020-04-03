import React from "react";

export const VideoPlayer = ({ video }) => {
  return (
    <>
      <video width="100%" height="100%" className="mx-auto" controls id="video">
        <source src={video} type="video/mp4" />
      </video>
    </>
  );
};
