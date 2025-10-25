import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { SelectBox, SelectOption } from './index';

// 샘플 옵션 데이터
const basicOptions: SelectOption[] = [
  { value: 'option1', label: '옵션 1' },
  { value: 'option2', label: '옵션 2' },
  { value: 'option3', label: '옵션 3' },
  { value: 'option4', label: '옵션 4' },
];

const fruitOptions: SelectOption[] = [
  { value: 'apple', label: '사과' },
  { value: 'banana', label: '바나나' },
  { value: 'orange', label: '오렌지' },
  { value: 'grape', label: '포도' },
  { value: 'strawberry', label: '딸기' },
];

const countryOptions: SelectOption[] = [
  { value: 'kr', label: '대한민국' },
  { value: 'us', label: '미국' },
  { value: 'jp', label: '일본' },
  { value: 'cn', label: '중국' },
  { value: 'uk', label: '영국' },
  { value: 'fr', label: '프랑스' },
  { value: 'de', label: '독일' },
  { value: 'ca', label: '캐나다' },
];

const disabledOptions: SelectOption[] = [
  { value: 'enabled1', label: '활성화된 옵션 1' },
  { value: 'disabled1', label: '비활성화된 옵션 1', disabled: true },
  { value: 'enabled2', label: '활성화된 옵션 2' },
  { value: 'disabled2', label: '비활성화된 옵션 2', disabled: true },
  { value: 'enabled3', label: '활성화된 옵션 3' },
];

const longOptions: SelectOption[] = [
  { value: 'short', label: '짧은 옵션' },
  { value: 'medium', label: '중간 길이의 옵션 텍스트' },
  { value: 'long', label: '매우 긴 옵션 텍스트가 포함된 선택지입니다' },
  {
    value: 'very-long',
    label:
      '정말로 매우 긴 옵션 텍스트가 포함된 선택지로 텍스트 오버플로우를 테스트합니다',
  },
];

const meta: Meta<typeof SelectBox> = {
  title: 'Commons/Components/SelectBox',
  component: SelectBox,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          '공통 셀렉트박스 컴포넌트입니다. 다양한 스타일과 크기, 테마를 지원하며 키보드 네비게이션과 접근성을 제공합니다.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['primary', 'secondary', 'tertiary'],
      description: '셀렉트박스 스타일 변형',
      defaultValue: 'primary',
    },
    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large'],
      description: '셀렉트박스 크기',
      defaultValue: 'medium',
    },
    theme: {
      control: { type: 'select' },
      options: ['light', 'dark'],
      description: '테마 모드',
      defaultValue: 'light',
    },
    options: {
      control: { type: 'object' },
      description: '선택 가능한 옵션들',
    },
    value: {
      control: { type: 'text' },
      description: '현재 선택된 값',
    },
    defaultValue: {
      control: { type: 'text' },
      description: '기본 선택된 값',
    },
    placeholder: {
      control: { type: 'text' },
      description: '플레이스홀더 텍스트',
      defaultValue: '선택하세요',
    },
    disabled: {
      control: { type: 'boolean' },
      description: '셀렉트박스 비활성화 상태',
      defaultValue: false,
    },
    required: {
      control: { type: 'boolean' },
      description: '필수 입력 여부',
      defaultValue: false,
    },
    name: {
      control: { type: 'text' },
      description: '셀렉트박스 이름 (폼에서 사용)',
    },
    onChange: {
      action: 'changed',
      description: '값 변경 이벤트 핸들러',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// 기본 스토리
export const Default: Story = {
  args: {
    options: basicOptions,
    placeholder: '옵션을 선택하세요',
  },
};

// Variant별 스토리
export const Primary: Story = {
  args: {
    variant: 'primary',
    options: fruitOptions,
    placeholder: 'Primary 셀렉트박스',
  },
};

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    options: fruitOptions,
    placeholder: 'Secondary 셀렉트박스',
  },
};

export const Tertiary: Story = {
  args: {
    variant: 'tertiary',
    options: fruitOptions,
    placeholder: 'Tertiary 셀렉트박스',
  },
};

// Size별 스토리
export const Small: Story = {
  args: {
    size: 'small',
    options: basicOptions,
    placeholder: 'Small 셀렉트박스',
  },
};

export const Medium: Story = {
  args: {
    size: 'medium',
    options: basicOptions,
    placeholder: 'Medium 셀렉트박스',
  },
};

export const Large: Story = {
  args: {
    size: 'large',
    options: basicOptions,
    placeholder: 'Large 셀렉트박스',
  },
};

