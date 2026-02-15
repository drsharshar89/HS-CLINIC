import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { CyberHero } from '@/app/components/CyberHero';

function renderHero() {
  return render(
    <HelmetProvider>
      <MemoryRouter>
        <CyberHero />
      </MemoryRouter>
    </HelmetProvider>
  );
}

describe('CyberHero', () => {
  it('renders the main heading text', () => {
    renderHero();
    expect(screen.getByText('Architect Your')).toBeInTheDocument();
    expect(screen.getByText('Perfect Occlusion')).toBeInTheDocument();
  });

  it('renders the system status badge', () => {
    renderHero();
    expect(screen.getByText(/SYSTEM ONLINE/i)).toBeInTheDocument();
  });

  it('renders the consultation CTA link', () => {
    renderHero();
    const ctaLink = screen.getByText(/INITIATE CONSULTATION/i).closest('a');
    expect(ctaLink).toHaveAttribute('href', '/contact');
  });

  it('renders the technology CTA link', () => {
    renderHero();
    const techLink = screen.getByText(/EXPLORE TECHNOLOGY/i).closest('a');
    expect(techLink).toHaveAttribute('href', '/technology');
  });

  it('renders the precision tagline', () => {
    renderHero();
    expect(screen.getByText(/0\.01mm precision/i)).toBeInTheDocument();
  });
});
