import React from "react";
import { SignedIn, UserButton } from "@clerk/clerk-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faHeart } from "@fortawesome/free-solid-svg-icons";

function Header() {
  return (
    <nav className="h-16 w-full flex justify-between items-center px-4 bg-gray-300">
      <div className="text-xl font-semibold">Shopping</div>
      <div className="flex justify-end items-center gap-5">
     <img src="src/assets/cart.svg"/>
     <img src="src/assets/Wishlist.svg"/>

      <SignedIn>
        <UserButton afterSignOutUrl="/" />
      </SignedIn>
      </div>
    </nav>
  );
}

export default Header;
