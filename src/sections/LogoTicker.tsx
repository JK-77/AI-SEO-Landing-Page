"use client";
import acmeLogo from "@/assets/logo-acme.png";
import celestialLogo from "@/assets/logo-celestial.png";
import quantumLogo from "@/assets/logo-quantum.png";
import pulseLogo from "@/assets/logo-pulse.png";
import echoLogo from "@/assets/logo-echo.png";
import Image from "next/image";
import { motion } from "framer-motion";

export const LogoTicker = () => {
  const logos = [
    { src: acmeLogo, alt: "Acme Inc" },
    { src: celestialLogo, alt: "Celestial" },
    { src: quantumLogo, alt: "Quantum" },
    { src: pulseLogo, alt: "Pulse" },
    { src: echoLogo, alt: "Echo" },
  ];

  return (
    <section className="py-16 md:py-20 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/4 w-64 h-64 rounded-full bg-purple-900/20 blur-[80px] transform -translate-y-1/2"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 rounded-full bg-purple-800/20 blur-[80px]"></div>
      </div>

      <div className="container relative">
        <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6"> {/* Reduced gap */}
          {/* Title with animation - made more compact */}
          <motion.div 
            className="flex-none w-[240px] md:w-[280px]" // Fixed width
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-xl md:text-2xl font-medium tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-white/80">
              Trusted by <span className="text-[#9F7AEA]">innovative</span> teams worldwide
            </h2>
          </motion.div>

          {/* Logo ticker with enhanced design */}
          <div className="flex-1 w-full relative">
            {/* Gradient fade edges */}
            <div className="absolute left-0 top-0 h-full w-20 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none"></div>
            <div className="absolute right-0 top-0 h-full w-20 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none"></div>
            
            {/* Main ticker container */}
            <div className="flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
              {/* First row moving left */}
              <motion.div
                initial={{ translateX: "-50%" }}
                animate={{ translateX: "0" }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                className="flex flex-none gap-12 pr-12"
              >
                {[...logos, ...logos].map((logo, index) => (
                  <div 
                    key={`${logo.alt}-${index}`} 
                    className="relative h-8 w-auto flex-none grayscale hover:grayscale-0 transition-all duration-300 group"
                  >
                    <Image
                      src={logo.src}
                      alt={logo.alt}
                      className="object-contain h-full w-full opacity-80 group-hover:opacity-100 transition-opacity duration-300"
                    />
                    {/* Subtle glow on hover */}
                    <div className="absolute inset-0 rounded-lg bg-[#9F7AEA]/0 group-hover:bg-[#9F7AEA]/10 blur-[5px] transition-all duration-300 pointer-events-none"></div>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </div>

        {/* Optional decorative element */}
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 h-px w-1/3 bg-gradient-to-r from-transparent via-[#9F7AEA]/50 to-transparent"></div>
      </div>
    </section>
  );
};