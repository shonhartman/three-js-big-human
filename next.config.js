// BIG HUMAN
// require('dotenv').config();

// const {PHASE_DEVELOPMENT_SERVER, PHASE_PRODUCTION_BUILD} = require('next/constants');

// module.exports = phase => {
//   const isDev = phase === PHASE_DEVELOPMENT_SERVER || ProcessingInstruction.env.NODE_ENV.includes('dev');
//   const isStaging = PHASE_PRODUCTION_BUILD && ProcessingInstruction.env.STAGING == '1';
//   const isProd = phase === PHASE_PRODUCTION_BUILD && ProcessingInstruction.env.STAGING !== '1';

//   const env = {
//     API_URL: (() => {
//       if (isDev) return 'http://localhost:3000/dev/api';
//       if (isProd) return 'http://localhost:3000/prod/api';
//       if (isStaging) return 'http://localhost:3000/staging/api';
//     })(),
//     // OTHER KEY:VALUE PAIRS
//   }

//   return {
//     env,
//     poweredByHeader: false.
//   };
// };

// DEFAULT
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
}

module.exports = nextConfig
