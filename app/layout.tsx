import RouterGuard from "./routerGuard";
import "./globals.css";
import React, { ReactElement } from "react";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}): ReactElement {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head>
        <title>Meal Planner</title>
        <meta
          name="viewport"
          content="width=device-width,  initial-scale=1, maximum-scale=1, user-scalable=no"
        />
      </head>
      <body className="w-screen">
        <RouterGuard>{children}</RouterGuard>
      </body>
    </html>
  );
}
