import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Rent from "../pages/Rent";
import Home360 from "../pages/Home360";
import Detail from "../pages/Detail";
import Header from "../layout/Header";
import Footer from "../layout/Footer";
import About from "../pages/About";
const AppRouter = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home/:id" element={<Detail />} />
          <Route path="/360" element={<Home360 />} />
          <Route path="/rent" element={<Rent />} />
          <Route path="/about" element={<About />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default AppRouter;
