/** @type {import('next').NextConfig} */
const nextConfig = {
  // Windows 파일 시스템 에러 완화
  webpack: (config, { dev, isServer }) => {
    if (dev && !isServer) {
      // Windows에서 파일 감시 최적화
      config.watchOptions = {
        poll: 1000,
        aggregateTimeout: 300,
      };
    }
    return config;
  },
};

export default nextConfig;
