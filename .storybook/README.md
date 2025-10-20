# Storybook 설정 가이드

이 프로젝트의 Storybook 설정에 대한 가이드입니다.

## 🚀 실행 방법

### 개발 모드로 실행

```bash
npm run storybook
```

### 빌드

```bash
npm run build-storybook
```

## 📁 구조

```
.storybook/
├── main.ts          # Storybook 메인 설정
├── preview.ts       # 미리보기 설정 (글로벌 스타일, 테마 등)
└── README.md        # 이 파일
```

## 🔧 주요 설정

### 애드온 (Addons)

- **@storybook/addon-essentials**: 필수 애드온 (controls, actions, viewport, backgrounds, docs 등)
- **@storybook/addon-a11y**: 접근성 테스트
- **@chromatic-com/storybook**: 시각적 테스트
- **@storybook/addon-onboarding**: 온보딩 가이드

### 글로벌 설정

- **테마 지원**: Light/Dark 모드 토글
- **반응형 뷰포트**: Mobile, Tablet, Desktop
- **배경 색상**: Light, Dark, Gray
- **접근성 검사**: 색상 대비, 포커스 트랩 등

### 자동 문서 생성

- `tags: ['autodocs']`가 포함된 스토리는 자동으로 문서가 생성됩니다.
- TypeScript 컴포넌트의 Props는 자동으로 문서화됩니다.

## 📝 스토리 작성 가이드

### 기본 구조

```typescript
import type { Meta, StoryObj } from '@storybook/react';
import { YourComponent } from './index';

const meta: Meta<typeof YourComponent> = {
  title: 'Commons/Components/YourComponent',
  component: YourComponent,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: '컴포넌트에 대한 설명을 여기에 작성합니다.',
      },
    },
  },
  tags: ['autodocs'], // 자동 문서 생성
  argTypes: {
    // Props 컨트롤 설정
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    // 기본 props
  },
};
```

### 스토리 카테고리

- `Commons/Components/`: 공통 컴포넌트
- `Pages/`: 페이지 컴포넌트
- `Features/`: 기능별 컴포넌트

## 🎨 테마 및 스타일

### 글로벌 CSS

- `src/app/globals.css`가 자동으로 로드됩니다.
- Tailwind CSS 클래스를 사용할 수 있습니다.

### 테마 전환

- 툴바에서 Light/Dark 테마를 전환할 수 있습니다.
- 각 스토리에서 `parameters.backgrounds`로 배경을 설정할 수 있습니다.

### 색상 시스템

- `src/app/commons/constants/color.ts`에 정의된 색상을 사용합니다.
- 시맨틱 컬러와 다크모드를 지원합니다.

## 🔍 접근성 테스트

Storybook은 자동으로 접근성 검사를 수행합니다:

- 색상 대비 검사
- 포커스 관리 검사
- ARIA 속성 검사

접근성 패널에서 결과를 확인할 수 있습니다.

## 📱 반응형 테스트

뷰포트 애드온을 통해 다양한 화면 크기에서 컴포넌트를 테스트할 수 있습니다:

- Mobile: 375px × 667px
- Tablet: 768px × 1024px
- Desktop: 1200px × 800px

## 🚨 문제 해결

### 스타일이 적용되지 않는 경우

1. `globals.css`가 올바르게 import되었는지 확인
2. CSS 모듈 파일이 올바른 경로에 있는지 확인
3. Tailwind CSS 설정이 올바른지 확인

### 컴포넌트가 렌더링되지 않는 경우

1. 컴포넌트 export가 올바른지 확인
2. 스토리 파일의 import 경로가 올바른지 확인
3. TypeScript 오류가 없는지 확인

### 자동 문서가 생성되지 않는 경우

1. `tags: ['autodocs']`가 포함되었는지 확인
2. 컴포넌트에 TypeScript 타입이 올바르게 정의되었는지 확인
3. JSDoc 주석이 올바르게 작성되었는지 확인
