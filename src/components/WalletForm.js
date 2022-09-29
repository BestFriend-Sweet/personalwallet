import React, { Component } from 'react';

class WalletForm extends Component {
  render() {
    return (
      <div className="walletform">
        <form>
          <label htmlFor="valorDaDespesa">
            <input
              id="valorDaDespesa"
              name="valorDaDespesa"
              type="number"
              data-testid="value-input"
              min="0"
              placeholder="0"
            />
            <br />
            Valor
          </label>
          <label htmlFor="descricao">
            <input
              id="descricao"
              name="descricao"
              type="text"
              data-testid="description-input"
              placeholder="Descrição"
            />
            <br />
            Descrição
          </label>
          <div>
            <select
              data-testid="currency-input"
            >
              (mapear a chave currencies)
            </select>
            <br />
            Moeda
          </div>
          <div>
            <select
              data-testid="method-input"
            >
              <option value="dinheiro">Dinheiro</option>
              <option value="cc">Cartão de crédito</option>
              <option value="cd">Cartão de débito</option>
            </select>
            <br />
            Forma de pagamento
          </div>

          <div>
            <select
              data-testid="tag-input"
            >
              <option value="alimentacao">Alimentação</option>
              <option value="lazer">Lazer</option>
              <option value="trabalho">Trabalho</option>
              <option value="transporte">Transporte</option>
              <option value="saude">Saúde</option>
            </select>
            <br />
            Tag
          </div>
        </form>
      </div>
    );
  }
}

export default WalletForm;
