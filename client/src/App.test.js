import { render, screen } from '@testing-library/react';
import App from './App';

test('renders welcome text', () => {
  render(<App />);
  const linkElement = screen.getByText(/Welcome to React+Mui truffle box/i);
  expect(linkElement).toBeInTheDocument();
});
