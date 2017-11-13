import {
  REQUEST_SENT,
  LOGIN_REQUEST_COMPLETE,
  REGISTER_REQUEST_COMPLETE,
  REQUEST_ERROR,
} from '../enums';

const initialState = {
  view: 'LOGIN',
  user: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case REQUEST_SENT:
      return {
        ...state,
        view: 'LOADING',
      };

    case REQUEST_ERROR:
      return {
        ...state,
        view: 'ERROR',
      };

    case LOGIN_REQUEST_COMPLETE:
      if (action.data.errors) {
        return {
          ...state,
          view: 'ERROR',
          errors: action.data.errors,
        };
      }

      return {
        ...state,
        view: 'LOGGED_IN',
        user: action.data,
      };

    case REGISTER_REQUEST_COMPLETE:
      if (action.data.errors) {
        return {
          ...state,
          view: 'ERROR',
          errors: action.data.errors,
        };
      }

      return {
        ...state,
        view: 'REGISTER_COMPLETE',
      };

    default:
      return state;
  }
};
