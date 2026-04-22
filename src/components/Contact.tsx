import React from "react";
import { motion } from "motion/react";
import { Mail, Phone, MapPin, Instagram } from "lucide-react";

export function Contact() {
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());
    
    try {
      await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      alert("Message sent successfully!");
      e.currentTarget.reset();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <section id="contact" className="py-32 px-6 border-t border-ink/5">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-20">
        <div className="lg:w-1/3">
          <span className="text-gold text-xs uppercase tracking-[0.3em] font-medium mb-4 block">Connect</span>
          <h2 className="text-4xl md:text-5xl mb-12">Start Your <span className="italic">Journey</span> With Us.</h2>
          
          <div className="space-y-10">
            <ContactInfo icon={<Phone />} label="Inquiries" value="+91 98765 43210" />
            <ContactInfo icon={<Mail />} label="Email" value="hello@imagine.in" />
            <ContactInfo icon={<MapPin />} label="Studio" value="Gurgaon, NCR, India" />
          </div>

          <div className="mt-16 flex gap-6">
            <a href="#" className="w-12 h-12 border border-ink/10 rounded-full flex items-center justify-center hover:border-gold transition-colors group">
              <Instagram className="w-5 h-5 group-hover:text-gold transition-colors" />
            </a>
          </div>
        </div>

        <div className="lg:w-2/3 bg-ink p-10 md:p-20 text-white relative">
          <div className="absolute top-0 right-0 w-40 h-40 border-t border-r border-white/10 hidden md:block" />
          
          <form onSubmit={handleSubmit} className="space-y-8 relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-2">
                <input 
                  name="name" 
                  placeholder="Your Name" 
                  className="w-full bg-transparent border-b border-white/20 py-4 outline-none focus:border-white transition-colors tracking-widest text-sm uppercase"
                />
              </div>
              <div className="space-y-2">
                <input 
                  name="subject" 
                  placeholder="Subject" 
                  className="w-full bg-transparent border-b border-white/20 py-4 outline-none focus:border-white transition-colors tracking-widest text-sm uppercase"
                />
              </div>
            </div>
            <div className="space-y-2">
              <textarea 
                name="message" 
                rows={5} 
                placeholder="How can we help?" 
                className="w-full bg-transparent border-b border-white/20 py-4 outline-none focus:border-white transition-colors tracking-widest text-sm uppercase resize-none"
              />
            </div>
            <button className="text-xs uppercase tracking-[0.3em] font-medium border border-white px-12 py-4 hover:bg-gold hover:border-gold transition-all duration-500">
              Submit Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

function ContactInfo({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) {
  return (
    <div className="flex gap-6">
      <div className="text-gold mt-1">{icon}</div>
      <div>
        <p className="text-[10px] uppercase tracking-widest text-ink/40 mb-1">{label}</p>
        <p className="text-lg font-light tracking-wide">{value}</p>
      </div>
    </div>
  );
}
