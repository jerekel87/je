import { getArticle } from "@/sanity/query/article";
import SectionOne from "./components/SectionOne";
import SectionTwo from "./components/SectionTwo";
import SectionThree from "./components/SectionThree";
import SectionFour from "./components/SectionFour";
import Header from "@/app/(shared)/components/Header";
import FakePurchase from "@/app/(shared)/components/fake-purchase/FakePurchase";
import ShareModal from "@/app/(shared)/components/ShareModal";

async function ArticlePage({ params }: { params: { slug: string } }) {
  const { slug } = params;
  const article = await getArticle({ slug });
  return (
    <>
      <Header />
      <div className="border-[1px] border-muted shadow-sm" />
      <main className="container max-w-[900px] pb-[100px] lg:pb-[152px] pt-[40px] lg:pt-[80px]">
        {/* Floating button */}
        <div className="hidden lg:block sticky z-[1] top-0 max-w-[900px] mx-auto">
          <div className="absolute -right-[100px] top-[50svh] -translate-y-1/2 flex flex-col gap-[24px]">
            <div className="flex flex-col items-center">
              <ShareModal pathname={`articles/${article.slug?.current}`} />
              <p className="mt-[10px] text-sm font-bold">Share</p>
            </div>
          </div>
        </div>
        {/*  */}
        <SectionOne article={article} />
        <SectionTwo article={article} />
        <SectionThree article={article} />
        <SectionFour article={article} />
      </main>
      <div className="hidden lg:block">
        <FakePurchase />
      </div>
    </>
  );
}

export default ArticlePage;
