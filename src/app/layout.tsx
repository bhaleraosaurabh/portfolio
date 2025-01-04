import type { Metadata } from "next";
import { Inter } from 'next/font/google';
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: "Saurabh Bhalerao | Full Stack Developer",
  description: "Full Stack Developer specializing in modern web technologies",
  icons: {
    icon: [{ url: '/favicon.ico' },
    { url: '/favicon.svg', type: 'image/svg+xml' },],
    shortcut: '/favicon.svg',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.className} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}</ThemeProvider>
      </body>
    </html>
  );
}
