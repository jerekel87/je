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

export const revalidate = 60;

export const metadata: Metadata = {
  title:
    "Branding Without Boundaries & Forward-thinking Vehicle Wrap Designs - JE Designs",
};

async function HomePage() {
  const homePageSetting = await getHomePageSetting();
  return (
    <>
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
