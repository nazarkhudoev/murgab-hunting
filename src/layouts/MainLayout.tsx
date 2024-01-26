export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="main">{children}</div>;
}
