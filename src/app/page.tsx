import HeroSection from './HeroSection';
import { Open_Sans } from 'next/font/google';
import AboutSection from './AboutSection';
import CallToAction from './CallToAction';
import ReactTeam from './RactTeam';

const open = Open_Sans({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className={open.className}>
      <HeroSection />
      <AboutSection />
      <CallToAction />
      <ReactTeam />
    </main>
  )
}
