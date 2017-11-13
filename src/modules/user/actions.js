import axios from 'axios';
import env from '../../env';
import {
  REQUEST_SENT,
  LOGIN_REQUEST_COMPLETE,
  REGISTER_REQUEST_COMPLETE,
  REQUEST_ERROR,
} from '../enums';

export const login = (username, password) => (dispatch) => {
  dispatch({
    type: REQUEST_SENT,
  });

  axios.post(`${env.TODO_LIST_API}/login`, {
    username,
    password,
  })
    .then((data) => {
      dispatch({
        type: LOGIN_REQUEST_COMPLETE,
        data,
      });
    })
    .catch(() => {
      dispatch({
        type: REQUEST_ERROR,
      });
    });
};

export const register = (username, password) => (dispatch) => {
  dispatch({
    type: REQUEST_SENT,
  });

  axios.post(`${env.TODO_LIST_API}/register`, {
    username,
    password,
  })
    .then((data) => {
      dispatch({
        type: REGISTER_REQUEST_COMPLETE,
        data,
      });
    })
    .catch(() => {
      dispatch({
        type: REQUEST_ERROR,
      });
    });
};
