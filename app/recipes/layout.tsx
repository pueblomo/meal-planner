import React, { type ReactElement } from "react";
import Tab from "../../components/tab";

export default function RecipeLayout({
  children,
}: {
  children: React.ReactNode;
}): ReactElement {
  return (
    <section className="overflow-hidden h-screen">
      {children}
      <Tab active={0} />
    </section>
  );
}
