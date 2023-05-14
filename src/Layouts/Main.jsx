import { Outlet } from "react-router-dom";
import MainHeader from "../Pages/Shared/Headers/MainHeader";
import Footer from "../Pages/Shared/Footer/Footer";

const Main = () => {
  return (
    <>
      <MainHeader />
      <div>
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default Main;
