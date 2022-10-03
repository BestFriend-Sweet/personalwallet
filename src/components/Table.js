import React, { Component } from 'react';
import teste from 'prop-types';
import { connect } from 'react-redux';
import { deletaNoGlobal } from '../redux/actions';

class Table extends Component {
  deletaDespesa = ({ target: { id } }) => {
    const { expenses, atualizaDespesas } = this.props;
    const idDaDespesa = expenses[id];
    expenses.splice(idDaDespesa, 1);
    atualizaDespesas(expenses);
  };

  render() {
    const { expenses } = this.props;
    return (
      <table className="expenses" hidden={ expenses.length < 1 }>
        <tr className="expenses-header">
          <th>Descrição</th>
          <th>Tag</th>
          <th>Método de pagamento</th>
          <th>Valor</th>
          <th>Moeda</th>
          <th>Câmbio utilizado</th>
          <th>Valor convertido</th>
          <th>Moeda de conversão</th>
          <th>Editar/Excluir</th>
        </tr>
        { expenses.map((expense) => {
          const rate = expense.exchangeRates[expense.currency].ask;
          return (
            <tr key={ expense.id }>
              <td>{ expense.description }</td>
              <td>{ expense.tag }</td>
              <td>{ expense.method }</td>
              <td>{ expense.value }</td>
              <td>{ expense.exchangeRates[expense.currency].name }</td>
              <td>{ Number(rate).toFixed(2) }</td>
              <td>
                { (rate * expense.value).toFixed(2) }
              </td>
              <td>Real</td>
              <td>
                <button
                  type="button"
                  data-testid="delete-btn"
                  id={ expense.id }
                  onClick={ (e) => this.deletaDespesa(e) }
                >
                  Excluir
                </button>
              </td>
            </tr>
          );
        }) }
      </table>
    );
  }
}

Table.propTypes = {
  expenses: teste.shape({}),
}.isRequired;

const mapStateToProps = (state) => ({
  ...state.wallet,
});

const mapDispatchToProps = (dispatch) => ({
  atualizaDespesas: (despesa) => dispatch(deletaNoGlobal(despesa)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Table);
