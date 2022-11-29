import React from "react";
import LoadingSpinner from "../components/spinner/loading-spinner";

const Loading = () => {
  return (
    <div className="flex justify-center items-center w-screen h-screen">
      <LoadingSpinner />
    </div>
  );
};

export default Loading;
