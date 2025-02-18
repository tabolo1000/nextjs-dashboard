/* eslint-disable */
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

export type AddWordInput = {
  annotation: Scalars['String']['input'];
  collections: Array<Scalars['String']['input']>;
  derivatives: Array<Scalars['String']['input']>;
  description: Scalars['String']['input'];
  icon?: InputMaybe<Scalars['String']['input']>;
  joke: Scalars['String']['input'];
  morpheme?: InputMaybe<MorphemeInput>;
  quote: Scalars['String']['input'];
  title: Scalars['String']['input'];
};

export type Morpheme = {
  __typename?: 'Morpheme';
  end?: Maybe<Array<Scalars['String']['output']>>;
  prefix?: Maybe<Array<Scalars['String']['output']>>;
  root?: Maybe<Array<Scalars['String']['output']>>;
  suffix?: Maybe<Array<Scalars['String']['output']>>;
};

export type MorphemeInput = {
  end?: InputMaybe<Array<Scalars['String']['input']>>;
  prefix?: InputMaybe<Array<Scalars['String']['input']>>;
  root?: InputMaybe<Array<Scalars['String']['input']>>;
  suffix?: InputMaybe<Array<Scalars['String']['input']>>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createWord: Word;
  deleteWord?: Maybe<Word>;
  updateWord?: Maybe<Word>;
};


export type MutationCreateWordArgs = {
  word: AddWordInput;
};


export type MutationDeleteWordArgs = {
  id: Scalars['String']['input'];
};


