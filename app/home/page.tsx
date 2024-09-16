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
      <SectionTwo />
      <FeaturedStories
        featuredStories={homePageSetting.featuredStories as any[]}
      />
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
            <p className="text-sm lg:text-lg mt-[30px] lg:mt-[60px] text-[#53545c]">
              With over{" "}
              <strong className="text-foreground">
                1,800+ 5/5 star reviews
              </strong>{" "}
              across Facebook,
              <br className="hidden lg:block" />
              Google Business page
            </p>
          </Reviews.FooterText>
        }
        footerButton={
          <Link href="/reviews">
            <Reviews.FooterButton>ALL STORIES</Reviews.FooterButton>
          </Link>
        }
      />
    </main>
  );
}

export default HomePage;
