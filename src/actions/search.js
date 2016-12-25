/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import {
  GET_SEARCH_REQUEST, GET_SEARCH_SUCCESS, GET_SEARCH_FAILURE,
  UPDATE_SEARCH, SAVE_SEARCH_REQUEST, SAVE_SEARCH_SUCCESS, SAVE_SEARCH_FAILURE,
} from '../constants/search';
import history from '../core/history';


function getSearchRequest() {

  return {
    type: GET_SEARCH_REQUEST,
    payload: {}
  };
}

function getSearchSuccess(search) {

  return {
    type: GET_SEARCH_SUCCESS,
    payload: {search}
  };
}

function getSearchFailure(errors) {

  return {
    type: GET_SEARCH_FAILURE,
    payload: {errors}
  };
}

function updateSearchEvt(search) {

  return {
    type: UPDATE_SEARCH,
    payload: {
      search
    }
  };
}

function saveSearchRequest(search) {
  return {
    type: SAVE_SEARCH_REQUEST,
    payload: {
      search
    },
  };
}

function saveSearchSuccess(search) {
  return {
    type: SAVE_SEARCH_SUCCESS,
    payload: {
      search
    },
  };
}

function saveSearchFailure(errors) {
  return {
    type: SAVE_SEARCH_FAILURE,
    payload: {
      errors,
    },
  };
}

export function saveSearch() {
  return async (dispatch, getState, { graphqlRequest }) => {
    dispatch(saveSearchRequest());

    try {
      const { data } = await graphqlRequest(`
        {
          me {
           id 
          }
        }
      `);

      const { data: { search}, errors } = data.search;

      if (errors.length > 0) {
        dispatch(saveSearchFailure(errors));
      } else {
        dispatch(saveSearchSuccess(search));

        //history.push('/');
      }
    } catch (e) {
      const errors = [
        {
          key: 'general',
          message: 'Unexpected server error',
        },
      ];
      dispatch(saveSearchFailure(errors));
    }
  };
}

export function updateSearch(search) {
  return (dispatch, getState) => {
    dispatch(updateSearchEvt(search));
  };
}

export function getSearch() {
  return async (dispatch, getState, { graphqlRequest }) => {
    dispatch(getSearchRequest());

    try {
      const { data } = await graphqlRequest(`
        query{
          me{
            search{
              localisation,
                min_surface,
                max_surface,
                min_price,
                max_price,
                min_rooms,
                max_rooms
            }
          }
        }
      `);

      const  { me:{search}, errors } = data;

      if (errors && errors.length > 0) {
        dispatch(getSearchFailure(errors));
      } else {
        dispatch(getSearchSuccess(search));
      }
    } catch (e) {
      const errors = [
        {
          key: 'general',
          message: `Unexpected server error: ${e.message}`,
        },
      ];
      dispatch(getSearchFailure(errors));
    }
  }
}
