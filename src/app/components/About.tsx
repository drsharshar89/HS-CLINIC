import { Award, GraduationCap, Heart, Users } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function About() {
  const values = [
    {
      icon: Heart,
      title: 'Patient-Centered Care',
      description: 'Every treatment plan is personalized to meet your unique dental needs and goals.',
    },
    {
      icon: Award,
      title: 'Clinical Excellence',
      description: 'Committed to the highest standards of dental practice and continuous improvement.',
    },
    {
      icon: GraduationCap,
      title: 'Expertise & Innovation',
      description: 'Combining years of experience with the latest advancements in digital dentistry.',
    },
    {
      icon: Users,
      title: 'Comprehensive Approach',
      description: 'Focusing on overall health through proper bite alignment and posture correction.',
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gold-50 to-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                About Dr. Haitham Sharshar
              </h1>
              <p className="text-xl text-gray-600 mb-6">
                Leading expert in Digital Dental Occlusion and advanced digital dentistry, 
                dedicated to providing cutting-edge care with precision and compassion.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Dr. Sharshar has pioneered the integration of advanced technologies such as 
                jaw tracking systems, EMG (Electromyography), and digital dental force analyzers 
                to achieve ideal bite alignment and improve patient posture.
              </p>
              <p className="text-lg text-gray-600">
                His commitment to excellence and innovation has made the clinic a destination 
                for patients seeking the most advanced dental care available.
              </p>
            </div>
            <div className="rounded-xl overflow-hidden shadow-2xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1631596577204-53ad0d6e6978?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBkZW50aXN0JTIwcG9ydHJhaXR8ZW58MXx8fHwxNzcwNzEyOTQzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Dr. Haitham Sharshar"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Specialization Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Areas of Specialization
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our clinic represents the forefront of digital dental technology and specialized treatment
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-gold-50 to-white p-8 rounded-xl shadow-lg border border-gold-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Digital Dental Occlusion</h3>
              <p className="text-gray-600 mb-4">
                Occlusion refers to how your teeth come together when you bite. Digital occlusal 
                analysis uses advanced technology to evaluate and correct bite problems that can 
                lead to:
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-gold-600 font-bold">•</span>
                  <span>TMJ disorders and jaw pain</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gold-600 font-bold">•</span>
                  <span>Chronic headaches and migraines</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gold-600 font-bold">•</span>
                  <span>Neck and back pain</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gold-600 font-bold">•</span>
                  <span>Worn or damaged teeth</span>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-gold-50 to-white p-8 rounded-xl shadow-lg border border-gold-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Posture Correction</h3>
              <p className="text-gray-600 mb-4">
                The relationship between your bite and body posture is profound. Improper occlusion 
                can affect your entire skeletal system. Our approach includes:
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-gold-600 font-bold">•</span>
                  <span>Comprehensive posture analysis</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gold-600 font-bold">•</span>
                  <span>Bite-posture correlation assessment</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gold-600 font-bold">•</span>
                  <span>Customized treatment plans</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gold-600 font-bold">•</span>
                  <span>Long-term health optimization</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gold-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Core Values
            </h2>
            <p className="text-xl text-gray-600">
              The principles that guide our practice every day
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                <div className="bg-gold-700 text-white w-14 h-14 rounded-lg flex items-center justify-center mb-4">
                  <value.icon className="w-7 h-7" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Credentials Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gold-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            Credentials & Expertise
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="text-4xl font-bold mb-2 text-gold-400">20+</div>
              <p className="text-gold-200">Years of Experience</p>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2 text-gold-400">5000+</div>
              <p className="text-gold-200">Patients Treated</p>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2 text-gold-400">100%</div>
              <p className="text-gold-200">Digital Technology</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
