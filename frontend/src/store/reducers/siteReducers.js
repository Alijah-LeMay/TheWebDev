import {
  GET_SITES_REQUEST,
  GET_SITES_SUCCESS,
  GET_SITES_FAIL,
  GET_SITE_DETAILS_REQUEST,
  GET_SITE_DETAILS_SUCCESS,
  GET_SITE_DETAILS_FAIL,
  CREATE_SITE_REQUEST,
  CREATE_SITE_SUCCESS,
  CREATE_SITE_FAIL,
  CREATE_SITE_RESET,
  DELETE_SITE_REQUEST,
  DELETE_SITE_SUCCESS,
  DELETE_SITE_FAIL,
  UPDATE_SITE_REQUEST,
  UPDATE_SITE_SUCCESS,
  UPDATE_SITE_FAIL,
  UPDATE_SITE_RESET,
} from '../constants/siteConstants'

export const siteListReducer = (state = { sites: [] }, action) => {
  switch (action.type) {
    case GET_SITES_REQUEST:
      return { loading: true, sites: [] }
    case GET_SITES_SUCCESS:
      return { loading: false, sites: action.payload }
    case GET_SITES_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}
export const siteDetailsReducer = (state = { site: {} }, action) => {
  switch (action.type) {
    case GET_SITE_DETAILS_REQUEST:
      return { loading: true, ...state }
    case GET_SITE_DETAILS_SUCCESS:
      return { loading: false, site: action.payload }
    case GET_SITE_DETAILS_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}
export const siteCreateReducer = (state = {}, action) => {
  switch (action.type) {
    case CREATE_SITE_REQUEST:
      return { loading: true }
    case CREATE_SITE_SUCCESS:
      return { loading: false, success: true, site: action.payload }
    case CREATE_SITE_FAIL:
      return { loading: false, error: action.payload }
    case CREATE_SITE_RESET:
      return {}
    default:
      return state
  }
}
export const siteDeleteReducer = (state = {}, action) => {
  switch (action.type) {
    case DELETE_SITE_REQUEST:
      return { loading: true }
    case DELETE_SITE_SUCCESS:
      return { loading: false, success: true }
    case DELETE_SITE_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}
export const siteUpdateReducer = (state = { site: {} }, action) => {
  switch (action.type) {
    case UPDATE_SITE_REQUEST:
      return { loading: true }
    case UPDATE_SITE_SUCCESS:
      return { loading: false, success: true, site: action.payload }
    case UPDATE_SITE_FAIL:
      return { loading: false, error: action.payload }
    case UPDATE_SITE_RESET:
      return { site: {} }
    default:
      return state
  }
}
