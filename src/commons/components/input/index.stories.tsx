import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { Input } from './index';

const meta: Meta<typeof Input> = {
  title: 'Commons/Components/Input',
  component: Input,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['primary', 'secondary', 'tertiary'],
      description: '인풋 스타일 변형',
    },
    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large'],
      description: '인풋 크기',
    },
    theme: {
      control: { type: 'select' },
      options: ['light', 'dark'],
      description: '테마 모드',
    },
    placeholder: {
      control: { type: 'text' },
      description: '플레이스홀더 텍스트',
    },
    disabled: {
      control: { type: 'boolean' },
      description: '비활성화 상태',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// 기본 스토리
export const Default: Story = {
  args: {
    placeholder: '텍스트를 입력하세요',
  },
};

// Variant 스토리들
export const Primary: Story = {
  args: {
    variant: 'primary',
    placeholder: 'Primary 인풋',
  },
};

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    placeholder: 'Secondary 인풋',
  },
};

export const Tertiary: Story = {
  args: {
    variant: 'tertiary',
    placeholder: 'Tertiary 인풋',
  },
};

// Size 스토리들
export const Small: Story = {
  args: {
    size: 'small',
    placeholder: 'Small 크기 인풋',
  },
};

export const Medium: Story = {
  args: {
    size: 'medium',
    placeholder: 'Medium 크기 인풋',
  },
};

export const Large: Story = {
  args: {
    size: 'large',
    placeholder: 'Large 크기 인풋',
  },
};

// Theme 스토리들
export const LightTheme: Story = {
  args: {
    theme: 'light',
    placeholder: 'Light 테마 인풋',
  },
  parameters: {
    backgrounds: { default: 'light' },
  },
};

export const DarkTheme: Story = {
  args: {
    theme: 'dark',
    placeholder: 'Dark 테마 인풋',
  },
  parameters: {
    backgrounds: { default: 'dark' },
  },
};

// 상태별 스토리들
export const Disabled: Story = {
  args: {
    placeholder: '비활성화된 인풋',
    disabled: true,
  },
};

export const WithValue: Story = {
  args: {
    placeholder: '값이 있는 인풋',
    defaultValue: '입력된 텍스트',
  },
};

// 조합 스토리들
export const AllVariants: Story = {
  render: () => (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '16px',
        width: '300px',
      }}
    >
      <Input variant='primary' placeholder='Primary 인풋' />
      <Input variant='secondary' placeholder='Secondary 인풋' />
      <Input variant='tertiary' placeholder='Tertiary 인풋' />
    </div>
  ),
};

export const AllSizes: Story = {
  render: () => (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '16px',
        width: '300px',
      }}
    >
      <Input size='small' placeholder='Small 크기' />
      <Input size='medium' placeholder='Medium 크기' />
      <Input size='large' placeholder='Large 크기' />
    </div>
  ),
};

export const AllThemes: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '16px' }}>
      <div
        style={{
          padding: '16px',
          backgroundColor: '#ffffff',
          borderRadius: '8px',
        }}
      >
        <Input theme='light' placeholder='Light 테마' />
      </div>
      <div
        style={{
          padding: '16px',
          backgroundColor: '#333333',
          borderRadius: '8px',
        }}
      >
        <Input theme='dark' placeholder='Dark 테마' />
      </div>
    </div>
  ),
};

// 인터랙티브 스토리
export const Interactive: Story = {
  args: {
    placeholder: '인터랙티브 인풋 - 포커스, 호버 테스트',
  },
  parameters: {
    docs: {
      description: {
        story: '이 인풋은 호버와 포커스 상태를 테스트할 수 있습니다.',
      },
    },
  },
};

// 다양한 타입들
export const InputTypes: Story = {
  render: () => (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '16px',
        width: '300px',
      }}
    >
      <Input type='text' placeholder='텍스트 입력' />
      <Input type='email' placeholder='이메일 입력' />
      <Input type='password' placeholder='비밀번호 입력' />
      <Input type='number' placeholder='숫자 입력' />
      <Input type='tel' placeholder='전화번호 입력' />
      <Input type='url' placeholder='URL 입력' />
    </div>
  ),
};
