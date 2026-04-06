"use client";

import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import HeroSlider from "@/components/ui/HeroSlider";
import Footer from "@/components/layout/Footer";
import { BRIDAL_PACKAGES, REVIEWS, BUSINESS_HOURS, TREATWELL_LINK, GOOGLE_REVIEWS_LINK } from "@/lib/data";
import { ArrowRight, Star, Calendar, MapPin, Phone } from "lucide-react";
import { motion } from "framer-motion";
import { Reveal } from "@/components/ui/Reveal";

export default function Home() {
  return (
    <motion.main 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="min-h-screen"
    >
      <Navbar />
      
      <HeroSlider />

      {/* Marquee Ticker */}
      <div className="bg-plum py-6 overflow-hidden border-y border-gold/20">
        <div className="marquee flex gap-12 items-center">
          {["BRIDAL DRESSING", "HAIR COLOUR", "THREADING", "YONI STEAMING", "MANICURE & PEDICURE", "15 YEARS EXPERIENCE"].map((text) => (
            <div key={text} className="flex gap-12 items-center">
              <span className="text-gold font-bold uppercase tracking-[0.3em] text-[10px] whitespace-nowrap">{text}</span>
              <span className="text-gold/40 select-none">•</span>
            </div>
          ))}
          {/* Duplicate for seamless loop */}
          {["BRIDAL DRESSING", "HAIR COLOUR", "THREADING", "YONI STEAMING", "MANICURE & PEDICURE", "15 YEARS EXPERIENCE"].map((text) => (
            <div key={text + "_dup"} className="flex gap-12 items-center">
              <span className="text-gold font-bold uppercase tracking-[0.3em] text-[10px] whitespace-nowrap">{text}</span>
              <span className="text-gold/40 select-none">•</span>
            </div>
          ))}
        </div>
      </div>

      {/* Services Preview Grid */}
      <section className="section-padding overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="flex justify-between items-end mb-20">
            <Reveal>
              <div>
                <p className="text-gold uppercase tracking-[0.3em] text-[10px] font-bold mb-4">Mastery & Technique</p>
                <h2 className="text-5xl md:text-7xl">Our <span className="italic">Services</span></h2>
              </div>
            </Reveal>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 items-start">
            {[
              { category: "Hair", desc: "Precision cutting, bespoke coloring, and architectural styling.", img: "service-hair.png" },
              { category: "Beauty & Skin", desc: "Advanced facials, specialized threading, and holistic rejuvenation.", img: "service-beauty.png" },
              { category: "Bridal", desc: "Exquisite transformations blending cultural heritage with contemporary elegance.", img: "service-threading.png" }
            ].map((service, idx) => (
              <div key={service.category} className={`space-y-8 group ${idx === 1 ? 'md:mt-24' : ''}`}>
                <div className="relative aspect-[4/5] overflow-hidden rounded-2xl shadow-2xl">
                  <Image 
                    src={`/images/${service.img}`}
                    alt={service.category}
                    fill
                    className="object-cover grayscale-[10%] group-hover:scale-110 transition-luxury"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-transparent to-transparent opacity-60"></div>
                  <div className="absolute bottom-6 left-6 text-ivory">
                    <p className="text-[10px] uppercase tracking-[0.4em] font-bold mb-2 opacity-70">Category 0{idx+1}</p>
                    <h3 className="text-3xl italic">{service.category}</h3>
                  </div>
                </div>
                <p className="text-charcoal/60 font-light leading-relaxed max-w-xs">{service.desc}</p>
                <Link href="/services" className="inline-flex items-center gap-2 text-gold font-bold text-[10px] uppercase tracking-[0.2em] group-hover:gap-4 transition-all">
                  Explore {service.category} <ArrowRight size={14} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bridal Spotlight */}
      <section className="bg-plum text-ivory py-32 overflow-hidden relative">
        <div className="container mx-auto px-6 relative z-10">
          <div className="mb-24 flex flex-col md:flex-row md:items-end justify-between gap-10">
            <Reveal>
              <div>
                <h2 className="text-5xl md:text-8xl editorial-heading mb-6">Specialists in <br/><span className="italic text-gold">Bridal Dressing</span></h2>
                <div className="w-32 h-px bg-gold"></div>
              </div>
            </Reveal>
            <p className="max-w-md text-ivory/60 font-light text-lg">
              Redefining the heritage of Sri Lankan and Indian bridal couture for the discerning London ceremony.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
            {BRIDAL_PACKAGES.slice(0, 2).map((pkg, idx) => (
              <motion.div 
                whileHover={{ y: -20 }}
                key={pkg.title} 
                className={`group space-y-8 ${idx === 1 ? 'md:mt-16' : ''}`}
              >
                <div className="relative aspect-[16/9] overflow-hidden rounded-sm shadow-2xl shadow-charcoal/50">
                  <Image 
                    src={pkg.image} 
                    alt={pkg.title} 
                    fill 
                    className="object-cover grayscale-[30%] group-hover:grayscale-0 group-hover:scale-105 transition-luxury opacity-80 group-hover:opacity-100"
                  />
                </div>
                <div>
                  <h4 className="text-2xl font-serif text-gold italic mb-4">{pkg.title}</h4>
                  <p className="text-ivory/60 font-light leading-relaxed mb-8 max-w-sm">{pkg.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="mt-32 flex justify-center">
            <Link href="/bridal" className="btn-outline">
              View Bridal Collection
            </Link>
          </div>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-charcoal rounded-full filter blur-[150px] opacity-20 -mr-[400px] -mt-[400px]"></div>
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gold rounded-full filter blur-[150px] opacity-10 -ml-[200px] -mb-[200px]"></div>
      </section>

      {/* Stats Strip */}
      <section className="bg-ivory py-20 border-b border-charcoal/5">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            {[
              { label: "Years Experience", value: "15+" },
              { label: "Brides Served", value: "500+" },
              { label: "Google Rated", value: "5★" }
            ].map((stat, idx) => (
              <Reveal key={stat.label} delay={idx * 0.1}>
                <div className="space-y-2">
                  <p className="text-5xl font-serif italic text-charcoal">{stat.value}</p>
                  <p className="text-[10px] uppercase tracking-[0.4em] font-bold text-gold">{stat.label}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-ivory overflow-hidden">
        <div className="container mx-auto px-6">
          <Reveal>
            <div className="text-center mb-24">
              <p className="text-gold uppercase tracking-[0.3em] text-[10px] font-bold mb-6">Voices of DtrenD</p>
              <h2 className="text-5xl md:text-7xl">Client <span className="italic">Experience</span></h2>
            </div>
          </Reveal>
          <div className="flex overflow-x-auto gap-8 no-scrollbar pb-12 snap-x snap-mandatory scroll-smooth">
            {REVIEWS.map((review) => (
              <div 
                key={review.name} 
                className="flex-none w-80 md:w-96 p-8 md:p-10 bg-white shadow-xl shadow-charcoal/5 rounded-2xl border-t-2 border-gold snap-center group hover:-translate-y-2 transition-transform duration-300"
              >
                <div className="flex gap-1 text-gold mb-8">
                  {[...Array(review.rating)].map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
                </div>
                <p className="text-charcoal italic font-serif text-lg mb-8 leading-relaxed">&rdquo;{review.text}&rdquo;</p>
                <div className="pt-8 border-t border-charcoal/5">
                  <p className="font-bold text-sm tracking-tight">{review.name}</p>
                  <p className="text-[10px] text-charcoal/40 uppercase tracking-widest mt-1">{review.service}</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-20 mb-4 flex justify-center w-full">
            <Reveal delay={0.2}>
              <Link href={GOOGLE_REVIEWS_LINK} target="_blank" rel="noopener noreferrer" className="btn-outline border-gold text-gold hover:bg-gold hover:text-ivory flex items-center gap-3">
                Read More on Google <Star size={16} fill="currentColor" />
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Opening Hours & CTA */}
      <section className="section-padding-top bg-ivory">
        <div className="container mx-auto px-6">
          <div className="bg-plum shadow-3xl rounded-[3rem] overflow-hidden flex flex-col lg:flex-row items-center relative">
            <div className="w-full lg:w-1/2 p-12 md:p-24 space-y-10 z-10">
              <h2 className="text-5xl md:text-7xl text-ivory editorial-heading">Reserve Your <br/><span className="italic text-gold">Transformation</span></h2>
              <p className="text-ivory/60 font-light max-w-sm text-lg">
                Appointments are highly recommended for bridal consultations and complex hair coloring services.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 pt-6">
                <div className="flex gap-4 items-center">
                  <div className="w-12 h-12 rounded-full border border-gold/30 flex items-center justify-center text-gold">
                    <Calendar size={20} />
                  </div>
                  <div>
                    <p className="text-ivory font-bold text-sm">Instant Booking</p>
                    <p className="text-gold text-[10px] uppercase tracking-widest">Available 24/7</p>
                  </div>
                </div>
                <div className="flex gap-4 items-center">
                  <div className="w-12 h-12 rounded-full border border-gold/30 flex items-center justify-center text-gold">
                    <Phone size={20} />
                  </div>
                  <div>
                    <p className="text-ivory font-bold text-sm">Concierge</p>
                    <p className="text-gold text-[10px] uppercase tracking-widest">077 1177 1838</p>
                  </div>
                </div>
              </div>
              <div className="pt-8">
                <Link href={TREATWELL_LINK} target="_blank" rel="noopener noreferrer" className="btn-primary inline-block w-full text-center py-5">
                  Book an Appointment
                </Link>
              </div>
            </div>
            
            <div className="w-full lg:w-1/2 h-full min-h-[500px] bg-charcoal p-12 md:p-24 flex flex-col justify-center border-l border-ivory/5">
              <h3 className="text-2xl font-serif italic text-gold mb-12 border-b border-gold/20 pb-6 uppercase tracking-widest">Opening Hours</h3>
              <ul className="space-y-6">
                {BUSINESS_HOURS.map((item) => (
                  <li key={item.day} className="flex justify-between items-center text-ivory/80 group">
                    <span className="font-light group-hover:text-gold transition-colors">{item.day}</span>
                    <span className={`font-bold ${item.hours === 'Closed' ? 'text-charcoal px-3 py-1 bg-gold rounded-full text-[10px]' : ''}`}>
                      {item.hours}
                    </span>
                  </li>
                ))}
              </ul>
              <div className="mt-16 pt-10 border-t border-ivory/5 flex items-start gap-4 text-ivory/50">
                <MapPin size={18} className="text-gold shrink-0 mt-1" />
                <p className="text-sm font-light leading-relaxed italic">
                  434 Alexandra Avenue, Harrow, <br/>London, HA2 9TW
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </motion.main>
  );
}
