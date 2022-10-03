import React from 'react';
import { screen } from '@testing-library/react';
// import userEvent from '@testing-library/user-event';
import { renderWithRouterAndRedux } from './helpers/renderWith';
import Wallet from '../pages/Wallet';

describe('Testa efetivamente a carteira', () => {
  test('Verifica se existem os campos necessários', () => {
    renderWithRouterAndRedux(<Wallet />);
    const valueInput = screen.getByTestId('value-input');
    const descriptionInput = screen.getByTestId('description-input');
    const currencyInput = screen.getByTestId('currency-input');
    const methodInput = screen.getByTestId('method-input');
    const tagInput = screen.getByTestId('tag-input');
    expect(valueInput).toBeInTheDocument();
    expect(valueInput).toHaveTextContent('');
    expect(descriptionInput).toBeInTheDocument();
    expect(descriptionInput).toHaveTextContent('');
    expect(currencyInput).toBeInTheDocument();
    expect(methodInput).toBeInTheDocument();
    expect(tagInput).toBeInTheDocument();
  });
  // test('Insere valores e testa botões', () => {
  //   renderWithRouterAndRedux(<Wallet />);
  //   const valueInput = screen.getByTestId('value-input');
  //   const descriptionInput = screen.getByTestId('description-input');
  //   userEvent.type(valueInput)
  // });
});
