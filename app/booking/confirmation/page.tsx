import { Button } from "@/app/(shared)/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";

async function ConfirmationPage() {
  return (
    <>
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
      <main className="container px-4 pt-4 lg:pt-[45px] flex items-center flex-col pb-[70px] lg:pb-[200px]">
        <Image
          src="/assets/images/confirmation-banner.webp"
          alt=""
          width="1060"
          height="434"
        />
        <h1 className="font-portlin text-[60px] lg:text-[90px] uppercase mt-[40px] lg:mt-[70px] leading-none">
          THIS MEETING IS SCHEDULED
        </h1>
        <p className="text-base lg:text-lg lg:text-center mt-[24px] lg:mt-[40px] max-w-[710px]">
          <strong className="font-semibold">
            We&apos;ve sent an email with further instructions/details about the
            scheduled call to the email address you provided.
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
      </main>
    </>
  );
}

export default ConfirmationPage;
