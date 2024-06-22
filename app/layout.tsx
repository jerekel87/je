import type { Metadata } from "next";
import { Toaster } from "./(shared)/components/ui/sonner";
import localFont from "next/font/local";
import "./globals.css";
import { Slide, ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const MonaSans = localFont({
  variable: "--font-mona-sans",
  src: [
    {
      path: "./(shared)/fonts/mona-sans-regular-font.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./(shared)/fonts/mona-sans-medium-font.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "./(shared)/fonts/mona-sans-semibold-font.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "./(shared)/fonts/mona-sans-bold-font.ttf",
      weight: "700",
      style: "normal",
    },
  ],
});

const GuthenBlootsPersonalUse = localFont({
  variable: "--font-guthen-bloots-personal-use",
  src: [
    {
      path: "./(shared)/fonts/guthen-bloots-personal-use.ttf",
      weight: "400",
      style: "normal",
    },
  ],
});

const Portlin = localFont({
  variable: "--font-portlin",
  src: [
    {
      path: "./(shared)/fonts/portlin-normal-font.woff2",
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

        <Toaster
          toastOptions={{ className: "w-max right-0" }}
          visibleToasts={1}
        />
        <ToastContainer
          position="bottom-left"
          transition={Slide}
          autoClose={10000}
          pauseOnHover
          closeOnClick={false}
          hideProgressBar={true}
          closeButton={false}
          limit={1}
          style={{
            padding: 0,
            // @ts-ignore
            "--toastify-toast-width": "max-content",
            "--toastify-toast-bottom": "30px",
            "--toastify-toast-left": "30px",
          }}
        />
      </body>
    </html>
  );
}
