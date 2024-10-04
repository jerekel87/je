import FakePurchase from "../(shared)/components/fake-purchase/FakePurchase";

export default function ArticlesLayout({
  children,
  modal,
}: {
  children: React.ReactNode;
  modal: React.ReactNode;
}) {
  return (
    <>
      {modal}
      {children}
      <div className="hidden lg:block">
        <FakePurchase />
      </div>
    </>
  );
}
