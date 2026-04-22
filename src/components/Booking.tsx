import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Calendar as CalendarIcon, Check } from "lucide-react";

const PACKAGES = [
  { id: "essential", name: "The Essential", price: "Starting at ₹85,000", features: ["6 Hours Coverage", "1 Lead Photographer", "High-Res Gallery", "100+ Edited Photos"] },
  { id: "signature", name: "The Signature", price: "Starting at ₹1,50,000", features: ["10 Hours Coverage", "2 Lead Photographers", "Cinematic Highlight Film", "Handcrafted Album", "Engagement Session"] },
  { id: "couture", name: "The Couture", price: "Starting at ₹2,75,000", features: ["Full Event Coverage", "3 Lead Photographers", "Multi-day Content", "Fine Art Coffee Table Book", "Express Delivery"] },
];

export function Booking() {
  const [selectedPackage, setSelectedPackage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    try {
      const response = await fetch("/api/booking", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, package: selectedPackage }),
      });

      if (response.ok) {
        setIsSuccess(true);
        setTimeout(() => setIsSuccess(false), 5000);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="booking" className="py-32 px-6 bg-paper relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <span className="text-gold text-xs uppercase tracking-[0.3em] font-medium mb-4 block">Reservation</span>
          <h2 className="text-4xl md:text-6xl mb-6">Plan Your <span className="italic">Exquisite</span> Wedding</h2>
          <p className="text-ink/50 max-w-xl mx-auto font-light leading-relaxed">
            Select a package that best suits your celebration. Custom collections are also available upon request.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
          {PACKAGES.map((pkg) => (
            <motion.div
              key={pkg.id}
              whileHover={{ y: -10 }}
              onClick={() => setSelectedPackage(pkg.id)}
              className={`p-10 border transition-all cursor-pointer relative overflow-hidden ${
                selectedPackage === pkg.id ? "border-gold bg-white" : "border-ink/5 bg-white/50"
              }`}
            >
              {selectedPackage === pkg.id && (
                <div className="absolute top-4 right-4 text-gold">
                  <Check className="w-5 h-5" />
                </div>
              )}
              <h3 className="text-2xl mb-2 font-serif">{pkg.name}</h3>
              <p className="text-gold text-sm font-medium mb-8 italic">{pkg.price}</p>
              <ul className="space-y-4">
                {pkg.features.map((feature, i) => (
                  <li key={i} className="text-xs uppercase tracking-widest text-ink/60 flex items-center gap-3">
                    <div className="w-1 h-1 bg-gold rounded-full" />
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <div className="max-w-3xl mx-auto">
          <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10 font-sans">
            <div className="flex flex-col">
              <label className="text-[9px] uppercase tracking-tighter mb-1 opacity-60">Full Name</label>
              <input 
                name="name" 
                required 
                className="text-xs border-b border-ink/10 py-2 focus:outline-none focus:border-ink bg-transparent transition-colors"
                placeholder="John Doe"
              />
            </div>
            <div className="flex flex-col">
              <label className="text-[9px] uppercase tracking-tighter mb-1 opacity-60">Email Address</label>
              <input 
                name="email" 
                type="email" 
                required 
                className="text-xs border-b border-ink/10 py-2 focus:outline-none focus:border-ink bg-transparent transition-colors"
                placeholder="email@example.com"
              />
            </div>
            <div className="flex flex-col">
              <label className="text-[9px] uppercase tracking-tighter mb-1 opacity-60">Wedding Date</label>
              <input 
                name="date" 
                type="date" 
                required 
                className="text-xs border-b border-ink/10 py-2 focus:outline-none focus:border-ink bg-transparent transition-colors"
              />
            </div>
            <div className="flex flex-col">
              <label className="text-[9px] uppercase tracking-tighter mb-1 opacity-60">Preferred Collection</label>
              <select 
                value={selectedPackage}
                onChange={(e) => setSelectedPackage(e.target.value)}
                required
                className="text-xs border-b border-ink/10 py-2 focus:outline-none focus:border-ink bg-transparent transition-colors appearance-none"
              >
                <option value="" disabled>Select a collection</option>
                {PACKAGES.map(pkg => (
                  <option key={pkg.id} value={pkg.id}>{pkg.name}</option>
                ))}
              </select>
            </div>
            <div className="md:col-span-2 flex flex-col pt-8">
              <button
                type="submit"
                disabled={isSubmitting || !selectedPackage}
                className="w-full bg-ink text-white py-4 text-[10px] uppercase tracking-[0.2em] font-bold hover:bg-ink/80 transition-colors disabled:opacity-30"
              >
                {isSubmitting ? "Processing..." : "Request Consultation"}
              </button>
            </div>
          </form>
        </div>
      </div>

      <AnimatePresence>
        {isSuccess && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            className="fixed bottom-10 right-10 z-[100] bg-white border border-gold p-6 shadow-2xl flex items-center gap-4"
          >
            <div className="bg-gold rounded-full p-2 text-white">
              <Check className="w-4 h-4" />
            </div>
            <div>
              <h4 className="text-sm font-semibold uppercase tracking-widest">Inquiry Sent</h4>
              <p className="text-xs text-ink/60 font-light mt-1">We will respond within 24 hours.</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
