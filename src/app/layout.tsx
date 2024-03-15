import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

// Dark mode - Light mode switcher
import { ThemeProvider } from './components/theme-provider';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Pokedex',
  description: 'For your Pokemon needs',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="dark">
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
