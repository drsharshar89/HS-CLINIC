import { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, Satellite, Radio } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { SEO, SITE_NAME, DEFAULT_OG_IMAGE } from '@/lib/seo';
import { SectionHeader } from '@/app/components/ui/SectionHeader';
import { useSiteSettings } from '@/hooks/useCmsData';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formDataObj = new FormData(form);
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams(formDataObj as unknown as Record<string, string>).toString(),
    })
      .then(() => setSubmitted(true))
      .catch((err) => console.error('Form submission error:', err));
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        date: '',
        time: '',
        message: '',
      });
    }, 3000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const { settings } = useSiteSettings();

  const contactInfo = [
    {
      icon: Phone,
      title: 'Direct Line',
      details: [settings.phone, 'Priority Support'],
    },
    {
      icon: Mail,
      title: 'Digital Uplink',
      details: [settings.email, 'Encrypted Channel'],
    },
    {
      icon: MapPin,
      title: 'Coordinates',
      details: [settings.address, 'Medical District, Sector 7'],
    },
    {
      icon: Clock,
      title: 'Operational Window',
      details: ['Mon - Fri: 0900 - 1800', 'Sat: 0900 - 1400'],
    },
  ];

  return (
    <div className="bg-dark-950 min-h-screen pt-24 pb-12">
      <Helmet>
        <title>{SEO.contact.title}</title>
        <meta name="description" content={SEO.contact.description} />
        <link rel="canonical" href={SEO.contact.canonical} />
        <meta property="og:title" content={SEO.contact.title} />
        <meta property="og:description" content={SEO.contact.description} />
        <meta property="og:url" content={SEO.contact.canonical} />
        <meta property="og:image" content={DEFAULT_OG_IMAGE} />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content={SITE_NAME} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={SEO.contact.title} />
        <meta name="twitter:description" content={SEO.contact.description} />
        <meta name="twitter:image" content={DEFAULT_OG_IMAGE} />
      </Helmet>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader title="Initiate Contact" subtitle="SECURE TRANSMISSION" />

        <div className="mb-20 grid gap-12 lg:grid-cols-2">
          {/* Form */}
          <div className="bg-dark-900/50 relative overflow-hidden rounded-2xl border border-white/5 p-8">
            <div className="from-gold-600 via-gold-400 to-gold-600 absolute top-0 left-0 h-1 w-full bg-gradient-to-r" />

            <div className="mb-8 flex items-center justify-between">
              <h2 className="font-serif text-2xl text-white">Appointment Request</h2>
              <div className="text-gold-400 flex items-center gap-2 font-mono text-xs">
                <Radio className="h-3 w-3 animate-pulse" />
                UPLINK ACTIVE
              </div>
            </div>

            {submitted ? (
              <div className="bg-gold-400/10 border-gold-400/30 text-gold-400 animate-pulse rounded-lg border px-6 py-4 text-center">
                <Satellite className="mx-auto mb-2 h-8 w-8" />
                <p className="font-mono">TRANSMISSION RECEIVED</p>
                <p className="mt-1 text-xs text-gray-400">Awaiting confirmation protocol...</p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="space-y-6"
                aria-label="Book an appointment"
                name="contact"
                method="POST"
                data-netlify="true"
                data-netlify-honeypot="bot-field"
              >
                <input type="hidden" name="form-name" value="contact" />
                <p className="hidden">
                  <label>
                    Don&apos;t fill this out: <input name="bot-field" />
                  </label>
                </p>
                <div className="space-y-4">
                  <div>
                    <label htmlFor="contact-name" className="sr-only">
                      Full Name
                    </label>
                    <input
                      id="contact-name"
                      name="name"
                      required
                      aria-required="true"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Full Identity"
                      className="bg-dark-950 focus:border-gold-400 focus:ring-gold-400 w-full rounded border border-white/10 px-4 py-3 text-white transition-all outline-none placeholder:text-gray-700 focus:ring-1"
                    />
                  </div>
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div>
                      <label htmlFor="contact-email" className="sr-only">
                        Email Address
                      </label>
                      <input
                        id="contact-email"
                        name="email"
                        type="email"
                        required
                        aria-required="true"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Comm Frequency (Email)"
                        className="bg-dark-950 focus:border-gold-400 focus:ring-gold-400 w-full rounded border border-white/10 px-4 py-3 text-white transition-all outline-none placeholder:text-gray-700 focus:ring-1"
                      />
                    </div>
                    <div>
                      <label htmlFor="contact-phone" className="sr-only">
                        Phone Number
                      </label>
                      <input
                        id="contact-phone"
                        name="phone"
                        type="tel"
                        required
                        aria-required="true"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="Comms (Phone)"
                        className="bg-dark-950 focus:border-gold-400 focus:ring-gold-400 w-full rounded border border-white/10 px-4 py-3 text-white transition-all outline-none placeholder:text-gray-700 focus:ring-1"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div>
                      <label htmlFor="contact-date" className="sr-only">
                        Preferred Date
                      </label>
                      <input
                        id="contact-date"
                        name="date"
                        type="date"
                        required
                        aria-required="true"
                        value={formData.date}
                        onChange={handleChange}
                        className="bg-dark-950 focus:border-gold-400 focus:ring-gold-400 w-full rounded border border-white/10 px-4 py-3 text-gray-400 text-white transition-all outline-none focus:ring-1"
                      />
                    </div>
                    <div>
                      <label htmlFor="contact-time" className="sr-only">
                        Time Slot
                      </label>
                      <select
                        id="contact-time"
                        name="time"
                        required
                        aria-required="true"
                        value={formData.time}
                        onChange={handleChange}
                        className="bg-dark-950 focus:border-gold-400 focus:ring-gold-400 w-full rounded border border-white/10 px-4 py-3 text-gray-400 text-white transition-all outline-none focus:ring-1"
                      >
                        <option value="">Select Time Slot</option>
                        <option value="09:00">09:00 - Morning Block</option>
                        <option value="12:00">12:00 - Midday Block</option>
                        <option value="15:00">15:00 - Afternoon Block</option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <label htmlFor="contact-message" className="sr-only">
                      Clinical Notes
                    </label>
                    <textarea
                      id="contact-message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Clinical Notes / Symptoms..."
                      className="bg-dark-950 focus:border-gold-400 focus:ring-gold-400 w-full rounded border border-white/10 px-4 py-3 text-white transition-all outline-none placeholder:text-gray-700 focus:ring-1"
                    />
                  </div>
                </div>
                <button
                  type="submit"
                  className="bg-gold-400 text-dark-950 flex w-full items-center justify-center gap-2 rounded py-4 font-bold transition-all hover:shadow-[0_0_20px_rgba(212,175,55,0.6)]"
                >
                  TRANSMIT DATA <Send className="h-4 w-4" />
                </button>
              </form>
            )}
          </div>

          {/* Visuals & Info */}
          <div className="space-y-8">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {contactInfo.map((info, index) => (
                <div
                  key={index}
                  className="bg-dark-900/30 hover:border-gold-400/30 rounded-xl border border-white/5 p-4 transition-colors"
                >
                  <info.icon className="text-gold-500 mb-3 h-6 w-6" />
                  <h3 className="mb-1 font-bold text-white">{info.title}</h3>
                  {info.details.map((d, i) => (
                    <p key={i} className="text-xs text-gray-500">
                      {d}
                    </p>
                  ))}
                </div>
              ))}
            </div>

            {/* Satellite Map Placeholder */}
            <div className="group relative h-64 overflow-hidden rounded-xl border border-white/10">
              <img
                src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop"
                alt="Global Location"
                className="h-full w-full object-cover opacity-50 transition-transform duration-1000 group-hover:scale-110"
                loading="lazy"
              />
              <div className="from-dark-950 absolute inset-0 bg-gradient-to-t to-transparent" />
              <div className="center absolute inset-0 flex items-center justify-center">
                <div className="bg-gold-400 h-4 w-4 animate-ping rounded-full" />
                <MapPin className="absolute h-6 w-6 text-white" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
