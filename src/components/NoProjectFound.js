import React from "react";
import { Link } from "react-router-dom";

export const NoProjectFound = () => {
  return (
    <div className="text-center my-5 p-5 no-project">
      <h2 className="text-capitalize mb-5">No Project exist with such name</h2>
      <Link to="/" className="links link-3 mt-5">
        Back To Home
      </Link>
    </div>
  );
};
