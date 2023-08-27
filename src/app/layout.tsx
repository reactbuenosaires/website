import '@/app/global.css';
import MainHeader from '@/app/components/header/MainHeader';
import RedesSociales from './components/redesSocialesIcons/RedesSociales';

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
        <MainHeader />
        {children}
        <RedesSociales />
      </body>
    </html>
  )
}
