import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { Toggle } from './index';

const meta: Meta<typeof Toggle> = {
  title: 'Commons/Components/Toggle',
  component: Toggle,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          '공통 토글 컴포넌트입니다. 다양한 스타일과 크기, 테마를 지원하며 on/off 상태를 관리할 수 있습니다.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['primary', 'secondary', 'tertiary'],
      description: '토글 스타일 변형',
      defaultValue: 'primary',
    },
    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large'],
      description: '토글 크기',
      defaultValue: 'medium',
    },
    theme: {
      control: { type: 'select' },
      options: ['light', 'dark'],
      description: '테마 모드',
      defaultValue: 'light',
    },
    checked: {
      control: { type: 'boolean' },
      description: '토글 상태 (on/off)',
      defaultValue: false,
    },
    disabled: {
      control: { type: 'boolean' },
      description: '토글 비활성화 상태',
      defaultValue: false,
    },
    label: {
      control: { type: 'text' },
      description: '토글 라벨 텍스트',
    },
    onChange: {
      action: 'toggled',
      description: '토글 상태 변경 이벤트 핸들러',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// 기본 스토리
export const Default: Story = {
  args: {
    label: '토글 스위치',
  },
};

// Variant별 스토리
export const Primary: Story = {
  args: {
    variant: 'primary',
    label: 'Primary 토글',
    checked: true,
  },
};

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    label: 'Secondary 토글',
    checked: true,
  },
};

export const Tertiary: Story = {
  args: {
    variant: 'tertiary',
    label: 'Tertiary 토글',
    checked: true,
  },
};

// Size별 스토리
export const Small: Story = {
  args: {
    size: 'small',
    label: 'Small 토글',
    checked: true,
  },
};

export const Medium: Story = {
  args: {
    size: 'medium',
    label: 'Medium 토글',
    checked: true,
  },
};

export const Large: Story = {
  args: {
    size: 'large',
    label: 'Large 토글',
    checked: true,
  },
};

// 테마별 스토리
export const LightTheme: Story = {
  args: {
    theme: 'light',
    label: 'Light 테마 토글',
    checked: true,
  },
  parameters: {
    backgrounds: { default: 'light' },
  },
};

export const DarkTheme: Story = {
  args: {
    theme: 'dark',
    label: 'Dark 테마 토글',
    checked: true,
  },
  parameters: {
    backgrounds: { default: 'dark' },
  },
};

// 상태별 스토리
export const Unchecked: Story = {
  args: {
    label: '비활성 상태 토글',
    checked: false,
  },
};

export const Checked: Story = {
  args: {
    label: '활성 상태 토글',
    checked: true,
  },
};

export const Disabled: Story = {
  args: {
    label: '비활성화된 토글',
    disabled: true,
    checked: false,
  },
};

export const DisabledChecked: Story = {
  args: {
    label: '비활성화된 활성 토글',
    disabled: true,
    checked: true,
  },
};

// 라벨 없는 토글
export const WithoutLabel: Story = {
  args: {
    checked: true,
  },
  parameters: {
    docs: {
      description: {
        story:
          '라벨이 없는 토글입니다. 접근성을 위해 aria-label 등을 추가하는 것을 권장합니다.',
      },
    },
  },
};

// 모든 Variant 조합 보기
export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <Toggle variant='primary' label='Primary 토글' checked={true} />
      <Toggle variant='secondary' label='Secondary 토글' checked={true} />
      <Toggle variant='tertiary' label='Tertiary 토글' checked={true} />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: '모든 토글 variant를 한 번에 볼 수 있습니다.',
      },
    },
  },
};

