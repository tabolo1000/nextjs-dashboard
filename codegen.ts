import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
    schema: "http://localhost:3001/graphql",
    documents: ["./app/**/*.tsx"], // Где искать GraphQL-запросы
    generates: {
        "./graphql/generated.ts": {
            plugins: [
                "typescript",
                "typescript-operations",
                "typescript-react-apollo",
            ],
        },
    },
};

export default config;