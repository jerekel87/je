import { Article } from "@/sanity.types";
import Image from "next/image";

function SectionThree({ article }: { article: Article }) {
  return (
    <section className="mt-[70px]">
      <Image
        src="/assets/images/article-image.webp"
        width="900"
        height="675"
        alt="article image"
        className="object-contain rounded lg:rounded-[15px]"
      />
      <p className="lg:px-[58px] mt-[30px] lg:mt-[40px] text-muted-foreground leading-[1.6] text-base lg:text-lg">
        As we move forward into the future, digital marketing will continue to
        play an even greater role in connecting brands and consumers. From the
        rise of artificial intelligence to the increasing use of voice search,
        digital marketing will continue to evolve and adapt to new technologies
        and trends.
      </p>
    </section>
  );
}

export default SectionThree;
