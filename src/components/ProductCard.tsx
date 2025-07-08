import React from "react";
import { ShoppingCart, Eye } from "lucide-react";
import type { Product } from "../context/CartContext";
import { useCart } from "../context/CartContext";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";

import { Link } from "react-router-dom"; // Added import

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart } = useCart();
 

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product);
    alert({
      title: "Added to cart",
      description: `${product.title} has been added to your cart.`, // Fixed template string
    });
  };

  return (
    <Card className="group h-full bg-gradient-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1">
      <Link to={`/product/${product.id}`} className="block h-full">
        <CardContent className="p-0 h-full flex flex-col">
          {/* Product Image */}
          <div className="relative overflow-hidden rounded-t-lg aspect-square">
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />

            {/* Quick View Button */}
            <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <Button
                size="sm"
                variant="secondary"
                className="h-8 w-8 p-0"
                tabIndex={-1}
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation(); /* Add quick view logic here */
                }}
                aria-label="Quick View"
              >
                <Eye className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Product Info */}
          <div className="p-4 flex-1 flex flex-col justify-between">
            <div className="space-y-2">
              <h3 className="font-semibold text-foreground line-clamp-2 group-hover:text-primary transition-colors">
                {product.title}
              </h3>
              <p className="text-sm text-muted-foreground line-clamp-2">
                {product.description}
              </p>
              <p className="text-xs text-muted-foreground uppercase tracking-wide">
                {product.category}
              </p>
            </div>

            {/* Price and Add to Cart */}
            <div className="pt-4 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-2xl font-bold text-price">
                  ${product.price.toFixed(2)}
                </span>
              </div>

              <Button
                onClick={handleAddToCart}
                className="w-full bg-black hover:opacity-90 transition-opacity"
                size="sm"
              >
                <ShoppingCart className="h-4 w-4 mr-2" />
                Add to Cart
              </Button>
            </div>
          </div>
        </CardContent>
      </Link>
    </Card>
  );
};

export default ProductCard;
