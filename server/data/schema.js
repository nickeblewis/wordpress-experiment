/* eslint-disable no-unused-vars, no-use-before-define */
import {
  GraphQLBoolean,
  GraphQLFloat,
  GraphQLID,
  GraphQLInt,
  GraphQLList,
  GraphQLNonNull,
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLString
} from 'graphql';

import {
  connectionArgs,
  connectionDefinitions,
  connectionFromArray,
  fromGlobalId,
  globalIdField,
  mutationWithClientMutationId,
  nodeDefinitions
} from 'graphql-relay';

import {
  User,
  Post,
  getUser,
  getPost,
  getPosts
} from './database';


/**
 * We get the node interface and field from the Relay library.
 *
 * The first method defines the way we resolve an ID to its object.
 * The second defines the way we resolve an object to its GraphQL type.
 */
const { nodeInterface, nodeField } = nodeDefinitions(
  (globalId) => {
    const { type, id } = fromGlobalId(globalId);
    if (type === 'User') {
      return getUser(id);
    } else if (type === 'Post') {
      return getPost(id);
    }
    return null;
  },
  (obj) => {
    if (obj instanceof User) {
      return userType;
    } else if (obj instanceof Post) {
      return postType;
    }
    return null;
  }
);

/**
 * Define your own types here
 */

const userType = new GraphQLObjectType({
  name: 'User',
  description: 'A person who uses our app',
  fields: () => ({
    id: globalIdField('User'),
    posts: {
      type: postConnection,
      description: 'My lovingly crafted posts',
      args: connectionArgs,
      resolve: (_, args) => connectionFromArray(getPosts(), args)
    },
    username: {
      type: GraphQLString,
      description: 'Users\'s username'
    },
    website: {
      type: GraphQLString,
      description: 'User\'s website'
    }
  }),
  interfaces: [nodeInterface]
});

const TitleType = new GraphQLObjectType({
  name: 'Title',
  fields: {
    rendered: {
      type: GraphQLString
    }
  }
});

const ExcerptType = new GraphQLObjectType({
  name: 'Excerpt',
  fields: {
    rendered: {
      type: GraphQLString
    }
  }
});

const postType = new GraphQLObjectType({
  name: 'Post',
  description: 'Post integrated in our starter kit',
  fields: () => ({
    id: globalIdField('Post'),
    title: {
      type: TitleType,
      description: 'Our blog post title'
    },
    excerpt: {
      type: ExcerptType,
      description: 'Brief synopsis of what the post is about'
    },
    slug: {
      type: GraphQLString,
      description: 'The post slug'
    },
    link: {
      type: GraphQLString,
      description: 'The good old link sunshine'
    },
    type: {
      type: GraphQLString,
      description: 'The type of post that this chap is'
    }
  }),
  interfaces: [nodeInterface]
});

/**
 * Define your own connection types here
 */
const { connectionType: postConnection } = connectionDefinitions({ name: 'Post', nodeType: postType });

/**
 * This is the type that will be the root of our query,
 * and the entry point into our schema.
 */
const queryType = new GraphQLObjectType({
  name: 'Query',
  fields: () => ({
    node: nodeField,
    // Add your own root fields here
    viewer: {
      type: userType,
      resolve: () => getUser('1')
    }
  })
});

/**
 * This is the type that will be the root of our mutations,
 * and the entry point into performing writes in our schema.
 */
const mutationType = new GraphQLObjectType({
  name: 'Mutation',
  fields: () => ({
    // Add your own mutations here
  })
});

/**
 * Finally, we construct our schema (whose starting query type is the query
 * type we defined above) and export it.
 */
export default new GraphQLSchema({
  query: queryType
  // Uncomment the following after adding some mutation fields:
  // mutation: mutationType
});
