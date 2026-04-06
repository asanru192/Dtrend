"use client";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Image from "next/image";
import Link from "next/link";
import { SERVICE_CATEGORIES } from "@/lib/data";
import { ArrowRight, Check } from "lucide-react";
import { motion } from "framer-motion";
import { Reveal } from "@/components/ui/Reveal";
import { TREATWELL_LINK } from "@/lib/data";
import { useState, useEffect } from "react";

export default function ServicesPage() {
  const [activeCategory, setActiveCategory] = useState(SERVICE_CATEGORIES[0].name);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.id;
            const category = SERVICE_CATEGORIES.find(c => c.name.toLowerCase().replace(/\s+/g, '-') === id);
            if (category) {
              setActiveCategory(category.name);
            }
          }
        });
      },
      { rootMargin: "-20% 0px -60% 0px" }
    );

    SERVICE_CATEGORIES.forEach(cat => {
      const el = document.getElementById(cat.name.toLowerCase().replace(/\s+/g, '-'));
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <motion.main 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="min-h-screen bg-ivory"
    >
      <Navbar />
      
      {/* Services Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden bg-charcoal text-ivory">
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl pt-24 pb-12">
            <Reveal>
              <h1 className="text-6xl md:text-9xl editorial-heading mb-8">
                Artisanal <br/> <span className="italic text-gold">Services</span>
              </h1>
            </Reveal>
            <p className="text-ivory/60 text-xl font-light leading-relaxed max-w-xl">
              From precision tailoring to holistic skin rejuvenation, every treatment is a bespoke ritual designed for your unique identity.
            </p>
          </div>
        </div>
        
        {/* Decorative background visual */}
        <div className="absolute right-0 top-0 h-full w-1/2 opacity-20 hidden lg:block">
          <Image 
            src="/images/texture-bg.png" 
            alt="Texture" 
            fill 
            className="object-cover"
          />
          {/* Gradient to blend the sharp left edge into the dark background */}
          <div className="absolute inset-y-0 left-0 bg-gradient-to-r from-charcoal via-charcoal/50 to-transparent w-48 z-10" />
        </div>
      </section>

      {/* Services Listing */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
            
            {/* Sidebar Navigation (Desktop) */}
            <aside className="hidden lg:block lg:col-span-3 sticky top-32 h-fit">
              <nav className="space-y-6">
                <p className="text-gold uppercase tracking-[0.2em] text-[10px] font-bold mb-10">Select Category</p>
                {SERVICE_CATEGORIES.map(cat => (
                  <Link 
                    key={cat.name} 
                    href={`#${cat.name.toLowerCase().replace(/\s+/g, '-')}`}
                    onClick={() => setActiveCategory(cat.name)}
                    className={`block text-2xl font-serif italic transition-all duration-500 relative ${activeCategory === cat.name ? 'text-gold pl-4' : 'text-charcoal/70 hover:text-gold'}`}
                  >
                    {activeCategory === cat.name && (
                      <motion.div 
                        layoutId="active-cat"
                        className="absolute left-0 top-1/2 -translate-y-1/2 w-2 h-2 bg-gold rounded-full"
                      />
                    )}
                    {cat.name}
                  </Link>
                ))}
              </nav>
              <div className="mt-20 pt-10 border-t border-charcoal/5">
                <Link href={TREATWELL_LINK} className="btn-plum w-full text-center" target="_blank" rel="noopener noreferrer">
                  Book Now
                </Link>
              </div>
            </aside>

            {/* Main Content */}
            <div className="lg:col-span-9 space-y-32">
              {SERVICE_CATEGORIES.map((cat, idx) => (
                <div 
                  key={cat.name} 
                  id={cat.name.toLowerCase().replace(/\s+/g, '-')}
                  className="space-y-16 scroll-mt-32"
                >
                  <div className="flex flex-col md:flex-row gap-12 items-end">
                    <div className="relative w-full md:w-1/2 aspect-[4/5] overflow-hidden rounded-2xl shadow-3xl bg-charcoal">
                      {cat.name === 'E-Gift Cards' ? (
                        <div className="w-full h-full p-8 flex flex-col items-center justify-center relative">
                          {/* Photorealistic Table/Flower background */}
                          <div className="absolute inset-0">
                            <Image src="/images/portfolio-5.png" alt="Spa Background" fill className="object-cover" />
                            {/* Overlay to ensure the gift card stands out */}
                            <div className="absolute inset-0 bg-black/20" />
                          </div>
                          
                          {/* The Physical Gift Card Representation */}
                          <div className="w-[90%] aspect-[1.58/1] bg-gradient-to-tr from-zinc-900 via-charcoal to-zinc-800 rounded-xl shadow-[0_30px_60px_rgba(0,0,0,0.6)] border border-gold/40 p-6 flex flex-col justify-between relative overflow-hidden z-20 transform -rotate-3 hover:rotate-0 transition-all duration-700 hover:scale-105">
                            
                            {/* Gold accent line */}
                            <div className="absolute left-0 top-0 w-full h-1 bg-gradient-to-r from-transparent via-gold to-transparent opacity-50" />
                            
                            <div className="flex justify-between items-start relative z-10">
                              <h3 className="text-gold font-serif text-2xl tracking-widest uppercase">DtrenD</h3>
                              <span className="text-gold/40 text-[10px] uppercase font-bold tracking-wider border border-gold/20 px-2 py-1 rounded">Voucher</span>
                            </div>
                            
                            <div className="relative z-10">
                              <p className="text-ivory/90 text-sm tracking-[0.3em] uppercase font-bold mb-1">Gift Card</p>
                              <p className="text-ivory/50 text-[11px] font-light italic">The ultimate luxury experience.</p>
                            </div>
                            
                            {/* Decorative circular design inside card */}
                            <div className="absolute -right-8 -bottom-8 w-32 h-32 border border-gold/20 rounded-full opacity-50" />
                            <div className="absolute -right-4 -bottom-4 w-32 h-32 border border-gold/10 rounded-full opacity-50" />
                          </div>
                          
                          {/* Shadow underneath to ground the card */}
                          <div className="w-3/4 h-8 bg-black/60 blur-xl mt-8 rounded-full opacity-50" />
                        </div>
                      ) : (
                        <Image 
                          src={
                            cat.name === 'Hair' ? '/images/service-hair.png' :
                            cat.name === 'Beauty & Skin' ? '/images/service-beauty.png' :
                            cat.name === 'Aesthetics' ? '/images/portfolio-3.png' :
                            '/images/portfolio-6.png' // Wellness
                          }
                          alt={cat.name}
                          fill
                          className="object-cover grayscale-[20%]"
                        />
                      )}
                    </div>
                    <div className="w-full md:w-1/2 pb-6">
                      <Reveal>
                        <span className="text-gold uppercase tracking-[0.3em] text-[10px] font-bold mb-4 block">Category 0{idx+1}</span>
                        <h2 className="text-5xl md:text-7xl mb-8">{cat.name}</h2>
                      </Reveal>
                      <p className="text-charcoal/60 font-light text-lg mb-10">
                        {cat.name === 'Hair' ? 'Architectural cutting and bespoke color chemistry.' : 
                         cat.name === 'Beauty & Skin' ? 'Holistic skincare rituals and precision grooming.' : 
                         cat.name === 'Aesthetics' ? 'Advanced treatments for age-defying skin rejuvenation.' :
                         cat.name === 'Wellness' ? 'Restorative body rituals and wellness steaming.' :
                         'Give the gift of artisanal luxury with our beautifully presented e-vouchers.'}
                      </p>
                    </div>
                  </div>

                  {/* Pricing Table */}
                  <div className="grid grid-cols-1 gap-4">
                    {cat.services.map(service => (
                      <div 
                        key={service.name} 
                        className="flex justify-between items-center p-6 bg-white border border-charcoal/5 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.06)] hover:-translate-y-1 transition-all duration-300 rounded-xl group"
                      >
                        <div className="flex gap-4 items-center">
                          <Check size={16} className="text-gold opacity-0 group-hover:opacity-100 transition-opacity" />
                          <span className="text-lg font-medium text-charcoal/90 tracking-wide">{service.name}</span>
                        </div>
                        <span className="font-serif italic text-xl text-gold font-medium">{service.price}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex justify-end">
                    <Link href={TREATWELL_LINK} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-4 text-xs font-bold uppercase tracking-[0.3em] text-gold group">
                      Consult with Dulanjali <ArrowRight size={16} className="group-hover:translate-x-2 transition-luxury" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-plum text-ivory">
        <div className="container mx-auto px-6 text-center space-y-10">
          <h2 className="text-5xl md:text-7xl editorial-heading">Not sure what you <br/><span className="italic text-gold">need?</span></h2>
          <p className="max-w-lg mx-auto text-ivory/60 font-light text-xl">
            Book a complimentary 15-minute consultation to discuss your hair or bridal vision.
          </p>
          <div className="pt-8">
            <Link href={TREATWELL_LINK} target="_blank" rel="noopener noreferrer" className="btn-primary">
              Book a Consultation
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </motion.main>
  );
}
