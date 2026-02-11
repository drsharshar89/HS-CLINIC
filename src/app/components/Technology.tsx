import { Activity, Cpu, Gauge, Eye, Zap, ScanLine } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function Technology() {
  const technologies = [
    {
      icon: Activity,
      title: 'Jaw Tracking System',
      description: 'Advanced kinematic jaw tracking technology that precisely monitors and records jaw movements in real-time.',
      capabilities: [
        'Records jaw motion in all planes',
        'Identifies deviations and abnormalities',
        'Provides objective data for diagnosis',
        'Helps plan optimal treatment paths',
      ],
      benefits: [
        'Accurate diagnosis of TMJ disorders',
        'Precise treatment planning',
        'Objective progress monitoring',
      ],
    },
    {
      icon: Cpu,
      title: 'EMG (Electromyography)',
      description: 'State-of-the-art electromyography system that measures electrical activity in jaw muscles to assess function and tension.',
      capabilities: [
        'Monitors muscle activity patterns',
        'Detects muscle imbalances',
        'Measures muscle fatigue',
        'Compares left/right muscle function',
      ],
      benefits: [
        'Identifies muscle dysfunction',
        'Validates treatment effectiveness',
        'Prevents muscle-related complications',
      ],
    },
    {
      icon: Gauge,
      title: 'Digital Dental Force Analyzer',
      description: 'Precision force measurement system that analyzes bite force distribution and identifies pressure points.',
      capabilities: [
        'Maps force distribution across teeth',
        'Identifies high-pressure areas',
        'Measures total occlusal force',
        'Compares force symmetry',
      ],
      benefits: [
        'Prevents tooth damage',
        'Achieves balanced bite',
        'Reduces wear and tear',
      ],
    },
    {
      icon: Eye,
      title: 'Digital Occlusal Analysis',
      description: 'Comprehensive digital system for analyzing tooth contacts and occlusal relationships with extreme precision.',
      capabilities: [
        'High-resolution contact mapping',
        'Dynamic occlusion analysis',
        'Time-based bite evaluation',
        'Digital record keeping',
      ],
      benefits: [
        'Precise bite adjustments',
        'Predictable outcomes',
        'Detailed documentation',
      ],
    },
    {
      icon: ScanLine,
      title: '3D Imaging & Scanning',
      description: 'Advanced 3D imaging technology for comprehensive visualization and treatment planning.',
      capabilities: [
        'Complete jaw structure imaging',
        'Virtual treatment simulation',
        'Accurate measurements',
        'Digital model creation',
      ],
      benefits: [
        'Enhanced diagnosis accuracy',
        'Improved treatment planning',
        'Better patient communication',
      ],
    },
    {
      icon: Zap,
      title: 'Computer-Aided Analysis',
      description: 'Sophisticated software systems that integrate data from all diagnostic tools for comprehensive analysis.',
      capabilities: [
        'Multi-system data integration',
        'Advanced analysis algorithms',
        'Treatment simulation',
        'Progress tracking',
      ],
      benefits: [
        'Holistic patient assessment',
        'Data-driven decisions',
        'Optimized treatment plans',
      ],
    },
  ];

  const advantages = [
    {
      title: 'Precision & Accuracy',
      description: 'Digital systems provide measurements accurate to fractions of a millimeter, impossible with traditional methods.',
    },
    {
      title: 'Objective Data',
      description: 'Quantifiable data removes guesswork and provides clear, measurable treatment goals.',
    },
    {
      title: 'Early Detection',
      description: 'Advanced technology identifies issues before they become symptomatic or cause damage.',
    },
    {
      title: 'Personalized Treatment',
      description: 'Detailed data allows for truly customized treatment plans based on your unique anatomy.',
    },
    {
      title: 'Predictable Outcomes',
      description: 'Digital planning and simulation help predict treatment results before starting.',
    },
    {
      title: 'Non-Invasive Diagnosis',
      description: 'Most diagnostic procedures are completely comfortable and require no anesthesia.',
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gold-900 to-gold-700 text-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Advanced Digital Technology
              </h1>
              <p className="text-xl text-gold-200 mb-6">
                Our clinic is equipped with the most advanced digital dental technology available, 
                enabling precise diagnosis and optimal treatment outcomes.
              </p>
              <p className="text-lg text-gold-200">
                We invest in cutting-edge systems because your oral health deserves the highest 
                level of precision and care.
              </p>
            </div>
            <div className="rounded-xl overflow-hidden shadow-2xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1770321119305-f191c09c5801?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZW50YWwlMjB0ZWNobm9sb2d5JTIwZXF1aXBtZW50fGVufDF8fHx8MTc3MDcyODE5MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Advanced Dental Technology"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Technologies Detail */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Technology Suite
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Each technology serves a specific purpose in providing comprehensive diagnosis and treatment
            </p>
          </div>

          <div className="space-y-12">
            {technologies.map((tech, index) => (
              <div
                key={index}
                className={`grid md:grid-cols-2 gap-8 items-start ${
                  index % 2 === 1 ? 'md:flex-row-reverse' : ''
                }`}
              >
                <div className={index % 2 === 1 ? 'md:order-2' : ''}>
                  <div className="bg-gradient-to-br from-gold-50 to-white p-8 rounded-xl shadow-lg border border-gold-200">
                    <div className="bg-gold-700 text-white w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                      <tech.icon className="w-8 h-8" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">{tech.title}</h3>
                    <p className="text-gray-600 mb-6">{tech.description}</p>
                    
                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 mb-3">Key Capabilities:</h4>
                      <ul className="space-y-2">
                        {tech.capabilities.map((capability, cIndex) => (
                          <li key={cIndex} className="text-gray-600 flex items-start gap-2">
                            <span className="text-gold-600 font-bold">•</span>
                            <span>{capability}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
                
                <div className={index % 2 === 1 ? 'md:order-1' : ''}>
                  <div className="bg-gold-800 text-white p-8 rounded-xl shadow-lg h-full flex flex-col justify-center">
                    <h4 className="text-xl font-semibold mb-4">Clinical Benefits:</h4>
                    <ul className="space-y-4">
                      {tech.benefits.map((benefit, bIndex) => (
                        <li key={bIndex} className="flex items-start gap-3">
                          <Zap className="w-6 h-6 text-gold-400 flex-shrink-0 mt-0.5" />
                          <span className="text-lg">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Advantages Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gold-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Digital Technology Matters
            </h2>
            <p className="text-xl text-gray-600">
              The advantages of advanced digital diagnostics over traditional methods
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {advantages.map((advantage, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-bold text-gray-900 mb-3">{advantage.title}</h3>
                <p className="text-gray-600">{advantage.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology in Action */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="bg-gradient-to-br from-gold-900 to-gold-700 text-white rounded-2xl p-12">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
                How We Use Technology in Your Treatment
              </h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-gold-500 text-white font-bold text-xl w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0">
                    1
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Comprehensive Data Collection</h3>
                    <p className="text-gold-200">
                      We use multiple systems simultaneously to gather complete information about your 
                      bite, jaw function, and muscle activity.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-gold-500 text-white font-bold text-xl w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0">
                    2
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Integrated Analysis</h3>
                    <p className="text-gold-200">
                      Advanced software integrates data from all systems to provide a complete picture 
                      of your oral health and identify underlying issues.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-gold-500 text-white font-bold text-xl w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0">
                    3
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Precision Treatment Planning</h3>
                    <p className="text-gold-200">
                      Using the diagnostic data, we create a customized treatment plan designed to 
                      achieve optimal results for your specific condition.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-gold-500 text-white font-bold text-xl w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0">
                    4
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Ongoing Monitoring</h3>
                    <p className="text-gold-200">
                      Throughout treatment, we continuously monitor progress using the same technologies 
                      to ensure optimal outcomes and make adjustments as needed.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gold-50 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Experience the Difference of Advanced Technology
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Schedule a consultation to see how our advanced systems can benefit your dental health
          </p>
          <a
            href="/contact"
            className="inline-block bg-gold-700 text-white px-8 py-4 rounded-md font-semibold hover:bg-gold-600 transition-colors"
          >
            Schedule Your Consultation
          </a>
        </div>
      </section>
    </div>
  );
}
