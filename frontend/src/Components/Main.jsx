import { Outlet } from "react-router-dom";
import Footer from "./Header/Footer";
import Header from "./Header/Header";
const Main = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Main;
