import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import userReducers from './user/reducers';

const app = (state, action) => {
  let newState;

  newState = userReducers(state, action);

  return newState;
};

export default combineReducers({
  router: routerReducer,
  app,
});
