import React from "react";
import { motion } from "motion/react";

const PORTFOLIO_IMAGES = [
  { url: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&q=80&w=800", title: "The First Dance", category: "Reception" },
  { url: "https://images.unsplash.com/photo-1519225495810-72123f2585b8?auto=format&fit=crop&q=80&w=800", title: "Golden Hour Glow", category: "Portrait" },
  { url: "https://images.unsplash.com/photo-1470337458703-46ad1756a187?auto=format&fit=crop&q=80&w=800", title: "Eternal Vows", category: "Ceremony" },
  { url: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?auto=format&fit=crop&q=80&w=800", title: "Details Matter", category: "Decor" },
  { url: "https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&q=80&w=800", title: "Bridesmaids", category: "Portrait" },
  { url: "https://images.unsplash.com/photo-1532712938310-34cb3982ef74?auto=format&fit=crop&q=80&w=800", title: "The Exit", category: "Ceremony" },
];

export function Portfolio() {
  return (
    <section id="portfolio" className="py-32 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div>
            <span className="text-gold text-xs uppercase tracking-[0.3em] font-medium mb-4 block">The Gallery</span>
            <h2 className="text-4xl md:text-6xl max-w-2xl leading-tight">
              Selected works that tell <span className="italic">timeless</span> stories.
            </h2>
          </div>
          <p className="text-ink/60 uppercase text-[10px] tracking-[0.2em]">View All Portfolio</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PORTFOLIO_IMAGES.map((item, index) => (
            <PortfolioItem 
              key={index} 
              url={item.url} 
              title={item.title} 
              category={item.category} 
              index={index} 
            />
          ))}
        </div>
      </div>
    </section>
  );
}

interface PortfolioItemProps {
  url: string;
  title: string;
  category: string;
  index: number;
  key?: number | string;
}

function PortfolioItem({ url, title, category, index }: PortfolioItemProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.8 }}
      className="group cursor-pointer"
    >
      <div className="overflow-hidden aspect-[3/4] bg-neutral-100 relative">
        <img 
          src={url} 
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-ink/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>
      <div className="mt-4 flex justify-between items-start">
        <h3 className="text-lg font-light">{title}</h3>
        <span className="text-[10px] uppercase tracking-widest text-ink/40 mt-1">{category}</span>
      </div>
    </motion.div>
  );
}
