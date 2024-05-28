import Footer from "../(shared)/components/Footer";
import Header from "../(shared)/components/Header";

export default function PricingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}
