import React, { type ReactElement } from "react";
import PlannedRecipeProvider from "../../contexts/PlannedRecipeContext";
import Tab from "../../components/tab";

export default function RecipeLayout({
  children,
}: {
  children: React.ReactNode;
}): ReactElement {
  return (
    <section className="overflow-hidden h-screen">
      <PlannedRecipeProvider>{children}</PlannedRecipeProvider>
      <Tab active={1} />
    </section>
  );
}
