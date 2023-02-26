"use client";

import React, { type PropsWithChildren, useState } from "react";
import { InitialShoppingListContextState, type ShoppingItem } from "./ShoppingListContextType";

export const ShoppingListContext = React.createContext(InitialShoppingListContextState);

const ShoppingListProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [shoppingItems, setShoppingItems] = useState<ShoppingItem[]>([]);

  const setItems = (items: Set<string>): void => {
    const mappedItems: ShoppingItem[] = Array.from(items).sort().map(item => {
      return { label: item, bought: false };
    });
    setShoppingItems(mappedItems);
  };


  return (
    <ShoppingListContext.Provider value={{ items: shoppingItems, setItems }}>
      {children}
    </ShoppingListContext.Provider>
  );
};

export default ShoppingListProvider;