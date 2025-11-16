"use client";
import Image from "next/image";

export default function NavBar() {

  return (
    <nav className="bg-navbar fixed top-0 left-0 w-full shadow-md z-50 backdrop-blur-md">
      <div className="py-2 px-4">
        {/* Brand */}
        <Image
            src="/logo1.jpg"
            alt="Solum Logo"
            width={120}
            height={40}
            priority
        />
      </div>
    </nav>
  );
}
