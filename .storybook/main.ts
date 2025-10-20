import type { StorybookConfig } from '@storybook/nextjs-vite';

const config: StorybookConfig = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: [
    '@storybook/addon-essentials', // controls, actions, viewport, backgrounds, docs 등 필수 애드온 포함
    '@storybook/addon-a11y', // 접근성 테스트
    '@chromatic-com/storybook', // 시각적 테스트
    '@storybook/addon-onboarding', // 온보딩 가이드
  ],
  framework: {
    name: '@storybook/nextjs-vite',
    options: {
      builder: {
        viteConfigPath: undefined, // Next.js의 기본 Vite 설정 사용
      },
    },
  },
  staticDirs: ['../public'], // 정적 파일 디렉토리
  typescript: {
    check: false, // 빌드 시 타입 체크 비활성화 (성능 향상)
    reactDocgen: 'react-docgen-typescript', // TypeScript 컴포넌트 문서 자동 생성
    reactDocgenTypescriptOptions: {
      shouldExtractLiteralValuesFromEnum: true,
      propFilter: (prop) =>
        prop.parent ? !/node_modules/.test(prop.parent.fileName) : true,
    },
  },
  docs: {
    defaultName: 'Documentation', // 기본 문서 이름
  },
};

export default config;
