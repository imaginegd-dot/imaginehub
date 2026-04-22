import React from "react";
import { motion } from "motion/react";
import { Camera, Mail, Instagram, MapPin } from "lucide-react";

export function Navbar() {
  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 bg-paper/80 backdrop-blur-md border-b border-ink/5"
      id="navbar"
    >
      <div className="max-w-7xl mx-auto px-6 h-24 flex items-center justify-between">
        <div className="flex flex-col">
          <span className="text-3xl tracking-[0.2em] font-light leading-none">IMAGINEHUB</span>
          <span className="text-[10px] tracking-[0.4em] uppercase opacity-60 ml-px mt-1 font-sans">Cinematic Weddings</span>
        </div>
        
        <div className="hidden md:flex items-center gap-10">
          <NavLink href="#portfolio">Portfolio</NavLink>
          <NavLink href="#booking">Packages</NavLink>
          <NavLink href="#about">About</NavLink>
          <NavLink href="#contact">Contact</NavLink>
        </div>

        <div className="flex items-center gap-4">
          <a href="https://instagram.com" className="text-ink/60 hover:text-gold transition-colors">
            <Instagram className="w-5 h-5" />
          </a>
        </div>
      </div>
    </motion.nav>
  );
}

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a 
      href={href} 
      className="text-xs uppercase tracking-[0.2em] font-medium text-ink/60 hover:text-ink transition-colors relative group"
    >
      {children}
      <span className="absolute -bottom-1 left-0 w-0 h-px bg-gold transition-all duration-300 group-hover:w-full" />
    </a>
  );
}
