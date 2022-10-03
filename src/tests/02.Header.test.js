import React from 'react';
import { screen } from '@testing-library/react';
// import userEvent from '@testing-library/user-event';
import { renderWithRouterAndRedux } from './helpers/renderWith';
import Header from '../components/Header';

describe('Testa o componente Header', () => {
  test('Informações básicas corretas?', () => {
    renderWithRouterAndRedux(<Header />);
    expect(screen.getByText(/0.00/i)).toBeInTheDocument();
    expect(screen.getByText(/brl/i)).toBeInTheDocument();
  });
});
