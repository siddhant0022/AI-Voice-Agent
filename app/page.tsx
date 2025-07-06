import HeroSectionOne from "@/components/hero-section-demo-1";
import { Button } from "@/components/ui/button";
import { div } from "motion/react-client";
import Image from "next/image";
import { BentoGridThirdDemo } from "./_components/grid";

export default function Home() {
  return (
   <div>
    <HeroSectionOne/>
    <BentoGridThirdDemo/>
   </div>
  );
}
