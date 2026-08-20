import Link from "next/link";
import AppNavbar from "../components/AppNavbar/AppNavbar";
import { Button } from "../components/ui/button";
import InfoCard from "./(component)/InfoCard/InfoCard";

export default function Dashboard() {
  const personalInfo = [
    { label: "Name", value: "Abdelrahman Mamdouh" },
    { label: "Age", value: "25" },
    { label: "Email", value: "abdelrahman.mamdouh.161020@gmail.com" },
    { label: "Phone", value: "01553739206" },
    {
      label: "Education",
      value: "MTI University (Class of 2024)",
    },
  ];
  return (
    <div className="flex flex-col gap-y-5">
      <AppNavbar content="Dashboard" />
      <InfoCard personalInfo={personalInfo} />
      <Button variant="default" className="w-fit">
        <Link href="/products" className="px-10">
          View Products
        </Link>
      </Button>
    </div>
  );
}
