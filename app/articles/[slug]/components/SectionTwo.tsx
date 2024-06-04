import { Button } from "@/app/(shared)/components/ui/button";
import { Article } from "@/sanity.types";

function SectionTwo({ article }: { article: Article }) {
  return (
    <section className="lg:px-[58px] mt-[65px]">
      <h2 className="font-portlin text-[30px] lg:text-[60px] leading-[.9]">
        The Rise of Social Media Marketing
      </h2>
      <p className="mt-[30px] lg:mt-[40px] text-muted-foreground leading-[1.6] text-base lg:text-lg">
        One of the most significant ways that digital marketing has evolved is
        through the rise of social media. Social media platforms like Facebook,
        Twitter, and Instagram have transformed the way that brands connect with
        consumers, allowing them to reach a wider audience and engage with them
        in real time.
      </p>
      <div className="grid grid-cols-2 lg:flex items-center gap-[27px] mt-[34px] lg:mt-[44px]">
        <Button className="w-full lg:w-max">CHOOSE A PACKAGE</Button>
        <Button variant="outline" className="w-full lg:w-max">
          REQUEST A QUOTE
        </Button>
      </div>
    </section>
  );
}
export default SectionTwo;
