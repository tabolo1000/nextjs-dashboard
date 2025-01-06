import '@/app/ui/global.css';
import { inriaSans } from './ui/fonts';

export const metadata = {
  title: "Учебное пособие",
  authors: [
      { name: "Nik Tabala", url: "https://tabolo1000.github.io/portfolio/" }
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inriaSans.className} subpixel-antialiased dark:bg-gray-800`}>{children}</body>
    </html>
  );
}
