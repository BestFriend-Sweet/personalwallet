export const LOGA_USUARIO = 'LOGA_USUARIO';
export const FETCHA_AS_MOEDAS = 'FETCHA_AS_MOEDAS';
export const NOVA_DESPESA = 'NOVA_DESPESA';
export const DELETA_DESPESA = 'DELETA_DESPESA';

const appLogin = (dados) => ({
  type: LOGA_USUARIO,
  payload: dados,
});

const fetchaMoedas = (dados) => ({
  type: FETCHA_AS_MOEDAS,
  payload: dados,
});

const gastaNoGlobal = (dados) => ({
  type: NOVA_DESPESA,
  payload: dados,
});

const deletaNoGlobal = (dados) => ({
  type: DELETA_DESPESA,
  payload: dados,
});

export { appLogin, fetchaMoedas, gastaNoGlobal, deletaNoGlobal };
