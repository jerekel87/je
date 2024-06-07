import BlockA from "@/app/(shared)/components/BlockA";
import { Article } from "@/sanity.types";

function SectionFour({ article }: { article: Article }) {
  return (
    <section className="mt-[134px]">
      <BlockA title="NEW ARTICLES EVERY WEEK!" />
      <p className="lg:px-[58px] mt-[80px] lg:mt-[90px] font-portlin text-[40px] lg:text-[80px] leading-[.9]">
        10X YOUR REVENUE THROUGH THE POWER OF BRANDING
      </p>
    </section>
  );
}

export default SectionFour;