// 테마별 스토리
export const LightTheme: Story = {
  args: {
    theme: 'light',
    options: countryOptions,
    placeholder: 'Light 테마 셀렉트박스',
  },
  parameters: {
    backgrounds: { default: 'light' },
  },
};

export const DarkTheme: Story = {
  args: {
    theme: 'dark',
    options: countryOptions,
    placeholder: 'Dark 테마 셀렉트박스',
  },
  parameters: {
    backgrounds: { default: 'dark' },
  },
};

// 기본값이 설정된 스토리
export const WithDefaultValue: Story = {
  args: {
    options: fruitOptions,
    defaultValue: 'banana',
    placeholder: '기본값이 설정된 셀렉트박스',
  },
};

// 비활성화 상태
export const Disabled: Story = {
  args: {
    disabled: true,
    options: basicOptions,
    defaultValue: 'option2',
    placeholder: '비활성화된 셀렉트박스',
  },
};

// 비활성화된 옵션이 포함된 스토리
export const WithDisabledOptions: Story = {
  args: {
    options: disabledOptions,
    placeholder: '일부 옵션이 비활성화된 셀렉트박스',
  },
};

// 필수 입력 스토리
export const Required: Story = {
  args: {
    options: basicOptions,
    required: true,
    placeholder: '필수 선택 항목',
    name: 'required-select',
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
        width: '320px',
      }}
    >
      <SelectBox
        variant='primary'
        options={fruitOptions}
        placeholder='Primary 셀렉트박스'
      />
      <SelectBox
        variant='secondary'
        options={fruitOptions}
        placeholder='Secondary 셀렉트박스'
      />
      <SelectBox
        variant='tertiary'
        options={fruitOptions}
        placeholder='Tertiary 셀렉트박스'
      />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: '모든 셀렉트박스 variant를 한 번에 볼 수 있습니다.',
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
        width: '320px',
      }}
    >
      <SelectBox
        size='small'
        options={basicOptions}
        placeholder='Small 셀렉트박스'
      />
      <SelectBox
        size='medium'
        options={basicOptions}
        placeholder='Medium 셀렉트박스'
      />
      <SelectBox
        size='large'
        options={basicOptions}
        placeholder='Large 셀렉트박스'
      />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: '모든 셀렉트박스 크기를 한 번에 볼 수 있습니다.',
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
        width: '400px',
      }}
    >
      <div>
        <h3
          style={{ marginBottom: '16px', fontSize: '16px', fontWeight: '600' }}
        >
          Primary 셀렉트박스
        </h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <SelectBox
            variant='primary'
            size='small'
            theme='light'
            options={fruitOptions}
            placeholder='Small Primary'
          />
          <SelectBox
            variant='primary'
            size='medium'
            theme='light'
            options={fruitOptions}
            placeholder='Medium Primary'
          />
          <SelectBox
            variant='primary'
            size='large'
            theme='light'
            options={fruitOptions}
            placeholder='Large Primary'
          />
          <SelectBox
            variant='primary'
            size='medium'
            theme='light'
            options={fruitOptions}
            placeholder='Disabled Primary'
            disabled
          />
        </div>
      </div>
      <div>
        <h3
          style={{ marginBottom: '16px', fontSize: '16px', fontWeight: '600' }}
        >
          Secondary 셀렉트박스
        </h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <SelectBox
            variant='secondary'
            size='small'
            theme='light'
            options={fruitOptions}
            placeholder='Small Secondary'
          />
          <SelectBox
            variant='secondary'
            size='medium'
            theme='light'
            options={fruitOptions}
            placeholder='Medium Secondary'
          />
          <SelectBox
            variant='secondary'
            size='large'
            theme='light'
            options={fruitOptions}
            placeholder='Large Secondary'
          />
          <SelectBox
            variant='secondary'
            size='medium'
            theme='light'
            options={fruitOptions}
            placeholder='Disabled Secondary'
            disabled
          />
        </div>
      </div>
      <div>
        <h3
          style={{ marginBottom: '16px', fontSize: '16px', fontWeight: '600' }}
        >
          Tertiary 셀렉트박스
        </h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <SelectBox
            variant='tertiary'
            size='small'
            theme='light'
            options={fruitOptions}
            placeholder='Small Tertiary'
          />
          <SelectBox
            variant='tertiary'
            size='medium'
            theme='light'
            options={fruitOptions}
            placeholder='Medium Tertiary'
          />
          <SelectBox
            variant='tertiary'
            size='large'
            theme='light'
            options={fruitOptions}
            placeholder='Large Tertiary'
          />
          <SelectBox
            variant='tertiary'
            size='medium'
            theme='light'
            options={fruitOptions}
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
        story: '라이트 테마에서 모든 셀렉트박스 조합을 보여줍니다.',
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
        width: '400px',
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
          Primary 셀렉트박스
        </h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <SelectBox
            variant='primary'
            size='small'
            theme='dark'
            options={fruitOptions}
            placeholder='Small Primary'
          />
          <SelectBox
            variant='primary'
            size='medium'
            theme='dark'
            options={fruitOptions}
            placeholder='Medium Primary'
          />
          <SelectBox
            variant='primary'
            size='large'
            theme='dark'
            options={fruitOptions}
            placeholder='Large Primary'
          />
          <SelectBox
            variant='primary'
            size='medium'
            theme='dark'
            options={fruitOptions}
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
          Secondary 셀렉트박스
        </h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <SelectBox
            variant='secondary'
            size='small'
            theme='dark'
            options={fruitOptions}
            placeholder='Small Secondary'
          />
          <SelectBox
            variant='secondary'
            size='medium'
            theme='dark'
            options={fruitOptions}
            placeholder='Medium Secondary'
          />
          <SelectBox
            variant='secondary'
            size='large'
            theme='dark'
            options={fruitOptions}
            placeholder='Large Secondary'
          />
          <SelectBox
            variant='secondary'
            size='medium'
            theme='dark'
            options={fruitOptions}
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
          Tertiary 셀렉트박스
        </h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <SelectBox
            variant='tertiary'
            size='small'
            theme='dark'
            options={fruitOptions}
            placeholder='Small Tertiary'
          />
          <SelectBox
            variant='tertiary'
            size='medium'
            theme='dark'
            options={fruitOptions}
            placeholder='Medium Tertiary'
          />
          <SelectBox
            variant='tertiary'
            size='large'
            theme='dark'
            options={fruitOptions}
            placeholder='Large Tertiary'
          />
          <SelectBox
            variant='tertiary'
            size='medium'
            theme='dark'
            options={fruitOptions}
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
        story: '다크 테마에서 모든 셀렉트박스 조합을 보여줍니다.',
      },
    },
  },
};

