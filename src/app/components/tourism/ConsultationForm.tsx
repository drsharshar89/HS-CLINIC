import { motion } from "framer-motion";
import { useState, useRef } from "react";
import { Send, Upload, CheckCircle, Loader2 } from "lucide-react";

export function ConsultationForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");
  const [fileName, setFileName] = useState<string | null>(null);
  const fileRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    setTimeout(() => setStatus("sent"), 2000);
  };

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 border-t border-white/5 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gold-400/5 blur-[150px] rounded-full" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Image */}
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} className="relative">
            <div className="rounded-2xl overflow-hidden border border-gold-400/20">
              <img
                src="/images/tourism/pyramids with dental tourism.jpg"
                alt="Dental tourism in Cairo with pyramids"
                className="w-full h-80 lg:h-[480px] object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark-950 via-transparent to-transparent" />
            </div>
            <div className="absolute bottom-6 left-6 right-6">
              <div className="bg-dark-950/80 backdrop-blur border border-gold-400/20 rounded-xl p-4">
                <div className="text-gold-400 font-mono text-xs mb-1">📍 CLINIC ADDRESS</div>
                <div className="text-white text-sm">8/63, 10th District, Zahraa El Maadi, Cairo, Egypt</div>
                <a href="https://wa.me/201101010599" target="_blank" rel="noopener noreferrer" className="text-gold-400 text-xs mt-2 inline-block hover:text-gold-300">
                  +20 110 101 0599 (WhatsApp) →
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }}>
            <h2 className="text-gold-400 font-mono text-sm tracking-[0.3em] uppercase mb-3">FREE VIRTUAL CONSULTATION</h2>
            <h3 className="text-3xl md:text-4xl font-serif text-white mb-2">Start Your Journey Today</h3>
            <p className="text-gray-400 text-sm mb-8">Send us your case details and receive a personalized treatment plan within 24 hours.</p>

            {status === "sent" ? (
              <motion.div initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="text-center py-16">
                <CheckCircle className="w-16 h-16 text-gold-400 mx-auto mb-4" />
                <h4 className="text-2xl font-serif text-white mb-2">Request Received!</h4>
                <p className="text-gray-400">Dr. Sharshar's team will contact you within 24 hours via WhatsApp.</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <input name="name" required placeholder="Full Name" className="w-full bg-dark-900/50 border border-white/10 rounded-lg px-4 py-3 text-white text-sm placeholder:text-gray-500 focus:border-gold-400/50 focus:outline-none focus:ring-1 focus:ring-gold-400/30 transition-all" />
                  <input name="email" type="email" required placeholder="Email Address" className="w-full bg-dark-900/50 border border-white/10 rounded-lg px-4 py-3 text-white text-sm placeholder:text-gray-500 focus:border-gold-400/50 focus:outline-none focus:ring-1 focus:ring-gold-400/30 transition-all" />
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <input name="whatsapp" required placeholder="WhatsApp Number" className="w-full bg-dark-900/50 border border-white/10 rounded-lg px-4 py-3 text-white text-sm placeholder:text-gray-500 focus:border-gold-400/50 focus:outline-none focus:ring-1 focus:ring-gold-400/30 transition-all" />
                  <select name="treatment" required className="w-full bg-dark-900/50 border border-white/10 rounded-lg px-4 py-3 text-white text-sm focus:border-gold-400/50 focus:outline-none focus:ring-1 focus:ring-gold-400/30 transition-all">
                    <option value="" className="bg-dark-900">Treatment Interest</option>
                    <option value="implants" className="bg-dark-900">Dental Implants</option>
                    <option value="hollywood" className="bg-dark-900">Hollywood Smile / Veneers</option>
                    <option value="allon4" className="bg-dark-900">All-on-4 Full Arch</option>
                    <option value="tmj" className="bg-dark-900">TMJ / Jaw Pain</option>
                    <option value="whitening" className="bg-dark-900">Teeth Whitening</option>
                    <option value="other" className="bg-dark-900">Other</option>
                  </select>
                </div>
                <textarea name="message" rows={3} placeholder="Describe your case (optional)" className="w-full bg-dark-900/50 border border-white/10 rounded-lg px-4 py-3 text-white text-sm placeholder:text-gray-500 focus:border-gold-400/50 focus:outline-none focus:ring-1 focus:ring-gold-400/30 transition-all resize-none" />

                {/* Photo upload */}
                <div
                  onClick={() => fileRef.current?.click()}
                  className="border border-dashed border-white/10 hover:border-gold-400/30 rounded-lg p-4 text-center cursor-pointer transition-colors group"
                >
                  <input ref={fileRef} type="file" accept="image/*,application/pdf" className="hidden" onChange={(e) => setFileName(e.target.files?.[0]?.name || null)} />
                  <Upload className="w-5 h-5 text-gray-500 mx-auto mb-1 group-hover:text-gold-400 transition-colors" />
                  <p className="text-xs text-gray-500 group-hover:text-gray-400">
                    {fileName ? <span className="text-gold-400">{fileName}</span> : "Upload X-ray or smile photos (optional)"}
                  </p>
                </div>

                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="w-full py-4 bg-gold-400 text-dark-950 font-bold rounded-lg hover:shadow-[0_0_30px_rgba(212,175,55,0.4)] transition-all hover:scale-[1.02] disabled:opacity-60 flex items-center justify-center gap-2"
                >
                  {status === "sending" ? <Loader2 className="w-5 h-5 animate-spin" /> : <Send className="w-5 h-5" />}
                  {status === "sending" ? "Sending…" : "Get Free Treatment Plan"}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
