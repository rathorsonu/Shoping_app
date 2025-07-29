import React from "react";
import {
  SignIn,
  SignUp,
  SignedOut,
} from "@clerk/clerk-react";
import { Routes, Route } from "react-router-dom";
import Header from "./Header"; // Make sure path is correct
import "./App.css";
import ProductsPage from "./Products";

export default function App() {
  return (
    <div className="min-h-screen min-w-screen bg-gray-100">
      <Header /> {/* Navbar always visible */}
      <div className="flex flex-col items-center justify-center pt-8">
        <Routes>
          <Route path="/sign-in" element={<SignIn routing="path" path="/sign-in" />} />
          <Route path="/sign-up" element={<SignUp routing="path" path="/sign-up" />} />
          <Route path="/products" element={<ProductsPage />} />

          <Route
            path="/"
            element={
              <SignedOut>
                <div className="text-center">
                  <p>You are signed out</p>
                  <a href="/sign-in" className="text-blue-600 underline">Sign In</a>
                </div>
              </SignedOut>
            }
          />
        </Routes>
      </div>
    </div>
  );
}
