import {ApolloClient, HttpLink, InMemoryCache} from "@apollo/client";

/*const errorLink = onError(({ graphQLErrors, networkError }) => {
    if (graphQLErrors) {
        graphQLErrors.forEach(({ message, locations, path }) =>
            console.error(`[GraphQL error]: Message: ${message}, Path: ${path}`)
        );
    }
    if (networkError) {
        console.error(`[Network error]: ${networkError}`);
    }
});*/

const client = new ApolloClient({
    link: new HttpLink({
        uri: process.env.NEXT_PUBLIC_API_URL?.trim()
            ? `${process.env.NEXT_PUBLIC_API_URL}/graphql`
            : "http://localhost:3001/graphql",
        credentials: "include", // Для кросс-доменных запросов
    }),
    cache: new InMemoryCache(),
});

export default client;

