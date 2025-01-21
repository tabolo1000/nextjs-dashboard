/** @type {import('next').NextConfig} */
import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin();

const nextConfig = {
    experimental: {
        ppr: 'incremental', // Ваша оригинальная настройка
    },
    webpack: (config, { isServer }) => {
        // Включаем polling для отслеживания изменений
        if (!isServer) {
            config.watchOptions = {
                poll: 1000, // Проверка изменений каждые 1000 мс
                aggregateTimeout: 300, // Задержка перед повторной сборкой
            };
        }

        // Пример настройки для исключения файлов историй
        config.module.rules.push({
            test: /\.stories\.(js|jsx|ts|tsx)$/,
            loader: "ignore-loader",
        });

        return config;
    },
};

export default withNextIntl(nextConfig);