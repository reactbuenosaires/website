import { Open_Sans } from "next/font/google";
import HeroSection from "@/components/hero/HeroSection";
import About from "@/components/about/AboutSection";
import StatisticsSection from "@/components/statistics/StatisticsSection";
import ProposalSponsor from "@/components/proposal_sponsor/ProposalSponsor";
import ReactTeam from "@/components/team/RactTeam";
import PastEvents from "@/components/past_events/PastEventsSection";

const open = Open_Sans({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className={open.className}>
      <HeroSection />
      <About />
      <StatisticsSection />
      <PastEvents />
      <ProposalSponsor />
      <ReactTeam />
    </main>
  );
}
