import React, { FC, useContext, useEffect, useState } from "react";
import { RecipeContext } from "../contexts/RecipeContext";

const Searchbar: FC = () => {
  const { searchRecipe } = useContext(RecipeContext);
  const [term, setTerm] = useState("");
  const [debounceTerm, setDebounceTerm] = useState("");
  const [blur, setBlur] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setTerm(debounceTerm);
    }, 1000);
    return () => {
      clearTimeout(timer);
    };
  }, [debounceTerm]);

  useEffect(() => {
    if (blur) {
      console.log("search");
      searchRecipe(term);
    }
  }, [term]);

  return (
    <div className="flex justify-center mt-4">
      <input
        className="xl:border-2 border-2 border-[#b44593] shadow-lg rounded-lg xl:p-1 p-2 transition duration-150 ease-in-out focus:outline-none xl:text-base text-base"
        placeholder="search recipe"
        onChange={(e) => {
          setDebounceTerm(e.target.value);
        }}
        onBlur={() => {
          setBlur(true);
        }}
      />
    </div>
  );
};

export default Searchbar;
