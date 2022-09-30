import React, { Component } from 'react';
import { connect } from 'react-redux';
import teste from 'prop-types';
import { fetchaMoedas } from '../redux/actions';

class WalletForm extends Component {
  state = {
    moedas: [],
    loading: true,
    expenses: [],
    valor: '',
    description: '',
    currency: '',
    method: '',
    tag: '',
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

  lidaComMudanca = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  portaMoedas = (data) => {
    const { currencies } = this.props;
    const soAsChaves = Object.keys(data);
    const semUsdt = soAsChaves.filter((naoUsdt) => naoUsdt !== 'USDT');
    this.setState({
      moedas: semUsdt,
      loading: false,
    });
    currencies(semUsdt);
  };

  novaDespesa = () => {
    // pegar o array atual
    const { valor, description, currency, method, tag, expenses } = this.state;
    // fetcha a cotação atual

    // prepara o objeto a ser salvo
    const despesaAdicionada = {
      id: expenses.length + 1,
      value: valor,
      description,
      currency,
      method,
      tag,
      exchangeRates,
    };
    console.log(despesaAdicionada);
  };

  render() {
    const { moedas, loading } = this.state;
    const { valor, description } = this.state;
    return (
      <div className="walletform">
        <form>
          <label htmlFor="valor">
            <input
              id="valor"
              name="valor"
              type="number"
              data-testid="value-input"
              min="0"
              placeholder="0"
              value={ valor }
              onChange={ this.lidaComMudanca }
            />
            <br />
            Valor
          </label>
          <label htmlFor="description">
            <input
              id="description"
              name="description"
              value={ description }
              onChange={ this.lidaComMudanca }
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
              name="currency"
              onChange={ this.lidaComMudanca }
            >
              { loading || moedas.map((coin) => (
                <option
                  name="currency"
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
              name="method"
              onChange={ this.lidaComMudanca }
            >
              <option
                value="dinheiro"
                name="method"
              >
                Dinheiro
              </option>
              <option
                value="cartao_de_credito"
                name="method"
              >
                Cartão de crédito
              </option>
              <option
                value="cartao_de_debito"
                name="method"
              >
                Cartão de débito
              </option>
            </select>
            <br />
            Forma de pagamento
          </div>

          <div>
            <select
              data-testid="tag-input"
              name="tag"
              onChange={ this.lidaComMudanca }
            >
              <option name="tag" value="alimentacao">Alimentação</option>
              <option name="tag" value="lazer">Lazer</option>
              <option name="tag" value="trabalho">Trabalho</option>
              <option name="tag" value="transporte">Transporte</option>
              <option name="tag" value="saude">Saúde</option>
            </select>
            <br />
            Tag
          </div>

          <div>
            <button
              type="button"
              onClick={ () => this.novaDespesa() }
            >
              Adicionar despesa
            </button>
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
