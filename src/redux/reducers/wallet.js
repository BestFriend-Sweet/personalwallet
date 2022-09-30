// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import { FETCHA_AS_MOEDAS, NOVA_DESPESA } from '../actions';

const estadoInicial = {
  currencies: [],
  expenses: [],
};

const currencies = (state = estadoInicial, action) => {
  switch (action.type) {
  case FETCHA_AS_MOEDAS:
    return {
      ...state,
      currencies: action.payload,
    };
  case NOVA_DESPESA:
    return {
      ...state,
      expenses: [...state.expenses, action.payload],
    };
  default:
    return state;
  }
};

export default currencies;
