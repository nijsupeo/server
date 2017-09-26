import { makeExecutableSchema, addMockFunctionsToSchema } from 'graphql-tools';
import { resolvers } from './resolvers';

const typeDefs = `
	type Location {
		location: String
	}
	
	# The schema allows the following query:
	type Query {
		locations: [Location]
	}
	
	# The schema allows the following mutation:
	type Mutation {
		# A mutation to create a new location
		createLocation(location: String): Location
	}
`;

const schema = makeExecutableSchema({ typeDefs, resolvers });
export { schema };