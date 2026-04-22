import { motion } from "motion/react";

export function About() {
  return (
    <section id="about" className="py-32 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 1.1 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2 }}
            className="aspect-[4/5] overflow-hidden"
          >
            <img 
              src="https://images.unsplash.com/photo-1551316679-9c6ae9dec224?auto=format&fit=crop&q=80&w=800" 
              alt="Photographer at work"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </motion.div>
          <div className="absolute -bottom-10 -right-10 bg-gold w-40 h-40 hidden md:flex items-center justify-center p-8 text-white text-center">
            <span className="text-xs uppercase tracking-widest font-medium">10+ Years of Craftsmanship</span>
          </div>
        </div>

        <div className="lg:pl-10">
          <span className="text-gold text-xs uppercase tracking-[0.3em] font-medium mb-4 block">About the Studio</span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl mb-8 leading-tight">
            We find the <span className="italic">extraordinary</span> in the ordinary moments.
          </h2>
          <div className="space-y-6 text-ink/70 leading-relaxed font-light">
            <p>
              Based in India and traveling worldwide, <strong>ImagineHub.in</strong> is a collective of visionary storytellers dedicated to the art of fine-art wedding photography. Our approach is deeply rooted in editorial aesthetics, centered around lighting, composition, and authentic human connection.
            </p>
            <p>
              We believe that every wedding is a unique masterpiece. Our mission is to capture not just how your special day looks, but how it feels. From the delicate lace of your veil to the quiet glance before the ceremony, every detail is treated with reverence.
            </p>
          </div>
          
          <div className="mt-12 grid grid-cols-2 gap-10">
            <div>
              <h4 className="text-2xl mb-1">500+</h4>
              <p className="text-[10px] uppercase tracking-widest text-ink/40">Weddings Captured</p>
            </div>
            <div>
              <h4 className="text-2xl mb-1">15+</h4>
              <p className="text-[10px] uppercase tracking-widest text-ink/40">Awards Won</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
