import { combineReducers } from 'redux'
import {
  siteListReducer,
  siteCreateReducer,
  siteDeleteReducer,
  siteUpdateReducer,
  siteDetailsReducer,
} from './siteReducers'
import { userLoginReducer } from './userReducers'
import {
  blogListReducer,
  blogCreateReducer,
  blogUpdateReducer,
  blogDetailsReducer,
  blogDeleteReducer,
} from './blogReducers'

import {
  courseListReducer,
  courseCreateReducer,
  courseDeleteReducer,
  courseDetailsReducer,
  courseUpdateReducer,
} from './courseReducers'

import { captchaReducer } from './captchaReducers'

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
  courseList: courseListReducer,
  courseCreate: courseCreateReducer,
  courseUpdate: courseUpdateReducer,
  courseDetails: courseDetailsReducer,
  courseDelete: courseDeleteReducer,

  captcha: captchaReducer,
})
