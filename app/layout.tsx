import '@/app/ui/global.css';
import { inriaSans } from './ui/fonts';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inriaSans.className} subpixel-antialiased`}>{children}</body>
    </html>
  );
}
