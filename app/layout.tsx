import type { Metadata } from "next";
import { Toaster } from "./(shared)/components/ui/sonner";
import localFont from "next/font/local";
import "./globals.css";
import { Slide, ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import CalComModal from "./(shared)/components/CalComModal";
import NavbarMobile from "./(shared)/components/NavbarMobile";
import IntercomMessenger from "./(shared)/components/IntercomMessenger";
import Script from "next/script";
import { GoogleAnalytics, GoogleTagManager } from "@next/third-parties/google";

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
  title: "Jedesigns",
  description:
    "Enhance your digital presence with our specialized services: custom web, app, and landing page design and development; strategic marketing management; engaging content and blog copywriting; dynamic social media management; and professional video editing with compelling thumbnail designs. Let us help you connect with your audience and achieve your goals through impactful digital solutions.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <GoogleTagManager gtmId="GTM-PZFW2MLS" />
      <GoogleAnalytics gaId="G-PBHNXEKEYG" />
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
          closeOnClick={false}
          pauseOnHover={true}
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
        <CalComModal />
        <NavbarMobile />
        <IntercomMessenger />
        <Script id="facebook-pixel" strategy="afterInteractive">
          {`
          !function(f,b,e,v,n,t,s)
          {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
          n.callMethod.apply(n,arguments):n.queue.push(arguments)};
          if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
          n.queue=[];t=b.createElement(e);t.async=!0;
          t.src=v;s=b.getElementsByTagName(e)[0];
          s.parentNode.insertBefore(t,s)}(window, document,'script',
          'https://connect.facebook.net/en_US/fbevents.js');
          fbq('init', '1501275917193892');
          fbq('track', 'PageView');
        `}
        </Script>
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src={`https://www.facebook.com/tr?id=1501275917193892&ev=PageView&noscript=1`}
          />
        </noscript>
      </body>
    </html>
  );
}
