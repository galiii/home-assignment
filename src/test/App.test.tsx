import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../components/App';
import { Appliance } from '../classes';

test('renders learn react link', () => {
  const appliances: Appliance[] = []; // Provide the appliances array
  const results: boolean[] = []; // Provide the results array
  render(<App appliances={appliances} results={results} />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
