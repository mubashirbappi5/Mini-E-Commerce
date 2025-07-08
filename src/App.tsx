import { Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Navbar from "./components/Navbar";
import CartSidebar from "./components/CartSidebar";

import { useState } from "react"
import Footer from "./components/Footer";


function App() {
   const [cartOpen, setCartOpen] = useState(false)
  return (
    <div>
      <Navbar onCartClick={() => setCartOpen(true)} />
         <Routes>
           
      <Route path="/" element={<Home />} />
      {/* Add more routes here */}
    
    </Routes>
      <CartSidebar isOpen={cartOpen} onClose={() => setCartOpen(false)} />

        <Footer/>
    </div>
   
  );
}

export default App;