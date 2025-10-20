import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { useState } from 'react';
import { SearchBar } from './index';

const meta: Meta<typeof SearchBar> = {
  title: 'Commons/Components/SearchBar',
  component: SearchBar,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          '공통 검색바 컴포넌트입니다. 다양한 스타일과 크기, 테마를 지원하며 검색 아이콘과 클리어 버튼을 포함합니다.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['primary', 'secondary', 'tertiary'],
      description: '검색바 스타일 변형',
      defaultValue: 'primary',
    },
    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large'],
      description: '검색바 크기',
      defaultValue: 'medium',
    },
    theme: {
      control: { type: 'select' },
      options: ['light', 'dark'],
      description: '테마 모드',
      defaultValue: 'light',
    },
    placeholder: {
      control: { type: 'text' },
      description: '플레이스홀더 텍스트',
      defaultValue: '검색어를 입력해 주세요.',
    },
    showIcon: {
      control: { type: 'boolean' },
      description: '검색 아이콘 표시 여부',
      defaultValue: true,
    },
    showClear: {
      control: { type: 'boolean' },
      description: '클리어 버튼 표시 여부',
      defaultValue: false,
    },
    disabled: {
      control: { type: 'boolean' },
      description: '검색바 비활성화 상태',
      defaultValue: false,
    },
    value: {
      control: { type: 'text' },
      description: '검색바 입력값',
    },
    onSearch: {
      action: 'searched',
      description: '검색 실행 이벤트 핸들러',
    },
    onClear: {
      action: 'cleared',
      description: '클리어 버튼 클릭 이벤트 핸들러',
    },
    onChange: {
      action: 'changed',
      description: '입력값 변경 이벤트 핸들러',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// 기본 스토리
export const Default: Story = {
  args: {
    placeholder: '검색어를 입력해 주세요.',
  },
};

// Variant별 스토리
export const Primary: Story = {
  args: {
    variant: 'primary',
    placeholder: 'Primary 검색바',
  },
};

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    placeholder: 'Secondary 검색바',
  },
};

export const Tertiary: Story = {
  args: {
    variant: 'tertiary',
    placeholder: 'Tertiary 검색바',
  },
};

// Size별 스토리
export const Small: Story = {
  args: {
    size: 'small',
    placeholder: 'Small 검색바',
  },
};

export const Medium: Story = {
  args: {
    size: 'medium',
    placeholder: 'Medium 검색바',
  },
};

export const Large: Story = {
  args: {
    size: 'large',
    placeholder: 'Large 검색바',
  },
};

// 테마별 스토리
export const LightTheme: Story = {
  args: {
    theme: 'light',
    placeholder: 'Light 테마 검색바',
  },
  parameters: {
    backgrounds: { default: 'light' },
  },
};

export const DarkTheme: Story = {
  args: {
    theme: 'dark',
    placeholder: 'Dark 테마 검색바',
  },
  parameters: {
    backgrounds: { default: 'dark' },
  },
};

// 아이콘 옵션별 스토리
export const WithIcon: Story = {
  args: {
    showIcon: true,
    placeholder: '검색 아이콘이 있는 검색바',
  },
};

export const WithoutIcon: Story = {
  args: {
    showIcon: false,
    placeholder: '검색 아이콘이 없는 검색바',
  },
};

// 클리어 버튼 포함 스토리
export const WithClearButton: Story = {
  args: {
    showClear: true,
    value: '검색어 예시',
    placeholder: '클리어 버튼이 있는 검색바',
  },
};

// 비활성화 상태
export const Disabled: Story = {
  args: {
    disabled: true,
    placeholder: '비활성화된 검색바',
  },
};

// 모든 Variant 조합 보기
export const AllVariants: Story = {
  render: () => (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '16px',
        width: '400px',
      }}
    >
      <SearchBar variant='primary' placeholder='Primary 검색바' />
      <SearchBar variant='secondary' placeholder='Secondary 검색바' />
      <SearchBar variant='tertiary' placeholder='Tertiary 검색바' />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: '모든 검색바 variant를 한 번에 볼 수 있습니다.',
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
        flexDirection: 'column',
        gap: '16px',
        width: '400px',
      }}
    >
      <SearchBar size='small' placeholder='Small 검색바' />
      <SearchBar size='medium' placeholder='Medium 검색바' />
      <SearchBar size='large' placeholder='Large 검색바' />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: '모든 검색바 크기를 한 번에 볼 수 있습니다.',
      },
    },
  },
};

