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
    loadPlannedRecipes();

    setWeek(today.week().toString());
  }, []);

  return (
    <section className="h-screen">
      <PlannedRecipeHeader />
      <div className="w-full overflow-auto h-[85%] py-4 px-1">
        {Object.values(Days).map((value, key) => {
          return (
            <Accordion key={key} title={value}>
              <PlannedDay day={value} week={week} />
            </Accordion>
          );
        })}
      </div>
    </section>
  );
};

export default RecipesOverview;
