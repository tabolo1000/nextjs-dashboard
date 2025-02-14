import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export type Morpheme = {
  __typename?: 'Morpheme';
  end?: Maybe<Array<Scalars['String']['output']>>;
  prefix?: Maybe<Array<Scalars['String']['output']>>;
  root?: Maybe<Array<Scalars['String']['output']>>;
  suffix?: Maybe<Array<Scalars['String']['output']>>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createWord: Word;
  deleteWord?: Maybe<Word>;
  updateWord?: Maybe<Word>;
};


export type MutationCreateWordArgs = {
  title: Scalars['String']['input'];
};


export type MutationDeleteWordArgs = {
  id: Scalars['String']['input'];
};


export type MutationUpdateWordArgs = {
  id: Scalars['String']['input'];
  title?: InputMaybe<Scalars['String']['input']>;
};

export type Query = {
  __typename?: 'Query';
  searchWords: Array<Word>;
  word?: Maybe<Word>;
  words: Array<Word>;
};


export type QuerySearchWordsArgs = {
  limit: Scalars['Float']['input'];
  substring: Scalars['String']['input'];
};


export type QueryWordArgs = {
  id: Scalars['String']['input'];
};


export type QueryWordsArgs = {
  collectionName?: InputMaybe<Scalars['String']['input']>;
};

export type Word = {
  __typename?: 'Word';
  annotation?: Maybe<Scalars['String']['output']>;
  collections: Array<Scalars['String']['output']>;
  derivatives: Array<Scalars['String']['output']>;
  description: Scalars['String']['output'];
  joke?: Maybe<Scalars['String']['output']>;
  morpheme?: Maybe<Morpheme>;
  quote: Scalars['String']['output'];
  title: Scalars['String']['output'];
};

export type SearchWordsQueryVariables = Exact<{
  substring: Scalars['String']['input'];
  limit: Scalars['Float']['input'];
}>;


export type SearchWordsQuery = { __typename?: 'Query', searchWords: Array<{ __typename?: 'Word', title: string, description: string, morpheme?: { __typename?: 'Morpheme', prefix?: Array<string> | null, root?: Array<string> | null, suffix?: Array<string> | null, end?: Array<string> | null } | null }> };

export type GetWordsQueryVariables = Exact<{
  collectionName?: InputMaybe<Scalars['String']['input']>;
}>;


export type GetWordsQuery = { __typename?: 'Query', words: Array<{ __typename?: 'Word', title: string, joke?: string | null }> };


export const SearchWordsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"searchWords"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"substring"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"limit"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Float"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"searchWords"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"substring"},"value":{"kind":"Variable","name":{"kind":"Name","value":"substring"}}},{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"Variable","name":{"kind":"Name","value":"limit"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"morpheme"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"prefix"}},{"kind":"Field","name":{"kind":"Name","value":"root"}},{"kind":"Field","name":{"kind":"Name","value":"suffix"}},{"kind":"Field","name":{"kind":"Name","value":"end"}}]}},{"kind":"Field","name":{"kind":"Name","value":"description"}}]}}]}}]} as unknown as DocumentNode<SearchWordsQuery, SearchWordsQueryVariables>;
export const GetWordsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetWords"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"collectionName"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"words"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"collectionName"},"value":{"kind":"Variable","name":{"kind":"Name","value":"collectionName"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"joke"}}]}}]}}]} as unknown as DocumentNode<GetWordsQuery, GetWordsQueryVariables>;