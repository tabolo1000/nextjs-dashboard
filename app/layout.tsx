import '@/app/ui/global.css';
import { inriaSans } from './ui/fonts';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
    <head>
      <title>Учебное пособие</title>
      <meta name="Nik Tabala" content="https://tabolo1000.github.io/portfolio/"/>
    </head>
    <body className={`${inriaSans.className} subpixel-antialiased`}>{children}</body>
    </html>
  );
}
