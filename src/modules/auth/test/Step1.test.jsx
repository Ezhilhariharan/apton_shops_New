import { fireEvent, screen } from '@testing-library/react';
import React from 'react';
import Step1 from '../components/Step1';
import { renderWithProviders } from '../../../test/app-test';

describe('Step1 tests', () => {
  it('should contain the paragraph element', () => {
    renderWithProviders(<Step1 />);
    const paragraph = screen.getByText('Please select your professional identity.');
    expect(paragraph).toBeInTheDocument();
  });
});

// it('should render brand cards', () => {
//   renderWithProviders(<Step1 />);
//   const brandCards = screen.getAllByTestId('brand-card');
//   expect(brandCards).toHaveLength(2);
// });

// it('should select a brand when clicked', () => {
//   renderWithProviders(<Step1 />);
//   const brandCard = screen.getByText('Personal Brand'); 
//   fireEvent.click(brandCard);
//   const selectedBrand = screen.getByText('selected-brand');
//   expect(selectedBrand).toBeInTheDocument();
// });

it('should select a brand when clicked', () => {
  renderWithProviders(<Step1 />);
  const brandCard = screen.getByText('Business Entity'); 
  fireEvent.click(brandCard);
  const selectedBrand = screen.getByTestId('selected-brand');
  expect(selectedBrand).toBeInTheDocument();
});

it('should show "Get Started" button when a brand is selected', () => {
  renderWithProviders(<Step1 />);
  const brandCard = screen.getByText('Business Entity'); 
  fireEvent.click(brandCard);
  const getStartedButton = screen.getByText('Get Started');
  expect(getStartedButton).toBeInTheDocument();
});
