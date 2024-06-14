import Footer from "../(shared)/components/Footer";
import Header from "../(shared)/components/Header";

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
    </>
  );
}
