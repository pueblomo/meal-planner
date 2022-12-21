import React, {ReactElement} from "react";

export default function RecipeLayout({children,}: {
  children: React.ReactNode;
}): ReactElement {
  return <section className="overflow-hidden h-screen">{children}</section>;


}
