import React from "react";
import SectionOne from "./home/components/SectionOne";
import SectionTwo from "./home/components/SectionTwo";
import SectionThree from "./home/components/SectionThree";
import SectionFour from "./home/components/SectionFour";
import OurSolutions from "./home/components/OurSolutions";
import SectionSix from "./home/components/SectionSix";
import Link from "next/link";
import { getHomePageSetting } from "@/sanity/query/homePage";
import FeaturedStories from "./(shared)/components/FeaturedStories";
import Reviews from "./(shared)/components/Reviews";
import "./home/style.css";
import Header from "./(shared)/components/Header";
import Footer from "./(shared)/components/Footer";
import FakePurchase from "./(shared)/components/fake-purchase/FakePurchase";
import { Metadata } from "next";
import { Organization, WithContext } from "schema-dts";
import Script from "next/script";

export const revalidate = 60;

export const metadata: Metadata = {
  title: "Branding Without Boundaries & Forward-thinking Vehicle Wrap Designs",
  description:
    "Elevate your brand with our comprehensive creative solutions. We specialize in crafting eye-catching logos, developing cohesive brand identities, and designing head-turning vehicle wraps that make your business stand out on the streets. Our expert team also delivers stunning visual assets, from marketing materials to digital graphics, ensuring your brand shines across all platforms. Transform your vision into reality and leave a lasting impression with our innovative design services tailored to your unique business needs.",
};

const structuredData: WithContext<Organization> = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Jeremy Ellsworth Designs",
  url: "https://www.jedesigns.com",
  logo: "https://jedesigns.com/assets/images/je-logo.png",
  description:
    "Elevate your brand with our comprehensive creative solutions. We specialize in crafting eye-catching logos, developing cohesive brand identities, and designing head-turning vehicle wraps that make your business stand out on the streets. Our expert team also delivers stunning visual assets, from marketing materials to digital graphics, ensuring your brand shines across all platforms. Transform your vision into reality and leave a lasting impression with our innovative design services tailored to your unique business needs.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "25 Cherry Street",
    addressLocality: "Belmont",
    addressRegion: "NH",
    postalCode: "03220",
    addressCountry: "US",
  },
  sameAs: [
    "https://www.facebook.com/jnellsworth",
    "https://www.x.com/jnellsworth_",
    "https://www.instagram.com/jnellsworth",
  ],
};

async function HomePage() {
  const homePageSetting = await getHomePageSetting();
  return (
    <>
      <Script
        id="home"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <Header />
      <main>
        <SectionOne articleLink={homePageSetting?.articleLink || ""} />
        <div className="relative static-background-hard bg-[#f9f8f3]">
          <SectionTwo />
          <FeaturedStories
            featuredStories={homePageSetting?.featuredStories as any[]}
          />
        </div>
        <SectionThree />
        <OurSolutions ourSolutions={homePageSetting?.ourSolutions as any[]} />
        <SectionFour projects={homePageSetting?.projects as any[]} />
        <SectionSix sketchConcept={homePageSetting?.sketchConcept} />
        <Reviews
          subheader={
            <Reviews.Subheader>
              At Jeremy Ellsworth Designs LLC, we are committed to your success.
              <br className="hidden lg:block" />
              We believe that our success lies in your success, and we are
              dedicated to helping you achieve it.
            </Reviews.Subheader>
          }
          footerText={
            <Reviews.FooterText>
              <p className="max-w-[344px]">
                With over{" "}
                <strong className="text-foreground">
                  1,800+ 5/5 star reviews
                </strong>{" "}
                across Facebook, Google Business page
              </p>
            </Reviews.FooterText>
          }
          footerButton={
            <Link href="/reviews" className="inline-block">
              <Reviews.FooterButton>ALL STORIES</Reviews.FooterButton>
            </Link>
          }
        />
      </main>

      <Footer />
      <div className="hidden lg:block">
        <FakePurchase />
      </div>
    </>
  );
}

export default HomePage;
