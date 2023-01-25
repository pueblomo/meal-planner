import React, { type FC } from "react";
import AddIcon from "../icons/addIcon";
import { useRouter } from "next/navigation";

interface Props {
  day: string;
  week: string;
}

const AddButton: FC<Props> = ({ day, week }) => {
  const router = useRouter();
  return (
    <div
      className="border-2 m-2 rounded-2xl h-36 w-36 p-2 text-[#b44593] grid place-items-center"
      onClick={() => {
        router.push(`/planner/${week}/${day}`);
      }}
    >
      <AddIcon height={"52"} width={"52"} />
    </div>
  );
};

export default AddButton;
