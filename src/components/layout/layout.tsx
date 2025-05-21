import Footer from "../footer/footer";
import Header from "../header/header";
import { Inter } from "next/font/google";
type TLayoutProps = {
  children: React.ReactNode;
};

const inter = Inter({ subsets: ["latin"] });

export default function Layout({ children }: TLayoutProps) {
  return (
    <div
      className={`${inter.className} relative flex min-h-screen flex-col dark`}
    >
      <Header />
      <main className="flex-1 flex flex-col mb-12">{children}</main>
      <Footer />
    </div>
  );
}
