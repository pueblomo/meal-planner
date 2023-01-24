import React, { type ReactElement } from "react";
import RecipeProvider from "../../contexts/RecipeContext";

export default function RecipeLayout({
  children,
}: {
  children: React.ReactNode;
}): ReactElement {
  return (
    <section className="overflow-hidden h-screen">
      <RecipeProvider>{children}</RecipeProvider>
    </section>
  );
}
