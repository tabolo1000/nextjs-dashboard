import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
    schema: "http://localhost:3001/graphql",
    documents: [
        "./app/**/*.{graphql,ts}",
        "./app/@graphql/**/*.{graphql,ts}",
    ],
    generates: {
        "./app/@graphql/@generated/": {
            preset: "client",
            presetConfig: {
                gqlTagName: "gql",
                fragmentMasking: false
            }
        }
    },
    config: {
        schemaDescription: true
    }
};

export default config;