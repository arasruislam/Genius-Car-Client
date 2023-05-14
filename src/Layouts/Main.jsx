import { Outlet } from "react-router-dom";
import MainHeader from "../Pages/Shared/Headers/MainHeader";
import Footer from "../Pages/Shared/Footer/Footer";

const Main = () => {
  return (
    <>
      <MainHeader />
      <div className="custom_container min-h-[calc(100vh-332px)] mt-28 ">
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default Main;
