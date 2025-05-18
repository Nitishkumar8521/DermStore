import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Collection from "./pages/Collection";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Product from "./pages/Product";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import PlaceOrder from "./pages/PlaceOrder";
import Orders from "./pages/Orders";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import SearchBar from "./components/SearchBar";
import { ToastContainer } from "react-toastify";
import Verify from "./pages/Verify";
import BestSeller from "./components/BestSeller";
import Brand from "./pages/Brand";
import Category from "./pages/Category";
import Expert from "./pages/Expert";
import Read from "./pages/Read";
//import 'react-toastify/dist/ReactToastify.css'

export default function App() {
  return (
    <div>
      <ToastContainer />
      <Navbar />
      <SearchBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/collection" element={<Collection />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/product/:productId" element={<Product />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
        <Route path="/login" element={<Login />} />
        <Route path="/place-order" element={<PlaceOrder />} />
        <Route path="/orders" element={<Orders />}></Route>
        <Route path="/verify" element={<Verify />} />
        <Route path="/bestsellers" element={<BestSeller />} />
        <Route path="/expert" element={<Expert />} />
        <Route path="/brand/:brandName" element={<Brand />} />
        <Route path="/category/:CategoryName" element={<Category />} />
        <Route path="/read" element={<Read />} />
      </Routes>
      <Footer />
    </div>
  );
}
