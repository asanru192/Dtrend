"use client";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Image from "next/image";
import Link from "next/link";
import { BRIDAL_PACKAGES, TREATWELL_LINK } from "@/lib/data";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { Reveal } from "@/components/ui/Reveal";

export default function BridalPage() {
  return (
    <motion.main 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="min-h-screen bg-ivory"
    >
      <Navbar />
      
      {/* Bridal Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden bg-plum text-ivory">
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl pt-24 pb-12">
            <Reveal>
              <h1 className="text-6xl md:text-9xl editorial-heading mb-8">
                Bridal <br/> <span className="italic text-gold">Couture</span>
              </h1>
            </Reveal>
            <p className="text-ivory/60 text-xl font-light leading-relaxed max-w-xl">
              From traditional Kandyan heritage to the modern Western bride, we curate bespoke elegance for your most important day.
            </p>
          </div>
        </div>
        
        {/* Decorative background visual with elegant blend */}
        <div className="absolute right-0 top-0 h-full w-1/2 opacity-30 hidden lg:block">
          <Image 
            src="/images/bridal-western.png" 
            alt="Bridal Elegance" 
            fill 
            className="object-cover grayscale"
          />
          {/* Linear gradient to dissolve the image into the plum background */}
          <div className="absolute inset-y-0 left-0 bg-gradient-to-r from-plum via-plum/60 to-transparent w-64 z-10" />
        </div>
      </section>

      {/* Bridal Packages */}
      <section className="py-24">
        <div className="container mx-auto px-6 space-y-32">
          {BRIDAL_PACKAGES.map((pkg, idx) => (
            <div 
              key={pkg.title} 
              className={`flex flex-col gap-12 items-center ${idx % 2 !== 0 ? 'md:flex-row-reverse' : 'md:flex-row'}`}
            >
              <div className="relative w-full md:w-1/2 aspect-[4/5] overflow-hidden rounded-2xl shadow-3xl group">
                <Image 
                  src={pkg.image}
                  alt={pkg.title}
                  fill
                  className="object-cover grayscale-[20%] group-hover:grayscale-0 group-hover:scale-105 transition-luxury duration-1000"
                />
              </div>
              <div className="w-full md:w-1/2 p-6 md:p-12">
                <Reveal>
                  <span className="text-gold uppercase tracking-[0.3em] text-[10px] font-bold mb-4 block">Couture Collection 0{idx+1}</span>
                  <h2 className="text-5xl md:text-7xl mb-8">{pkg.title}</h2>
                  <p className="text-charcoal/60 font-light text-lg mb-10 leading-relaxed">
                    {pkg.desc}
                  </p>
                  <Link href={TREATWELL_LINK} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-4 text-xs font-bold uppercase tracking-[0.3em] text-plum hover:text-gold group transition-luxury">
                    Inquire Availability <ArrowRight size={16} className="group-hover:translate-x-2 transition-luxury" />
                  </Link>
                </Reveal>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Consultation CTA */}
      <section className="relative py-40 overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <Image 
            src="/images/portfolio-4.png" 
            alt="Bridal Consultation" 
            fill 
            className="object-cover"
          />
          <div className="absolute inset-0 bg-charcoal/85 backdrop-blur-[2px]" />
        </div>

        <div className="container mx-auto px-6 text-center relative z-10 space-y-12">
          <Reveal>
            <div className="inline-block px-4 py-2 border border-gold/30 rounded-full mb-8">
              <span className="text-gold tracking-[0.4em] uppercase text-[10px] font-bold">Private Session</span>
            </div>
            <h2 className="text-6xl md:text-8xl editorial-heading text-ivory">Your Bridal <br/><span className="italic text-gold">Vision</span></h2>
          </Reveal>
          <p className="max-w-2xl mx-auto text-ivory/70 font-light text-xl leading-relaxed">
            Schedule a private consultation at our Harrow studio to discuss your ceremonial style, custom draping, and luxury artistry for your most significant moment.
          </p>
          <div className="pt-10">
            <Link href={TREATWELL_LINK} target="_blank" rel="noopener noreferrer" className="btn-plum px-12">
              Book a Bridal Consultation
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </motion.main>
  );
}
