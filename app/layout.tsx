import RouterGuard from "./routerGuard";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body className="w-screen h-screen bg-gradient-to-b from-slate-300 via-slate-100">
        <RouterGuard>{children}</RouterGuard>
      </body>
    </html>
  );
}
