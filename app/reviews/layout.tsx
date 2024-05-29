import Footer from "../(shared)/components/Footer";
import Header from "../(shared)/components/Header";

export const revalidate = 3600;

export default function ReviewsLayout({
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
