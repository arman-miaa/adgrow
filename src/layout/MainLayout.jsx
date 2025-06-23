import { Outlet } from "react-router"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"


const MainLayout = () => {
  return (
      <div className="container mx-auto">
          <div className="min-h-[calc(100vh-388px)]">
              <Navbar/>
          </div>
          <Outlet />
          <Footer/>
    </div>
  )
}

export default MainLayout