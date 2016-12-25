/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import {
  UPDATE_SEARCH,
  GET_SEARCH_REQUEST, GET_SEARCH_SUCCESS, GET_SEARCH_FAILURE,
  SAVE_SEARCH_REQUEST, SAVE_SEARCH_SUCCESS, SAVE_SEARCH_FAILURE,
} from '../constants/search';

const initialState = {
  isFetching: false,
  localisation: '75013',
  min_price: 300000,
  max_price: 500000,
  min_rooms: 2,
  max_rooms: 3,
  min_surface: 40,
  max_surface: 60,
};

export default function search(state = initialState, action) {
  switch (action.type) {
    case UPDATE_SEARCH:
      return {
        ...state,
        ...action.payload.search,
      };
    case SAVE_SEARCH_REQUEST:
      return {
        ...state,
        isFetching: true,
      };
    case SAVE_SEARCH_SUCCESS:
      return {
        ...state,
        isFetching: false,
      };
    case SAVE_SEARCH_FAILURE:
      return {
        ...state,
        isFetching: false,
      };
    case GET_SEARCH_REQUEST:
      return {
        ...state,
      };
    case GET_SEARCH_SUCCESS:
      return {
        ...state,
        ...action.payload.search,
      };
    case GET_SEARCH_FAILURE:
      return {
        ...state,
        errors: action.payload.errors,
      };


    default:
      return state;
  }
}
