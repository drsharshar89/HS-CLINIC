import { CheckCircle2, Smile, AlertCircle, Stethoscope, Shield, Zap } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

export function Services() {
  const services = [
    {
      icon: Stethoscope,
      title: 'Comprehensive Occlusal Analysis',
      description: 'Detailed evaluation of how your teeth come together using advanced digital systems.',
      features: [
        'Digital bite registration',
        'Force distribution mapping',
        'TMJ disorder assessment',
        'Functional analysis',
      ],
    },
    {
      icon: Zap,
      title: 'EMG Diagnostic Testing',
      description: 'Electromyography to assess muscle function and detect imbalances in jaw muscles.',
      features: [
        'Muscle activity monitoring',
        'Tension pattern analysis',
        'Pre/post treatment comparison',
        'Objective data collection',
      ],
    },
    {
      icon: AlertCircle,
      title: 'Jaw Tracking & Analysis',
      description: 'Advanced tracking systems to monitor jaw movement patterns and identify issues.',
      features: [
        'Real-time movement tracking',
        '3D jaw motion analysis',
        'Range of motion assessment',
        'Deviation detection',
      ],
    },
    {
      icon: Shield,
      title: 'Bite Correction & Optimization',
      description: 'Personalized treatment to achieve ideal occlusion and eliminate bite problems.',
      features: [
        'Custom treatment planning',
        'Gradual bite adjustment',
        'Comfort-focused approach',
        'Long-term stability',
      ],
    },
    {
      icon: Smile,
      title: 'Posture Correction Therapy',
      description: 'Addressing the connection between dental occlusion and body posture.',
      features: [
        'Full body posture evaluation',
        'Bite-posture correlation',
        'Corrective interventions',
        'Holistic health improvement',
      ],
    },
    {
      icon: CheckCircle2,
      title: 'Digital Treatment Planning',
      description: 'State-of-the-art digital workflow for precise and predictable outcomes.',
      features: [
        'Virtual treatment simulation',
        'Predictable results',
        'Minimally invasive options',
        'Advanced technology integration',
      ],
    },
  ];

  const conditions = [
    'TMJ Disorders',
    'Chronic Headaches',
    'Jaw Pain & Clicking',
    'Teeth Grinding (Bruxism)',
    'Uneven Bite',
    'Facial Pain',
    'Neck & Shoulder Pain',
    'Worn or Chipped Teeth',
    'Limited Jaw Movement',
    'Poor Posture',
  ];

  return (
    <div>
      <Helmet>
        <title>Our Services | Digital Occlusion & TMJ Treatment</title>
        <meta name="description" content="Comprehensive digital dental services including Occlusal Analysis, EMG Diagnostic Testing, Jaw Tracking, and Posture Correction Therapy." />
      </Helmet>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gold-900 to-gold-700 text-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Our Specialized Services
          </h1>
          <p className="text-xl text-gold-200">
            Comprehensive digital dental solutions for optimal oral health and overall well-being
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-gold-50 to-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-gold-200"
              >
                <div className="bg-gold-700 text-white w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                  <service.icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-start gap-2 text-gray-700">
                      <CheckCircle2 className="w-5 h-5 text-gold-600 flex-shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Conditions Treated */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gold-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Conditions We Treat
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our specialized approach addresses a wide range of dental and related health issues
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
            {conditions.map((condition, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow flex items-center gap-3"
              >
                <CheckCircle2 className="w-6 h-6 text-gold-600 flex-shrink-0" />
                <span className="font-semibold text-gray-900">{condition}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Treatment Process */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Treatment Process
            </h2>
            <p className="text-xl text-gray-600">
              A systematic approach to achieving optimal results
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: '01',
                title: 'Initial Consultation',
                description: 'Comprehensive evaluation of your dental health, symptoms, and concerns.',
              },
              {
                step: '02',
                title: 'Digital Analysis',
                description: 'Advanced testing using jaw tracking, EMG, and force analysis systems.',
              },
              {
                step: '03',
                title: 'Treatment Planning',
                description: 'Personalized plan developed based on detailed diagnostic data.',
              },
              {
                step: '04',
                title: 'Implementation & Follow-up',
                description: 'Precise treatment execution with ongoing monitoring and adjustments.',
              },
            ].map((phase, index) => (
              <div key={index} className="text-center">
                <div className="bg-gold-700 text-white text-2xl font-bold w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  {phase.step}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{phase.title}</h3>
                <p className="text-gray-600">{phase.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-gold-900 to-gold-700 text-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Start Your Journey to Better Dental Health
          </h2>
          <p className="text-xl text-gold-200 mb-8">
            Schedule a consultation to learn how our advanced services can help you
          </p>
          <a
            href="/contact"
            className="inline-block bg-gold-500 text-white px-8 py-4 rounded-md font-semibold hover:bg-gold-400 transition-colors"
          >
            Book Your Consultation
          </a>
        </div>
      </section>
    </div>
  );
}
