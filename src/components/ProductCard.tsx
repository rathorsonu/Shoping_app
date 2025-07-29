
import React from "react";
import { Heart, HeartOff } from "lucide-react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "@/components/ui/card";

interface Product {
  id: string;
  name: string;
  image: string;
  price: number;
  isWishlisted: boolean;
}

interface ProductCardProps {
  product: Product;
  onToggleWishlist: (id: string) => void;
}

export default function ProductCard({ product, onToggleWishlist }: ProductCardProps) {
  const handleToggle = () => {
    onToggleWishlist(product.id);
  };

  return (
    <Card className="w-72 overflow-hidden">
      <CardHeader className="p-0">
        <img
          src={product.image || "https://via.placeholder.com/300"}
          alt={product.name}
          onError={(e) => (e.currentTarget.src = "https://via.placeholder.com/300")}
          className="w-full h-48 object-cover"
        />
      </CardHeader>
      <CardContent className="p-4">
        <div className="flex justify-between items-center">
          <div>
            <CardTitle className="text-lg">{product.name}</CardTitle>
            <p className="text-gray-600 text-sm">${product.price.toFixed(2)}</p>
          </div>
          <button onClick={handleToggle}>
            {product.isWishlisted ? (
              <HeartOff className="text-red-500" />
            ) : (
              <Heart className="text-gray-400" />
            )}
          </button>
        </div>
      </CardContent>
    </Card>
  );
}
