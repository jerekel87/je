import { Metadata } from "next";
import Footer from "../(shared)/components/Footer";
import Header from "../(shared)/components/Header";
import FakePurchase from "../(shared)/components/fake-purchase/FakePurchase";

export const metadata: Metadata = {
  title:
    "FAQ | Branding Without Boundaries & Forward-thinking Vehicle Wrap Designs",
  openGraph: {
    title:
      "FAQ | Branding Without Boundaries & Forward-thinking Vehicle Wrap Designs",
  },
  twitter: {
    title:
      "FAQ | Branding Without Boundaries & Forward-thinking Vehicle Wrap Designs",
  },
};

export default function FAQLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      {children}
      <Footer />
      <div className="hidden lg:block">
        <FakePurchase />
      </div>
    </>
  );
}
