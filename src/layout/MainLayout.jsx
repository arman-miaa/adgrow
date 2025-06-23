import { Outlet } from "react-router"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"


const MainLayout = () => {
  return (
    <div className="container mx-auto">
      <div className="fixed top-6 left-0 right-0 z-20">
        <Navbar />
      </div>
      <Outlet />
      <Footer />
    </div>
  );
}

export default MainLayout