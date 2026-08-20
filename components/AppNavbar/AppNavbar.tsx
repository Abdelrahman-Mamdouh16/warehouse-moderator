interface AppNavbarProps {
  content?: string;
}
export default function AppNavbar({ content }: AppNavbarProps) {
  return (
    <div className="p-5 bg-card border rounded-md text-lg font-semibold">
      {content || "AppNavbar"}
    </div>
  );
}
