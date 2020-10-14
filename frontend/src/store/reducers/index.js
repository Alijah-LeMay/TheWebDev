import { combineReducers } from 'redux';
import {
  siteListReducer,
  siteCreateReducer,
  siteUpdateReducer,
} from './siteReducers';
import { userLoginReducer } from './userReducers';

export default combineReducers({
  siteList: siteListReducer,
  siteCreate: siteCreateReducer,
  siteUpdate: siteUpdateReducer,
  userLogin: userLoginReducer,
});
