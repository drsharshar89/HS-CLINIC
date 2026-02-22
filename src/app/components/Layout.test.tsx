import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { Layout } from '@/app/components/Layout';
import { HelmetProvider } from 'react-helmet-async';

function renderLayout() {
  return render(
    <HelmetProvider>
      <MemoryRouter>
        <Layout />
      </MemoryRouter>
    </HelmetProvider>
  );
}

describe('Layout', () => {
  it('renders the clinic logo', () => {
    renderLayout();
    const logos = screen.getAllByAltText(/Dr\. Haitham Sharshar/i);
    expect(logos.length).toBeGreaterThan(0);
  });

  it('renders navigation links', () => {
    renderLayout();

    // Use getAllByText for items that appear in both nav and footer
    expect(screen.getAllByText('About').length).toBeGreaterThan(0);
    expect(screen.getAllByText('Services').length).toBeGreaterThan(0);
    expect(screen.getAllByText('Technology').length).toBeGreaterThan(0);
    expect(screen.getAllByText('Contact').length).toBeGreaterThan(0);
  });

  it('renders the Dental Tourism link', () => {
    renderLayout();
    expect(screen.getAllByText('Dental Tourism').length).toBeGreaterThan(0);
  });

  it('renders footer with copyright', () => {
    renderLayout();
    const footer = screen.getByText(/Dr\. Haitham Sharshar/i);
    expect(footer).toBeInTheDocument();
  });
});
