import "@/app/global.css";
import MainHeader from "@/app/components/header/MainHeader";
import MainFooter from "@/app/components/footer/MainFooter";
import SocialMediaBanner from "./components/social_media_banner/SocialMediaBanner";
import NextMeetupModal from "@/app/components/next_meetup_modal/Notification";

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
        <MainHeader />
        <NextMeetupModal />
        {children}
        <MainFooter />
        <SocialMediaBanner />
      </body>
    </html>
  );
}
