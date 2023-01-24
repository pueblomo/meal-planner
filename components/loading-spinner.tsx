import React, {type FC} from "react";

const LoadingSpinner: FC = () => {
  return (
    <div
      className="w-14 animate-spin h-14 rounded-full bg-gradient-to-tr from-[#ee7724] via-[#d8363a] via-[#dd3675] to-[#b44593]"></div>
  );
};

export default LoadingSpinner;
