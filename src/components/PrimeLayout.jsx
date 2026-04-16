import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";
import Footer from "./Footer";

const PrimeLayout = () => {
  return (
    <>
      <NavBar />
      <main className="container py-[48px] px-[12px] flex flex-col gap-[20px] pt-[128px]">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default PrimeLayout;