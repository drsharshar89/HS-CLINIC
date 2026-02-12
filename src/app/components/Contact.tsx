import { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, Satellite, Radio } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { SectionHeader } from './ui/SectionHeader';

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'Direct Line',
      details: ['+20 123 456 7890', 'Priority Support'],
    },
    {
      icon: Mail,
      title: 'Digital Uplink',
      details: ['clinic@drhaithamsharshar.com', 'Encrypted Channel'],
    },
    {
      icon: MapPin,
      title: 'Coordinates',
      details: ['Cairo, Egypt', 'Medical District, Sector 7'],
    },
    {
      icon: Clock,
      title: 'Operational Window',
      details: [
        'Mon - Fri: 0900 - 1800',
        'Sat: 0900 - 1400',
      ],
    },
  ];

  return (
    <div className="bg-dark-950 min-h-screen pt-24 pb-12">
       <Helmet>
        <title>Contact | Secure Channel</title>
        <meta name="description" content="Book your digital dentistry consultation. Secure appointment scheduling." />
      </Helmet>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader 
            title="Initiate Contact" 
            subtitle="SECURE TRANSMISSION" 
        />

        <div className="grid lg:grid-cols-2 gap-12 mb-20">
            {/* Form */}
            <div className="bg-dark-900/50 p-8 rounded-2xl border border-white/5 relative overflow-hidden">
                 <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-gold-600 via-gold-400 to-gold-600" />
                 
                 <div className="flex items-center justify-between mb-8">
                    <h2 className="text-2xl font-serif text-white">Appointment Request</h2>
                    <div className="flex items-center gap-2 text-xs font-mono text-gold-400">
                        <Radio className="w-3 h-3 animate-pulse" />
                        UPLINK ACTIVE
                    </div>
                 </div>

                 {submitted ? (
                    <div className="bg-gold-400/10 border border-gold-400/30 text-gold-400 px-6 py-4 rounded-lg animate-pulse text-center">
                        <Satellite className="w-8 h-8 mx-auto mb-2" />
                        <p className="font-mono">TRANSMISSION RECEIVED</p>
                        <p className="text-xs text-gray-400 mt-1">Awaiting confirmation protocol...</p>
                    </div>
                 ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="space-y-4">
                            <input
                                name="name"
                                required
                                value={formData.name}
                                onChange={handleChange}
                                placeholder="Full Identity"
                                className="w-full bg-dark-950 border border-white/10 text-white rounded px-4 py-3 focus:border-gold-400 focus:ring-1 focus:ring-gold-400 outline-none transition-all placeholder:text-gray-700"
                            />
                            <div className="grid grid-cols-2 gap-4">
                                <input
                                    name="email"
                                    type="email"
                                    required
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="Comm Frequency (Email)"
                                    className="w-full bg-dark-950 border border-white/10 text-white rounded px-4 py-3 focus:border-gold-400 focus:ring-1 focus:ring-gold-400 outline-none transition-all placeholder:text-gray-700"
                                />
                                <input
                                    name="phone"
                                    type="tel"
                                    required
                                    value={formData.phone}
                                    onChange={handleChange}
                                    placeholder="Comms (Phone)"
                                    className="w-full bg-dark-950 border border-white/10 text-white rounded px-4 py-3 focus:border-gold-400 focus:ring-1 focus:ring-gold-400 outline-none transition-all placeholder:text-gray-700"
                                />
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                <input
                                    name="date"
                                    type="date"
                                    required
                                    value={formData.date}
                                    onChange={handleChange}
                                    className="w-full bg-dark-950 border border-white/10 text-white rounded px-4 py-3 focus:border-gold-400 focus:ring-1 focus:ring-gold-400 outline-none transition-all text-gray-400"
                                />
                                <select
                                    name="time"
                                    required
                                    value={formData.time}
                                    onChange={handleChange}
                                    className="w-full bg-dark-950 border border-white/10 text-white rounded px-4 py-3 focus:border-gold-400 focus:ring-1 focus:ring-gold-400 outline-none transition-all text-gray-400"
                                >
                                    <option value="">Select Time Slot</option>
                                    <option value="09:00">09:00 - Morning Block</option>
                                    <option value="12:00">12:00 - Midday Block</option>
                                    <option value="15:00">15:00 - Afternoon Block</option>
                                </select>
                            </div>
                            <textarea
                                name="message"
                                rows={4}
                                value={formData.message}
                                onChange={handleChange}
                                placeholder="Clinical Notes / Symptoms..."
                                className="w-full bg-dark-950 border border-white/10 text-white rounded px-4 py-3 focus:border-gold-400 focus:ring-1 focus:ring-gold-400 outline-none transition-all placeholder:text-gray-700"
                            />
                        </div>
                        <button type="submit" className="w-full bg-gold-400 text-dark-950 font-bold py-4 rounded hover:shadow-[0_0_20px_rgba(212,175,55,0.6)] transition-all flex items-center justify-center gap-2">
                            TRANSMIT DATA <Send className="w-4 h-4" />
                        </button>
                    </form>
                 )}
            </div>

            {/* Visuals & Info */}
            <div className="space-y-8">
                <div className="grid grid-cols-2 gap-4">
                    {contactInfo.map((info, index) => (
                        <div key={index} className="bg-dark-900/30 p-4 rounded-xl border border-white/5 hover:border-gold-400/30 transition-colors">
                            <info.icon className="w-6 h-6 text-gold-500 mb-3" />
                            <h3 className="text-white font-bold mb-1">{info.title}</h3>
                            {info.details.map((d, i) => (
                                <p key={i} className="text-xs text-gray-500">{d}</p>
                            ))}
                        </div>
                    ))}
                </div>

                {/* Satellite Map Placeholder */}
                <div className="relative h-64 rounded-xl overflow-hidden border border-white/10 group">
                    <img 
                        src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop" 
                        alt="Global Location" 
                        className="w-full h-full object-cover opacity-50 group-hover:scale-110 transition-transform duration-1000"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-dark-950 to-transparent" />
                    <div className="absolute center inset-0 flex items-center justify-center">
                        <div className="w-4 h-4 bg-gold-400 rounded-full animate-ping" />
                        <MapPin className="text-white w-6 h-6 absolute" />
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
}