export type MutationUpdateWordArgs = {
  word: UpdateWordInput;
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

export type UpdateWordInput = {
  _id: Scalars['String']['input'];
  annotation: Scalars['String']['input'];
  collections: Array<Scalars['String']['input']>;
  derivatives: Array<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  icon?: InputMaybe<Scalars['String']['input']>;
  joke: Scalars['String']['input'];
  morpheme?: InputMaybe<MorphemeInput>;
  quote: Scalars['String']['input'];
  title?: InputMaybe<Scalars['String']['input']>;
};

export type Word = {
  __typename?: 'Word';
  _id: Scalars['String']['output'];
  annotation?: Maybe<Scalars['String']['output']>;
  collections: Array<Scalars['String']['output']>;
  derivatives: Array<Scalars['String']['output']>;
  description: Scalars['String']['output'];
  joke?: Maybe<Scalars['String']['output']>;
  morpheme?: Maybe<Morpheme>;
  quote: Scalars['String']['output'];
  title: Scalars['String']['output'];
};

export type MorphemeWordFragment = { __typename?: 'Morpheme', prefix?: Array<string> | null, root?: Array<string> | null, suffix?: Array<string> | null, end?: Array<string> | null };

export type WordWithoutIdFragment = { __typename?: 'Word', title: string, description: string, quote: string, joke?: string | null, annotation?: string | null, derivatives: Array<string>, collections: Array<string>, morpheme?: { __typename?: 'Morpheme', prefix?: Array<string> | null, root?: Array<string> | null, suffix?: Array<string> | null, end?: Array<string> | null } | null };

export type WordFragment = { __typename?: 'Word', _id: string, title: string, description: string, quote: string, joke?: string | null, annotation?: string | null, derivatives: Array<string>, collections: Array<string>, morpheme?: { __typename?: 'Morpheme', prefix?: Array<string> | null, root?: Array<string> | null, suffix?: Array<string> | null, end?: Array<string> | null } | null };

export type SearchWordsQueryVariables = Exact<{
  substring: Scalars['String']['input'];
  limit: Scalars['Float']['input'];
}>;


export type SearchWordsQuery = { __typename?: 'Query', searchWords: Array<{ __typename?: 'Word', _id: string, title: string, description: string, morpheme?: { __typename?: 'Morpheme', prefix?: Array<string> | null, root?: Array<string> | null, suffix?: Array<string> | null, end?: Array<string> | null } | null }> };

export type GetWordsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetWordsQuery = { __typename?: 'Query', words: Array<{ __typename?: 'Word', _id: string, title: string, description: string, quote: string, joke?: string | null, annotation?: string | null, derivatives: Array<string>, collections: Array<string>, morpheme?: { __typename?: 'Morpheme', prefix?: Array<string> | null, root?: Array<string> | null, suffix?: Array<string> | null, end?: Array<string> | null } | null }> };

export type UpdateWordMutationVariables = Exact<{
  word: UpdateWordInput;
}>;


export type UpdateWordMutation = { __typename?: 'Mutation', updateWord?: { __typename?: 'Word', _id: string, title: string, description: string, quote: string, joke?: string | null, annotation?: string | null, derivatives: Array<string>, collections: Array<string>, morpheme?: { __typename?: 'Morpheme', prefix?: Array<string> | null, root?: Array<string> | null, suffix?: Array<string> | null, end?: Array<string> | null } | null } | null };

export type DeleteWordMutationVariables = Exact<{
  id: Scalars['String']['input'];
}>;


export type DeleteWordMutation = { __typename?: 'Mutation', deleteWord?: { __typename?: 'Word', _id: string, title: string, description: string, quote: string, joke?: string | null, annotation?: string | null, derivatives: Array<string>, collections: Array<string>, morpheme?: { __typename?: 'Morpheme', prefix?: Array<string> | null, root?: Array<string> | null, suffix?: Array<string> | null, end?: Array<string> | null } | null } | null };

export type CreateWordMutationVariables = Exact<{
  word: AddWordInput;
}>;


export type CreateWordMutation = { __typename?: 'Mutation', createWord: { __typename?: 'Word', _id: string, title: string, description: string, quote: string, joke?: string | null, annotation?: string | null, derivatives: Array<string>, collections: Array<string>, morpheme?: { __typename?: 'Morpheme', prefix?: Array<string> | null, root?: Array<string> | null, suffix?: Array<string> | null, end?: Array<string> | null } | null } };

export const MorphemeWordFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MorphemeWord"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Morpheme"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"prefix"}},{"kind":"Field","name":{"kind":"Name","value":"root"}},{"kind":"Field","name":{"kind":"Name","value":"suffix"}},{"kind":"Field","name":{"kind":"Name","value":"end"}}]}}]} as unknown as DocumentNode<MorphemeWordFragment, unknown>;
export const WordWithoutIdFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"WordWithoutID"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Word"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"morpheme"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MorphemeWord"}}]}},{"kind":"Field","name":{"kind":"Name","value":"quote"}},{"kind":"Field","name":{"kind":"Name","value":"joke"}},{"kind":"Field","name":{"kind":"Name","value":"annotation"}},{"kind":"Field","name":{"kind":"Name","value":"derivatives"}},{"kind":"Field","name":{"kind":"Name","value":"collections"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MorphemeWord"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Morpheme"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"prefix"}},{"kind":"Field","name":{"kind":"Name","value":"root"}},{"kind":"Field","name":{"kind":"Name","value":"suffix"}},{"kind":"Field","name":{"kind":"Name","value":"end"}}]}}]} as unknown as DocumentNode<WordWithoutIdFragment, unknown>;
export const WordFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Word"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Word"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_id"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"WordWithoutID"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MorphemeWord"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Morpheme"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"prefix"}},{"kind":"Field","name":{"kind":"Name","value":"root"}},{"kind":"Field","name":{"kind":"Name","value":"suffix"}},{"kind":"Field","name":{"kind":"Name","value":"end"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"WordWithoutID"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Word"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"morpheme"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MorphemeWord"}}]}},{"kind":"Field","name":{"kind":"Name","value":"quote"}},{"kind":"Field","name":{"kind":"Name","value":"joke"}},{"kind":"Field","name":{"kind":"Name","value":"annotation"}},{"kind":"Field","name":{"kind":"Name","value":"derivatives"}},{"kind":"Field","name":{"kind":"Name","value":"collections"}}]}}]} as unknown as DocumentNode<WordFragment, unknown>;
export const SearchWordsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"searchWords"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"substring"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"limit"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Float"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"searchWords"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"substring"},"value":{"kind":"Variable","name":{"kind":"Name","value":"substring"}}},{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"Variable","name":{"kind":"Name","value":"limit"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"morpheme"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MorphemeWord"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MorphemeWord"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Morpheme"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"prefix"}},{"kind":"Field","name":{"kind":"Name","value":"root"}},{"kind":"Field","name":{"kind":"Name","value":"suffix"}},{"kind":"Field","name":{"kind":"Name","value":"end"}}]}}]} as unknown as DocumentNode<SearchWordsQuery, SearchWordsQueryVariables>;
export const GetWordsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getWords"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"words"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Word"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MorphemeWord"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Morpheme"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"prefix"}},{"kind":"Field","name":{"kind":"Name","value":"root"}},{"kind":"Field","name":{"kind":"Name","value":"suffix"}},{"kind":"Field","name":{"kind":"Name","value":"end"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"WordWithoutID"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Word"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"morpheme"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MorphemeWord"}}]}},{"kind":"Field","name":{"kind":"Name","value":"quote"}},{"kind":"Field","name":{"kind":"Name","value":"joke"}},{"kind":"Field","name":{"kind":"Name","value":"annotation"}},{"kind":"Field","name":{"kind":"Name","value":"derivatives"}},{"kind":"Field","name":{"kind":"Name","value":"collections"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Word"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Word"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_id"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"WordWithoutID"}}]}}]} as unknown as DocumentNode<GetWordsQuery, GetWordsQueryVariables>;
export const UpdateWordDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"updateWord"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"word"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UpdateWordInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateWord"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"word"},"value":{"kind":"Variable","name":{"kind":"Name","value":"word"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Word"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MorphemeWord"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Morpheme"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"prefix"}},{"kind":"Field","name":{"kind":"Name","value":"root"}},{"kind":"Field","name":{"kind":"Name","value":"suffix"}},{"kind":"Field","name":{"kind":"Name","value":"end"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"WordWithoutID"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Word"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"morpheme"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MorphemeWord"}}]}},{"kind":"Field","name":{"kind":"Name","value":"quote"}},{"kind":"Field","name":{"kind":"Name","value":"joke"}},{"kind":"Field","name":{"kind":"Name","value":"annotation"}},{"kind":"Field","name":{"kind":"Name","value":"derivatives"}},{"kind":"Field","name":{"kind":"Name","value":"collections"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Word"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Word"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_id"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"WordWithoutID"}}]}}]} as unknown as DocumentNode<UpdateWordMutation, UpdateWordMutationVariables>;
export const DeleteWordDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"deleteWord"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deleteWord"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Word"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MorphemeWord"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Morpheme"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"prefix"}},{"kind":"Field","name":{"kind":"Name","value":"root"}},{"kind":"Field","name":{"kind":"Name","value":"suffix"}},{"kind":"Field","name":{"kind":"Name","value":"end"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"WordWithoutID"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Word"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"morpheme"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MorphemeWord"}}]}},{"kind":"Field","name":{"kind":"Name","value":"quote"}},{"kind":"Field","name":{"kind":"Name","value":"joke"}},{"kind":"Field","name":{"kind":"Name","value":"annotation"}},{"kind":"Field","name":{"kind":"Name","value":"derivatives"}},{"kind":"Field","name":{"kind":"Name","value":"collections"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Word"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Word"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_id"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"WordWithoutID"}}]}}]} as unknown as DocumentNode<DeleteWordMutation, DeleteWordMutationVariables>;
export const CreateWordDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"createWord"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"word"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"AddWordInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createWord"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"word"},"value":{"kind":"Variable","name":{"kind":"Name","value":"word"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Word"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MorphemeWord"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Morpheme"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"prefix"}},{"kind":"Field","name":{"kind":"Name","value":"root"}},{"kind":"Field","name":{"kind":"Name","value":"suffix"}},{"kind":"Field","name":{"kind":"Name","value":"end"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"WordWithoutID"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Word"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"morpheme"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MorphemeWord"}}]}},{"kind":"Field","name":{"kind":"Name","value":"quote"}},{"kind":"Field","name":{"kind":"Name","value":"joke"}},{"kind":"Field","name":{"kind":"Name","value":"annotation"}},{"kind":"Field","name":{"kind":"Name","value":"derivatives"}},{"kind":"Field","name":{"kind":"Name","value":"collections"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Word"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Word"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_id"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"WordWithoutID"}}]}}]} as unknown as DocumentNode<CreateWordMutation, CreateWordMutationVariables>;