// jest.config.js
const nextJest = require('next/jest');
const path = require('path');

const createJestConfig = nextJest({
    dir: './',
});

const customJestConfig = {
    moduleDirectories: ['node_modules', '<rootDir>'],
    testEnvironment: 'jest-environment-jsdom',
    setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
    transform: {
        '^.+\\.(ts|tsx)$': ['ts-jest', {
            tsconfig: '<rootDir>/tsconfig.jest.json',
        }],
    },
    moduleNameMapper: {
        // Исправляем карту алиасов для корректного сопоставления @/
        '^@/(.*)$': '<rootDir>/$1',
        // Добавляем специальный алиас для UI компонентов, если нужно
        '^@ui/(.*)$': '<rootDir>/app/@ui/$1',
        '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
    },
    testPathIgnorePatterns: ['<rootDir>/node_modules/', '<rootDir>/.next/'],
    transformIgnorePatterns: [
        '/node_modules/',
        '^.+\\.module\\.(css|sass|scss)$',
    ],
    collectCoverageFrom: [
        '**/*.{js,jsx,ts,tsx}',
        'app/**/*.{js,jsx,ts,tsx}',
        '!**/*.d.ts',
        '!**/node_modules/**',
        '!**/.next/**',
        '!jest.config.js',
        '!jest.setup.js',
        '!jest.resolver.js',
        '!next.config.js',
        '!tsconfig.json',
        '!tsconfig.jest.json',
    ],
    resolver: '<rootDir>/jest.resolver.js',
    // Добавляем modifyDirectories для корректной работы с относительными путями
    modulePaths: [path.resolve(__dirname)],
};

module.exports = createJestConfig(customJestConfig);