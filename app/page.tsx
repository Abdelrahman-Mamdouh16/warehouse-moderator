import Link from "next/link";
import AppNavbar from "../components/AppNavbar/AppNavbar";
import { buttonVariants } from "../components/ui/button";
import InfoCard from "./(component)/InfoCard/InfoCard";

export default function Dashboard() {
  // Static user profile data required by assessment guidelines
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

      {/* CTA to main products catalog */}
      <Link
        href="/products"
        className={
          buttonVariants({ variant: "default", size: "sm" }) + " px-10 w-fit"
        }
      >
        View Products
      </Link>
    </div>
  );
}