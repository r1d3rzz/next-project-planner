import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NavMenu from "@/components/NavMenu";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Next.js Project Planner",
  description:
    "Project planner built with Next.js for managing tasks and progress.",

  openGraph: {
    title: "Next.js Project Planner",
    description:
      "Project planner built with Next.js for managing tasks and progress.",
    url: "https://next-project-planner.vercel.app/",
    siteName: "Project Planner",
    images: [
      {
        url: "https://icons.iconarchive.com/icons/gartoon-team/gartoon-misc/256/Gtk-Edit-icon.png",
        width: 1200,
        height: 630,
      },
    ],
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Next.js Project Planner",
    description:
      "Project planner built with Next.js for managing tasks and progress.",
    images: [
      "https://icons.iconarchive.com/icons/gartoon-team/gartoon-misc/256/Gtk-Edit-icon.png",
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`w-1/3 mx-auto my-3 ${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <h1 className="text-center text-xl my-3">Project Planner</h1>
        <NavMenu />
        {children}
      </body>
    </html>
  );
}
