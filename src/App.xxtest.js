import { render, screen } from '@testing-library/react';
import App from './App';

test('Employee Polls', () => {
  render(<App />);
  const linkElement = screen.getByText(/Polls/);
  expect(linkElement).toBeInTheDocument();
});
