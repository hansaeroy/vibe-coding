import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { Button } from './index';

const meta: Meta<typeof Button> = {
  title: 'Commons/Components/Button',
  component: Button,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          '공통 버튼 컴포넌트입니다. 다양한 스타일과 크기, 테마를 지원합니다.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['primary', 'secondary', 'tertiary'],
      description: '버튼 스타일 변형',
      defaultValue: 'primary',
    },
    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large'],
      description: '버튼 크기',
      defaultValue: 'medium',
    },
    theme: {
      control: { type: 'select' },
      options: ['light', 'dark'],
      description: '테마 모드',
      defaultValue: 'light',
    },
    disabled: {
      control: { type: 'boolean' },
      description: '버튼 비활성화 상태',
      defaultValue: false,
    },
    children: {
      control: { type: 'text' },
      description: '버튼 내부 콘텐츠',
      defaultValue: 'Button',
    },
    onClick: {
      action: 'clicked',
      description: '클릭 이벤트 핸들러',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// 기본 스토리
export const Default: Story = {
  args: {
    children: 'Button',
  },
};

// Variant별 스토리
export const Primary: Story = {
  args: {
    variant: 'primary',
    children: 'Primary Button',
  },
};

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    children: 'Secondary Button',
  },
};

export const Tertiary: Story = {
  args: {
    variant: 'tertiary',
    children: 'Tertiary Button',
  },
};

// Size별 스토리
export const Small: Story = {
  args: {
    size: 'small',
    children: 'Small Button',
  },
};

export const Medium: Story = {
  args: {
    size: 'medium',
    children: 'Medium Button',
  },
};

export const Large: Story = {
  args: {
    size: 'large',
    children: 'Large Button',
  },
};

// 테마별 스토리
export const LightTheme: Story = {
  args: {
    theme: 'light',
    children: 'Light Theme',
  },
  parameters: {
    backgrounds: { default: 'light' },
  },
};

export const DarkTheme: Story = {
  args: {
    theme: 'dark',
    children: 'Dark Theme',
  },
  parameters: {
    backgrounds: { default: 'dark' },
  },
};

// 비활성화 상태
export const Disabled: Story = {
  args: {
    disabled: true,
    children: 'Disabled Button',
  },
};

// 모든 Variant 조합 보기
export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
      <Button variant='primary'>Primary</Button>
      <Button variant='secondary'>Secondary</Button>
      <Button variant='tertiary'>Tertiary</Button>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: '모든 버튼 variant를 한 번에 볼 수 있습니다.',
      },
    },
  },
};

// 모든 Size 조합 보기
export const AllSizes: Story = {
  render: () => (
    <div
      style={{
        display: 'flex',
        gap: '16px',
        alignItems: 'center',
        flexWrap: 'wrap',
      }}
    >
      <Button size='small'>Small</Button>
      <Button size='medium'>Medium</Button>
      <Button size='large'>Large</Button>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: '모든 버튼 크기를 한 번에 볼 수 있습니다.',
      },
    },
  },
};

// 라이트 테마 전체 조합
export const LightThemeShowcase: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      <div>
        <h3
          style={{ marginBottom: '16px', fontSize: '16px', fontWeight: '600' }}
        >
          Primary Buttons
        </h3>
        <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
          <Button variant='primary' size='small' theme='light'>
            Small
          </Button>
          <Button variant='primary' size='medium' theme='light'>
            Medium
          </Button>
          <Button variant='primary' size='large' theme='light'>
            Large
          </Button>
          <Button variant='primary' size='medium' theme='light' disabled>
            Disabled
          </Button>
        </div>
      </div>
      <div>
        <h3
          style={{ marginBottom: '16px', fontSize: '16px', fontWeight: '600' }}
        >
          Secondary Buttons
        </h3>
        <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
          <Button variant='secondary' size='small' theme='light'>
            Small
          </Button>
          <Button variant='secondary' size='medium' theme='light'>
            Medium
          </Button>
          <Button variant='secondary' size='large' theme='light'>
            Large
          </Button>
          <Button variant='secondary' size='medium' theme='light' disabled>
            Disabled
          </Button>
        </div>
      </div>
      <div>
        <h3
          style={{ marginBottom: '16px', fontSize: '16px', fontWeight: '600' }}
        >
          Tertiary Buttons
        </h3>
        <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
          <Button variant='tertiary' size='small' theme='light'>
            Small
          </Button>
          <Button variant='tertiary' size='medium' theme='light'>
            Medium
          </Button>
          <Button variant='tertiary' size='large' theme='light'>
            Large
          </Button>
          <Button variant='tertiary' size='medium' theme='light' disabled>
            Disabled
          </Button>
        </div>
      </div>
    </div>
  ),
  parameters: {
    backgrounds: { default: 'light' },
    docs: {
      description: {
        story: '라이트 테마에서 모든 버튼 조합을 보여줍니다.',
      },
    },
  },
};

