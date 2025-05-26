"use client";
import {
  DotLottieCommonPlayer,
  DotLottiePlayer,
} from "@dotlottie/react-player";
import productImage from "@/assets/product-image.png";
import Image from "next/image";
import { ComponentPropsWithoutRef, useEffect, useRef, useState } from "react";
import {
  animate,
  motion,
  useMotionTemplate,
  useMotionValue,
  ValueAnimationTransition,
} from "framer-motion";

const tabs = [
  {
    icon: "/assets/lottie/vroom.lottie",
    title: "User-friendly dashboard",
    isNew: false,
    backgroundPositionX: 0,
    backgroundPositionY: 0,
    backgroundSizeX: 150,
    color: "#A369FF", // Purple
  },
  {
    icon: "/assets/lottie/click.lottie",
    title: "One-click optimization",
    isNew: false,
    backgroundPositionX: 98,
    backgroundPositionY: 100,
    backgroundSizeX: 135,
    color: "#A369FF", // Purple
  },
  {
    icon: "/assets/lottie/stars.lottie",
    title: "Smart keyword generator",
    isNew: true,
    backgroundPositionX: 100,
    backgroundPositionY: 27,
    backgroundSizeX: 177,
    color: "#A369FF", // Purple
  },
];

const FeatureTab = (
  props: (typeof tabs)[number] &
    ComponentPropsWithoutRef<"div"> & { selected: boolean },
) => {
  const tabRef = useRef<HTMLDivElement>(null);
  const dotLottieRef = useRef<DotLottieCommonPlayer>(null);

  const xPercentage = useMotionValue(0);
  const yPercentage = useMotionValue(0);
  const maskImage = useMotionTemplate`radial-gradient(100px 100px at ${xPercentage}% ${yPercentage}%, black, transparent)`;
  const borderGlow = useMotionTemplate`0 0 15px ${props.color}, 0 0 30px ${props.color}40`;

  useEffect(() => {
    if (!tabRef.current || !props.selected) return;
    xPercentage.set(0);
    yPercentage.set(0);
    const { height, width } = tabRef.current?.getBoundingClientRect();

    const circumference = height * 2 + width * 2;

    const times = [
      0,
      width / circumference,
      (width + height) / circumference,
      (width * 2 + height) / circumference,
      1,
    ];
    const options: ValueAnimationTransition = {
      times,
      duration: 4,
      ease: "linear",
      repeat: Infinity,
      repeatType: "loop",
    };
    animate(xPercentage, [0, 100, 100, 0, 0], options);
    animate(yPercentage, [0, 0, 100, 100, 0], options);
  }, [props.selected]);

  const handleTabHover = () => {
    if (dotLottieRef.current === null) return;
    dotLottieRef.current.seek(0);
    dotLottieRef.current.play();
  };

  return (
    <div
      ref={tabRef}
      onMouseEnter={handleTabHover}
      className={`border border-white/15 flex p-3 rounded-xl gap-3 items-center lg:flex-1 relative cursor-pointer transition-all duration-300 ${
        props.selected ? "bg-white/5" : "hover:bg-white/[0.03]"
      }`}
      onClick={props.onClick}
    >
      {props.selected && (
        <>
          <motion.div
            className="absolute inset-0 -m-px rounded-xl border-2 pointer-events-none"
            style={{ 
              maskImage,
              borderColor: props.color,
              boxShadow: borderGlow
            }}
          />
          <div 
            className="absolute inset-0 rounded-xl pointer-events-none"
            style={{ 
              boxShadow: `inset 0 0 20px ${props.color}30`
            }}
          />
        </>
      )}
      <div className={`h-12 w-12 border rounded-lg inline-flex items-center justify-center transition-colors ${
        props.selected ? `border-[#A369FF]` : 'border-white/15'
      }`}>
        <DotLottiePlayer
          ref={dotLottieRef}
          src={props.icon}
          className="h-6 w-6"
          autoplay={props.selected}
        />
      </div>
      <div className="font-medium text-white/90">{props.title}</div>
      {props.isNew && (
        <div 
          className="text-xs rounded-full px-2 py-0.5 font-semibold ml-auto"
          style={{ 
            background: props.color,
            color: 'black',
            textShadow: '0 1px 1px rgba(255,255,255,0.3)'
          }}
        >
          NEW
        </div>
      )}
    </div>
  );
};

export const Features = () => {
  const [selectedTab, setSelectedTab] = useState(0);
  const backgroundPositionX = useMotionValue(tabs[0].backgroundPositionX);
  const backgroundPositionY = useMotionValue(tabs[0].backgroundPositionY);
  const backgroundSizeX = useMotionValue(tabs[0].backgroundSizeX);
  const overlayOpacity = useMotionValue(0.3);

  const handleSelectTab = (index: number) => {
    setSelectedTab(index);
    const animateOptions: ValueAnimationTransition = {
      duration: 1.5,
      ease: [0.22, 1, 0.36, 1],
    };
    
    // Animate overlay flash effect
    animate(overlayOpacity, [0.8, 0], { duration: 0.8, ease: "easeOut" });
    
    animate(
      backgroundSizeX,
      [backgroundSizeX.get(), 100, tabs[index].backgroundSizeX],
      animateOptions,
    );
    animate(
      backgroundPositionX,
      [backgroundPositionX.get(), tabs[index].backgroundPositionX],
      animateOptions,
    );
    animate(
      backgroundPositionY,
      [backgroundPositionY.get(), tabs[index].backgroundPositionY],
      animateOptions,
    );
  };

  const backgroundPosition = useMotionTemplate`${backgroundPositionX}% ${backgroundPositionY}%`;
  const backgroundSize = useMotionTemplate`${backgroundSizeX}%`;
  const overlayColor = tabs[selectedTab].color;

  return (
    <section className="py-20 md:py-28 relative overflow-hidden">
      {/* Purple-themed decorative background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full bg-purple-900/30 blur-[100px]"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full bg-purple-800/30 blur-[100px]"></div>
      </div>
      
      <div className="container relative">
        <div className="text-center mb-16">
          <motion.h2 
            className="text-5xl md:text-6xl font-medium tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-white to-white/80"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Elevate your SEO efforts
          </motion.h2>
          <motion.p
            className="text-white/70 text-lg md:text-xl max-w-2xl mx-auto tracking-tight mt-5"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            From small startups to large enterprises, our AI-driven tool has
            revolutionized the way businesses approach SEO.
          </motion.p>
        </div>
        
        <motion.div 
          className="mt-10 flex flex-col lg:flex-row gap-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {tabs.map((tab, tabIndex) => (
            <FeatureTab
              selected={selectedTab === tabIndex}
              key={tab.title}
              onClick={() => handleSelectTab(tabIndex)}
              {...tab}
            />
          ))}
        </motion.div>
        
        <motion.div 
          className="border border-white/20 p-2.5 rounded-xl mt-6 relative overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          {/* Purple overlay for transition effect */}
          <motion.div 
            className="absolute inset-0 pointer-events-none"
            style={{
              opacity: overlayOpacity,
              background: overlayColor,
              mixBlendMode: 'screen'
            }}
          />
          
          <motion.div
            className="aspect-video bg-cover border border-white/20 rounded-lg relative overflow-hidden"
            style={{
              backgroundPosition,
              backgroundSize,
              backgroundImage: `url(${productImage.src})`,
            }}
          >
            {/* Purple vignette effect */}
            <div className="absolute inset-0 shadow-[inset_0_0_80px_rgba(0,0,0,0.6)]"></div>
          </motion.div>
          
          {/* Purple decorative elements */}
          <div className="absolute top-4 left-4 w-3 h-3 rounded-full bg-purple-500 blur-[2px]"></div>
          <div className="absolute bottom-4 right-4 w-4 h-4 rounded-full bg-purple-400 blur-[2px]"></div>
        </motion.div>
      </div>
    </section>
  );
};