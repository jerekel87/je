import Image from "next/image";
import Aside from "./components/Aside";
import Header from "./components/Header";
import Articles from "./components/Articles";
import Footer from "../(shared)/components/Footer";
import MainHeader from "../(shared)/components/Header";
import FakePurchase from "../(shared)/components/fake-purchase/FakePurchase";
import { getArticles } from "@/sanity/query/article";
import CategorySelector from "./components/CategorySelector";

export const revalidate = 60;

export const ARTICLES_LIMIT = 10;

async function ArticlesPage({
  searchParams,
}: {
  searchParams: { category: string };
}) {
  const categorySlug = searchParams.category;
  const articles = await getArticles({
    categorySlug,
    limit: ARTICLES_LIMIT,
  });

  return (
    <>
      <MainHeader />
      <main>
        <Header />
        <div className="relative pt-[30px] lg:pt-[140px] pb-[124px]">
          <div className="absolute w-full h-[27px] lg:h-[37px] -top-[6px]">
            <Image
              src="/assets/images/shape-7-copy-7.svg"
              fill
              alt="Transition"
              className="object-cover"
            />
          </div>
          <div className="container px-4 mx-auto flex flex-col lg:flex-row justify-between gap-[40px]">
            <Articles
              initialArticles={articles}
              categorySelector={<CategorySelector />}
            />
            <Aside />
          </div>
        </div>
      </main>
      <Footer />
      <div className="hidden lg:block">
        <FakePurchase />
      </div>
    </>
  );
}

export default ArticlesPage;
