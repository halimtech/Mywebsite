import { ApolloClient, InMemoryCache } from '@apollo/client';

export const apolloCli =
    new ApolloClient({
        uri: 'http://127.0.0.1:8080/graphql',
        cache: new InMemoryCache()
    });