import { expect, test } from 'vitest';
import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';

test('opens the envelope to reveal Silvia invitation and WhatsApp link', () => {
  render(<App />);

  const openButton = screen.getByRole('button', {
    name: /abrir o convite especial para silvia/i,
  });
  expect(screen.queryByRole('link', { name: /sim, eu aceito/i })).toBeNull();

  fireEvent.click(openButton);
  const link = screen.getByRole('link', { name: /sim, eu aceito/i });

  expect(screen.getByRole('heading', { name: /silvia/i })).toBeDefined();
  expect(link.getAttribute('href')).toContain(
    'https://wa.me/5581997357533?text=',
  );
  expect(link.getAttribute('target')).toBe('_blank');
});
