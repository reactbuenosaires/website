import '@/app/global.css';
import MainFooter from "@/app/components/footer/MainFooter";
import SocialMediaBanner from './components/social_media_banner/SocialMediaBanner';

export const metadata = {
  title: 'React en Buenos Aires',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        {children}
        <MainFooter />
        <SocialMediaBanner />
      </body>
    </html>
  )
}
