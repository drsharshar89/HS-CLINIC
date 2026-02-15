import { Config } from '@puckeditor/core';
import { Link } from 'react-router-dom';
import { ChevronRight, CheckCircle2, Activity, Cpu, Gauge } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

type Props = {
  Hero: {
    title: string;
    description: string;
    buttonText: string;
    imageUrl: string;
  };
  Features: {
    title: string;
    description: string;
    features: Array<{ title: string; description: string; icon: string }>;
  };
  About: {
    title: string;
    description: string;
    imageUrl: string;
    benefits: Array<{ text: string }>;
  };
  CTA: {
    title: string;
    description: string;
    buttonText: string;
  };
};

export const config: Config<Props> = {
  components: {
    Hero: {
      fields: {
        title: { type: 'text' },
        description: { type: 'textarea' },
        buttonText: { type: 'text' },
        imageUrl: { type: 'text' },
      },
      defaultProps: {
        title: 'Advanced Digital Dental Occlusion',
        description:
          'Experience cutting-edge digital dentistry with Dr. Haitham Sharshar - where precision meets innovation for your perfect smile.',
        buttonText: 'Book Appointment',
        imageUrl:
          'https://images.unsplash.com/photo-1762625570087-6d98fca29531?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBkZW50YWwlMjBjbGluaWMlMjBpbnRlcmlvcnxlbnwxfHx8fDE3NzA3MDk3ODB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      },
      render: ({ title, description, buttonText, imageUrl }) => (
        <section className="from-gold-900 to-gold-700 relative bg-gradient-to-br text-white">
          <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 md:py-32 lg:px-8">
            <div className="grid items-center gap-12 md:grid-cols-2">
              <div>
                <h1 className="mb-6 text-4xl font-bold md:text-5xl lg:text-6xl">{title}</h1>
                <p className="text-gold-200 mb-8 text-xl">{description}</p>
                <div className="flex flex-wrap gap-4">
                  <Link
                    to="/contact"
                    className="bg-gold-500 hover:bg-gold-400 inline-flex items-center gap-2 rounded-md px-8 py-4 font-semibold text-white transition-colors"
                  >
                    {buttonText}
                    <ChevronRight className="h-5 w-5" />
                  </Link>
                </div>
              </div>
              <div className="relative">
                <div className="aspect-square overflow-hidden rounded-lg shadow-2xl">
                  <ImageWithFallback
                    src={imageUrl}
                    alt="Modern Dental Clinic"
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      ),
    },
    Features: {
      fields: {
        title: { type: 'text' },
        description: { type: 'text' },
        features: {
          type: 'array',
          getItemSummary: (item) => item.title || 'Feature',
          arrayFields: {
            title: { type: 'text' },
            description: { type: 'text' },
            icon: {
              type: 'select',
              options: [
                { label: 'Activity', value: 'Activity' },
                { label: 'Cpu', value: 'Cpu' },
                { label: 'Gauge', value: 'Gauge' },
              ],
            },
          },
        },
      },
      defaultProps: {
        title: 'Advanced Technology Suite',
        description:
          'We utilize cutting-edge systems to provide unparalleled precision in dental care',
        features: [
          {
            icon: 'Activity',
            title: 'Jaw Tracking',
            description: 'Advanced jaw movement analysis for precise diagnosis',
          },
          {
            icon: 'Cpu',
            title: 'EMG Technology',
            description: 'Electromyography for muscle function assessment',
          },
          {
            icon: 'Gauge',
            title: 'Digital Force Analysis',
            description: 'Precise measurement of dental force distribution',
          },
        ],
      },
      render: ({ title, description, features }) => {
        const icons = { Activity, Cpu, Gauge };
        return (
          <section className="bg-white px-4 py-20 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-7xl">
              <div className="mb-16 text-center">
                <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">{title}</h2>
                <p className="mx-auto max-w-2xl text-xl text-gray-600">{description}</p>
              </div>
              <div className="grid gap-8 md:grid-cols-3">
                {features.map((feature, index) => {
                  const Icon = icons[feature.icon as keyof typeof icons] || Activity;
                  return (
                    <div
                      key={index}
                      className="from-gold-50 border-gold-200 rounded-xl border bg-gradient-to-br to-white p-8 shadow-lg transition-shadow hover:shadow-xl"
                    >
                      <div className="bg-gold-700 mb-6 flex h-16 w-16 items-center justify-center rounded-lg text-white">
                        <Icon className="h-8 w-8" />
                      </div>
                      <h3 className="mb-3 text-xl font-bold text-gray-900">{feature.title}</h3>
                      <p className="text-gray-600">{feature.description}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>
        );
      },
    },
    About: {
      fields: {
        title: { type: 'text' },
        description: { type: 'textarea' },
        imageUrl: { type: 'text' },
        benefits: {
          type: 'array',
          getItemSummary: (item) => item.text || 'Benefit',
          arrayFields: { text: { type: 'text' } },
        },
      },
      defaultProps: {
        title: 'Specialized Excellence in Digital Dentistry',
        description:
          'Dr. Haitham Sharshar leads a highly specialized dental center focused on Digital Dental Occlusion, combining advanced technology with expert care.',
        imageUrl:
          'https://images.unsplash.com/photo-1631596577204-53ad0d6e6978?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBkZW50aXN0JTIwcG9ydHJhaXR8ZW58MXx8fHwxNzcwNzEyOTQzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
        benefits: [{ text: 'Ideal Bite Correction' }, { text: 'Patient Posture Optimization' }],
      },
      render: ({ title, description, imageUrl, benefits }) => (
        <section className="bg-gold-50 px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="grid items-center gap-12 md:grid-cols-2">
              <div className="order-2 md:order-1">
                <h2 className="mb-6 text-3xl font-bold text-gray-900 md:text-4xl">{title}</h2>
                <p className="mb-6 text-lg text-gray-600">{description}</p>
                <div className="mb-8 grid gap-4 sm:grid-cols-2">
                  {benefits.map((benefit: { text: string }, index: number) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="text-gold-600 mt-0.5 h-6 w-6 flex-shrink-0" />
                      <span className="text-gray-700">{benefit.text}</span>
                    </div>
                  ))}
                </div>
                <Link
                  to="/about"
                  className="text-gold-700 inline-flex items-center gap-2 font-semibold transition-all hover:gap-4"
                >
                  Learn More About Us <ChevronRight className="h-5 w-5" />
                </Link>
              </div>
              <div className="order-1 md:order-2">
                <div className="overflow-hidden rounded-xl shadow-2xl">
                  <ImageWithFallback
                    src={imageUrl}
                    alt="Clinic"
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      ),
    },
    CTA: {
      fields: {
        title: { type: 'text' },
        description: { type: 'text' },
        buttonText: { type: 'text' },
      },
      defaultProps: {
        title: 'Ready to Experience Advanced Dental Care?',
        description:
          'Schedule your consultation today and discover the future of digital dentistry',
        buttonText: 'Schedule Consultation',
      },
      render: ({ title, description, buttonText }) => (
        <section className="bg-gold-900 px-4 py-16 text-white sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">{title}</h2>
            <p className="text-gold-200 mb-8 text-xl">{description}</p>
            <Link
              to="/contact"
              className="bg-gold-500 hover:bg-gold-400 inline-flex items-center gap-2 rounded-md px-8 py-4 font-semibold text-white transition-colors"
            >
              {buttonText} <ChevronRight className="h-5 w-5" />
            </Link>
          </div>
        </section>
      ),
    },
  },
};
