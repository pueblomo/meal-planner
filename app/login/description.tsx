import React, { type FC } from "react";

const Description: FC = () => {
  return (
    <div className="xl:w-6/12 h-2/4 xl:h-full overflow-auto shadow-lg xl:rounded-r-lg bg-gradient-to-r from-[#ee7724] via-[#d8363a] via-[#dd3675] to-[#b44593] xl:rounded-bl-none rounded-b-lg">
      <div className="flex flex-col px-4 py-6 text-white">
        <h4 className="mb-6 text-2xl font-semibold xl:text-3xl">
          What you can do!
        </h4>
        <p className="text-xl xl:text-lg">
          Introducing the ultimate recipe and meal planning app!
        </p>
        <br />
        <p className="text-xl xl:text-lg">With our app, you can easily:</p>
        <br />
        <ul className="pl-4 list-disc">
          <li className="text-xl xl:text-lg">
            Save all of your favorite recipes in one convenient place
          </li>
          <li className="text-xl xl:text-lg">
            Create a custom meal plan for the week
          </li>
          <li className="text-xl xl:text-lg">
            Generate a shopping list for all the ingredients you&apos;ll need.
          </li>
        </ul>
        <br />
        <p className="text-xl xl:text-lg">
          Say goodbye to the stress of meal planning and hello to more time for
          the things you love. Try it out now and experience the convenience of
          meal planning like never before!
        </p>
      </div>
    </div>
  );
};

export default Description;
