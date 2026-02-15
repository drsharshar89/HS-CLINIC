import { Link, Outlet, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Mail, MapPin } from 'lucide-react';
import { useState } from 'react';
import clinicLogo from '../../assets/logo.png';
import { useSiteSettings } from '@/hooks/useCmsData';

export function Layout() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const { settings } = useSiteSettings();

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Technology', href: '/technology' },
    { name: 'Smile Design', href: '/digital-smile-design' },
    { name: 'Dental Tourism', href: '/dental-tourism' },
    { name: 'Contact', href: '/contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <div className="bg-dark-950 selection:bg-gold-400/30 selection:text-gold-400 flex min-h-screen flex-col font-sans text-gray-200">
      {/* Skip to content — keyboard-only link */}
      <a
        href="#main"
        className="focus:bg-gold-400 focus:text-dark-950 sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[100] focus:rounded focus:px-4 focus:py-2 focus:font-semibold focus:outline-none"
      >
        Skip to content
      </a>

      <header className="bg-dark-950/80 fixed z-50 w-full border-b border-white/5 backdrop-blur-md">
        <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" aria-label="Global">
          <div className="flex h-20 items-center justify-between">
            <div className="flex items-center gap-2">
              <Link to="/" className="group -m-1.5 flex items-center gap-2 p-1.5">
                <img
                  className="h-10 w-auto brightness-200 transition-all group-hover:drop-shadow-[0_0_10px_rgba(212,175,55,0.6)]"
                  src={clinicLogo}
                  alt="Dr. Sharshar Logo"
                />
                <div className="flex flex-col">
                  <span className="group-hover:text-gold-400 font-serif text-xl font-bold tracking-tight text-white transition-colors">
                    DR. SHARSHAR
                  </span>
                  <span className="text-gold-400 font-mono text-xs tracking-[0.2em] uppercase">
                    Digital Occlusion
                  </span>
                </div>
              </Link>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex md:gap-x-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  aria-current={isActive(item.href) ? 'page' : undefined}
                  className={`hover:text-gold-400 text-sm font-medium transition-all duration-300 hover:tracking-wide ${
                    isActive(item.href)
                      ? 'text-gold-400 border-gold-400 border-b-2'
                      : 'text-gray-400'
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
          <div className="bg-dark-900 border-b border-white/10 md:hidden">
            <div className="space-y-1 px-4 pt-2 pb-3">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  aria-current={isActive(item.href) ? 'page' : undefined}
                  className={`block rounded-md px-3 py-2 text-base font-medium ${
                    isActive(item.href)
                      ? 'bg-gold-400/10 text-gold-400'
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

      <main id="main" className="flex-grow pt-20">
        <Outlet />
      </main>

      <footer className="bg-dark-900 border-t border-white/5 px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 md:grid-cols-4">
          <div className="col-span-1 md:col-span-2">
            <div className="mb-4 flex items-center gap-2">
              <img className="h-8 w-auto brightness-200" src={clinicLogo} alt="Logo" />
              <span className="font-serif text-xl font-bold text-white">DR. SHARSHAR</span>
            </div>
            <p className="mb-6 max-w-sm font-light text-gray-400">
              Pioneering the future of digital dentistry in the Middle East. Precision, technology,
              and art combined.
            </p>
          </div>

          <div>
            <h3 className="mb-4 font-mono text-sm font-semibold tracking-wider text-white uppercase">
              Contact
            </h3>
            <ul className="space-y-3">
              <li className="hover:text-gold-400 flex items-center gap-2 text-gray-400 transition-colors">
                <Phone className="text-gold-500 h-4 w-4" />
                <span>{settings.phone}</span>
              </li>
              <li className="hover:text-gold-400 flex items-center gap-2 text-gray-400 transition-colors">
                <Mail className="text-gold-500 h-4 w-4" />
                <span>{settings.email}</span>
              </li>
              <li className="hover:text-gold-400 flex items-start gap-2 text-gray-400 transition-colors">
                <MapPin className="text-gold-500 mt-1 h-4 w-4" />
                <span>{settings.address}</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 font-mono text-sm font-semibold tracking-wider text-white uppercase">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {navigation.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.href}
                    className="hover:text-gold-400 text-sm text-gray-400 transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t border-white/5 pt-8 text-center">
          <p className="font-mono text-xs text-gray-600">
            &copy; {new Date().getFullYear()} Dr. Haitham Sharshar. SYSTEM: ONLINE.
          </p>
        </div>
      </footer>
    </div>
  );
}
