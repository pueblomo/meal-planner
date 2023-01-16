import React, { FC } from "react";
import LoadingSpinner from "../../../../components/loading-spinner";

const Loading: FC = () => {
  return (
    <div className="flex justify-center items-center w-screen h-screen">
      <LoadingSpinner />
    </div>
  );
};

export default Loading;
