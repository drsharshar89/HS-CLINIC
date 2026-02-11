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

  const isActive = (path: string) => location.pathname === path;

  return (
    <div className="min-h-screen flex flex-col bg-dark-950 font-sans text-gray-200 selection:bg-neon-cyan/30 selection:text-neon-cyan">
      <header className="fixed w-full z-50 bg-dark-950/80 backdrop-blur-md border-b border-white/5">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="Global">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center gap-2">
              <Link to="/" className="-m-1.5 p-1.5 flex items-center gap-2 group">
                <img className="h-10 w-auto brightness-200 group-hover:drop-shadow-[0_0_10px_rgba(6,182,212,0.8)] transition-all" src={clinicLogo} alt="Dr. Sharshar Logo" />
                <div className="flex flex-col">
                  <span className="text-xl font-serif font-bold text-white tracking-tight group-hover:text-neon-cyan transition-colors">DR. SHARSHAR</span>
                  <span className="text-xs text-neon-cyan tracking-[0.2em] font-mono uppercase">Digital Occlusion</span>
                </div>
              </Link>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex md:gap-x-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`text-sm font-medium transition-all duration-300 hover:text-neon-cyan hover:tracking-wide ${
                    isActive(item.href) ? 'text-neon-cyan border-b-2 border-neon-cyan' : 'text-gray-400'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <div className="flex md:hidden">
              <button
                type="button"
                className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-400 hover:text-white"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                <span className="sr-only">Open main menu</span>
                {mobileMenuOpen ? (
                  <X className="h-6 w-6" aria-hidden="true" />
                ) : (
                  <Menu className="h-6 w-6" aria-hidden="true" />
                )}
              </button>
            </div>
          </div>
        </nav>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-dark-900 border-b border-white/10">
            <div className="space-y-1 px-4 pb-3 pt-2">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`block rounded-md px-3 py-2 text-base font-medium ${
                    isActive(item.href)
                      ? 'bg-neon-cyan/10 text-neon-cyan'
                      : 'text-gray-300 hover:bg-white/5 hover:text-white'
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </header>

      <main className="flex-grow pt-20">
        <Outlet />
      </main>

      <footer className="bg-dark-900 border-t border-white/5 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <img className="h-8 w-auto brightness-200" src={clinicLogo} alt="Logo" />
              <span className="text-xl font-serif font-bold text-white">DR. SHARSHAR</span>
            </div>
            <p className="text-gray-400 max-w-sm mb-6 font-light">
              Pioneering the future of digital dentistry in the Middle East. 
              Precision, technology, and art combined.
            </p>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-white tracking-wider uppercase mb-4 font-mono">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-gray-400 hover:text-neon-cyan transition-colors">
                <Phone className="h-4 w-4 text-neon-purple" />
                <span>+20 123 456 7890</span>
              </li>
              <li className="flex items-center gap-2 text-gray-400 hover:text-neon-cyan transition-colors">
                <Mail className="h-4 w-4 text-neon-purple" />
                <span>clinic@drhaithamsharshar.com</span>
              </li>
              <li className="flex items-start gap-2 text-gray-400 hover:text-neon-cyan transition-colors">
                <MapPin className="h-4 w-4 text-neon-purple mt-1" />
                <span>Cairo, Egypt</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white tracking-wider uppercase mb-4 font-mono">Quick Links</h3>
            <ul className="space-y-2">
              {navigation.map((item) => (
                <li key={item.name}>
                  <Link to={item.href} className="text-gray-400 hover:text-neon-cyan transition-colors text-sm">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t border-white/5 pt-8 text-center">
          <p className="text-xs text-gray-600 font-mono">
            &copy; {new Date().getFullYear()} Dr. Haitham Sharshar. SYSTEM: ONLINE.
          </p>
        </div>
      </footer>
    </div>
  );
}
