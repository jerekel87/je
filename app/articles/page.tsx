import Image from "next/image";
import Header from "./components/Header";
import SectionOne from "./components/SectionOne";
import Aside from "./components/Aside";

function ArticlesPage() {
  return (
    <main>
      <Header />
      <div className="relative pt-[70px] lg:pt-[140px] pb-[124px]">
        <div className="absolute w-full h-[27px] lg:h-[37px] -top-[6px]">
          <Image
            src="/assets/images/shape-7-copy-7.svg"
            fill
            alt="Transition"
            className="object-cover"
          />
        </div>
        <div className="container px-4 mx-auto flex flex-col lg:flex-row justify-between gap-[60px]">
          <SectionOne />
          <Aside />
        </div>
      </div>
    </main>
  );
}

export default ArticlesPage;
