import {GraphQLStringFactory, GraphQLURLType as _GraphQLURLType} from 'graphql-type-factory';

export const GraphQLURLType = _GraphQLURLType;

export const GraphQLEmailType = GraphQLStringFactory({
  name: 'email',
  min: 6,
  max: 300,
  regex: /.+@.+/
})

export const GraphQLPasswordType = GraphQLStringFactory({
  name: 'password',
  min: 6,
  max: 30
})

export const GraphQLTitleType = GraphQLStringFactory({
  name: 'title',
  min: 1,
  max: 30
})