import SectionOne from "./components/SectionOne";
import SectionTwo from "./components/SectionTwo";
import ArticleSection from "./components/ArticleSection";
import SectionFour from "./components/SectionFour";
import Header from "@/app/(shared)/components/Header";
import FakePurchase from "@/app/(shared)/components/fake-purchase/FakePurchase";
import ShareModalContainer from "./components/ShareModalContainer";
import { getArticle } from "@/sanity/query/article";
import SectionOneMedia from "./components/SectionOneMedia";

export const revalidate = 60;

async function ArticlePage({ params }: { params: { slug: string } }) {
  const { slug } = params;

  const article = await getArticle({ slug });

  return (
    <>
      <Header />
      <div className="border-[1px] border-muted shadow-sm" />
      <main className="container px-3 lg:max-w-[1146px] pb-[100px] lg:pb-[152px] pt-[40px] lg:pt-[80px]">
        <SectionOne article={article} />
        <div className="lg:flex lg:gap-[35px] lg:pl-[117px] mt-6 lg:mt-[58px]">
          <div className="w-full">
            <SectionOneMedia article={article} />

            {(article.block?.title || article.block?.body) && (
              <SectionTwo article={article} />
            )}

            {article.sections?.map((articleSection: any, i: number) => (
              <ArticleSection key={i} articleSection={articleSection} />
            ))}

            <SectionFour />
          </div>
          <ShareModalContainer pathname={`articles/${article.slug?.current}`} />
        </div>
      </main>
      <div className="hidden lg:block">
        <FakePurchase />
      </div>
    </>
  );
}

export default ArticlePage;
