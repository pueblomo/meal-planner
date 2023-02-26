import React, { type ReactElement } from "react";
import Tab from "../../components/tab";
import ShoppingListProvider from "../../contexts/ShoppingListContext";

export default function RecipeLayout({
                                       children
                                     }: {
  children: React.ReactNode;
}): ReactElement {
  return (
    <section className="overflow-hidden h-screen">
      <ShoppingListProvider>{children}</ShoppingListProvider>
      <Tab active={2} />
    </section>
  );
}
