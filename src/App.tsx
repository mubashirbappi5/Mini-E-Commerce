import { TooltipProvider } from "./components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { CartProvider } from "./context/CartContext";
import Navbar from "./components/Navbar";
import CartSidebar from "./components/CartSidebar";
import Home from "./pages/Home";
import ProductDetail from "./pages/ProductDetail";

// Import only your custom Sonner Toaster (recommended)
import { Toaster as SonnerToaster } from "./components/ui/sonner";
import { Routes, Route } from "react-router-dom";
import { Toaster } from 'react-hot-toast';
const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <CartProvider>
        <SonnerToaster />

        {/* Remove BrowserRouter here! */}
        <div className="min-h-screen bg-background">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/product/:id" element={<ProductDetail />} />
            <Route path="*" element={<div>404 Not Found</div>} />
          </Routes>
          <CartSidebar />
        </div>
          <Toaster />
      </CartProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
