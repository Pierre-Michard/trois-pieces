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

const Advert = Model.define('Advert', {

  id: {
    type: DataType.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },

  url: {
    type: DataType.STRING(255),
    unique: true,
    allowNull: false,
  },

  picture: {
    type: DataType.STRING(255),
    unique: true,
  },

  price: {
    type: DataType.INTEGER,
  },

  publicationDate: {
    type: DataType.DATE,
  },

  title: {
    type: DataType.STRING(255),
  },

}, {

  timestamps: true,

  updatedAt: false,

  classMethods: {
  },

  instanceMethods: {
  },

  indexes: [
    { fields: ['url', 'publicationDate'] },
  ],

});

export default Advert;
