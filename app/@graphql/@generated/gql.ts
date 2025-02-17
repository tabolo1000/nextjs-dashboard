/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 * Learn more about it here: https://the-guild.dev/graphql/codegen/plugins/presets/preset-client#reducing-bundle-size
 */
type Documents = {
    "\n    fragment MorphemeWord on Morpheme {\n        prefix\n        root\n        suffix\n        end\n    }\n": typeof types.MorphemeWordFragmentDoc,
    "\n    fragment Word on Word {\n        _id,\n        title,\n        description,\n        morpheme {\n            ...MorphemeWord\n        },\n        quote,\n        joke,\n        annotation,\n        derivatives,\n        collections,\n    }\n": typeof types.WordFragmentDoc,
    "\n    query searchWords($substring: String!, $limit: Float!) {\n        searchWords(substring: $substring, limit: $limit) {\n            _id\n            title\n            description\n            morpheme {\n                ...MorphemeWord\n\n            }\n        }\n    }\n": typeof types.SearchWordsDocument,
    "\n    query getWords {\n        words {\n            ...Word\n        }\n    }\n": typeof types.GetWordsDocument,
    "\n    mutation updateWord($word: UpdateWordInput!) {\n        updateWord(word: $word) {\n            ...Word\n        }\n}": typeof types.UpdateWordDocument,
    "\n    mutation deleteWord($id: String!) {\n        deleteWord(id: $id) {\n            ...Word\n        }\n    }\n": typeof types.DeleteWordDocument,
};
const documents: Documents = {
    "\n    fragment MorphemeWord on Morpheme {\n        prefix\n        root\n        suffix\n        end\n    }\n": types.MorphemeWordFragmentDoc,
    "\n    fragment Word on Word {\n        _id,\n        title,\n        description,\n        morpheme {\n            ...MorphemeWord\n        },\n        quote,\n        joke,\n        annotation,\n        derivatives,\n        collections,\n    }\n": types.WordFragmentDoc,
    "\n    query searchWords($substring: String!, $limit: Float!) {\n        searchWords(substring: $substring, limit: $limit) {\n            _id\n            title\n            description\n            morpheme {\n                ...MorphemeWord\n\n            }\n        }\n    }\n": types.SearchWordsDocument,
    "\n    query getWords {\n        words {\n            ...Word\n        }\n    }\n": types.GetWordsDocument,
    "\n    mutation updateWord($word: UpdateWordInput!) {\n        updateWord(word: $word) {\n            ...Word\n        }\n}": types.UpdateWordDocument,
    "\n    mutation deleteWord($id: String!) {\n        deleteWord(id: $id) {\n            ...Word\n        }\n    }\n": types.DeleteWordDocument,
};

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = gql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function gql(source: string): unknown;

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n    fragment MorphemeWord on Morpheme {\n        prefix\n        root\n        suffix\n        end\n    }\n"): (typeof documents)["\n    fragment MorphemeWord on Morpheme {\n        prefix\n        root\n        suffix\n        end\n    }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n    fragment Word on Word {\n        _id,\n        title,\n        description,\n        morpheme {\n            ...MorphemeWord\n        },\n        quote,\n        joke,\n        annotation,\n        derivatives,\n        collections,\n    }\n"): (typeof documents)["\n    fragment Word on Word {\n        _id,\n        title,\n        description,\n        morpheme {\n            ...MorphemeWord\n        },\n        quote,\n        joke,\n        annotation,\n        derivatives,\n        collections,\n    }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n    query searchWords($substring: String!, $limit: Float!) {\n        searchWords(substring: $substring, limit: $limit) {\n            _id\n            title\n            description\n            morpheme {\n                ...MorphemeWord\n\n            }\n        }\n    }\n"): (typeof documents)["\n    query searchWords($substring: String!, $limit: Float!) {\n        searchWords(substring: $substring, limit: $limit) {\n            _id\n            title\n            description\n            morpheme {\n                ...MorphemeWord\n\n            }\n        }\n    }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n    query getWords {\n        words {\n            ...Word\n        }\n    }\n"): (typeof documents)["\n    query getWords {\n        words {\n            ...Word\n        }\n    }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n    mutation updateWord($word: UpdateWordInput!) {\n        updateWord(word: $word) {\n            ...Word\n        }\n}"): (typeof documents)["\n    mutation updateWord($word: UpdateWordInput!) {\n        updateWord(word: $word) {\n            ...Word\n        }\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n    mutation deleteWord($id: String!) {\n        deleteWord(id: $id) {\n            ...Word\n        }\n    }\n"): (typeof documents)["\n    mutation deleteWord($id: String!) {\n        deleteWord(id: $id) {\n            ...Word\n        }\n    }\n"];

export function gql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;