// 다크 테마 전체 조합
export const DarkThemeShowcase: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      <div>
        <h3
          style={{
            marginBottom: '16px',
            fontSize: '16px',
            fontWeight: '600',
            color: '#ffffff',
          }}
        >
          Primary Buttons
        </h3>
        <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
          <Button variant='primary' size='small' theme='dark'>
            Small
          </Button>
          <Button variant='primary' size='medium' theme='dark'>
            Medium
          </Button>
          <Button variant='primary' size='large' theme='dark'>
            Large
          </Button>
          <Button variant='primary' size='medium' theme='dark' disabled>
            Disabled
          </Button>
        </div>
      </div>
      <div>
        <h3
          style={{
            marginBottom: '16px',
            fontSize: '16px',
            fontWeight: '600',
            color: '#ffffff',
          }}
        >
          Secondary Buttons
        </h3>
        <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
          <Button variant='secondary' size='small' theme='dark'>
            Small
          </Button>
          <Button variant='secondary' size='medium' theme='dark'>
            Medium
          </Button>
          <Button variant='secondary' size='large' theme='dark'>
            Large
          </Button>
          <Button variant='secondary' size='medium' theme='dark' disabled>
            Disabled
          </Button>
        </div>
      </div>
      <div>
        <h3
          style={{
            marginBottom: '16px',
            fontSize: '16px',
            fontWeight: '600',
            color: '#ffffff',
          }}
        >
          Tertiary Buttons
        </h3>
        <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
          <Button variant='tertiary' size='small' theme='dark'>
            Small
          </Button>
          <Button variant='tertiary' size='medium' theme='dark'>
            Medium
          </Button>
          <Button variant='tertiary' size='large' theme='dark'>
            Large
          </Button>
          <Button variant='tertiary' size='medium' theme='dark' disabled>
            Disabled
          </Button>
        </div>
      </div>
    </div>
  ),
  parameters: {
    backgrounds: { default: 'dark' },
    docs: {
      description: {
        story: '다크 테마에서 모든 버튼 조합을 보여줍니다.',
      },
    },
  },
};

// 인터랙티브 스토리 (클릭 이벤트 포함)
export const Interactive: Story = {
  args: {
    children: 'Click Me!',
    onClick: () => alert('버튼이 클릭되었습니다!'),
  },
  parameters: {
    docs: {
      description: {
        story: '클릭 이벤트가 포함된 인터랙티브 버튼입니다.',
      },
    },
  },
};

// 긴 텍스트 버튼
export const LongText: Story = {
  args: {
    children: '매우 긴 텍스트가 포함된 버튼입니다',
  },
  parameters: {
    docs: {
      description: {
        story: '긴 텍스트가 포함된 버튼의 렌더링을 확인할 수 있습니다.',
      },
    },
  },
};

// 아이콘과 함께 사용하는 예시 (아이콘이 있다면)
export const WithIcon: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
      <Button variant='primary'>
        <span style={{ marginRight: '8px' }}>+</span>
        추가하기
      </Button>
      <Button variant='secondary'>
        <span style={{ marginRight: '8px' }}>✓</span>
        완료
      </Button>
      <Button variant='tertiary'>
        <span style={{ marginRight: '8px' }}>×</span>
        취소
      </Button>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: '아이콘과 함께 사용하는 버튼 예시입니다.',
      },
    },
  },
};
