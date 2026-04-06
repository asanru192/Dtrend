"use client";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { ADDRESS, PHONE_PRIMARY } from "@/lib/data";
import { Calendar, Phone, MapPin } from "lucide-react";
import Link from "next/link";

export default function BookPage() {
  return (
    <main className="min-h-screen bg-ivory">
      <Navbar />
      
      {/* Page Header */}
      <section className="pt-40 pb-20 bg-plum text-ivory">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-6xl md:text-8xl editorial-heading mb-6">Online <span className="italic text-gold">Booking</span></h1>
          <p className="text-ivory/60 text-lg font-light tracking-wide max-w-sm mx-auto">
            Reserve your session with Harrows lead artistry team.
          </p>
        </div>
      </section>

      {/* Booking Form Layout */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-24">
            
            {/* Form Section */}
            <div className="lg:col-span-12 space-y-16">
              <div className="bg-white p-12 md:p-24 rounded-[3rem] shadow-3xl shadow-charcoal/5 border border-charcoal/5">
                <div className="max-w-4xl mx-auto space-y-16">
                  
                  {/* Step 1: Select Service Type */}
                  <div className="space-y-10">
                    <div className="flex gap-4 items-center mb-8 border-b border-charcoal/10 pb-4">
                      <span className="w-8 h-8 rounded-full bg-gold text-charcoal flex items-center justify-center font-bold text-xs">01</span>
                      <h2 className="text-2xl font-serif italic uppercase tracking-widest text-plum">Service Category</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      {["Precision Hair", "Beauty & Skin", "Bridal Consultation"].map(type => (
                        <button key={type} className="group p-8 border border-charcoal/10 rounded-2xl hover:border-gold hover:bg-gold/5 transition-all text-left">
                          <p className="text-[10px] uppercase font-bold tracking-[0.2em] text-gold mb-2">Category</p>
                          <p className="font-serif italic text-2xl text-charcoal group-hover:text-plum">{type}</p>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Step 2: Details */}
                  <div className="space-y-10">
                    <div className="flex gap-4 items-center mb-8 border-b border-charcoal/10 pb-4">
                      <span className="w-8 h-8 rounded-full bg-gold text-charcoal flex items-center justify-center font-bold text-xs">02</span>
                      <h2 className="text-2xl font-serif italic uppercase tracking-widest text-plum">Your Details</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                      <div className="space-y-4">
                        <label className="text-[10px] uppercase tracking-[0.2em] font-bold text-gold">Full Name</label>
                        <input type="text" placeholder="YOUR NAME" className="w-full bg-transparent border-b border-charcoal/10 py-4 focus:outline-none focus:border-gold transition-colors font-light text-charcoal/60" />
                      </div>
                      <div className="space-y-4">
                        <label className="text-[10px] uppercase tracking-[0.2em] font-bold text-gold">Email Address</label>
                        <input type="email" placeholder="YOUR EMAIL" className="w-full bg-transparent border-b border-charcoal/10 py-4 focus:outline-none focus:border-gold transition-colors font-light text-charcoal/60" />
                      </div>
                      <div className="space-y-4">
                        <label className="text-[10px] uppercase tracking-[0.2em] font-bold text-gold">Phone Number</label>
                        <input type="tel" placeholder="YOUR PHONE" className="w-full bg-transparent border-b border-charcoal/10 py-4 focus:outline-none focus:border-gold transition-colors font-light text-charcoal/60" />
                      </div>
                      <div className="space-y-4">
                        <label className="text-[10px] uppercase tracking-[0.2em] font-bold text-gold">Preferred Date</label>
                        <input type="text" placeholder="DD / MM / YYYY" className="w-full bg-transparent border-b border-charcoal/10 py-4 focus:outline-none focus:border-gold transition-colors font-light text-charcoal/60" />
                      </div>
                    </div>
                  </div>

                  {/* Submission note */}
                  <div className="bg-plum/5 p-10 rounded-2xl flex flex-col md:flex-row gap-8 items-center justify-between">
                    <p className="text-charcoal/60 font-light text-sm italic max-w-sm">
                      Our concierge team will contact you within 2 working hours to finalize your selected time and technician.
                    </p>
                    <Link href="mailto:info@dtrend.uk" className="btn-plum px-16 w-full md:w-auto text-center">
                      Request Appointment
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar Columns at Bottom (Mobile/Tablet Friendly) */}
            <div className="lg:col-span-12 grid grid-cols-1 md:grid-cols-3 gap-10 pt-24">
              <div className="space-y-6">
                <div className="flex gap-4 items-center">
                  <Phone size={18} className="text-gold" />
                  <h4 className="text-xs uppercase tracking-widest font-bold">Concierge</h4>
                </div>
                <p className="text-charcoal/60 text-sm font-light leading-relaxed">
                  Call us on {PHONE_PRIMARY} for urgent bookings or late changes.
                </p>
              </div>
              <div className="space-y-6">
                <div className="flex gap-4 items-center">
                  <Calendar size={18} className="text-gold" />
                  <h4 className="text-xs uppercase tracking-widest font-bold">Hours</h4>
                </div>
                <p className="text-charcoal/60 text-sm font-light leading-relaxed">
                  Tuesday – Saturday: 10am – 7pm <br/> Sunday: 10am – 5pm
                </p>
              </div>
              <div className="space-y-6">
                <div className="flex gap-4 items-center">
                  <MapPin size={18} className="text-gold" />
                  <h4 className="text-xs uppercase tracking-widest font-bold">Location</h4>
                </div>
                <p className="text-charcoal/60 text-sm font-light leading-relaxed">
                  {ADDRESS}
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