// 라이트 테마 전체 조합
export const LightThemeShowcase: Story = {
  render: () => (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '24px',
        width: '500px',
      }}
    >
      <div>
        <h3
          style={{ marginBottom: '16px', fontSize: '16px', fontWeight: '600' }}
        >
          Primary 검색바
        </h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <SearchBar
            variant='primary'
            size='small'
            theme='light'
            placeholder='Small Primary'
          />
          <SearchBar
            variant='primary'
            size='medium'
            theme='light'
            placeholder='Medium Primary'
          />
          <SearchBar
            variant='primary'
            size='large'
            theme='light'
            placeholder='Large Primary'
          />
          <SearchBar
            variant='primary'
            size='medium'
            theme='light'
            placeholder='Disabled Primary'
            disabled
          />
        </div>
      </div>
      <div>
        <h3
          style={{ marginBottom: '16px', fontSize: '16px', fontWeight: '600' }}
        >
          Secondary 검색바
        </h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <SearchBar
            variant='secondary'
            size='small'
            theme='light'
            placeholder='Small Secondary'
          />
          <SearchBar
            variant='secondary'
            size='medium'
            theme='light'
            placeholder='Medium Secondary'
          />
          <SearchBar
            variant='secondary'
            size='large'
            theme='light'
            placeholder='Large Secondary'
          />
          <SearchBar
            variant='secondary'
            size='medium'
            theme='light'
            placeholder='Disabled Secondary'
            disabled
          />
        </div>
      </div>
      <div>
        <h3
          style={{ marginBottom: '16px', fontSize: '16px', fontWeight: '600' }}
        >
          Tertiary 검색바
        </h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <SearchBar
            variant='tertiary'
            size='small'
            theme='light'
            placeholder='Small Tertiary'
          />
          <SearchBar
            variant='tertiary'
            size='medium'
            theme='light'
            placeholder='Medium Tertiary'
          />
          <SearchBar
            variant='tertiary'
            size='large'
            theme='light'
            placeholder='Large Tertiary'
          />
          <SearchBar
            variant='tertiary'
            size='medium'
            theme='light'
            placeholder='Disabled Tertiary'
            disabled
          />
        </div>
      </div>
    </div>
  ),
  parameters: {
    backgrounds: { default: 'light' },
    docs: {
      description: {
        story: '라이트 테마에서 모든 검색바 조합을 보여줍니다.',
      },
    },
  },
};

// 다크 테마 전체 조합
export const DarkThemeShowcase: Story = {
  render: () => (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '24px',
        width: '500px',
      }}
    >
      <div>
        <h3
          style={{
            marginBottom: '16px',
            fontSize: '16px',
            fontWeight: '600',
            color: '#ffffff',
          }}
        >
          Primary 검색바
        </h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <SearchBar
            variant='primary'
            size='small'
            theme='dark'
            placeholder='Small Primary'
          />
          <SearchBar
            variant='primary'
            size='medium'
            theme='dark'
            placeholder='Medium Primary'
          />
          <SearchBar
            variant='primary'
            size='large'
            theme='dark'
            placeholder='Large Primary'
          />
          <SearchBar
            variant='primary'
            size='medium'
            theme='dark'
            placeholder='Disabled Primary'
            disabled
          />
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
          Secondary 검색바
        </h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <SearchBar
            variant='secondary'
            size='small'
            theme='dark'
            placeholder='Small Secondary'
          />
          <SearchBar
            variant='secondary'
            size='medium'
            theme='dark'
            placeholder='Medium Secondary'
          />
          <SearchBar
            variant='secondary'
            size='large'
            theme='dark'
            placeholder='Large Secondary'
          />
          <SearchBar
            variant='secondary'
            size='medium'
            theme='dark'
            placeholder='Disabled Secondary'
            disabled
          />
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
          Tertiary 검색바
        </h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <SearchBar
            variant='tertiary'
            size='small'
            theme='dark'
            placeholder='Small Tertiary'
          />
          <SearchBar
            variant='tertiary'
            size='medium'
            theme='dark'
            placeholder='Medium Tertiary'
          />
          <SearchBar
            variant='tertiary'
            size='large'
            theme='dark'
            placeholder='Large Tertiary'
          />
          <SearchBar
            variant='tertiary'
            size='medium'
            theme='dark'
            placeholder='Disabled Tertiary'
            disabled
          />
        </div>
      </div>
    </div>
  ),
  parameters: {
    backgrounds: { default: 'dark' },
    docs: {
      description: {
        story: '다크 테마에서 모든 검색바 조합을 보여줍니다.',
      },
    },
  },
};

