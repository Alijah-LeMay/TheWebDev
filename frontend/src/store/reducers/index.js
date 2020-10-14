import { combineReducers } from 'redux';
import {
  siteListReducer,
  siteCreateReducer,
  siteUpdateReducer,
  siteDetailsReducer,
} from './siteReducers';
import { userLoginReducer } from './userReducers';

export default combineReducers({
  siteList: siteListReducer,
  siteDetails: siteDetailsReducer,
  siteCreate: siteCreateReducer,
  siteUpdate: siteUpdateReducer,
  userLogin: userLoginReducer,
});
