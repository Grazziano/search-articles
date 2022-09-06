import { render, screen } from '@testing-library/react';
import App from '../App';

describe('Home', () => {
  it('text input must be on screen', () => {
    render(<App />);
    const textBox = screen.getByRole('textbox');
    expect(textBox).toBeInTheDocument();
  });

  it('search button should be on screen', () => {
    render(<App />);
    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
  });
});
