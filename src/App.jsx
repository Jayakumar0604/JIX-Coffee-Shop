import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainLayouts from "./Layouts/MainLayouts";
import Home from "./Pages/Home/Index";
import About from "./Pages/About/Index";
import Menu from "./Pages/Menu/Index";
import Guide from "./Pages/Guide/Index";
import Landing from "./Pages/Landing/Index";
import Blog from "./Pages/Blog/Index";
import Shop from "./Pages/Shop/Index";
import Contact from "./Pages/Contact/Index";
import ViewProduct from "./Pages/ViewProduct/Index";
import ViewBlog from "./Pages/Blog/ViewBlog";
import ViewCart from "./Components/Cart/Index";
import { CartProvider } from "./Components/CartContext/Index";
import PaymentPage from "./Components/PaymentPage/Index";

const App = () => {
  return (
    <>
      <CartProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<MainLayouts />}>
              <Route index element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/menu" element={<Menu />} />
              <Route path="/guide" element={<Guide />} />
              <Route path="/landing" element={<Landing />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/shop" element={<Shop />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/view-product" element={<ViewProduct />} />
              <Route path="/view-blog" element={<ViewBlog />} />
              <Route path="/view-cart" element={<ViewCart />} />
              <Route path="/payment" element={<PaymentPage />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </CartProvider>
    </>
  );
};

export default App;
