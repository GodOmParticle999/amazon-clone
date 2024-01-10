import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Footer from "./components/Footer/Footer"

import Header from "./components/Header/Header";
// import ProductPage from "./pages/ProductPage";
import Cart from "./components/Cart/Cart";
import CheckoutPage from "./pages/CheckoutPage";
import ProductPage from "./pages/ProductPage";


function App() {
  return (
    
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="/product/:id" element={<ProductPage />} />
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/checkout" element={<CheckoutPage/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
