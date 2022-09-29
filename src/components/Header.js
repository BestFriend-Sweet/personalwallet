import React, { Component } from 'react';
import teste from 'prop-types';
import { connect } from 'react-redux';

class Header extends Component {
  state = {
    desp: 0,
  };

  render() {
    const { email } = this.props;
    const { desp } = this.state;
    return (
      <header>
        <div className="logo">
          <h3>TrybeWallet</h3>
          <p>by @devsakae</p>
        </div>
        <div className="header-info">
          <div>
            <h5>Você está logado(a) como</h5>
            <p data-testid="email-field">{ email }</p>
          </div>
          <div>
            <h5>Total de despesas</h5>
            <p data-testid="total-field">
              { desp.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' }) }
            </p>
          </div>
          <div>
            <p data-testid="header-currency-field">BRL</p>
          </div>
        </div>
      </header>
    );
  }
}

Header.propTypes = {
  email: teste.string,
  totalDespesas: teste.number,
}.isRequired;

const mapStateToProps = (state) => ({
  ...state.user,
  ...state.wallet,
});

export default connect(mapStateToProps)(Header);
