/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import { GraphQLList as List } from 'graphql';
import AdvertType from '../types/AdvertType';
import { Advert } from '../models';


const adverts = {
  type: new List(AdvertType),
  async resolve() {
    return await Advert.findAll({order: [['publicationDate', 'DESC']]});
  },
};

export default adverts;
