/** @type {import('next').NextConfig} */
import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin();

const nextConfig = {
    experimental: {
        ppr: 'incremental',
      },
    //  webpack: (config, { isServer }) => {
    //    // Исключаем файлы историй из сборки
    //    config.module.rules.push({
    //      test: /\.stories\.(js|jsx|ts|tsx)$/,
    //      loader: "ignore-loader",
    //    });
    //  }

};

export default withNextIntl(nextConfig);
