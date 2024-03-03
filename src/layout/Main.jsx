import { Outlet } from "react-router-dom";
import Footer from "../pages/share/Footer";
import Navbar from "../pages/share/Navbar";

const Main = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Main;
