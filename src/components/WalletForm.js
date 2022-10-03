import React, { Component } from 'react';
import { connect } from 'react-redux';
import teste from 'prop-types';
import { fetchaMoedas, gastaNoGlobal } from '../redux/actions';

class WalletForm extends Component {
  state = {
    moedas: [],
    loading: true,
    expenses: [],
    valor: '',
    description: '',
    currency: 'USD',
    method: 'dinheiro',
    tag: 'alimentacao',
  };

  componentDidMount() {
    const fazAFrente = async () => {
      const cotaAi = await this.pegaCotacao();
      this.portaMoedas(cotaAi);
    };
    fazAFrente();
  }

  pegaCotacao = async () => fetch('https://economia.awesomeapi.com.br/json/all')
    .then((response) => response.json())
    .then((data) => data)
    .catch((err) => console.log(err));

  lidaComMudanca = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  portaMoedas = (data) => {
    const { currencies } = this.props;
    const chavesSemUsdt = Object.keys(data).filter((naoUsdt) => naoUsdt !== 'USDT');
    this.setState({
      moedas: chavesSemUsdt,
      loading: false,
    }, () => currencies(chavesSemUsdt));
  };

  novaDespesa = async () => {
    // as infos do estado
    const { valor, description, currency, method, tag, expenses } = this.state;
    const { addDespesaNoGlobal } = this.props;
    // fetcha a cotação atual
    const exchangeRates = await this.pegaCotacao();
    // prepara o objeto a ser salvo
    const novaDespesa = {
      id: expenses.length || 0,
      value: valor,
      description,
      currency,
      method,
      tag,
      exchangeRates,
    };
    // insere a despesa no array expenses
    this.setState((prevState) => ({
      valor: '',
      description: '',
      expenses: [...prevState.expenses, novaDespesa],
    }), () => addDespesaNoGlobal(novaDespesa));
  };

  render() {
    const { moedas, loading, valor, description } = this.state;
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
                value="Dinheiro"
                name="method"
              >
                Dinheiro
              </option>
              <option
                value="Cartão de crédito"
                name="method"
              >
                Cartão de crédito
              </option>
              <option
                value="Cartão de débito"
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
              <option name="tag" value="Alimentação">Alimentação</option>
              <option name="tag" value="Lazer">Lazer</option>
              <option name="tag" value="Trabalho">Trabalho</option>
              <option name="tag" value="Transporte">Transporte</option>
              <option name="tag" value="Saúde">Saúde</option>
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
  addDespesaNoGlobal: (despesa) => dispatch(gastaNoGlobal(despesa)),
});

export default connect(null, mapDispatchToProps)(WalletForm);
