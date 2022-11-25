import React from "react";
import { UseFormRegister } from "react-hook-form";

interface inputProps {
  id: string;
  name: string;
  placeholder?: string;
  type?: string;
  register: UseFormRegister<any>;
}

const Input = ({
  id,
  placeholder = "",
  type = "text",
  register,
  name,
}: inputProps) => {
  return (
    <div>
      <input
        id={id}
        placeholder={placeholder}
        type={type}
        {...register(name)}
        className="p-1 my-1 w-full text-2xl rounded-md border border-gray-600 transition duration-150 ease-in-out xl:text-base focus:border-[#b44593] focus:outline-none"
      />
    </div>
  );
};

export default Input;
