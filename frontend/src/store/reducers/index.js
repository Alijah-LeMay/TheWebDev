import { combineReducers } from 'redux';
import { siteListReducer } from './siteReducers';
import { userLoginReducer } from './userReducers';

export default combineReducers({
  siteList: siteListReducer,
  userLogin: userLoginReducer,
});