// 인터랙티브 스토리 (상태 관리 포함)
export const Interactive: Story = {
  render: () => {
    const [selectedValue, setSelectedValue] = useState<string>('');

    const handleChange = (value: string, option: SelectOption) => {
      setSelectedValue(value);
      console.log('선택된 값:', value, '옵션:', option);
    };

    return (
      <div style={{ width: '320px' }}>
        <SelectBox
          options={countryOptions}
          value={selectedValue}
          onChange={handleChange}
          placeholder='국가를 선택하세요'
        />
        <p style={{ marginTop: '16px', fontSize: '14px', color: '#666' }}>
          선택된 값: &quot;{selectedValue}&quot;
        </p>
        <p style={{ marginTop: '8px', fontSize: '12px', color: '#999' }}>
          선택된 옵션:{' '}
          {countryOptions.find((opt) => opt.value === selectedValue)?.label ||
            '없음'}
        </p>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story:
          '실제 상태 관리와 이벤트 핸들링이 포함된 인터랙티브 셀렉트박스입니다.',
      },
    },
  },
};

// 긴 옵션 텍스트 테스트
export const LongOptions: Story = {
  args: {
    options: longOptions,
    placeholder: '긴 옵션 텍스트 테스트',
  },
  parameters: {
    docs: {
      description: {
        story:
          '긴 옵션 텍스트가 포함된 셀렉트박스의 렌더링과 텍스트 오버플로우 처리를 확인할 수 있습니다.',
      },
    },
  },
};

// 많은 옵션이 있는 스토리 (스크롤 테스트)
export const ManyOptions: Story = {
  args: {
    options: Array.from({ length: 20 }, (_, i) => ({
      value: `option-${i + 1}`,
      label: `옵션 ${i + 1}`,
    })),
    placeholder: '많은 옵션이 있는 셀렉트박스',
  },
  parameters: {
    docs: {
      description: {
        story:
          '많은 옵션이 있을 때의 드롭다운 스크롤 동작을 확인할 수 있습니다.',
      },
    },
  },
};

