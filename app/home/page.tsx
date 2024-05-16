import React from "react";
import SectionOne from "./components/SectionOne";
import SectionTwo from "./components/SectionTwo";
import SectionThree from "./components/SectionThree";
import SectionFour from "./components/SectionFour";
import SectionFive from "./components/SectionFive";
import SectionSix from "./components/SectionSix";
import Reviews from "../(shared)/components/Reviews";

function HomePage() {
  return (
    <main>
      <SectionOne />
      <SectionTwo />
      <SectionThree />
      <SectionFour />
      <SectionFive />
      <SectionSix />
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
            <p className="text-sm lg:text-lg mt-[30px] lg:mt-[40px] text-[#53545c]">
              With over{" "}
              <strong className="text-foreground">
                1,500+ 5/5 star reviews
              </strong>{" "}
              across Facebook,
              <br className="hidden lg:block" />
              Google Business page & BBB
            </p>
          </Reviews.FooterText>
        }
        footerButton={<Reviews.FooterButton>ALL STORIES</Reviews.FooterButton>}
      />
    </main>
  );
}

export default HomePage;
