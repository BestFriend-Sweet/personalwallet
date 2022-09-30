import React, { Component } from 'react';
import { connect } from 'react-redux';
import teste from 'prop-types';
import { fetchaMoedas } from '../redux/actions';

class WalletForm extends Component {
  state = {
    moedas: [],
    loading: true,
  };

  componentDidMount() {
    const fetchCurrencies = async () => {
      await fetch('https://economia.awesomeapi.com.br/json/all')
        .then((response) => response.json())
        .then((data) => this.portaMoedas(data))
        .catch((err) => console.log(err));
    };
    fetchCurrencies();
  }

  portaMoedas = (data) => {
    const { currencies } = this.props;
    this.setState({
      moedas: Object.keys(data),
      loading: false,
    });
    currencies(data);
  };

  render() {
    const { moedas, loading } = this.state;
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
              { loading || moedas.map((coin) => (
                <option
                  value={ coin }
                  key={ coin }
                >
                  { coin }
                </option>)) }
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

WalletForm.propTypes = {
  currencies: teste.shape(),
}.isRequired;

const mapDispatchToProps = (dispatch) => ({
  currencies: (coins) => dispatch(fetchaMoedas(coins)),
});

export default connect(null, mapDispatchToProps)(WalletForm);
