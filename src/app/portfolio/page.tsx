"use client";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Image from "next/image";
import Link from "next/link";
import { Camera } from "lucide-react";
import { motion } from "framer-motion";
import { Reveal } from "@/components/ui/Reveal";
import { TREATWELL_LINK } from "@/lib/data";

export default function PortfolioPage() {
  const portfolioItems = [
    { id: 1, title: "Precision Balayage", cat: "Hair Color", img: "portfolio-1.png", span: "md:col-span-2 md:row-span-2" },
    { id: 2, title: "Kandyan Heritage", cat: "Bridal", img: "portfolio-2.png", span: "md:col-span-1 md:row-span-1" },
    { id: 3, title: "Sculpted Updo", cat: "Bridal", img: "portfolio-3.png", span: "md:col-span-1 md:row-span-2" },
    { id: 4, title: "Stage Glamour", cat: "Makeup", img: "portfolio-4.png", span: "md:col-span-1 md:row-span-1" },
    { id: 5, title: "Hindu Bridal Couture", cat: "Bridal", img: "portfolio-5.png", span: "md:col-span-2 md:row-span-1" },
    { id: 6, title: "Modern Draping", cat: "Bridal", img: "portfolio-6.png", span: "md:col-span-1 md:row-span-1" },
  ];

  return (
    <motion.main 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="min-h-screen bg-ivory"
    >
      <Navbar theme="light" />
      
      {/* Page Header */}
      <section className="pt-40 pb-20">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-12 border-b border-charcoal/5 pb-20">
            <div className="max-w-2xl">
              <span className="text-gold uppercase tracking-[0.4em] text-[10px] font-bold mb-6 block">Editorial Showcase</span>
              <Reveal>
                <h1 className="text-6xl md:text-9xl editorial-heading mb-8">
                  The <span className="italic text-gold">Portfolio</span>
                </h1>
              </Reveal>
              <p className="text-charcoal/60 text-lg md:text-xl font-light leading-relaxed">
                A curated selection of our most distinctive transformations across London and the UK.
              </p>
            </div>
            <Link 
              href="https://instagram.com" 
              className="flex items-center gap-4 text-xs font-bold uppercase tracking-[0.3em] text-gold group"
            >
              Follow on Instagram <Camera size={18} className="group-hover:scale-110 transition-luxury" />
            </Link>
          </div>
        </div>
      </section>

      {/* Masonry-Style Grid */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-3 gap-8 md:gap-12">
            {portfolioItems.map((item, idx) => (
              <Reveal key={item.id} delay={idx * 0.1} width="100%">
                <div 
                  className={`relative overflow-hidden group rounded-2xl shadow-2xl bg-charcoal/5 min-h-[300px] h-full ${item.span}`}
                >
                  <Image 
                    src={`/images/${item.img}`} 
                    alt={item.title} 
                    fill 
                    className="object-cover grayscale-[30%] group-hover:grayscale-0 group-hover:scale-110 transition-luxury duration-1000"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-plum/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-luxury flex flex-col justify-end p-10">
                    <span className="text-gold text-[10px] uppercase font-bold tracking-[0.4em] mb-4 transform translate-y-4 group-hover:translate-y-0 transition-luxury delay-75">{item.cat}</span>
                    <h3 className="text-3xl font-serif italic text-ivory transform translate-y-8 group-hover:translate-y-0 transition-luxury delay-100">{item.title}</h3>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-40 border-t border-charcoal/5">
        <div className="container mx-auto px-6 text-center space-y-12">
          <h2 className="text-5xl md:text-7xl editorial-heading italic text-plum">Define Your <span className="text-gold">Moment</span></h2>
          <p className="max-w-md mx-auto text-charcoal/60 font-light text-xl leading-relaxed">
            Personalize your identity for your next significant event. Consult with Harrow's most creative team.
          </p>
          <div className="pt-8">
            <Link href={TREATWELL_LINK} className="btn-plum" target="_blank" rel="noopener noreferrer">
              Check Availability
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </motion.main>
  );
}
