import Header from "./components/Header";
import SectionFour from "./components/SectionFour";
import SectionOne from "./components/SectionOne";
import SectionThree from "./components/SectionThree";
import SectionTwo from "./components/SectionTwo";
import FeaturedStories from "../(shared)/components/FeaturedStories";
import SectionFive from "./components/SectionFive";
import { getPricingPageSetting } from "@/sanity/query/pricingPage";

export const revalidate = 60;

async function PricingPage() {
  const pricingPageSetting = await getPricingPageSetting();

  return (
    <main>
      <Header articleLink={pricingPageSetting?.articleLink || ""} />
      <SectionOne />
      <SectionTwo sketchConcept={pricingPageSetting?.sketchConcept} />
      <SectionThree projects={pricingPageSetting?.projects as any[]} />
      <FeaturedStories
        featuredStories={pricingPageSetting?.featuredStories as any[]}
      />
      <SectionFour />
      <SectionFive />
      {/* <Reviews
        subheader={
          <Reviews.Subheader>
            Don&apos;t take our word for it, we let our customers do the talking
            for us as there is no better way to let you know how good we really
            are then by you hearing it directly from them.
          </Reviews.Subheader>
        }
        footerButton={<Reviews.FooterButton>MORE STORIES</Reviews.FooterButton>}
      /> */}
    </main>
  );
}

export default PricingPage;
