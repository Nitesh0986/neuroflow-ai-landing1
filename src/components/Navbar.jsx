import { useState } from "react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    "Features",
    "Pricing",
    "Testimonials",
    "Contact",
  ];

  return (
    <header className="sticky top-0 z-50 bg-[#F1F6F4]/90 backdrop-blur-md border-b border-gray-200">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">

        {/* Logo */}
        <h1 className="text-2xl font-bold text-[#114C5A] cursor-pointer transition-all duration-300 hover:text-[#FF9932] hover:scale-105">
          NeuroFlow AI
        </h1>

        {/* Desktop Menu */}
        <nav className="hidden md:flex gap-8">
          {links.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="font-medium transition-all duration-300 hover:text-[#FF9932] hover:-translate-y-1"
            >
              {item}
            </a>
          ))}
        </nav>

        {/* CTA */}
        <button className="hidden md:block bg-[#FFC801] px-5 py-2 rounded-lg font-semibold transition-all duration-300 hover:bg-[#FF9932] hover:scale-105 hover:shadow-xl">
          Get Started
        </button>

        {/* Mobile Button */}
        <button
          className="md:hidden text-3xl transition-transform duration-300 hover:scale-110"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white border-t">
          {links.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="block px-6 py-4 transition-all duration-300 hover:bg-[#D9E8E2] hover:text-[#114C5A]"
            >
              {item}
            </a>
          ))}

          <button className="m-4 w-[calc(100%-2rem)] bg-[#FFC801] rounded-lg py-3 font-semibold transition-all duration-300 hover:bg-[#FF9932] hover:shadow-lg">
            Get Started
          </button>
        </div>
      )}
    </header>
  );
}

export default Navbar;