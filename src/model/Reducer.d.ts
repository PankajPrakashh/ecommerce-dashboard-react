export enum ReduxActionType {
  AUTH_LOGIN = 'AUTH_LOGIN',
  AUTH_LOGIN_SUCCESS = 'AUTH_LOGIN_SUCCESS',
};

export interface ReduxAction {
  type: ReduxActionType;
  payload?: any;
}