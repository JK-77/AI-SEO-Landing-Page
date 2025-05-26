"use client";
import Button from "@/components/Button";
import starsBg from "@/assets/stars.png";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export const Hero = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const backgroundPositionY = useTransform(
    scrollYProgress,
    [0, 1],
    [-300, 300],
  );

  return (
    <motion.section
      ref={sectionRef}
      className="flex md:h-[800px] items-center h-[492px] overflow-hidden relative [mask-image:linear-gradient(to_top,transparent,black_10%_90%,transparent)]"
      style={{ backgroundImage: `url(${starsBg.src})`, backgroundPositionY }}
      animate={{ backgroundPositionX: starsBg.width }}
      transition={{ duration: 120, ease: "linear", repeat: Infinity }}
    >
      <div className="absolute inset-0 bg-[radial-gradient(75%_75%_at_center_center,rgb(140,69,255,.5)_15%,rgb(14,0,36,.5)_78%,transparent)]"></div>
      
      {/* Enhanced Planet */}
      <div className="absolute h-64 w-64 md:h-96 md:w-96 rounded-full top-1/2 left-1/2 border border-white/10 -translate-x-1/2 -translate-y-1/2 
        bg-[radial-gradient(50%_50%_at_16.8%_18.3%,white,rgb(184,148,255)_37.7%,rgb(24,0,66))] 
        shadow-[0_0_60px_rgba(140,69,255,0.6),0_0_120px_rgba(140,69,255,0.3),inset_0_0_20px_rgba(255,255,255,0.2)]">
      </div>

      {/* Darkened and Thicker Rings */}
      {/* Ring 1 */}
      <motion.div
        style={{ translateX: "-50%", translateY: "-50%" }}
        animate={{ rotate: "1turn" }}
        transition={{ duration: 60, ease: "linear", repeat: Infinity }}
        className="absolute h-[344px] w-[344px] md:h-[580px] md:w-[580px] rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
      >
        <div className="absolute inset-0 rounded-full border-2 border-white/15 opacity-80 bg-[radial-gradient(ellipse_at_center,rgba(140,69,255,0.15)_0%,transparent_70%)]"></div>
        <div className="absolute h-3.5 w-3.5 top-1/2 left-0 bg-white rounded-full -translate-y-1/2 -translate-x-1/2 shadow-[0_0_12px_white]"></div>
        <div className="absolute h-3.5 w-3.5 top-0 left-1/2 bg-white rounded-full -translate-y-1/2 -translate-x-1/2 shadow-[0_0_12px_white]"></div>
        <div className="absolute h-7 w-7 top-1/2 left-full border-2 border-white/40 rounded-full -translate-y-1/2 -translate-x-1/2 inline-flex items-center justify-center backdrop-blur-[1px]">
          <div className="h-3.5 w-3.5 bg-white rounded-full shadow-[0_0_10px_white]"></div>
        </div>
      </motion.div>

      {/* Ring 2 */}
      <motion.div
        style={{ translateX: "-50%", translateY: "-50%" }}
        animate={{ rotate: "-1turn" }}
        transition={{ duration: 60, ease: "linear", repeat: Infinity }}
        className="absolute h-[444px] w-[444px] md:h-[780px] md:w-[780px] rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
      >
        <div className="absolute inset-0 rounded-full border-2 border-white/20 opacity-80 bg-[radial-gradient(ellipse_at_center,rgba(140,69,255,0.12)_0%,transparent_70%)]"></div>
      </motion.div>

      {/* Ring 3 */}
      <motion.div
        style={{ translateX: "-50%", translateY: "-50%" }}
        animate={{ rotate: "1turn" }}
        transition={{ duration: 90, ease: "linear", repeat: Infinity }}
        className="absolute h-[544px] w-[544px] md:h-[980px] md:w-[980px] rounded-full top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2"
      >
        <div className="absolute inset-0 rounded-full border-2 border-white/15 opacity-80 bg-[radial-gradient(ellipse_at_center,rgba(140,69,255,0.1)_0%,transparent_70%)]"></div>
        <div className="absolute h-3.5 w-3.5 top-1/2 left-0 bg-white rounded-full -translate-y-1/2 -translate-x-1/2 shadow-[0_0_10px_white]"></div>
        <div className="absolute h-3.5 w-3.5 top-1/2 left-full bg-white rounded-full -translate-y-1/2 -translate-x-1/2 shadow-[0_0_10px_white]"></div>
      </motion.div>

      {/* Text Content */}
      <div className="container relative mt-16 z-10">
        <motion.h1 
          className="text-7xl md:text-[140px] font-bold tracking-tighter bg-white 
          bg-[radial-gradient(100%_100%_at_top_left,white,white,rgb(74,32,138,.5))] 
          text-transparent bg-clip-text text-center leading-[0.85]"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          AI SEO
        </motion.h1>
        
        <motion.p 
          className="text-lg md:text-xl max-w-xl mx-auto text-white/85 mt-5 text-center 
          font-medium tracking-normal leading-snug"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Elevate your site's visibility effortlessly with AI, where smart technology meets user-friendly SEO tools
        </motion.p>
        
        <motion.div 
          className="flex flex-col items-center mt-8 gap-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <Button 
            className="px-6 py-3 text-base font-medium hover:scale-[1.03] transition-transform"
          >
            Join Waitlist
          </Button>
          <p className="text-sm text-white/60 mt-4">Trusted by innovative teams worldwide</p>
        </motion.div>
      </div>
    </motion.section>
  );
};