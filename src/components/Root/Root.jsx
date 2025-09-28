import { Outlet } from "react-router";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Sidebar from "../Sidebar/Sidebar";

const Root = () => {
  return (
    <div>
      <Header />
      <div className="flex gap-12">
        <Sidebar />
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Root;
