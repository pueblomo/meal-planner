import React, { type ReactElement } from "react";
import Tab from "../../components/tab";

export default function ShoppingList(): ReactElement {
  return (
    <section className="overflow-hidden h-screen">
      <div className="w-full h-full grid place-items-center">
        <p>Nothing to see</p>
      </div>
      <Tab active={2} />
    </section>
  );
}