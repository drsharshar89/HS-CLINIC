import { describe, it, expect } from 'vitest';
import { render, screen, within } from '@testing-library/react';
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

describe('Accessibility', () => {
  describe('Skip to content link', () => {
    it('renders a skip link that points to #main', () => {
      renderLayout();
      const skipLink = screen.getByText('Skip to content');
      expect(skipLink).toBeInTheDocument();
      expect(skipLink).toHaveAttribute('href', '#main');
    });

    it('has the sr-only class for screen-reader only visibility', () => {
      renderLayout();
      const skipLink = screen.getByText('Skip to content');
      expect(skipLink.className).toContain('sr-only');
    });
  });

  describe('Navigation landmarks', () => {
    it('has a nav element with aria-label', () => {
      renderLayout();
      const nav = screen.getByRole('navigation', { name: /global/i });
      expect(nav).toBeInTheDocument();
    });

    it('has a main element with id="main"', () => {
      renderLayout();
      const main = screen.getByRole('main');
      expect(main).toBeInTheDocument();
      expect(main).toHaveAttribute('id', 'main');
    });
  });

  describe('Mobile menu accessibility', () => {
    it('mobile menu button has aria-expanded attribute', () => {
      renderLayout();
      const menuButton = screen.getByRole('button', { name: /open main menu/i });
      expect(menuButton).toBeInTheDocument();
      expect(menuButton).toHaveAttribute('aria-expanded', 'false');
    });

    it('mobile menu button has aria-controls pointing to mobile-menu', () => {
      renderLayout();
      const menuButton = screen.getByRole('button', { name: /open main menu/i });
      expect(menuButton).toHaveAttribute('aria-controls', 'mobile-menu');
    });
  });

  describe('Navigation aria-current', () => {
    it('marks the active route with aria-current="page"', () => {
      render(
        <HelmetProvider>
          <MemoryRouter initialEntries={['/about']}>
            <Layout />
          </MemoryRouter>
        </HelmetProvider>
      );

      // Find the desktop nav
      const nav = screen.getByRole('navigation', { name: /global/i });
      const aboutLinks = within(nav).getAllByText('About');
      // At least one About link should have aria-current="page"
      const activeLink = aboutLinks.find((link) => link.getAttribute('aria-current') === 'page');
      expect(activeLink).toBeDefined();
    });
  });

  describe('Image alt text', () => {
    it('all images have alt attributes', () => {
      renderLayout();
      const images = screen.getAllByRole('img');
      images.forEach((img) => {
        expect(img).toHaveAttribute('alt');
        // alt should not be empty (decorative images should use aria-hidden instead)
        expect(img.getAttribute('alt')).not.toBe('');
      });
    });
  });

  describe('Footer structure', () => {
    it('renders contact heading', () => {
      renderLayout();
      const contactHeading = screen.getByRole('heading', { name: /contact/i });
      expect(contactHeading).toBeInTheDocument();
    });

    it('renders quick links heading', () => {
      renderLayout();
      const linksHeading = screen.getByRole('heading', { name: /quick links/i });
      expect(linksHeading).toBeInTheDocument();
    });
  });
});
