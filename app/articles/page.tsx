import Image from "next/image";

import Articles from "./components/Articles";
import Aside from "./components/Aside";
import { getArticles } from "@/sanity/query/article";
import Footer from "../(shared)/components/Footer";
import MainHeader from "../(shared)/components/Header";
import Header from "./components/Header";
import { unstable_noStore as noStore } from "next/cache";

export const ARTICLES_LIMIT = 9;

async function ArticlesPage({
  searchParams,
}: {
  searchParams: { category: string };
}) {
  const categorySlug = searchParams.category;
  noStore();
  const articles = await getArticles({
    limit: ARTICLES_LIMIT,
    categorySlug,
  });

  return (
    <>
      <MainHeader />
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
            <Articles initialArticles={articles} />
            <Aside />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default ArticlesPage;
