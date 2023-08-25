import HeroSection from "./components/hero/HeroSection";
import { Open_Sans } from "next/font/google";
import About from "./components/about/AboutSection";
import ProposalSponsor from "@/app/components/proposal_sponsor/ProposalSponsor";
import ReactTeam from "./components/team/RactTeam";

const open = Open_Sans({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className={open.className}>
      <HeroSection />
      <About />
      <ProposalSponsor />
      <ReactTeam />
    </main>
  );
}
