import FakePurchase from "@/app/(shared)/components/fake-purchase/FakePurchase";
import Footer from "@/app/(shared)/components/Footer";
import Header from "@/app/(shared)/components/Header";

export default function ConfirmationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
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
