import type {NextConfig} from 'next';

const nextConfig: NextConfig = {
  images: {
    domains: ['api.linkareer.com'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'idear-file.s3.ap-northeast-2.amazonaws.com',
        pathname: '/**',
      },
    ],
  },
  webpack: (config) => {
    // @ts-expect-error ignore
    const fileLoaderRule = config.module.rules.find((rule) =>
      rule.test?.test?.('.svg')
    );

    config.module.rules.push(
      {
        ...fileLoaderRule,
        test: /\.svg$/i,
        resourceQuery: /url/,
      },
      {
        test: /\.svg$/i,
        issuer: fileLoaderRule.issuer,
        resourceQuery: {not: [...fileLoaderRule.resourceQuery.not, /url/]},
        use: [
          {
            loader: '@svgr/webpack',
            options: {
              typescript: true,
              ext: 'tsx',
              svgProps: {
                className: '{props.className}',
              },
            },
          },
        ],
      }
    );
    fileLoaderRule.exclude = /\.svg$/i;
    return config;
  },
};

export default nextConfig;
