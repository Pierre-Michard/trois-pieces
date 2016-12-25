import {
  GraphQLObjectType as ObjectType,
  GraphQLNonNull as NonNull,
  GraphQLString as StringType,
  GraphQLInt as IntType,
} from 'graphql';
import SearchType from '../types/SearchType';
import ErrorType from '../types/ErrorType';
import { Search } from '../models';

const updateSearch = {
  type: SearchType,
  args: {
    localisation: { type: StringType },
    min_price: { type: IntType },
    max_price: { type: IntType },
    min_rooms: { type: IntType },
    max_rooms: { type: IntType },
    min_surface: { type: IntType },
    max_surface: { type: IntType }
  },
  resolve: (user, args) => {
    return user
      .getSearch(args)
      .then((search) => {
        if (search == null) {
          return user.createSearch(args);
        } else {
          return search.update(args);
        }
      })
  }
};

export { updateSearch };
