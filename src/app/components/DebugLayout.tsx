import React, { useState } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Mail, MapPin } from 'lucide-react';
import clinicLogo from '../../assets/logo.png';

export function DebugLayout() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Technology', href: '/technology' },
    { name: 'Dental Tourism', href: '/dental-tourism' },
    { name: 'Contact', href: '/contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <div className="bg-dark-950 flex min-h-screen flex-col text-gray-200">
      <header className="bg-dark-950/80 fixed z-50 w-full border-b border-white/5 backdrop-blur-md">
        <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-20 items-center justify-between">
            <div className="flex items-center gap-2">
              <Link to="/" className="flex items-center gap-2">
                <img className="h-10 w-auto" src={clinicLogo} alt="Logo" />
                <span className="font-serif text-xl font-bold text-white">DR. SHARSHAR</span>
              </Link>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex md:gap-x-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`text-sm font-medium ${isActive(item.href) ? 'text-gold-400' : 'text-gray-400'}`}
                >
                  {item.name}
                </Link>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <div className="flex md:hidden">
              <button
                type="button"
                className="text-gray-400"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </nav>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="bg-dark-900 border-b border-white/10 p-4 md:hidden">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="block py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>
        )}
      </header>

      <main className="flex-grow pt-20" style={{ border: '5px solid blue' }}>
        <h1>FOOTER RESTORED v2 (Fresh Deploy) - TEST</h1>
        <Outlet />
      </main>

      <footer className="bg-dark-900 border-t border-white/5 px-4 py-12">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 md:grid-cols-3">
          <div>
            <h3 className="mb-4 font-bold text-white">DR. SHARSHAR</h3>
            <p className="text-gray-400">Digital Occlusion & Aesthetics</p>
          </div>
          <div>
            <h3 className="mb-4 font-bold text-white">Contact</h3>
            <ul className="space-y-2 text-gray-400">
              <li className="flex items-center gap-2">
                <Phone size={16} /> +20 123 456 7890
              </li>
              <li className="flex items-center gap-2">
                <Mail size={16} /> clinic@example.com
              </li>
              <li className="flex items-center gap-2">
                <MapPin size={16} /> Cairo, Egypt
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
}
