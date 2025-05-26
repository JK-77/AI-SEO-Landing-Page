"use client";
import avatar1 from "@/assets/avatar-1.png";
import avatar2 from "@/assets/avatar-2.png";
import avatar3 from "@/assets/avatar-3.png";
import avatar4 from "@/assets/avatar-4.png";
import Image from "next/image";
import { motion, useMotionValue, useTransform } from "framer-motion";

const testimonials = [
  {
    text: "This product has completely transformed how I manage my projects and deadlines",
    name: "Sophia Perez",
    title: "Director @ Quantum",
    location: "Spain Area",
    avatarImg: avatar1,
  },
  {
    text: "These AI tools have completely revolutionized our SEO entire strategy overnight",
    name: "Jamie Lee",
    title: "Founder @ Pulse",
    location: "Amid Life",
    avatarImg: avatar2,
  },
  {
    text: "The user interface is so intuitive and easy to use, it has saved us countless hours",
    name: "Alisa Hester",
    title: "Product @ Innovate",
    location: "Kondra & Asia",
    avatarImg: avatar3,
  },
  {
    text: "Our team's productivity has increased significantly since we started using this tool",
    name: "Alec Whitten",
    title: "CTO @ Tech Solutions",
    location: "Broker & Business",
    avatarImg: avatar4,
  },
];

export const Testimonials = () => {
  const x = useMotionValue(0);
  const xInput = [-100, 0, 100];
  const background = useTransform(x, xInput, [
    "linear-gradient(135deg, #8C45F4 0%, #A369FF 100%)",
    "linear-gradient(135deg, #8C45F4 0%, #A369FF 100%)",
    "linear-gradient(135deg, #8C45F4 0%, #A369FF 100%)",
  ]);

  return (
    <section className="py-20 md:py-28 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full bg-purple-900/30 blur-[100px]"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full bg-purple-800/30 blur-[100px]"></div>
      </div>

      <div className="container relative">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl md:text-6xl font-medium tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-white to-white/80">
            Beyond Expectations
          </h2>
          <p className="text-white/70 text-lg md:text-xl mt-5 tracking-tight max-w-2xl mx-auto">
            Our revolutionary AI SEO tools have transformed our clients' strategies
          </p>
        </motion.div>

        {/* Testimonials carousel */}
        <div className="relative">
          <div className="flex overflow-hidden mt-10 [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
            <motion.div
              initial={{ translateX: "-50%" }}
              animate={{ translateX: "0" }}
              transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
              className="flex gap-6 pr-6 flex-none"
            >
              {[...testimonials, ...testimonials].map((testimonial, index) => (
                <motion.div
                  key={`${testimonial.name}-${index}`}
                  className="border border-white/15 p-8 rounded-xl bg-gradient-to-br from-purple-900/20 to-black/50 backdrop-blur-sm w-[320px] md:w-[400px] flex-none relative overflow-hidden"
                  whileHover={{ y: -5 }}
                >
                  {/* Glow effect */}
                  <div className="absolute inset-0 rounded-xl pointer-events-none" 
                    style={{ boxShadow: 'inset 0 0 30px rgba(163, 105, 255, 0.2)' }}
                  />
                  
                  {/* Quote icon */}
                  <div className="absolute top-6 right-6 text-4xl opacity-10">"</div>
                  
                  <div className="text-lg md:text-xl tracking-tight leading-relaxed">
                    "{testimonial.text}"
                  </div>
                  
                  <div className="flex gap-4 items-center mt-6">
                    <div className="relative shrink-0">
                      <div className="absolute inset-0 rounded-lg bg-purple-500/30 blur-[10px]"></div>
                      <Image
                        src={testimonial.avatarImg}
                        alt={`Avatar for ${testimonial.name}`}
                        className="w-12 h-12 rounded-lg grayscale contrast-125"
                        width={48}
                        height={48}
                      />
                    </div>
                    <div>
                      <div className="font-medium">{testimonial.name}</div>
                      <div className="text-white/60 text-sm">{testimonial.title}</div>
                      <div className="text-purple-300/80 text-xs mt-1 flex items-center gap-1">
                        <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                          <circle cx="12" cy="10" r="3"></circle>
                        </svg>
                        {testimonial.location}
                      </div>
                    </div>
                  </div>
                  
                  {/* Purple accent */}
                  <div className="absolute bottom-0 left-0 h-1 w-full bg-gradient-to-r from-transparent via-purple-500 to-transparent opacity-50"></div>
                </motion.div>
              ))}
            </motion.div>
          </div>
          
          {/* Gradient fade edges */}
          <div className="absolute left-0 top-0 h-full w-20 bg-gradient-to-r from-black to-transparent pointer-events-none"></div>
          <div className="absolute right-0 top-0 h-full w-20 bg-gradient-to-l from-black to-transparent pointer-events-none"></div>
        </div>

        {/* Footer CTA */}
        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <p className="text-xl md:text-2xl font-medium tracking-tight text-purple-300">
            AI-driven SEO for everyone.
          </p>
        </motion.div>
      </div>
    </section>
  );
};