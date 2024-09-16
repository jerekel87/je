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
        className="lg:px-[58px] mt-6 lg:mt-[40px] text-muted-foreground text-sm lg:text-lg leading-normal [&_a]:underline [&_a]:text-blue-500"
        content={article.body as any}
      />
      <SectionOneMedia article={article} />
    </section>
  );
}

export default SectionOne;
