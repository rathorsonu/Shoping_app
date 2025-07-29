// src/pages/Products.tsx
import React, { useEffect, useState } from "react";
import apiClient from "./api";
import ProductCard from "./components/ProductCard";
interface Product {
  id: string;
  name: string;
  image: string;
  price: number;
  isWishlisted: boolean;
}

export default function ProductsPage() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    apiClient
      .get("/products")
      .then((res) => setProducts(res.data))
      .catch((err) => console.error("API error", err));
  }, []);

  const handleWishlistToggle = (id: string) => {
    setProducts((products) =>
      products.map((p) =>
        p.id === id ? { ...p, isWishlisted: !p.isWishlisted } : p
      )
    );

    // Optionally, call backend to update wishlist status
    apiClient.post(`/wishlist/toggle/${id}`);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-8 py-4">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          onToggleWishlist={handleWishlistToggle}
        />
      ))}
    </div>
  );
}
