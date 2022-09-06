import { render, screen } from '@testing-library/react';
import App from '../App';

describe('Header', () => {
  it('title must be on screen', () => {
    render(<App />);
    const title = screen.getByRole('heading', { name: /search articles/i });
    expect(title).toBeInTheDocument();
  });

  it('home link should be on screen', () => {
    render(<App />);
    const link = screen.getByRole('link', { name: /home/i });
    expect(link).toBeInTheDocument();
  });

  it('favorites link should be on screen', () => {
    render(<App />);
    const link = screen.getByRole('link', { name: /favorites/i });
    expect(link).toBeInTheDocument();
  });
});
