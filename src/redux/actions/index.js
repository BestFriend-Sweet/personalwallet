export const LOGA_USUARIO = 'LOGA_USUARIO';
export const FETCHA_AS_MOEDAS = 'FETCHA_AS_MOEDAS';

export const FETCHCOINS_INICIALIZA = 'FETCHCOINS_INICIALIZA';
export const FETCHCOINS_PEGOU = 'FETCHCOINS_PEGOU';
export const FETCHCOINS_DEURUIM = 'FETCHCOINS_DEURUIM';

const appLogin = (dados) => ({
  type: LOGA_USUARIO,
  payload: dados,
});

const fetchaMoedas = (dados) => ({
  type: FETCHA_AS_MOEDAS,
  payload: dados,
});

export { appLogin, fetchaMoedas };
