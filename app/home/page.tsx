import React from "react";
import SectionOne from "./components/SectionOne";
import SectionTwo from "./components/SectionTwo";
import SectionThree from "./components/SectionThree";
import SectionFour from "./components/SectionFour";
import SectionSix from "./components/SectionSix";
import Reviews from "../(shared)/components/Reviews";
import Link from "next/link";
import FeaturedStories from "../(shared)/components/FeaturedStories";
import OurSolutions from "./components/OurSolutions";
import { getHomePageSetting } from "@/sanity/query/homePage";

export const revalidate = 60;

async function HomePage() {
  const homePageSetting = await getHomePageSetting();
  return (
    <main>
      <SectionOne articleLink={homePageSetting?.articleLink || ""} />
      <div className="relative static-background">
        <SectionTwo />
        <FeaturedStories
          featuredStories={homePageSetting.featuredStories as any[]}
        />
      </div>
      <SectionThree />
      <OurSolutions ourSolutions={homePageSetting.ourSolutions as any[]} />
      <SectionFour projects={homePageSetting.projects as any[]} />
      <SectionSix sketchConcept={homePageSetting.sketchConcept} />
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
  );
}

export default HomePage;
