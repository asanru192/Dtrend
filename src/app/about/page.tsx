"use client";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { TREATWELL_LINK } from "@/lib/data";

export default function AboutPage() {
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
              <span className="text-gold uppercase tracking-[0.4em] text-[10px] font-bold mb-6 block">Our Story</span>
              <h1 className="text-6xl md:text-9xl editorial-heading mb-8">
                The <span className="italic text-gold">Philosophy</span>
              </h1>
              <p className="text-charcoal/60 text-lg md:text-xl font-light leading-relaxed">
                Founded in 2009 by Dulanjali, DtrenD is London&apos;s most technical salon devoted to the intersection of culture and couture.
              </p>
            </div>
            <div className="flex items-center gap-4 text-xs font-bold uppercase tracking-[0.3em] text-gold">
              Since 2009 <span className="text-gold/30">•</span> Harrow, London
            </div>
          </div>
        </div>
      </section>

      {/* Brand Narrative Section */}
      <section className="py-24 overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <div className="relative aspect-[4/5] rounded-[3rem] overflow-hidden shadow-3xl shadow-charcoal/5">
              <Image 
                src="/images/hero-main.png" 
                alt="DtrenD Salon Narrative" 
                fill 
                className="object-cover grayscale-[20%]"
              />
            </div>
            <div className="space-y-12">
              <h2 className="text-5xl md:text-7xl">Where Culture <br/><span className="italic text-gold">Meets Couture</span></h2>
              <div className="space-y-10 text-charcoal/60 text-lg md:text-xl font-light leading-relaxed max-w-xl">
                <p>
                  At DtrenD, beauty is not a surface layer; it is an expression of heritage. Our founder, Dulanjali, identified a critical gap in London&apos;s beauty landscape: a space that could master both high-fashion techniques and the deep cultural rituals of South Asian bridal artistry.
                </p>
                <p>
                  Over the last 15 years, we have evolved from a local salon in Harrow to a destination for the discerning bride and the technical hair enthusiast. Our approach is architectural, precise, and deeply personal.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-10 border-t border-charcoal/10 pt-16">
                <div>
                  <h4 className="text-gold uppercase tracking-widest font-bold text-xs mb-4">Integrity</h4>
                  <p className="text-charcoal/50 text-xs italic font-light">Authentic cultural technique with global luxury standards.</p>
                </div>
                <div>
                  <h4 className="text-gold uppercase tracking-widest font-bold text-xs mb-4">Precision</h4>
                  <p className="text-charcoal/50 text-xs italic font-light">Meticulous attention to every fold, clip, and pigment.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-40 bg-charcoal text-ivory">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-24 items-center">
            <div className="lg:order-2 relative w-full lg:w-1/2 flex items-center justify-center">
              <div className="relative w-80 h-80 rounded-full border border-gold/20 flex items-center justify-center animate-spin-slow">
                <div className="absolute top-0 w-4 h-4 rounded-full bg-gold"></div>
              </div>
              <div className="absolute text-center space-y-4">
                <p className="text-6xl font-serif italic text-gold">15</p>
                <p className="text-[10px] uppercase font-bold tracking-[0.4em]">Years of Excellence</p>
              </div>
            </div>
            <div className="lg:order-1 lg:w-1/2 space-y-12">
              <h3 className="text-4xl md:text-6xl editorial-heading italic text-gold">A Legacy of <br/><span className="text-ivory">Trust</span></h3>
              <p className="text-ivory/60 font-light text-xl leading-relaxed max-w-lg">
                We have commissioned over 500 brides and performed thousands of transformations. Our reputation in the Hindu, Kandyan, and Western communities is built on a single promise: you will feel like your most authentic self on your most significant day.
              </p>
              <div className="flex gap-12 pt-8">
                <div className="space-y-2">
                  <p className="text-4xl font-serif text-ivory">5★</p>
                  <p className="text-gold text-[10px] uppercase font-bold tracking-widest">Google Rated</p>
                </div>
                <div className="space-y-2">
                  <p className="text-4xl font-serif text-ivory">500+</p>
                  <p className="text-gold text-[10px] uppercase font-bold tracking-widest">Brides Served</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-40 border-t border-charcoal/5">
        <div className="container mx-auto px-6 text-center space-y-12">
          <h2 className="text-5xl md:text-7xl editorial-heading">Craft Your New <br/><span className="italic text-gold">Identity</span></h2>
          <p className="max-w-md mx-auto text-charcoal/60 font-light text-xl leading-relaxed">
            Personalize your identity for your next significant event. Consult with Harrow's most creative team.
          </p>
          <div className="pt-8 flex flex-col sm:flex-row gap-8 justify-center">
            <Link href={TREATWELL_LINK} target="_blank" rel="noopener noreferrer" className="btn-plum">
              Book Appointment
            </Link>
            <Link href="/services" className="btn-outline">
              View Collection
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </motion.main>
  );
}
