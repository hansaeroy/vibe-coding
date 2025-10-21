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
  // 이미지 최적화 설정
  images: {
    dangerouslyAllowSVG: true,
    contentDispositionType: "attachment",
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    formats: ["image/webp", "image/avif"],
  },
};

export default nextConfig;
