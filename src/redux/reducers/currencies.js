import { FETCHA_AS_MOEDAS } from '../actions';

const estadoInicial = [];

const currencies = (state = estadoInicial, action) => {
  switch (action.type) {
  case FETCHA_AS_MOEDAS:
    return {
      ...state,
      ...action.payload,
    };
  default:
    return state;
  }
};

export default currencies;
