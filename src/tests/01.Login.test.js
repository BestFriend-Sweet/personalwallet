import React from 'react';
import { screen } from '@testing-library/react';
// import eventUser from '@testing-library/user-event';
import renderWithRouterAndRedux from './helpers/renderWith';
import App from '../App';

describe('Testa o componente Login', () => {
  test('Busca inputs e textos na página', () => {
    renderWithRouterAndRedux(<App />);
    const inputEmail = screen.getByRole('textbox');
    expect(inputEmail).toBeInTheDocument();
  });
  // test('Aplicação é redirecionada pra inicial ao clicar em home?', () => {
  //   expect().toBe('/');
  // });
});
