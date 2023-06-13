//Router
import { Route, Routes } from "react-router-dom";

//components
import Footer from "./components/Footer";
import Header from "./components/Header";

//pages
import Cart from "./pages/Cart";
import Home from "./pages/Home";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";
import Register from "./pages/Register";
import Signature from "./pages/Signature";
import SingleProduct from "./pages/SingleProduct";


//context
import { MyMainContext } from "./utils/MyMainContext";

const App = () => {
  return (
    <MyMainContext>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signature" element={<Signature />} />
        <Route path="/single-product/:id" element={<SingleProduct />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
      <Footer />
    </MyMainContext>
  );
};

export default App;
