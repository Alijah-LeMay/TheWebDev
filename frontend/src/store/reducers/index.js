import { combineReducers } from 'redux';
import {
  siteListReducer,
  siteCreateReducer,
  siteDeleteReducer,
  siteUpdateReducer,
  siteDetailsReducer,
} from './siteReducers';
import { userLoginReducer } from './userReducers';

export default combineReducers({
  siteList: siteListReducer,
  siteDetails: siteDetailsReducer,
  siteCreate: siteCreateReducer,
  siteDelete: siteDeleteReducer,
  siteUpdate: siteUpdateReducer,
  userLogin: userLoginReducer,
});