// 인터랙티브 스토리 (상태 관리 포함)
export const Interactive: Story = {
  render: () => {
    const [searchValue, setSearchValue] = useState('');

    const handleSearch = (value: string) => {
      alert(`검색어: "${value}"`);
    };

    const handleClear = () => {
      setSearchValue('');
    };

    return (
      <div style={{ width: '400px' }}>
        <SearchBar
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          onSearch={handleSearch}
          onClear={handleClear}
          showClear={true}
          placeholder='검색어를 입력하고 엔터를 눌러보세요'
        />
        <p style={{ marginTop: '16px', fontSize: '14px', color: '#666' }}>
          현재 입력값: &quot;{searchValue}&quot;
        </p>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story:
          '실제 상태 관리와 이벤트 핸들링이 포함된 인터랙티브 검색바입니다.',
      },
    },
  },
};

// 다양한 옵션 조합 스토리
export const VariousOptions: Story = {
  render: () => (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '16px',
        width: '400px',
      }}
    >
      <SearchBar
        showIcon={true}
        showClear={false}
        placeholder='아이콘만 있는 검색바'
      />
      <SearchBar
        showIcon={false}
        showClear={true}
        value='검색어 예시'
        placeholder='클리어 버튼만 있는 검색바'
      />
      <SearchBar
        showIcon={true}
        showClear={true}
        value='검색어 예시'
        placeholder='아이콘과 클리어 버튼 모두 있는 검색바'
      />
      <SearchBar
        showIcon={false}
        showClear={false}
        placeholder='아이콘과 클리어 버튼이 모두 없는 검색바'
      />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: '다양한 아이콘과 클리어 버튼 옵션 조합을 보여줍니다.',
      },
    },
  },
};

// 긴 플레이스홀더 텍스트
export const LongPlaceholder: Story = {
  args: {
    placeholder:
      '매우 긴 플레이스홀더 텍스트가 포함된 검색바입니다. 이 텍스트가 어떻게 표시되는지 확인해보세요.',
  },
  parameters: {
    docs: {
      description: {
        story:
          '긴 플레이스홀더 텍스트가 포함된 검색바의 렌더링을 확인할 수 있습니다.',
      },
    },
  },
};

// 반응형 테스트
export const ResponsiveTest: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <div style={{ width: '100%', maxWidth: '600px' }}>
        <h4
          style={{ marginBottom: '8px', fontSize: '14px', fontWeight: '600' }}
        >
          넓은 화면 (600px)
        </h4>
        <SearchBar placeholder='넓은 화면에서의 검색바' />
      </div>
      <div style={{ width: '100%', maxWidth: '400px' }}>
        <h4
          style={{ marginBottom: '8px', fontSize: '14px', fontWeight: '600' }}
        >
          중간 화면 (400px)
        </h4>
        <SearchBar placeholder='중간 화면에서의 검색바' />
      </div>
      <div style={{ width: '100%', maxWidth: '300px' }}>
        <h4
          style={{ marginBottom: '8px', fontSize: '14px', fontWeight: '600' }}
        >
          좁은 화면 (300px)
        </h4>
        <SearchBar placeholder='좁은 화면에서의 검색바' />
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          '다양한 화면 크기에서의 검색바 반응형 동작을 확인할 수 있습니다.',
      },
    },
  },
};
