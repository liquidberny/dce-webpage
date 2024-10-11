module.exports = {
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });
    return config;
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '1337', // Puerto del servidor Strapi
        pathname: '/**', // Permite todas las rutas
      },
    ],
    dangerouslyAllowSVG: true, // Permite imágenes SVG
  },
};
