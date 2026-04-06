"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { NAV_LINKS, TREATWELL_LINK, PHONE_PRIMARY } from "@/lib/data";
import { motion, AnimatePresence } from "framer-motion";

type NavbarProps = {
  theme?: "light" | "dark";
};

export default function Navbar({ theme = "dark" }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        isScrolled ? "bg-plum py-4 shadow-xl" : "bg-transparent py-8"
      }`}
    >
      <nav className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="relative w-32 md:w-40 h-12 md:h-16 flex items-center">
          <div 
            className="w-full h-full bg-gold transition-colors duration-500"
            style={{
              maskImage: 'url(/images/logo.png)',
              maskSize: 'contain',
              maskRepeat: 'no-repeat',
              maskPosition: 'left center',
              WebkitMaskImage: 'url(/images/logo.png)',
              WebkitMaskSize: 'contain',
              WebkitMaskRepeat: 'no-repeat',
              WebkitMaskPosition: 'left center'
            }}
          />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-10">
          {NAV_LINKS.filter(link => !link.primary).map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`text-xs uppercase tracking-[0.2em] font-bold transition-luxury hover:text-gold ${
                isScrolled 
                  ? "text-ivory/80" 
                  : theme === "light" 
                    ? "text-charcoal/80" 
                    : "text-ivory drop-shadow-md"
              }`}
            >
              {link.name}
            </Link>
          ))}
          <Link 
            href={TREATWELL_LINK} 
            className={`px-8 py-3 rounded-full text-[10px] font-bold uppercase tracking-[0.3em] transition-luxury hover:scale-105 active:scale-95 ${
              isScrolled 
                ? "bg-gold text-charcoal hover:bg-ivory" 
                : "bg-gold text-charcoal shadow-lg shadow-black/30 hover:bg-ivory"
            }`} 
            target="_blank" 
            rel="noopener noreferrer"
          >
            Book Now
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className={`lg:hidden transition-colors ${
            isScrolled 
              ? "text-gold" 
              : theme === "light"
                ? "text-charcoal/80"
                : "text-ivory drop-shadow-md"
          }`}
          onClick={() => setMobileMenuOpen(true)}
        >
          <Menu size={28} />
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 bg-plum z-[60] flex flex-col p-10"
          >
            <div className="flex justify-between items-center mb-20">
              <span className="text-3xl font-serif italic text-gold">DtrenD</span>
              <button onClick={() => setMobileMenuOpen(false)} className="text-gold">
                <X size={32} />
              </button>
            </div>
            
            <div className="flex flex-col gap-8">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-4xl font-serif italic text-ivory/90 hover:text-gold transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </div>

            <div className="mt-auto border-t border-gold/20 pt-10">
              <p className="text-gold text-xs uppercase tracking-widest mb-4">Inquiries</p>
              <p className="text-ivory/60 text-lg">{PHONE_PRIMARY}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
