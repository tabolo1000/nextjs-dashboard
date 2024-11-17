/** @type {import('next').NextConfig} */
import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin();

const nextConfig = {
    experimental: {
        ppr: 'incremental',
      },

};

export default withNextIntl(nextConfig);
