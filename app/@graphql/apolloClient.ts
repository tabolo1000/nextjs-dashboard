import {ApolloClient, HttpLink, InMemoryCache} from "@apollo/client";
import {createFragmentRegistry} from "@apollo/client/cache";
import {WordsFragments} from "@/app/@graphql/@fragments/users";

/**
 * I create apollo for a client
 * and pass snippets for comfort use.
 */
const client = new ApolloClient({
    link: new HttpLink({
        uri: process.env.NEXT_PUBLIC_API_URL?.trim()
            ? `${process.env.NEXT_PUBLIC_API_URL}/graphql`
            : "http://localhost:3001/graphql",
        credentials: "include",
    }),
    cache: new InMemoryCache({
        fragments: createFragmentRegistry(
            WordsFragments.MorphemeWord, // Word morpheme fragment
            WordsFragments.SliderWord, // Full word for slider
            WordsFragments.WordWithoutID,
        ),
    }),
    /*defaultOptions: {
        watchQuery: {
            fetchPolicy: "no-cache",
        },
    },*/
});

export default client;
