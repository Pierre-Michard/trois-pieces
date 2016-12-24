/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import DataType from 'sequelize';
import Model from '../sequelize';
import User from './User';

const Search = Model.define('Search', {

  id: {
    type: DataType.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },

  localisation: {
    type: DataType.STRING(120),
    allowNull: false,
  },

  min_price: {
    type: DataType.INTEGER,
    allowNull: true,
  },

  max_price: {
    type: DataType.INTEGER,
    allowNull: true,
  },

  min_rooms: {
    type: DataType.INTEGER,
    allowNull: true,
  },

  max_rooms: {
    type: DataType.INTEGER,
    allowNull: true,
  },

  min_surface: {
    type: DataType.INTEGER,
    allowNull: true,
  },

  max_surface: {
    type: DataType.INTEGER,
    allowNull: true,
  },

}, {

  timestamps: true,

  updatedAt: false,

  classMethods: {
  },

  instanceMethods: {
  },

});


export default Search;
