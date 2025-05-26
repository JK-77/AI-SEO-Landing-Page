"use client";
import Button from "@/components/Button";
import starsBg from "@/assets/stars.png";
import gridLines from "@/assets/grid-lines.png";
import { motion, useMotionTemplate, useMotionValue, useScroll, useTransform } from "framer-motion";
import { RefObject, useEffect, useRef } from "react";

const useRelativeMousePosition = (to: RefObject<HTMLElement>) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const updateMousePosition = (event: MouseEvent) => {
    if (!to.current) return;
    const { top, left } = to.current?.getBoundingClientRect();
    mouseX.set(event.x - left);
    mouseY.set(event.y - top);
  };
  useEffect(() => {
    window.addEventListener("mousemove", updateMousePosition);
    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
    };
  }, []);

  return [mouseX, mouseY];
};

export const CallToAction = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const borderDivRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  
  const backgroundPositionY = useTransform(scrollYProgress, [0, 1], [-300, 300]);
  const [mouseX, mouseY] = useRelativeMousePosition(borderDivRef);
  const maskImage = useMotionTemplate`radial-gradient(300px at ${mouseX}px ${mouseY}px, rgba(0,0,0,0.8), transparent)`;
  
  // Glow effect values
  const glowSize = useTransform(scrollYProgress, [0, 1], [100, 300]);
  const glowOpacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.1, 0.3, 0.1]);
  const glowImage = useMotionTemplate`radial-gradient(${glowSize}px at 50% 50%, rgba(159, 122, 234, 0.5), transparent)`;

  return (
    <div className="py-24 md:py-32 relative overflow-hidden" ref={sectionRef}>
      {/* Background glow effect */}
      <motion.div 
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: glowImage,
          opacity: glowOpacity
        }}
      />
      
      <div className="container px-4">
        <motion.div
          ref={borderDivRef}
          className="border border-white/20 py-20 md:py-24 rounded-2xl overflow-hidden relative group"
          style={{
            backgroundPositionY,
            backgroundImage: `url(${starsBg.src})`,
            backgroundSize: "cover"
          }}
          animate={{ backgroundPositionX: starsBg.width }}
          transition={{ duration: 120, ease: "linear", repeat: Infinity }}
        >
          {/* Static overlay */}
          <div
            className="absolute inset-0 bg-[rgb(74,32,138)]/80 bg-blend-overlay 
                      [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_70%)] 
                      group-hover:opacity-0 transition-all duration-700"
            style={{ backgroundImage: `url(${gridLines.src})` }}
          />
          
          {/* Interactive overlay */}
          <motion.div
            className="absolute inset-0 bg-[rgb(74,32,138)]/70 bg-blend-overlay opacity-0 
                      group-hover:opacity-100 transition-all duration-500"
            style={{
              maskImage,
              backgroundImage: `url(${gridLines.src})`,
            }}
          />
          
          {/* Content */}
          <div className="relative z-10 px-6">
            <motion.h2 
              className="text-4xl md:text-6xl lg:text-7xl max-w-2xl mx-auto text-center font-medium 
                        bg-clip-text text-transparent bg-gradient-to-b from-white to-white/80"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              AI-driven SEO for <span className="text-[#9F7AEA]">everyone</span>.
            </motion.h2>
            
            <motion.p 
              className="text-center text-lg md:text-xl max-w-md mx-auto text-white/80 mt-6 tracking-tight"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Achieve clear, impactful results without the complexity.
            </motion.p>
            
            <motion.div 
              className="flex justify-center mt-10"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <Button 
                className="px-8 py-4 text-lg font-medium bg-[#9F7AEA] hover:bg-[#8B5FCF] 
                          transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-[#9F7AEA]/30"
              >
                Join Waitlist
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </div>
      
      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-[#9F7AEA]"
            style={{
              width: Math.random() * 4 + 2 + 'px',
              height: Math.random() * 4 + 2 + 'px',
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              opacity: Math.random() * 0.5 + 0.3
            }}
            animate={{
              y: [0, (Math.random() - 0.5) * 40],
              x: [0, (Math.random() - 0.5) * 20],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut"
            }}
          />
        ))}
      </div>
    </div>
  );
};