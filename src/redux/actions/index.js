import moedasApi from '../../services/moedasApi';

export const LOGA_USUARIO = 'LOGA_USUARIO';
export const FETCHA_AS_MOEDAS = 'FETCHA_AS_MOEDAS';

export const FETCHCOINS_INICIALIZA = 'FETCHCOINS_INICIALIZA';
export const FETCHCOINS_PEGOU = 'FETCHCOINS_PEGOU';
export const FETCHCOINS_DEURUIM = 'FETCHCOINS_DEURUIM';

// const inicializa = () => ({ type: FETCHCOINS_INICIALIZA });
// const deuruim = (e) => ({ type: FETCHCOINS_DEURUIM, e });
// const fetchEnfim = (currencies) => ({ type: FETCHCOINS_PEGOU, currencies });

const appLogin = (dados) => ({
  type: LOGA_USUARIO,
  payload: dados,
});

const fetchaMoedas = (dados) => ({
  type: FETCHA_AS_MOEDAS,
  payload: dados,
});

export const cataMoedas = async () => async (dispatch) => {
  const primeiraMoeda = await moedasApi();
  const segundaMoeda = await primeiraMoeda.json();
  dispatch(fetchaMoedas(segundaMoeda));
};

export { appLogin, fetchaMoedas };
