import Container from "@/components/container";
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
      <Container elem="main" className="min-h-main-height pt-5">
        <Outlet />
        <StartNotice />
      </Container>
      <Footer />
    </>
  );
};

export default Layout;
