"use client";

import React, { type FC, useContext, useEffect, useState } from "react";
import Accordion from "../../components/accordion/accordion";
import PlannedDay from "../../components/plannedDay/PlannedDay";
import { Days } from "../../models/enums/Days";
import { PlannedRecipeContext } from "../../contexts/PlannedRecipeContext";
import moment from "moment";
import PlannedRecipeHeader from "./header";

const today = moment();
const RecipesOverview: FC = () => {
  const { loadPlannedRecipes } = useContext(PlannedRecipeContext);
  const [week, setWeek] = useState<string>("");

  useEffect(() => {
    setWeek(todayWeek());
    loadPlannedRecipes(todayWeek());
  }, []);

  const todayWeek = (): string => {
    return today.week().toString();
  };

  const switchWeek = (): void => {
    setWeek(week === todayWeek() ? (today.week() + 1).toString() : todayWeek());
  };

  return (
    <section className="h-screen">
      <PlannedRecipeHeader />
      <div className="grid w-full place-items-center">
        <button
          className="text-lg h-fit w-fit shadow-lg mt-4 self-center p-2 leading-tight text-white rounded-lg border bg-gradient-to-r from-[#ee7724] via-[#d8363a] via-[#dd3675] to-[#b44593] uppercase"
          onClick={switchWeek}
          data-cy="button-week"
        >
          {week === todayWeek() ? "This Week" : "Next Week"}
        </button>
      </div>
      <div className="w-full overflow-auto h-[75%] py-4 px-1">
        {Object.values(Days).map((value, key) => {
          return (
            <Accordion key={value} title={value}>
              <PlannedDay day={value} week={week} />
            </Accordion>
          );
        })}
      </div>
    </section>
  );
};

export default RecipesOverview;
