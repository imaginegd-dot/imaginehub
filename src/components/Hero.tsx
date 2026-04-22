import { motion } from "motion/react";

export function Hero() {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <img 
          src="https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=2070" 
          alt="Wedding Hero"
          className="w-full h-full object-cover scale-105"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-ink/30" />
      </div>

      <div className="relative z-10 text-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="text-white/80 text-[10px] uppercase tracking-[0.6em] mb-6 block font-sans font-bold">
            Fine Art Wedding Photography
          </span>
          <h1 className="text-white text-6xl md:text-8xl lg:text-9xl mb-8 leading-[0.9]">
            The <span className="italic">Art</span> of <br />
            the Moment
          </h1>
          <motion.a
            href="#booking"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block bg-white text-ink px-10 py-4 text-xs uppercase tracking-widest hover:bg-gold hover:text-white transition-colors duration-500"
          >
            Inquire Now
          </motion.a>
        </motion.div>
      </div>

      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] text-white/40 uppercase tracking-widest vertical-rl">Scroll</span>
        <div className="w-px h-12 bg-white/20" />
      </motion.div>
    </section>
  );
}
