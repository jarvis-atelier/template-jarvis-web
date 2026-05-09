import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('App', () => {
  it('renders the heading', () => {
    render(<App />);
    expect(
      screen.getByRole('heading', { name: /jarvis atelier — web template/i }),
    ).toBeInTheDocument();
  });

  it('links to the starter templates guide', () => {
    render(<App />);
    const link = screen.getByRole('link', { name: /jarvis-atelier\/docs/i });
    expect(link).toHaveAttribute(
      'href',
      'https://github.com/jarvis-atelier/docs/blob/main/starter-templates.md',
    );
  });
});
