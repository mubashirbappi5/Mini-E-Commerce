import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShoppingCart, Home, Store } from 'lucide-react';
import { useCart } from '../context/CartContext';


const Navbar = () => {
  const { state, toggleCart } = useCart();
  const location = useLocation();
  const cartItemsCount = state.items.reduce((total, item) => total + item.quantity, 0);

  return (
    <nav className="sticky top-0 z-40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 hover:opacity-80 transition-opacity">
            <Store className="h-8 w-8 text-primary" />
            <span className="text-2xl font-bold text-foreground">ShopEase</span>
          </Link>

          <div className='flex items-center space-x-10'>
            {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-6">
            <Link
              to="/"
              className="flex items-center space-x-1 px-3 py-2 rounded-md transition-colors "
            >
              <Home className="h-4 w-4" />
              <span>Home</span>
            </Link>
          </div>

          {/* Cart Button */}
          <button
        
           
            onClick={toggleCart}
            className="relative flex bg-black text-white py-2 rounded-lg px-4 items-center space-x-2 hover:bg-cart hover:text-cart-foreground transition-colors"
          >
            <ShoppingCart className="h-4 w-4" />
            <span className="hidden sm:inline">Cart</span>
            {cartItemsCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-white text-black text-xs rounded-full h-5 w-5 flex items-center justify-center animate-pulse-cart">
                {cartItemsCount}
              </span>
            )}
          </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden mt-4 flex justify-center">
          <Link
            to="/"
            className={`flex items-center space-x-1 px-4 py-2 rounded-md transition-colors ${
              location.pathname === '/'
                ? 'bg-primary text-primary-foreground'
                : 'text-foreground hover:text-primary hover:bg-secondary'
            }`}
          >
            <Home className="h-4 w-4" />
            <span>Home</span>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;