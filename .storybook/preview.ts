import type { Preview } from '@storybook/nextjs-vite';
import '../src/app/globals.css'; // 글로벌 CSS 스타일 import

// 스토리북에서 다크모드 미디어 쿼리를 무시하고 항상 라이트 테마 사용
const storybookStyles = `
  body {
    background: #ffffff
    color: #171717
  }
  
  /* 스토리북 캔버스 영역도 하얀색으로 설정 */
  .sb-show-main {
    background: #ffffff
  }
`;

// 스타일을 head에 추가
if (typeof document !== 'undefined') {
  const style = document.createElement('style');
  style.textContent = storybookStyles;
  document.head.appendChild(style);
}

const preview: Preview = {
  parameters: {
    // 액션 로깅 설정
    actions: {
      argTypesRegex: '^on[A-Z].*', // on으로 시작하는 props를 자동으로 액션으로 인식
    },

    // 컨트롤 설정
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
      expanded: true, // 컨트롤 패널을 기본적으로 확장된 상태로 표시
    },

    // 배경 설정 - 기본값을 하얀색으로 강제 설정
    backgrounds: {
      default: 'light',
      values: [
        {
          name: 'light',
          value: '#ffffff',
        },
        {
          name: 'dark',
          value: '#1c1c1c',
        },
        {
          name: 'gray',
          value: '#f2f2f2',
        },
      ],
      // 배경을 항상 하얀색으로 강제 설정
      disable: false,
    },

    // 뷰포트 설정
    viewport: {
      viewports: {
        mobile: {
          name: 'Mobile',
          styles: {
            width: '375px',
            height: '667px',
          },
        },
        tablet: {
          name: 'Tablet',
          styles: {
            width: '768px',
            height: '1024px',
          },
        },
        desktop: {
          name: 'Desktop',
          styles: {
            width: '1200px',
            height: '800px',
          },
        },
      },
    },

    // 문서 설정
    docs: {
      toc: true, // 목차 표시
      source: {
        state: 'open', // 소스 코드를 기본적으로 열린 상태로 표시
      },
    },

    // 접근성 설정
    a11y: {
      config: {
        rules: [
          {
            id: 'color-contrast',
            enabled: true,
          },
          {
            id: 'focus-trap',
            enabled: true,
          },
        ],
      },
      options: {
        checks: { 'color-contrast': { options: { noScroll: true } } },
        restoreScroll: true,
      },
    },

    // 레이아웃 설정
    layout: 'centered', // 기본 레이아웃을 중앙 정렬로 설정
  },

  // 글로벌 타입 설정
  globalTypes: {
    theme: {
      description: '테마 선택',
      defaultValue: 'light',
      toolbar: {
        title: 'Theme',
        icon: 'paintbrush',
        items: [
          { value: 'light', title: 'Light', icon: 'sun' },
          { value: 'dark', title: 'Dark', icon: 'moon' },
        ],
        dynamicTitle: true,
      },
    },
  },

  // 초기화 함수
  initialGlobals: {
    theme: 'light',
  },
};

export default preview;
