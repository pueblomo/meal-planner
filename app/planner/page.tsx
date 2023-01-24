"use client";

import React, { FC } from "react";
import RecipeHeader from "./header";
import Accordion from "../../components/accordion/accordion";
import Tab from "../../components/tab";

const RecipesOverview: FC = () => {
  return (
    <section className="h-screen">
      <RecipeHeader />
      <div className="w-full">
        <Accordion title="Whoop whoop">
          <p className="whitespace-pre-line">
            Hamena text brudi wamm wamm wamm
          </p>
        </Accordion>
        <Accordion title="frrrrrrrr">
          <p className="whitespace-pre-line">
            kjhkjas kjashkjdhaks kjashdk jhaskjhd kjsahdkj hsakjh dkjsah ka
            kasdaskj dhaskj dh
          </p>
        </Accordion>
      </div>
      <Tab active={1} />
    </section>
  );
};

export default RecipesOverview;
