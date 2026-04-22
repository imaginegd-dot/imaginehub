import { Camera } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-paper py-20 px-6 border-t border-ink/5">
      <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
        <div className="flex items-center gap-2 mb-8">
          <Camera className="w-6 h-6 text-gold" />
          <span className="text-2xl tracking-[0.3em] uppercase font-light">ImagineHub.in</span>
        </div>
        
        <p className="max-w-md text-ink/40 text-xs leading-relaxed uppercase tracking-widest mb-12">
          Capturing the spirit of celebration across India and Europe. Fine Art, Portraiture, and Cinematic Storytelling.
        </p>

        <div className="flex gap-10 mb-20 text-[10px] uppercase tracking-[0.2em] font-medium text-ink/60">
          <a href="#" className="hover:text-gold">Privacy Policy</a>
          <a href="#" className="hover:text-gold">Terms of Service</a>
          <a href="#" className="hover:text-gold">FAQ</a>
        </div>

        <div className="w-full h-px bg-ink/5 mb-8" />
        
        <p className="text-[10px] uppercase tracking-[0.4em] text-ink/20">
          © {new Date().getFullYear()} ImagineHub.in Studio. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
