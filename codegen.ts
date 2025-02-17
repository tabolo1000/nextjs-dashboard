import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
    schema: "http://localhost:3001/graphql",
    documents: [
        "./app/**/*.graphql",
        "./app/@graphql/**/*.ts|*.graphql",
        "./app/**/*.ts*"
    ],
    generates: {
        "./app/@graphql/@generated/": {
            preset: "client",
            plugins: [

            ],
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