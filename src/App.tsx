/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Portfolio } from "./components/Portfolio";
import { About } from "./components/About";
import { Testimonials } from "./components/Testimonials";
import { Booking } from "./components/Booking";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen relative">
      {/* Background Accent Sidebar */}
      <div className="fixed top-0 right-0 w-1/4 h-full bg-accent -z-0 pointer-events-none hidden lg:block" />
      
      {/* Floating UI Element (Rail Text) */}
      <div className="fixed top-1/2 left-4 -translate-y-1/2 rotate-180 z-40 hidden xl:block" style={{ writingMode: 'vertical-rl' }}>
        <span className="text-[9px] uppercase tracking-[0.5em] opacity-20 font-sans font-bold">The Portfolio of ImagineHub.in</span>
      </div>

      <Navbar />
      <main className="relative z-10">
        <Hero />
        <Portfolio />
        <About />
        <Testimonials />
        <Booking />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