// 폼 통합 예시
export const FormIntegration: Story = {
  render: () => {
    const [formData, setFormData] = useState({
      category: '',
      priority: '',
      status: '',
    });

    const categoryOptions = [
      { value: 'bug', label: '버그' },
      { value: 'feature', label: '기능' },
      { value: 'improvement', label: '개선' },
    ];

    const priorityOptions = [
      { value: 'low', label: '낮음' },
      { value: 'medium', label: '보통' },
      { value: 'high', label: '높음' },
      { value: 'urgent', label: '긴급' },
    ];

    const statusOptions = [
      { value: 'todo', label: '할 일' },
      { value: 'progress', label: '진행 중' },
      { value: 'review', label: '검토 중' },
      { value: 'done', label: '완료' },
    ];

    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      alert(`폼 데이터: ${JSON.stringify(formData, null, 2)}`);
    };

    return (
      <form onSubmit={handleSubmit} style={{ width: '320px' }}>
        <div style={{ marginBottom: '16px' }}>
          <label
            style={{
              display: 'block',
              marginBottom: '8px',
              fontSize: '14px',
              fontWeight: '600',
            }}
          >
            카테고리 *
          </label>
          <SelectBox
            name='category'
            options={categoryOptions}
            value={formData.category}
            onChange={(value) =>
              setFormData((prev) => ({ ...prev, category: value }))
            }
            placeholder='카테고리를 선택하세요'
            required
          />
        </div>

        <div style={{ marginBottom: '16px' }}>
          <label
            style={{
              display: 'block',
              marginBottom: '8px',
              fontSize: '14px',
              fontWeight: '600',
            }}
          >
            우선순위
          </label>
          <SelectBox
            name='priority'
            options={priorityOptions}
            value={formData.priority}
            onChange={(value) =>
              setFormData((prev) => ({ ...prev, priority: value }))
            }
            placeholder='우선순위를 선택하세요'
          />
        </div>

        <div style={{ marginBottom: '24px' }}>
          <label
            style={{
              display: 'block',
              marginBottom: '8px',
              fontSize: '14px',
              fontWeight: '600',
            }}
          >
            상태
          </label>
          <SelectBox
            name='status'
            options={statusOptions}
            value={formData.status}
            onChange={(value) =>
              setFormData((prev) => ({ ...prev, status: value }))
            }
            placeholder='상태를 선택하세요'
          />
        </div>

        <button
          type='submit'
          style={{
            width: '100%',
            padding: '12px',
            backgroundColor: '#6da5fa',
            color: 'white',
            border: 'none',
            borderRadius: '8px',
            fontSize: '16px',
            fontWeight: '600',
            cursor: 'pointer',
          }}
        >
          제출
        </button>

        <div
          style={{
            marginTop: '16px',
            padding: '12px',
            backgroundColor: '#f8f9fa',
            borderRadius: '8px',
          }}
        >
          <h4
            style={{ margin: '0 0 8px 0', fontSize: '14px', fontWeight: '600' }}
          >
            현재 폼 데이터:
          </h4>
          <pre style={{ margin: 0, fontSize: '12px', color: '#666' }}>
            {JSON.stringify(formData, null, 2)}
          </pre>
        </div>
      </form>
    );
  },
  parameters: {
    docs: {
      description: {
        story:
          '실제 폼에서 셀렉트박스를 사용하는 예시입니다. 폼 데이터 관리와 제출 기능을 포함합니다.',
      },
    },
  },
};

// 반응형 테스트
export const ResponsiveTest: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <div style={{ width: '100%', maxWidth: '500px' }}>
        <h4
          style={{ marginBottom: '8px', fontSize: '14px', fontWeight: '600' }}
        >
          넓은 화면 (500px)
        </h4>
        <SelectBox
          options={countryOptions}
          placeholder='넓은 화면에서의 셀렉트박스'
        />
      </div>
      <div style={{ width: '100%', maxWidth: '320px' }}>
        <h4
          style={{ marginBottom: '8px', fontSize: '14px', fontWeight: '600' }}
        >
          중간 화면 (320px)
        </h4>
        <SelectBox
          options={countryOptions}
          placeholder='중간 화면에서의 셀렉트박스'
        />
      </div>
      <div style={{ width: '100%', maxWidth: '250px' }}>
        <h4
          style={{ marginBottom: '8px', fontSize: '14px', fontWeight: '600' }}
        >
          좁은 화면 (250px)
        </h4>
        <SelectBox
          options={countryOptions}
          placeholder='좁은 화면에서의 셀렉트박스'
        />
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          '다양한 화면 크기에서의 셀렉트박스 반응형 동작을 확인할 수 있습니다.',
      },
    },
  },
};
