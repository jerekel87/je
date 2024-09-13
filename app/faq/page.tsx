import Header from "./components/Header";
import SectionOne from "./components/SectionOne";
import { getFaqPageSetting } from "@/sanity/query/faqPage";

async function FAQPage() {
  const faqPageSetting = await getFaqPageSetting();

  return (
    <main>
      <Header articleLink={faqPageSetting?.articleLink || ""} />
      <SectionOne faqCategories={faqPageSetting.faqCategories as any[]} />
    </main>
  );
}

export default FAQPage;
