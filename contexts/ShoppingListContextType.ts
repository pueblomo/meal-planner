export interface ShoppingItem {
  label: string,
  bought: boolean
}

export interface ShoppingListContextType {
  items: ShoppingItem[];
  setItems: (items: Set<string>) => void;
}

export const InitialShoppingListContextState: ShoppingListContextType = {
  items: [],
  setItems: () => {
  }
};