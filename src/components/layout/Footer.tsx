import Link from "next/link";
import { SITE_NAME, ADDRESS, PHONE_PRIMARY, PHONE_SECONDARY, EMAIL, NAV_LINKS } from "@/lib/data";
import { Camera, MapPin, Phone, Mail, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="bg-charcoal text-ivory py-24 pb-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 md:gap-24 mb-24">
          
          {/* Brand Col */}
          <div className="space-y-8">
            <Link href="/" className="relative w-48 h-12 block mb-4">
              <div 
                className="w-full h-full bg-gold opacity-90 hover:opacity-100 transition-luxury"
                style={{
                  maskImage: 'url(/images/logo.png)',
                  maskSize: 'contain',
                  maskRepeat: 'no-repeat',
                  maskPosition: 'left center',
                  WebkitMaskImage: 'url(/images/logo.png)',
                  WebkitMaskSize: 'contain',
                  WebkitMaskRepeat: 'no-repeat',
                  WebkitMaskPosition: 'left center'
                }}
              />
            </Link>
            <p className="text-ivory/60 font-light leading-relaxed max-w-xs">
              Redefining London&apos;s beauty landscape through artisanal technique and cultural identity since 2009.
            </p>
            <div className="flex gap-4">
              <motion.div whileHover={{ y: -5 }}>
                <Link href="https://instagram.com" className="w-10 h-10 rounded-full border border-gold/30 flex items-center justify-center text-gold hover:bg-gold hover:text-charcoal transition-luxury">
                  <Camera size={18} />
                </Link>
              </motion.div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-10">
            <h4 className="text-xs uppercase tracking-[0.2em] font-bold text-gold">Explore</h4>
            <div className="flex flex-col gap-5">
              {NAV_LINKS.map(link => (
                <motion.div key={link.name} whileHover={{ x: 5 }}>
                  <Link 
                    href={link.href} 
                    className="text-ivory/60 hover:text-gold transition-luxury font-light block"
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Contact Col */}
          <div className="space-y-10">
            <h4 className="text-xs uppercase tracking-[0.2em] font-bold text-gold">Inquiries</h4>
            <div className="flex flex-col gap-6 text-ivory/70 font-light">
              <div className="flex gap-4 items-start">
                <MapPin size={18} className="text-gold mt-1 shrink-0" />
                <span className="text-sm leading-relaxed">{ADDRESS}</span>
              </div>
              <div className="flex gap-4 items-center">
                <Phone size={18} className="text-gold shrink-0" />
                <div className="flex flex-col text-sm">
                  <span>{PHONE_PRIMARY}</span>
                  <span>{PHONE_SECONDARY}</span>
                </div>
              </div>
              <div className="flex gap-4 items-center">
                <Mail size={18} className="text-gold shrink-0" />
                <span className="text-sm">{EMAIL}</span>
              </div>
            </div>
          </div>

          {/* Newsletter Col */}
          <div className="space-y-10">
            <h4 className="text-xs uppercase tracking-[0.2em] font-bold text-gold">The Editorial Digest</h4>
            <div className="space-y-6">
              <p className="text-ivory/60 text-sm font-light leading-relaxed">
                Stay informed about seasonal styles and exclusive bridal events.
              </p>
              <form className="relative border-b border-gold/30 pb-2 group focus-within:border-gold transition-colors">
                <input 
                  type="email" 
                  placeholder="YOUR EMAIL ADDRESS" 
                  className="bg-transparent w-full text-sm focus:outline-none placeholder:text-ivory/30 placeholder:text-xs"
                />
                <button type="submit" className="absolute right-0 top-1/2 -translate-y-1/2 text-gold group-hover:translate-x-1 transition-luxury">
                  <ArrowRight size={20} />
                </button>
              </form>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-ivory/5 pt-12 text-center text-[10px] uppercase tracking-[0.3em] text-ivory/30">
          <p>© 2026 {SITE_NAME}. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
