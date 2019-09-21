import * as types from './actionTypes';
import { initialState } from '.';

export default function reducer(state = initialState, { type, payload }) {
  switch (type) {
    case types.CHANGE_MESSAGE:
      return {
        ...state,
        message: payload.message,
      };
    default:
      return state;
  }
}
