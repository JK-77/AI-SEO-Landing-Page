'use client';

import LogoIcon from "@/assets/logo.svg";
import MenuIcon from "@/assets/icon-menu.svg";
import Button from "@/components/Button";
import { motion } from "framer-motion";

export const Header = () => {
  return (
    <header className="py-2 bg-gradient-to-b from-black/80 to-transparent sticky top-0 z-50 backdrop-blur-lg">
      <div className="container px-4">
        <motion.div 
          className="flex justify-between items-center border border-white/15 p-2 rounded-xl max-w-6xl mx-auto bg-white/5 backdrop-blur-md"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          {/* Logo */}
          <div className="flex items-center space-x-2 group">
            <div className="relative">
              <div className="border border-white/15 rounded-lg inline-flex justify-center items-center h-8 w-8 bg-gradient-to-br from-blue-500/20 to-purple-500/20 group-hover:from-blue-500/30 group-hover:to-purple-500/30 transition-all duration-300">
                <LogoIcon className="h-4 w-4" />
              </div>
              <span className="absolute inset-0 rounded-lg bg-blue-500/10 blur-md group-hover:opacity-100 opacity-0 transition-opacity duration-300" />
            </div>
            <span className="hidden md:inline-block text-white font-medium text-sm">AI SEO</span>
          </div>

          {/* Navigation */}
          <div className="hidden md:block">
            <nav className="flex gap-2 text-sm">
              {['Features', 'Developers', 'Pricing', 'Changelog'].map((item) => (
                <a
                  key={item}
                  href="#"
                  className="relative text-white/80 hover:text-white px-2.5 py-1 rounded-lg group"
                >
                  {item}
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-purple-400 to-purple-600 rounded-full scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300" />
                  <span className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-purple-600/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                </a>
              ))}
            </nav>
          </div>

          {/* CTA */}
          <div className="flex items-center gap-2">
            <div className="relative group">
              <Button 
                className="hidden sm:inline-flex text-sm px-4 py-1 relative z-10 transform transition-transform duration-200 group-hover:scale-105 active:scale-95"
              >
                Join Waitlist
              </Button>
              <span className="absolute inset-0 bg-purple-500/30 rounded-lg blur-md group-hover:opacity-100 opacity-0 transition-opacity duration-300" />
            </div>
            <button 
              className="md:hidden p-1 rounded-lg hover:bg-white/10 transition-all duration-200 hover:scale-110 active:scale-95"
            >
              <MenuIcon className="h-4 w-4" />
            </button>
          </div>
        </motion.div>
      </div>
    </header>
  );
};