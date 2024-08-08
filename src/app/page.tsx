import { Beams } from "@/components/molecules/UI/Beams";
import { GradientGrid } from "@/components/molecules/UI/GradientGrid";
import LandingPage from "@/components/organisms/LandingPage/LandingPage";
import Image from "next/image";

export default function Home() {
  return (
    <section className="relative overflow-hidden min-h-screen bg-white">
      <LandingPage />
      <Beams />
      <GradientGrid />
    </section>
  );
}
