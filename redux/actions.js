import * as types from './actionTypes';

export const CHANGE_MESSAGE = (message) => ({
  type: types.CHANGE_MESSAGE,
  payload: { message },
});
