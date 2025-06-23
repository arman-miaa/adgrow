import { Route, Routes } from "react-router";
import Home from "../pages/Home";
import Error from "../pages/Error";
import MainLayout from "../layout/MainLayout";

const Router = () => {
  return (
    <Routes>
    
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
      </Route>

     
      <Route path="*" element={<Error />} />
    </Routes>
  );
};

export default Router;
