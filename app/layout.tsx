import type { Metadata } from "next";
import localFont from "next/font/local";
import ProjectModal from "./(shared)/components/ProjectModal";
import "./globals.css";

const MonaSans = localFont({
  variable: "--font-mona-sans",
  src: [
    {
      path: "./(shared)/fonts/Mona-Sans-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./(shared)/fonts/Mona-Sans-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "./(shared)/fonts/Mona-Sans-Semibold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "./(shared)/fonts/Mona-Sans-Bold.ttf",
      weight: "700",
      style: "normal",
    },
  ],
});

const GuthenBlootsPersonalUse = localFont({
  variable: "--font-guthen-bloots-personal-use",
  src: [
    {
      path: "./(shared)/fonts/Guthen_Bloots_Personal_Use.ttf",
      weight: "400",
      style: "normal",
    },
  ],
});

const Portlin = localFont({
  variable: "--font-portlin",
  src: [
    {
      path: "./(shared)/fonts/Portlin-Normal.woff2",
      weight: "400",
      style: "normal",
    },
  ],
});

export const metadata: Metadata = {
  title: "JE",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${MonaSans.variable} ${Portlin.variable} ${GuthenBlootsPersonalUse.variable} font-mona-sans`}
      >
        {children}
        <ProjectModal />
      </body>
    </html>
  );
}
