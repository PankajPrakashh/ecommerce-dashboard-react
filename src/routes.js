const ROOT = '';

const AUTH                = `${ROOT}/auth`;
const AUTH_LOGIN          = `${AUTH}/login`;
const AUTH_SIGNUP         = `${AUTH}/signup`;
const AUTH_PASSWORD_RESET = `${AUTH}/password-reset`;

const APP           = `${ROOT}/app`;
const APP_DASHBOARD = `${APP}/dashboard`;

export const appRoute = {
  root: ROOT,
  default: AUTH,
  notFound: AUTH,

  auth: {
    root: AUTH,
    default: AUTH_LOGIN,
    notFound: AUTH_LOGIN,

    login: AUTH_LOGIN,
    signup: AUTH_SIGNUP,
    passwordReset: AUTH_PASSWORD_RESET,
  },
  app: {
    root: APP,
    default: APP_DASHBOARD,
    notFound: APP_DASHBOARD,

    dashboard: APP_DASHBOARD,
  }
};
