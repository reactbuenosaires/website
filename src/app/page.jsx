import { Open_Sans } from "next/font/google";
import HeroSection from "./components/hero/HeroSection";
import About from "./components/about/AboutSection";
import StatisticsSection from "./components/statistics/StatisticsSection";
import ProposalSponsor from "@/app/components/proposal_sponsor/ProposalSponsor";
import ReactTeam from "./components/team/RactTeam";
import PastEvents from "@/app/components/past_events/PastEventsSection"
import NextMeetupModal from "@/app/components/next_meetup_modal/Modal"

const open = Open_Sans({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className={open.className}>
      <HeroSection />
      <About />
      <StatisticsSection />
      <PastEvents/>
      <NextMeetupModal/>
      <ProposalSponsor />
      <ReactTeam />
    </main>
  );
}
