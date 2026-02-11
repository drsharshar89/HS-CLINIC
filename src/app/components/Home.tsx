import { Link } from 'react-router';
import { Helmet } from 'react-helmet-async';
import { ChevronRight, CheckCircle2, Activity, Cpu, Gauge } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Render } from "@puckeditor/core";
import { config } from "../cms/config";

export function Home() {
  const puckData = localStorage.getItem("puck-data");
  
  if (puckData) {
    try {
      const data = JSON.parse(puckData);
      if (data.content && data.content.length > 0) {
        return <Render config={config} data={data} />;
      }
    } catch (e) {
      console.error("Failed to parse Puck data", e);
    }
  }

  const features = [
    {
      icon: Activity,
      title: 'Jaw Tracking',
      description: 'Advanced jaw movement analysis for precise diagnosis',
    },
    {
      icon: Cpu,
      title: 'EMG Technology',
      description: 'Electromyography for muscle function assessment',
    },
    {
      icon: Gauge,
      title: 'Digital Force Analysis',
      description: 'Precise measurement of dental force distribution',
    },
  ];

  const benefits = [
    'Ideal Bite Correction',
    'Patient Posture Optimization',
    'Digital Precision',
    'Advanced Diagnostics',
    'Personalized Treatment Plans',
    'State-of-the-art Technology',
  ];

  return (
    <div>
      <Helmet>
        <title>Best Digital Dental Occlusion Clinic - Middle East</title>
        <meta name="description" content="Dr. Haitham Sharshar Dental Clinic - The #1 Specialized Center for Digital Dental Occlusion, TMJ Treatment, and Advanced Cosmetic Dentistry in the Middle East." />
        <meta name="keywords" content="Digital Dental Occlusion, TMJ Specialist, Best Dentist Middle East, Dr. Haitham Sharshar, T-Scan, EMG Dentistry" />
      </Helmet>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gold-900 to-gold-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Advanced Digital Dental Occlusion
              </h1>
              <p className="text-xl mb-8 text-gold-200">
                Experience cutting-edge digital dentistry with Dr. Haitham Sharshar - 
                where precision meets innovation for your perfect smile.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  to="/contact"
                  className="bg-gold-500 text-white px-8 py-4 rounded-md font-semibold hover:bg-gold-400 transition-colors inline-flex items-center gap-2"
                >
                  Book Appointment
                  <ChevronRight className="w-5 h-5" />
                </Link>
                <Link
                  to="/technology"
                  className="border-2 border-gold-400 text-white px-8 py-4 rounded-md font-semibold hover:bg-gold-400 hover:text-gold-950 transition-colors"
                >
                  Our Technology
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-lg overflow-hidden shadow-2xl">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1762625570087-6d98fca29531?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBkZW50YWwlMjBjbGluaWMlMjBpbnRlcmlvcnxlbnwxfHx8fDE3NzA3MDk3ODB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Modern Dental Clinic"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Advanced Technology Suite
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We utilize cutting-edge systems to provide unparalleled precision in dental care
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-gold-50 to-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-gold-200"
              >
                <div className="bg-gold-700 text-white w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                  <feature.icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gold-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Specialized Excellence in Digital Dentistry
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Dr. Haitham Sharshar leads a highly specialized dental center focused on 
                Digital Dental Occlusion, combining advanced technology with expert care.
              </p>
              <div className="grid sm:grid-cols-2 gap-4 mb-8">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-gold-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>
              <Link
                to="/about"
                className="inline-flex items-center gap-2 text-gold-700 font-semibold hover:gap-4 transition-all"
              >
                Learn More About Us
                <ChevronRight className="w-5 h-5" />
              </Link>
            </div>
            <div className="order-1 md:order-2">
              <div className="rounded-xl overflow-hidden shadow-2xl">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1631596577204-53ad0d6e6978?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBkZW50aXN0JTIwcG9ydHJhaXR8ZW58MXx8fHwxNzcwNzEyOTQzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Dr. Haitham Sharshar"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gold-900 text-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Experience Advanced Dental Care?
          </h2>
          <p className="text-xl text-gold-200 mb-8">
            Schedule your consultation today and discover the future of digital dentistry
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-gold-500 text-white px-8 py-4 rounded-md font-semibold hover:bg-gold-400 transition-colors"
          >
            Schedule Consultation
            <ChevronRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
