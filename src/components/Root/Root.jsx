import { Outlet, useNavigation } from "react-router";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Sidebar from "../Sidebar/Sidebar";

const Root = () => {
  const navigation = useNavigation();
  const isNavigating = Boolean(navigation.location);
  return (
    <div>
      <Header />
      <div className="flex gap-12">
        <Sidebar />
        {isNavigating && <span>Loading....</span>}
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Root;
