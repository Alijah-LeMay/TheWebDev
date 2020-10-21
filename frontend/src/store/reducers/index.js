import { combineReducers } from 'redux';
import {
  siteListReducer,
  siteCreateReducer,
  siteDeleteReducer,
  siteUpdateReducer,
  siteDetailsReducer,
} from './siteReducers';
import { userLoginReducer } from './userReducers';
import {
  blogListReducer,
  blogCreateReducer,
  blogUpdateReducer,
  blogDetailsReducer,
  blogDeleteReducer,
} from './blogReducers';

export default combineReducers({
  siteList: siteListReducer,
  siteDetails: siteDetailsReducer,
  siteCreate: siteCreateReducer,
  siteDelete: siteDeleteReducer,
  siteUpdate: siteUpdateReducer,
  userLogin: userLoginReducer,
  blogList: blogListReducer,
  blogCreate: blogCreateReducer,
  blogUpdate: blogUpdateReducer,
  blogDetails: blogDetailsReducer,
  blogDelete: blogDeleteReducer,
});
