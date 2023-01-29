import React, { type FC } from "react";
import Link from "next/link";

const PlannedRecipeDisplayHeader: FC = () => {
  return (
    <div className="flex xl:p-2 p-2 w-full justify-between bg-gradient-to-r from-[#ee7724] via-[#d8363a] via-[#dd3675] to-[#b44593] shadow-lg">
      <Link
        href="/planner"
        className="xl:p-1 p-1 text-base xl:text-base text-white rounded-lg border-2 border-[#b44593] shadow-md"
      >
        Back
      </Link>
    </div>
  );
};

export default PlannedRecipeDisplayHeader;
