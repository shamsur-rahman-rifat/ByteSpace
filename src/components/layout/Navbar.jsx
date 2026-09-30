import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import cartImg from "../../assets/hero/cart-icon.png";
import logoImg from "../../assets/hero/logo.png";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="absolute top-0 w-full z-50 pt-[20px] md:pt-[30px] pb-[12px] md:pb-[20px]">
      <div className="w-full px-4 sm:px-8 md:px-[80px] lg:px-[160px] mx-auto flex items-center justify-between text-white font-satoshi">
        {/* Left: Logo */}
        <div className="flex items-center gap-2 sm:gap-3 cursor-pointer flex-shrink-0">
          <img
            src={logoImg}
            alt="Logo"
            className="w-[24px] h-[27px] sm:w-[29px] sm:h-[32px] object-contain"
          />
          {/* Heading XS — Poppins SemiBold 20px */}
          <span className="font-poppins font-semibold text-[17px] sm:text-[20px] leading-[1.2]">
            ByteSpace
          </span>
        </div>

        {/* Center: Nav Links — Label M: Satoshi Medium 16px (hidden on mobile) */}
        <div className="hidden md:flex flex-1 items-center justify-center gap-[32px] lg:gap-[40px]">
          <Link to="/" className="font-satoshi font-medium text-[15px] lg:text-[16px] leading-[1.2] hover:text-accent transition-colors">
            Home
          </Link>
          <a href="#courses" className="font-satoshi font-medium text-[15px] lg:text-[16px] leading-[1.2] text-white/70 hover:text-white transition-colors">
            Courses
          </a>
          <a href="#creators" className="font-satoshi font-medium text-[15px] lg:text-[16px] leading-[1.2] text-white/70 hover:text-white transition-colors">
            Creators
          </a>
        </div>

        {/* Right: Auth & Cart (hidden on mobile, shown on sm+) */}
        <div className="hidden md:flex items-center gap-[20px] lg:gap-[30px]">
          <Link to="/login" className="font-satoshi font-medium text-[15px] lg:text-[16px] leading-[1.2] hover:text-accent transition-colors">
            Sign In
          </Link>
          <Link to="/register" className="font-satoshi font-medium text-[15px] lg:text-[16px] leading-[1.2] hover:text-accent transition-colors">
            Join Us
          </Link>
          <button aria-label="Cart" className="hover:text-accent transition-colors">
            <img src={cartImg} alt="Cart" className="w-[18px] h-[18px] lg:w-[20px] lg:h-[20px] object-contain" />
          </button>
        </div>

        {/* Mobile: Cart + Hamburger */}
        <div className="flex md:hidden items-center gap-4">
          <button aria-label="Cart" className="hover:text-accent transition-colors">
            <img src={cartImg} alt="Cart" className="w-[18px] h-[18px] object-contain" />
          </button>
          <button
            aria-label="Toggle menu"
            onClick={() => setMenuOpen(!menuOpen)}
            className="hover:text-accent transition-colors"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-primary/95 backdrop-blur-sm border-t border-white/10 px-6 py-6 flex flex-col gap-5 z-50">
          <Link to="/" onClick={() => setMenuOpen(false)} className="font-satoshi font-medium text-[16px] leading-[1.2] hover:text-accent transition-colors">
            Home
          </Link>
          <a href="#courses" onClick={() => setMenuOpen(false)} className="font-satoshi font-medium text-[16px] leading-[1.2] text-white/70 hover:text-white transition-colors">
            Courses
          </a>
          <a href="#creators" onClick={() => setMenuOpen(false)} className="font-satoshi font-medium text-[16px] leading-[1.2] text-white/70 hover:text-white transition-colors">
            Creators
          </a>
          <div className="border-t border-white/10 pt-4 flex flex-col gap-4">
            <Link to="/login" onClick={() => setMenuOpen(false)} className="font-satoshi font-medium text-[16px] leading-[1.2] hover:text-accent transition-colors">
              Sign In
            </Link>
            <Link to="/register" onClick={() => setMenuOpen(false)} className="font-satoshi font-medium text-[16px] leading-[1.2] hover:text-accent transition-colors">
              Join Us
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}

