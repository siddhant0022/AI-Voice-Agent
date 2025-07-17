
import { Button } from "@/components/ui/button";
import { div } from "motion/react-client";
import Image from "next/image";
import { BentoGridThirdDemo } from "./_components/grid";
import HeroSectionOne from "./_components/hero";

export default function Home() {
  return (
   <div>
    <HeroSectionOne/>
    <BentoGridThirdDemo/>
   </div>
  );
}
