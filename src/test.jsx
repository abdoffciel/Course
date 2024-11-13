import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'; // Ensure jest-dom is imported for custom matchers
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  
  // Update the expected text to match something in your App component
  const linkElement = screen.getByText(/learn react/i); 
  expect(linkElement).toBeInTheDocument();
});
