import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
    schema: "http://localhost:3001/graphql",
    documents: ["./app/**/*.graphql"], // Где искать GraphQL-запросы
    generates: {
        "./@graphql/generated.ts": {
            plugins: [
                "typescript",
                "typescript-operations",
                "typed-document-node",
            ],
            presetConfig: {
                gqlTagName: 'gql',
                fragmentMasking: false
            }
        },
    },
};

export default config;
