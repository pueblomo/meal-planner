import React, { type FC } from "react";
import { type UseFormRegister } from "react-hook-form";

interface InputProps {
  id: string;
  name: string;
  placeholder?: string;
  type?: string;
  register: UseFormRegister<any>;
  dataCy: string;
}

const Input: FC<InputProps> = ({
  id,
  placeholder = "",
  type = "text",
  register,
  name,
  dataCy,
}) => {
  return (
    <div>
      <input
        id={id}
        placeholder={placeholder}
        type={type}
        {...register(name)}
        className="p-1 my-1 w-full text-base shadow-lg rounded-md border border-gray-600 transition duration-150 ease-in-out xl:text-base focus:border-[#b44593] focus:outline-none"
        data-cy={dataCy}
      />
    </div>
  );
};

export default Input;
