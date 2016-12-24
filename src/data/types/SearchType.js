/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import {
  GraphQLObjectType as ObjectType,
  GraphQLID as ID,
  GraphQLString as StringType,
  GraphQLNonNull as NonNull,
  GraphQLInt as IntType,
} from 'graphql';

import UserType from './UserType'

const SearchType = new ObjectType({
  name: 'Search',
  fields: () => ({
    id: { type: new NonNull(ID) },
    userId: { type: new NonNull(ID) },
    user: {
      type: UserType,
      resolve(search){
        return search.getUser();
      }
    },
    localisation: { type: StringType },
    min_price: { type: IntType },
    max_price: { type: IntType },
    min_rooms: { type: IntType },
    max_rooms: { type: IntType },
    min_surface: { type: IntType },
    max_surface: { type: IntType },
  }),
});

export default SearchType;
