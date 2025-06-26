import Footer from "@/components/footer";
import Header from "@/components/header/index.";
import StartNotice from "@/components/start-notice";
import { useScrollToTop } from "@/hooks/use-scroll-to-top";
import { Outlet } from "react-router";

const Layout = () => {
  useScrollToTop();
  return (
    <>
      <Header />
      <div className="min-h-[calc(100vh_-_100px)]">
        <Outlet />
      </div>
      <StartNotice />
      <Footer />
    </>
  );
};

export default Layout;
