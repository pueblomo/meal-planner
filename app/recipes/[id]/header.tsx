"use client";
import Link from "next/link";
import React, { type FC } from "react";

interface ShowRecipeHeaderProps {
  params: { id: string };
}

const ShowRecipeHeader: FC<ShowRecipeHeaderProps> = ({ params }) => {
  return (
    <div className="flex xl:p-2 p-2 w-full justify-between bg-gradient-to-r from-[#ee7724] via-[#d8363a] via-[#dd3675] to-[#b44593] shadow-lg">
      <Link
        href="/recipes"
        className="xl:p-1 p-1 text-base xl:text-base text-white rounded-lg border-2 border-[#b44593] shadow-md"
      >
        Back
      </Link>
      <Link
        href={`/recipes/${params.id}/edit`}
        className="xl:p-1 p-1 text-base xl:text-base text-white rounded-lg border-2 border-[#ee7724] shadow-md"
        data-cy="link-edit-recipe"
      >
        Edit
      </Link>
    </div>
  );
};

export default ShowRecipeHeader;
