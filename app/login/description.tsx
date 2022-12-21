import React, { FC } from "react";

const Description: FC = () => {
  return (
    <div className="xl:w-6/12 h-2/4 xl:h-full overflow-auto shadow-lg xl:rounded-r-lg bg-gradient-to-r from-[#ee7724] via-[#d8363a] via-[#dd3675] to-[#b44593] xl:rounded-bl-none rounded-b-lg">
      <div className="flex flex-col items-center px-4 py-6 text-white">
        <h4 className="mb-6 text-2xl font-semibold xl:text-3xl">
          What you can do!
        </h4>
        <p className="text-xl xl:text-lg">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
      </div>
    </div>
  );
};

export default Description;
