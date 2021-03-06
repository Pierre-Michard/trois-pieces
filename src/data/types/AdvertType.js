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
  GraphQLInt as IntType,
  GraphQLString as StringType,
  GraphQLNonNull as NonNull,
} from 'graphql';

const UserType = new ObjectType({
  name: 'Advert',
  fields: {
    id: { type: new NonNull(ID) },
    url: { type: StringType },
    picture: { type: StringType },
    price: { type: IntType },
    publicationDate: { type: StringType },
    title: { type: StringType },
    createdAt: { type: StringType },
  },
});

export default UserType;
