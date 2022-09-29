// Coloque aqui suas actions
export const LOGA_USUARIO = 'LOGA_USUARIO';

const appLogin = (dados) => ({
  type: LOGA_USUARIO,
  payload: dados,
});

export { appLogin };
