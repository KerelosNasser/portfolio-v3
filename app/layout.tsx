import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { FloatingDock } from "@/components/ui/floating-dock";
import { SlideshowProvider } from "@/lib/slideshow";
import SlideNavigation from "@/components/slides/slideNavigationOverlay";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Kerelos Nasser - Software Developer",
  description: "Portfolio of Kerelos Nasser, a passionate software developer specializing in modern web development technologies and creating dynamic web experiences.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
            <SlideshowProvider interval={3500} slideCount={5}>
        {children}
        <SlideNavigation/>
            </SlideshowProvider>
            <div className="fixed bottom-8 right-8 z-40 sm:bottom-8 sm:left-0 ">
        <FloatingDock />
        </div>
      </body>
    </html>
  );
}
