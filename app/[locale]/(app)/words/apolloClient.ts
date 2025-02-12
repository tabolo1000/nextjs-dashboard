import {ApolloClient, HttpLink, InMemoryCache} from "@apollo/client";
import {onError} from "@apollo/client/link/error";

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
        uri: process.env.NEXT_PUBLIC_API_URL?.trim() +  "/graphql" || "http://localhost:3001/graphql",
        credentials: "same-origin", // Для передачи cookies (auth)
    }),
    cache: new InMemoryCache(),
});

export default client;

