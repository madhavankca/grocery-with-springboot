import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const someText = screen.getByText(/Inventory/i);
  expect(someText).toBeInTheDocument();
});
