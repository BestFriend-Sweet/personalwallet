import React, { Component } from 'react';
import teste from 'prop-types';
import { connect } from 'react-redux';

class Table extends Component {
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
              <td>Editar/Excluir</td>
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

export default connect(mapStateToProps)(Table);
