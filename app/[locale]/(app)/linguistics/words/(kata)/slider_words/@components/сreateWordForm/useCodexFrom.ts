import {FetchResult, useMutation} from "@apollo/client";
import {
    CreateWordDocument,
    CreateWordMutation,
    CreateWordMutationVariables, GetWordsDocument,
    GetWordsQuery
} from "@/app/@graphql/@generated/graphql";
import {useCallback} from "react";
import {CodexFormValues} from "@/app/[locale]/(app)/linguistics/words/(kata)/words.type";
import {FormikState} from "formik";


const useCodexFrom = () => {
    const [addWordToCarousel, {loading}] = useMutation<CreateWordMutation, CreateWordMutationVariables>(CreateWordDocument)

    // Form submission processing
    const handleSubmit = useCallback(
        async (values: CodexFormValues, {resetForm}: { resetForm:  (nextState?: (Partial<FormikState<CodexFormValues>> | undefined)) => void }) => {
            await addWordToCarousel({
                variables: {
                    word: values,
                },
                //  ExecutionPatchInitialResult<TData, TExtensions> !data = CreateWordMutation(TData)
                update(cache, {data}: FetchResult<CreateWordMutation>) {
                    const existingWords = cache.readQuery<GetWordsQuery>({ // returnPartialData? | optimistic? | canonizeResults? | boolean; ReadQueryOptions<TData, TVariables> extends Query<TVariables, TData>
                        query: GetWordsDocument, // !query, variables?, id?  from type Query<TVariables, TData>
                    });

                    if (existingWords && data?.createWord) {
                        cache.writeQuery<GetWordsQuery>({ // id, data, ...options(options: {query: DocumentNode | TypedDocumentNode<TData, TVariables> variables?: TVariables | undefined  broadcast?: boolean overwrite?: boolean )
                            query: GetWordsDocument,
                            data: {
                                words: [...existingWords.words, data?.createWord],
                            },
                        });
                    }
                },
            });
            resetForm();
        },
        [addWordToCarousel]
    );
    return {
        loading,
        handleSubmit,
    }
}
export default useCodexFrom;