// 모든 Size 조합 보기
export const AllSizes: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <Toggle size='small' label='Small 토글' checked={true} />
      <Toggle size='medium' label='Medium 토글' checked={true} />
      <Toggle size='large' label='Large 토글' checked={true} />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: '모든 토글 크기를 한 번에 볼 수 있습니다.',
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
          Primary Toggles
        </h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <Toggle
            variant='primary'
            size='small'
            theme='light'
            label='Small Primary'
            checked={true}
          />
          <Toggle
            variant='primary'
            size='medium'
            theme='light'
            label='Medium Primary'
            checked={true}
          />
          <Toggle
            variant='primary'
            size='large'
            theme='light'
            label='Large Primary'
            checked={true}
          />
          <Toggle
            variant='primary'
            size='medium'
            theme='light'
            label='Disabled Primary'
            checked={true}
            disabled
          />
        </div>
      </div>
      <div>
        <h3
          style={{ marginBottom: '16px', fontSize: '16px', fontWeight: '600' }}
        >
          Secondary Toggles
        </h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <Toggle
            variant='secondary'
            size='small'
            theme='light'
            label='Small Secondary'
            checked={true}
          />
          <Toggle
            variant='secondary'
            size='medium'
            theme='light'
            label='Medium Secondary'
            checked={true}
          />
          <Toggle
            variant='secondary'
            size='large'
            theme='light'
            label='Large Secondary'
            checked={true}
          />
          <Toggle
            variant='secondary'
            size='medium'
            theme='light'
            label='Disabled Secondary'
            checked={true}
            disabled
          />
        </div>
      </div>
      <div>
        <h3
          style={{ marginBottom: '16px', fontSize: '16px', fontWeight: '600' }}
        >
          Tertiary Toggles
        </h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <Toggle
            variant='tertiary'
            size='small'
            theme='light'
            label='Small Tertiary'
            checked={true}
          />
          <Toggle
            variant='tertiary'
            size='medium'
            theme='light'
            label='Medium Tertiary'
            checked={true}
          />
          <Toggle
            variant='tertiary'
            size='large'
            theme='light'
            label='Large Tertiary'
            checked={true}
          />
          <Toggle
            variant='tertiary'
            size='medium'
            theme='light'
            label='Disabled Tertiary'
            checked={true}
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
        story: '라이트 테마에서 모든 토글 조합을 보여줍니다.',
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
          Primary Toggles
        </h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <Toggle
            variant='primary'
            size='small'
            theme='dark'
            label='Small Primary'
            checked={true}
          />
          <Toggle
            variant='primary'
            size='medium'
            theme='dark'
            label='Medium Primary'
            checked={true}
          />
          <Toggle
            variant='primary'
            size='large'
            theme='dark'
            label='Large Primary'
            checked={true}
          />
          <Toggle
            variant='primary'
            size='medium'
            theme='dark'
            label='Disabled Primary'
            checked={true}
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
          Secondary Toggles
        </h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <Toggle
            variant='secondary'
            size='small'
            theme='dark'
            label='Small Secondary'
            checked={true}
          />
          <Toggle
            variant='secondary'
            size='medium'
            theme='dark'
            label='Medium Secondary'
            checked={true}
          />
          <Toggle
            variant='secondary'
            size='large'
            theme='dark'
            label='Large Secondary'
            checked={true}
          />
          <Toggle
            variant='secondary'
            size='medium'
            theme='dark'
            label='Disabled Secondary'
            checked={true}
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
          Tertiary Toggles
        </h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <Toggle
            variant='tertiary'
            size='small'
            theme='dark'
            label='Small Tertiary'
            checked={true}
          />
          <Toggle
            variant='tertiary'
            size='medium'
            theme='dark'
            label='Medium Tertiary'
            checked={true}
          />
          <Toggle
            variant='tertiary'
            size='large'
            theme='dark'
            label='Large Tertiary'
            checked={true}
          />
          <Toggle
            variant='tertiary'
            size='medium'
            theme='dark'
            label='Disabled Tertiary'
            checked={true}
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
        story: '다크 테마에서 모든 토글 조합을 보여줍니다.',
      },
    },
  },
};

// 인터랙티브 스토리 (상태 관리 포함)
export const Interactive: Story = {
  render: () => {
    const [isChecked, setIsChecked] = useState(false);

    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '16px',
          alignItems: 'flex-start',
        }}
      >
        <Toggle
          label={`토글 상태: ${isChecked ? 'ON' : 'OFF'}`}
          checked={isChecked}
          onChange={setIsChecked}
        />
        <p style={{ fontSize: '14px', color: '#666' }}>
          현재 상태: {isChecked ? '활성화됨' : '비활성화됨'}
        </p>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: '실제 상태 변경이 가능한 인터랙티브 토글입니다.',
      },
    },
  },
};

// 상태 비교 스토리
export const StateComparison: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <div style={{ display: 'flex', gap: '24px', alignItems: 'center' }}>
        <Toggle label='비활성 상태' checked={false} />
        <Toggle label='활성 상태' checked={true} />
      </div>
      <div style={{ display: 'flex', gap: '24px', alignItems: 'center' }}>
        <Toggle label='비활성화 (OFF)' checked={false} disabled />
        <Toggle label='비활성화 (ON)' checked={true} disabled />
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: '토글의 다양한 상태를 비교해서 볼 수 있습니다.',
      },
    },
  },
};

// 다양한 라벨 길이 테스트
export const LabelVariations: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <Toggle label='짧은 라벨' checked={true} />
      <Toggle label='조금 더 긴 라벨입니다' checked={true} />
      <Toggle
        label='매우 긴 라벨 텍스트로 토글과 함께 사용했을 때 어떻게 보이는지 확인하는 예시입니다'
        checked={true}
      />
      <Toggle checked={true} />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: '다양한 길이의 라벨과 라벨이 없는 경우를 보여줍니다.',
      },
    },
  },
};

// 폼에서 사용하는 예시
export const FormExample: Story = {
  render: () => {
    const [settings, setSettings] = useState({
      notifications: true,
      darkMode: false,
      autoSave: true,
      analytics: false,
    });

    const handleToggle = (key: keyof typeof settings) => (checked: boolean) => {
      setSettings((prev) => ({ ...prev, [key]: checked }));
    };

    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '16px',
          padding: '24px',
          border: '1px solid #e0e0e0',
          borderRadius: '8px',
          backgroundColor: '#f9f9f9',
        }}
      >
        <h3 style={{ margin: 0, fontSize: '18px', fontWeight: '600' }}>설정</h3>
        <Toggle
          label='알림 받기'
          checked={settings.notifications}
          onChange={handleToggle('notifications')}
        />
        <Toggle
          label='다크 모드'
          checked={settings.darkMode}
          onChange={handleToggle('darkMode')}
        />
        <Toggle
          label='자동 저장'
          checked={settings.autoSave}
          onChange={handleToggle('autoSave')}
        />
        <Toggle
          label='분석 데이터 수집'
          checked={settings.analytics}
          onChange={handleToggle('analytics')}
        />
        <div
          style={{
            marginTop: '16px',
            padding: '12px',
            backgroundColor: '#fff',
            borderRadius: '4px',
            fontSize: '14px',
          }}
        >
          <strong>현재 설정:</strong>
          <pre style={{ margin: '8px 0 0 0', fontSize: '12px' }}>
            {JSON.stringify(settings, null, 2)}
          </pre>
        </div>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: '실제 폼에서 토글을 사용하는 예시입니다.',
      },
    },
  },
};
