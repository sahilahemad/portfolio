import type { Metadata } from "next";
import Navbar from "../components/Navbar";
import ScrollProgress from "../components/ScrollProgress";
import "../styles/globals.css";

export const metadata: Metadata = {
  title: "Sahil Ahemad | Full-Stack Developer",
  description:
    "Sahil Ahemad is a Full-Stack Developer skilled in React, Next.js, Node.js, and modern web technologies. View projects, skills, and experience.",
  keywords: [
    "Sahil Ahemad",
    "Full Stack Developer",
    "React Developer",
    "Next.js Portfolio",
    "Web Developer India",
  ],
  authors: [{ name: "Sahil Ahemad" }],
  openGraph: {
    title: "Sahil Ahemad | Full-Stack Developer",
    description:
      "Modern developer portfolio showcasing projects, skills, and experience.",
    url: "https://your-portfolio-url.vercel.app",
    siteName: "Sahil Ahemad Portfolio",
    images: [
      {
        url: "../public/og-image.png",
        width: 1200,
        height: 630,
        alt: "Sahil Ahemad Portfolio",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sahil Ahemad | Full-Stack Developer",
    description:
      "Full-Stack Developer portfolio built with Next.js and modern UI.",
    images: ["../public/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="noise">
        {/* FIXED ELEMENTS FIRST */}
        <ScrollProgress />
        <Navbar />

        {/* SCROLLING CONTENT */}
        {children}
      </body>
    </html>
  );
}