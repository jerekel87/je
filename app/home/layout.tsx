import Footer from "../(shared)/components/Footer";
import Header from "../(shared)/components/Header";
import FakePurchase from "../(shared)/components/fake-purchase/FakePurchase";

export default function HomeLayout({
  children,
  modal,
}: {
  children: React.ReactNode;
  modal: React.ReactNode;
}) {
  return (
    <>
      <Header />
      {modal}
      {children}
      <Footer />
      <div className="hidden lg:block">
        <FakePurchase />
      </div>
    </>
  );
}
