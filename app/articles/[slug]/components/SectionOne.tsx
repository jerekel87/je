import { Article } from "@/sanity.types";
import PortableText from "react-portable-text";
import SectionOneMedia from "./SectionOneMedia";

function SectionOne({ article }: { article: Article }) {
  return (
    <section>
      <h1 className="lg:px-[58px] font-portlin text-[40px] lg:text-[80px] leading-[.9]">
        {article.title}
      </h1>
      <PortableText
        className="lg:px-[58px] mt-[30px] lg:mt-[40px] text-muted-foreground leading-[1.6] text-base lg:text-lg [&_a]:underline [&_a]:text-blue-500"
        content={article.body as any}
      />
      <SectionOneMedia />
    </section>
  );
}

export default SectionOne;
