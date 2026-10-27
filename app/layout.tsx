
      import type { Metadata } from 'next';
      import { Lexend } from 'next/font/google';
      import './globals.css';
      const lexend = Lexend({ subsets: ['latin'] });
      export const metadata: Metadata = {
        title: 'Ghani Al-Zyad | Creative Portfolio',
        description: 'Personal portfolio of Ghani Al-Zyad',
      };
      export default function RootLayout({ children }: { children: React.ReactNode }) {
        return (
          <html lang="en">
          <head>
            <link rel="icon" href="https://nocodefolio.vercel.app/favicon.ico" />
          </head>
            <body className={lexend.className}>{children}</body>
          </html>
        );
      }