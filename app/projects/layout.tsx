import { Metadata } from "next";
import FakePurchase from "../(shared)/components/fake-purchase/FakePurchase";

export const metadata: Metadata = {
  title:
    "Projects | Branding Without Boundaries & Forward-thinking Vehicle Wrap Designs",
  openGraph: {
    title:
      "Projects | Branding Without Boundaries & Forward-thinking Vehicle Wrap Designs",
  },
  twitter: {
    title:
      "Projects | Branding Without Boundaries & Forward-thinking Vehicle Wrap Designs",
  },
};

export default function ProjectsLayout({
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
