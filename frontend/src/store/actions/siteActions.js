import axios from 'axios';
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
  UPDATE_SITE_REQUEST,
  UPDATE_SITE_SUCCESS,
  UPDATE_SITE_FAIL,
} from '../../constants/siteConstants';

export const getSites = () => async (dispatch) => {
  try {
    dispatch({ type: GET_SITES_REQUEST });

    const { data } = await axios.get('/api/ourwork');

    dispatch({
      type: GET_SITES_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: GET_SITES_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
export const getSiteDetails = (id) => async (dispatch, getState) => {
  try {
    dispatch({ type: GET_SITE_DETAILS_REQUEST });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.get(`/api/ourwork/${id}`, config);

    dispatch({
      type: GET_SITE_DETAILS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: GET_SITE_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const createSite = () => async (dispatch, getState) => {
  try {
    dispatch({ type: CREATE_SITE_REQUEST });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.post('/api/ourwork', {}, config);

    dispatch({
      type: CREATE_SITE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: CREATE_SITE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const updateSite = (site) => async (dispatch, getState) => {
  try {
    dispatch({ type: UPDATE_SITE_REQUEST });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.put(`/api/ourwork/${site._id}`, site, config);

    dispatch({
      type: UPDATE_SITE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: UPDATE_SITE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
