import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { ServicesGrid } from '@/app/components/tourism/ServicesGrid';

function renderGrid() {
  return render(
    <MemoryRouter>
      <ServicesGrid />
    </MemoryRouter>
  );
}

describe('ServicesGrid', () => {
  it('renders the section heading', () => {
    renderGrid();
    expect(screen.getByText('Treatments Available for Tourists')).toBeInTheDocument();
  });

  it('renders all 4 service card titles', () => {
    renderGrid();
    expect(screen.getByText('Dental Implants')).toBeInTheDocument();
    expect(screen.getByText('Hollywood Smile')).toBeInTheDocument();
    expect(screen.getByText('TMJ / Occlusion')).toBeInTheDocument();
    expect(screen.getByText('Esthetics')).toBeInTheDocument();
  });

  it('all service cards link to /services', () => {
    renderGrid();
    const links = screen.getAllByRole('link');
    links.forEach((link) => {
      expect(link).toHaveAttribute('href', '/services');
    });
  });

  it('renders images with alt text matching service titles', () => {
    renderGrid();
    expect(screen.getByAltText('Dental Implants')).toBeInTheDocument();
    expect(screen.getByAltText('Hollywood Smile')).toBeInTheDocument();
    expect(screen.getByAltText('TMJ / Occlusion')).toBeInTheDocument();
    expect(screen.getByAltText('Esthetics')).toBeInTheDocument();
  });
});
