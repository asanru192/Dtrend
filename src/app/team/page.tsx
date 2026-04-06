"use client";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Image from "next/image";
import { TEAM } from "@/lib/data";
import { motion } from "framer-motion";
import { Reveal } from "@/components/ui/Reveal";

export default function TeamPage() {
  return (
    <motion.main 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="min-h-screen bg-ivory"
    >
      <Navbar />
      
      {/* Team Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden bg-charcoal text-ivory">
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl pt-24 pb-12">
            <Reveal>
              <h1 className="text-6xl md:text-9xl editorial-heading mb-8">
                The <br/> <span className="italic text-gold">Visionary</span>
              </h1>
            </Reveal>
            <p className="text-ivory/60 text-xl font-light leading-relaxed max-w-xl">
              Meet the master artistry lead behind DtrenD's signature couture styling and luxury beauty experiences.
            </p>
          </div>
        </div>
        
        {/* Subtle texture backdrop */}
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <Image src="/images/texture-bg.png" alt="Texture" fill className="object-cover grayscale invert" />
        </div>
      </section>

      {/* Founder Feature Section */}
      <section className="py-32 bg-ivory">
        <div className="container mx-auto px-6">
          {TEAM.map((member) => (
            <div key={member.name} className="flex flex-col items-center text-center space-y-16">
              {/* Circular Portrait with Gold Border (Matches Screenshot) */}
              <Reveal>
                <div className="relative group">
                  <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full p-2 border-[4px] border-gold overflow-hidden shadow-2xl">
                    <div className="relative w-full h-full rounded-full overflow-hidden bg-charcoal/5">
                      <Image 
                        src={member.image}
                        alt={member.name}
                        fill
                        className="object-cover group-hover:scale-105 transition-luxury duration-1000"
                        priority
                      />
                    </div>
                  </div>
                  {/* Decorative glowing ring */}
                  <div className="absolute inset-0 rounded-full border border-gold/20 scale-110 -z-10 group-hover:scale-125 transition-luxury duration-1000" />
                </div>
              </Reveal>
              
              {/* Profile Details */}
              <div className="max-w-3xl mx-auto space-y-8">
                <Reveal>
                  <div className="space-y-4">
                    <h2 className="text-5xl md:text-7xl font-serif text-charcoal">{member.name}</h2>
                    <p className="text-gold uppercase tracking-[0.3em] text-xs font-bold">{member.role}</p>
                    <p className="text-charcoal/40 text-lg font-light italic">15 Years Experience as a Makeup Artist</p>
                  </div>
                  
                  <div className="pt-8 space-y-10">
                    <p className="text-charcoal/60 font-light text-xl leading-relaxed max-w-2xl mx-auto">
                      {member.bio}
                    </p>
                    
                    <div className="h-[1px] w-32 bg-gold/30 mx-auto" />
                    
                    {/* Social links matching the screenshot icons aesthetic */}
                    <div className="flex justify-center gap-10 opacity-40 hover:opacity-100 transition-all duration-700">
                      {['facebook', 'twitter', 'youtube', 'instagram'].map((social) => (
                        <a key={social} href="#" className="w-6 h-6 text-charcoal hover:text-gold transition-luxury">
                          <span className="sr-only">{social}</span>
                          <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
                            <circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" strokeWidth="2" />
                            <circle cx="12" cy="12" r="4" fill="currentColor" />
                          </svg>
                        </a>
                      ))}
                    </div>
                  </div>
                </Reveal>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </motion.main>
  );
}
