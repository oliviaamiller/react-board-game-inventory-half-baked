import { render, screen } from '@testing-library/react';
import AuthPage from './AuthPage';

test('renders Sign Up link', () => {
  render(<AuthPage />);
  const linkElement = screen.getByText(/Sign Up/i);
  expect(linkElement).toBeInTheDocument();
});
