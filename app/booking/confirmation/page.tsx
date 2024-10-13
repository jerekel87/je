"use client";

import { Button } from "@/app/(shared)/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import Script from "next/script";

function ConfirmationPage() {
  const searchParams = useSearchParams();
  const title = searchParams.get("title");
  const email = searchParams.get("email");
  const startTime = searchParams.get("startTime");

  // Format the start time
  let formattedStartTime = "";
  if (startTime) {
    const date = new Date(startTime);
    formattedStartTime =
      date.toLocaleDateString("en-US", {
        month: "long",
        day: "numeric",
        year: "numeric",
      }) +
      " at " +
      date.toLocaleTimeString("en-US", {
        hour: "numeric",
        minute: "2-digit",
        hour12: true,
      });
  }

  // Extract the first name after "and+"
  let firstName = "";
  if (title) {
    const parts = title.split(" and ");
    if (parts.length > 0) {
      // Extract the first name, replace '+' with spaces, and capitalize the first letter
      const nameParts = parts[1].trim().split(" ");
      firstName = nameParts[0].charAt(0).toUpperCase() + nameParts[0].slice(1);
    }
  }

  return (
    <div className="relative">
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
          fbq('track', 'Schedule');
        `}
      </Script>
      <noscript>
        <img
          height="1"
          width="1"
          style={{ display: "none" }}
          src={`https://www.facebook.com/tr?id=1501275917193892&ev=Schedule&noscript=1`}
        />
      </noscript>
      <div className="absolute w-full h-[27px] lg:h-[37px]">
        <Image
          src="/assets/images/transition-top-confirmation.svg"
          fill
          alt="Transition"
          className="object-cover"
        />
      </div>
      <main className="container min-h-dvh px-4 pt-[34px] lg:pt-[54px] flex lg:items-center flex-col">
        <Image
          src="/assets/images/confirmation-banner.webp"
          alt=""
          width="1060"
          height="434"
        />
        <p className="font-portlin text-center lg:text-left uppercase text-[24px] lg:text-[40px] mt-[40px] lg:mt-[64px]">
          {formattedStartTime}
        </p>
        <h1 className="font-portlin text-center text-5xl lg:text-[90px] uppercase mt-[12px] lg:mt-[24px] leading-none lg:leading-none">
          CONFIRMED BOOKING
        </h1>
        <p className="text-base lg:text-lg text-center mt-[24px] lg:mt-[40px] max-w-[710px]">
          <strong className="font-semibold">
            Thanks {firstName}! We&apos;ve sent an email with further
            instructions/details about the scheduled call to {email}.
          </strong>{" "}
          We look forward to our call with you and hope to bring your brand
          vision to life.
        </p>
        <Link href="/" className="w-full lg:w-max">
          <Button
            variant="secondary"
            className="mt-[30px] lg:mt-[46px] w-full lg:w-[250px]"
          >
            CLOSE PAGE
          </Button>
        </Link>
        <div className="grow" />
        <p className="text-xs text-center lg:text-sm mt-[110px] pb-[40px] lg:pb-[60px]">
          © 2004-2024
          <br className="lg:hidden" /> Jeremy Ellsworth Designs LLC All Rights
          Reserved
        </p>
      </main>
      <div className="absolute w-full h-[27px] lg:h-[37px] bottom-0">
        <Image
          src="/assets/images/transition-bot-confirmation.svg"
          fill
          alt="Transition"
          className="object-cover"
        />
      </div>
    </div>
  );
}

export default ConfirmationPage;
