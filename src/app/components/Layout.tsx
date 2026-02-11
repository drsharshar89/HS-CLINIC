import { Link, Outlet, useLocation } from 'react-router';
import { Helmet } from 'react-helmet-async';
import { Menu, X, Phone, Mail, MapPin } from 'lucide-react';
import { useState } from 'react';
import clinicLogo from '../../assets/logo.png';
// const clinicLogo = "https://placehold.co/300x100?text=Dr.+Haitham+Sharshar";

export function Layout() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Technology', href: '/technology' },
    { name: 'Contact', href: '/contact' },
  ];

  const isActive = (href: string) => {
    if (href === '/') {
      return location.pathname === '/';
    }
    return location.pathname.startsWith(href);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Helmet titleTemplate="%s | Dr. Haitham Sharshar">
        <title>Dental Clinic</title>
        <meta name="description" content="Specialized Digital Dental Occlusion and Cosmetic Dentistry in the Middle East." />
      </Helmet>
      {/* Top Bar */}
      <div className="bg-gold-900 text-white py-2 px-4">
        <div className="max-w-7xl mx-auto flex flex-wrap gap-4 justify-between items-center text-sm">
          <div className="flex flex-wrap gap-4">
            <a href="tel:+1234567890" className="flex items-center gap-2 hover:text-gold-300 transition-colors">
              <Phone className="w-4 h-4" />
              <span>+123 456 7890</span>
            </a>
            <a href="mailto:info@drsharshar.com" className="flex items-center gap-2 hover:text-gold-300 transition-colors">
              <Mail className="w-4 h-4" />
              <span>info@drsharshar.com</span>
            </a>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4" />
            <span>Specialized Digital Dental Center</span>
          </div>
        </div>
      </div>

      {/* Header */}
      <header className="bg-white shadow-md sticky top-0 z-50">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3">
              <img src={clinicLogo} alt="Dr. Haitham Sharshar Dental Clinic" className="h-14 w-auto" />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`transition-colors ${
                    isActive(item.href)
                      ? 'text-gold-700 font-semibold'
                      : 'text-gray-600 hover:text-gold-700'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <Link
                to="/contact"
                className="bg-gold-700 text-white px-6 py-2 rounded-md hover:bg-gold-600 transition-colors"
              >
                Book Appointment
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6 text-gray-600" />
              ) : (
                <Menu className="w-6 h-6 text-gray-600" />
              )}
            </button>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <div className="md:hidden py-4 border-t">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`block py-3 px-4 transition-colors ${
                    isActive(item.href)
                      ? 'text-gold-700 font-semibold bg-gold-50'
                      : 'text-gray-600 hover:bg-gray-50'
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <Link
                to="/contact"
                className="block mt-4 mx-4 text-center bg-gold-700 text-white px-6 py-3 rounded-md hover:bg-gold-600 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Book Appointment
              </Link>
            </div>
          )}
        </nav>
      </header>

      {/* Main Content */}
      <main className="flex-1">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-gold-950 text-white py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <img src={clinicLogo} alt="Dr. Haitham Sharshar Dental Clinic" className="h-12 w-auto mb-4 brightness-0 invert" />
              <p className="text-gray-400">
                Highly specialized in Digital Dental Occlusion and advanced digital dentistry solutions.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4 text-gold-400">Quick Links</h3>
              <ul className="space-y-2">
                {navigation.map((item) => (
                  <li key={item.name}>
                    <Link to={item.href} className="text-gray-400 hover:text-gold-400 transition-colors">
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4 text-gold-400">Contact Info</h3>
              <ul className="space-y-3 text-gray-400">
                <li className="flex items-start gap-2">
                  <Phone className="w-5 h-5 mt-0.5 text-gold-500" />
                  <span>+123 456 7890</span>
                </li>
                <li className="flex items-start gap-2">
                  <Mail className="w-5 h-5 mt-0.5 text-gold-500" />
                  <span>info@drsharshar.com</span>
                </li>
                <li className="flex items-start gap-2">
                  <MapPin className="w-5 h-5 mt-0.5 text-gold-500" />
                  <span>123 Dental Street, Medical District</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gold-900 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2026 Dr. Haitham Sharshar Dental Clinic. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
