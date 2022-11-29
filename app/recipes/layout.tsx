import RecipeHeader from "./header";

export default function RecipeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <section className="overflow-hidden h-screen">{children}</section>;
}
