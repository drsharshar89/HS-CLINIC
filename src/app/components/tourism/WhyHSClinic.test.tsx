import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { WhyHSClinic } from '@/app/components/tourism/WhyHSClinic';

function renderComponent() {
  return render(<WhyHSClinic />);
}

describe('WhyHSClinic', () => {
  it('renders the section heading', () => {
    renderComponent();
    expect(screen.getByText('Why HS Clinic Cairo?')).toBeInTheDocument();
  });

  it('renders the subheading', () => {
    renderComponent();
    expect(screen.getByText('WHY PATIENTS CHOOSE US')).toBeInTheDocument();
  });

  it('renders all 6 reason card titles', () => {
    renderComponent();
    expect(screen.getByText('Fully Digital Workflow')).toBeInTheDocument();
    expect(screen.getByText('International Sterilization')).toBeInTheDocument();
    expect(screen.getByText('Lifetime Implant Warranty')).toBeInTheDocument();
    expect(screen.getByText('English-Speaking Team')).toBeInTheDocument();
    expect(screen.getByText('Neuro-Occlusion Specialist')).toBeInTheDocument();
    expect(screen.getByText('VIP Travel Concierge')).toBeInTheDocument();
  });

  it('renders description text for each reason', () => {
    renderComponent();
    expect(screen.getByText(/0\.01mm precision/i)).toBeInTheDocument();
    expect(screen.getByText(/Near-zero infection risk/i)).toBeInTheDocument();
    expect(screen.getByText(/Straumann, Nobel Biocare/i)).toBeInTheDocument();
  });
});
