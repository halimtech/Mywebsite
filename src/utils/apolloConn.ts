import { ApolloClient, InMemoryCache } from '@apollo/client';

export const apolloCli =
    new ApolloClient({
        uri: 'https://gql-halimtech.herokuapp.com/graphql',
        cache: new InMemoryCache()
    });