import React from "react";
import { motion } from "motion/react";
import { Quote } from "lucide-react";

interface Testimonial {
  quote: string;
  author: string;
  weddingType: string;
}

const TESTIMONIALS: Testimonial[] = [
  {
    quote: "The photos are beyond what we ever dreamed of. Every quiet glance and grand moment was captured with such grace and artistic vision.",
    author: "Elena & Julian",
    weddingType: "Destination Wedding, Tuscany"
  },
  {
    quote: "ImagineHub.in didn't just take pictures; they told our story. The editorial style made us feel like our celebration was a high-fashion feature.",
    author: "Priya & Arjun",
    weddingType: "Traditional Wedding, Delhi"
  },
  {
    quote: "Highly professional and incredibly talented. They made us feel at ease, and the final results are simply breathtaking. A true masterpiece.",
    author: "Sophie & Marc",
    weddingType: "Intimate Beach Wedding, Goa"
  }
];

export function Testimonials() {
  return (
    <section id="testimonials" className="py-32 px-6 bg-accent/30 relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-24">
          <span className="text-gold text-[10px] uppercase tracking-[0.4em] font-sans font-bold mb-4 block">Kind Words</span>
          <h2 className="text-4xl md:text-6xl italic">Client Testimonials</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
          {TESTIMONIALS.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
              className="flex flex-col items-center text-center group"
            >
              <div className="mb-8 opacity-20 group-hover:opacity-40 transition-opacity">
                <Quote className="w-8 h-8 text-ink fill-ink" />
              </div>
              
              <p className="text-xl md:text-2xl font-serif italic leading-relaxed mb-10 text-ink/80">
                "{testimonial.quote}"
              </p>
              
              <div className="mt-auto">
                <p className="text-[11px] uppercase tracking-[0.2em] font-sans font-bold text-ink mb-1">
                  {testimonial.author}
                </p>
                <p className="text-[9px] uppercase tracking-[0.15em] font-sans text-ink/40">
                  {testimonial.weddingType}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      
      {/* Decorative large quote in background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[30rem] font-serif italic opacity-[0.03] pointer-events-none select-none">
        "
      </div>
    </section>
  );
}
