import "@/app/global.css";
import { YoutubeDataProvider } from "@/context/YoutubeData";
import MainHeader from "@/components/header/MainHeader";
import MainFooter from "@/components/footer/MainFooter";
import SocialMediaBanner from "@/components/social_media_banner/SocialMediaBanner";
import Notification from "@/components/notification/Notification";
import dotenv from "dotenv";
dotenv.config();

const apiKey = process.env.NEXT_PUBLIC_YOUTUBE_API_KEY;

export const metadata = {
  title: "React en Buenos Aires",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <YoutubeDataProvider apiKey={apiKey}>
          <MainHeader />
          <Notification />
          {children}
          <MainFooter />
          <SocialMediaBanner />
        </YoutubeDataProvider>
      </body>
    </html>
  );
}
