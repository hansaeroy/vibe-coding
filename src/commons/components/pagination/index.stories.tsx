import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { useState } from 'react';
import Pagination from './index';

const meta: Meta<typeof Pagination> = {
  title: 'Commons/Components/Pagination',
  component: Pagination,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          '페이지네이션 컴포넌트입니다. 다양한 스타일과 크기, 테마를 지원하며 페이지 탐색 기능을 제공합니다.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    currentPage: {
      control: { type: 'number', min: 1 },
      description: '현재 페이지 번호 (1부터 시작)',
      defaultValue: 1,
    },
    totalPages: {
      control: { type: 'number', min: 1 },
      description: '전체 페이지 수',
      defaultValue: 10,
    },
    variant: {
      control: { type: 'select' },
      options: ['primary', 'secondary', 'tertiary'],
      description: '페이지네이션 스타일 변형',
      defaultValue: 'primary',
    },
    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large'],
      description: '페이지네이션 크기',
      defaultValue: 'medium',
    },
    theme: {
      control: { type: 'select' },
      options: ['light', 'dark'],
      description: '테마 모드',
      defaultValue: 'light',
    },
    visiblePages: {
      control: { type: 'number', min: 3, max: 10 },
      description: '한 번에 표시할 페이지 번호 개수',
      defaultValue: 5,
    },
    disabled: {
      control: { type: 'boolean' },
      description: '페이지네이션 비활성화 상태',
      defaultValue: false,
    },
    onPageChange: {
      action: 'page-changed',
      description: '페이지 변경 시 호출되는 콜백 함수',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// 기본 스토리
export const Default: Story = {
  args: {
    currentPage: 1,
    totalPages: 10,
    onPageChange: (page: number) => console.log('Page changed to:', page),
  },
};

// Variant별 스토리
export const Primary: Story = {
  args: {
    variant: 'primary',
    currentPage: 5,
    totalPages: 10,
    onPageChange: (page: number) =>
      console.log('Primary page changed to:', page),
  },
};

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    currentPage: 5,
    totalPages: 10,
    onPageChange: (page: number) =>
      console.log('Secondary page changed to:', page),
  },
};

export const Tertiary: Story = {
  args: {
    variant: 'tertiary',
    currentPage: 5,
    totalPages: 10,
    onPageChange: (page: number) =>
      console.log('Tertiary page changed to:', page),
  },
};

// Size별 스토리
export const Small: Story = {
  args: {
    size: 'small',
    currentPage: 3,
    totalPages: 8,
    onPageChange: (page: number) =>
      console.log('Small pagination page changed to:', page),
  },
};

export const Medium: Story = {
  args: {
    size: 'medium',
    currentPage: 3,
    totalPages: 8,
    onPageChange: (page: number) =>
      console.log('Medium pagination page changed to:', page),
  },
};

export const Large: Story = {
  args: {
    size: 'large',
    currentPage: 3,
    totalPages: 8,
    onPageChange: (page: number) =>
      console.log('Large pagination page changed to:', page),
  },
};

// 테마별 스토리
export const LightTheme: Story = {
  args: {
    theme: 'light',
    currentPage: 4,
    totalPages: 12,
    onPageChange: (page: number) =>
      console.log('Light theme page changed to:', page),
  },
  parameters: {
    backgrounds: { default: 'light' },
  },
};

export const DarkTheme: Story = {
  args: {
    theme: 'dark',
    currentPage: 4,
    totalPages: 12,
    onPageChange: (page: number) =>
      console.log('Dark theme page changed to:', page),
  },
  parameters: {
    backgrounds: { default: 'dark' },
  },
};

// 비활성화 상태
export const Disabled: Story = {
  args: {
    disabled: true,
    currentPage: 5,
    totalPages: 10,
    onPageChange: (page: number) =>
      console.log('Disabled pagination page changed to:', page),
  },
};

// 다양한 페이지 수 케이스
export const FewPages: Story = {
  args: {
    currentPage: 2,
    totalPages: 3,
    onPageChange: (page: number) =>
      console.log('Few pages - page changed to:', page),
  },
  parameters: {
    docs: {
      description: {
        story: '페이지 수가 적을 때의 페이지네이션입니다.',
      },
    },
  },
};

export const ManyPages: Story = {
  args: {
    currentPage: 25,
    totalPages: 50,
    onPageChange: (page: number) =>
      console.log('Many pages - page changed to:', page),
  },
  parameters: {
    docs: {
      description: {
        story: '페이지 수가 많을 때의 페이지네이션입니다.',
      },
    },
  },
};

// 다양한 visiblePages 설정
export const VisiblePages3: Story = {
  args: {
    currentPage: 10,
    totalPages: 20,
    visiblePages: 3,
    onPageChange: (page: number) =>
      console.log('Visible 3 pages - page changed to:', page),
  },
  parameters: {
    docs: {
      description: {
        story: '3개의 페이지 번호만 표시하는 페이지네이션입니다.',
      },
    },
  },
};

export const VisiblePages7: Story = {
  args: {
    currentPage: 10,
    totalPages: 20,
    visiblePages: 7,
    onPageChange: (page: number) =>
      console.log('Visible 7 pages - page changed to:', page),
  },
  parameters: {
    docs: {
      description: {
        story: '7개의 페이지 번호를 표시하는 페이지네이션입니다.',
      },
    },
  },
};

// 경계 케이스들
export const FirstPage: Story = {
  args: {
    currentPage: 1,
    totalPages: 15,
    onPageChange: (page: number) =>
      console.log('First page - page changed to:', page),
  },
  parameters: {
    docs: {
      description: {
        story: '첫 번째 페이지에 있을 때의 페이지네이션입니다.',
      },
    },
  },
};

export const LastPage: Story = {
  args: {
    currentPage: 15,
    totalPages: 15,
    onPageChange: (page: number) =>
      console.log('Last page - page changed to:', page),
  },
  parameters: {
    docs: {
      description: {
        story: '마지막 페이지에 있을 때의 페이지네이션입니다.',
      },
    },
  },
};

// 모든 Variant 조합 보기
export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      <div>
        <h3
          style={{ marginBottom: '12px', fontSize: '14px', fontWeight: '600' }}
        >
          Primary
        </h3>
        <Pagination
          variant='primary'
          currentPage={3}
          totalPages={8}
          onPageChange={(page) => console.log('Primary variant - page:', page)}
        />
      </div>
      <div>
        <h3
          style={{ marginBottom: '12px', fontSize: '14px', fontWeight: '600' }}
        >
          Secondary
        </h3>
        <Pagination
          variant='secondary'
          currentPage={3}
          totalPages={8}
          onPageChange={(page) =>
            console.log('Secondary variant - page:', page)
          }
        />
      </div>
      <div>
        <h3
          style={{ marginBottom: '12px', fontSize: '14px', fontWeight: '600' }}
        >
          Tertiary
        </h3>
        <Pagination
          variant='tertiary'
          currentPage={3}
          totalPages={8}
          onPageChange={(page) => console.log('Tertiary variant - page:', page)}
        />
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: '모든 페이지네이션 variant를 한 번에 볼 수 있습니다.',
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
        gap: '24px',
        alignItems: 'center',
      }}
    >
      <div>
        <h3
          style={{
            marginBottom: '12px',
            fontSize: '14px',
            fontWeight: '600',
            textAlign: 'center',
          }}
        >
          Small
        </h3>
        <Pagination
          size='small'
          currentPage={4}
          totalPages={10}
          onPageChange={(page) => console.log('Small size - page:', page)}
        />
      </div>
      <div>
        <h3
          style={{
            marginBottom: '12px',
            fontSize: '14px',
            fontWeight: '600',
            textAlign: 'center',
          }}
        >
          Medium
        </h3>
        <Pagination
          size='medium'
          currentPage={4}
          totalPages={10}
          onPageChange={(page) => console.log('Medium size - page:', page)}
        />
      </div>
      <div>
        <h3
          style={{
            marginBottom: '12px',
            fontSize: '14px',
            fontWeight: '600',
            textAlign: 'center',
          }}
        >
          Large
        </h3>
        <Pagination
          size='large'
          currentPage={4}
          totalPages={10}
          onPageChange={(page) => console.log('Large size - page:', page)}
        />
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: '모든 페이지네이션 크기를 한 번에 볼 수 있습니다.',
      },
    },
  },
};

// 라이트 테마 전체 조합
export const LightThemeShowcase: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
      <div>
        <h3
          style={{ marginBottom: '16px', fontSize: '16px', fontWeight: '600' }}
        >
          Primary Pagination
        </h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <Pagination
            variant='primary'
            size='small'
            theme='light'
            currentPage={2}
            totalPages={8}
            onPageChange={(page) =>
              console.log('Light Primary Small - page:', page)
            }
          />
          <Pagination
            variant='primary'
            size='medium'
            theme='light'
            currentPage={3}
            totalPages={8}
            onPageChange={(page) =>
              console.log('Light Primary Medium - page:', page)
            }
          />
          <Pagination
            variant='primary'
            size='large'
            theme='light'
            currentPage={4}
            totalPages={8}
            onPageChange={(page) =>
              console.log('Light Primary Large - page:', page)
            }
          />
        </div>
      </div>
      <div>
        <h3
          style={{ marginBottom: '16px', fontSize: '16px', fontWeight: '600' }}
        >
          Secondary Pagination
        </h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <Pagination
            variant='secondary'
            size='small'
            theme='light'
            currentPage={2}
            totalPages={8}
            onPageChange={(page) =>
              console.log('Light Secondary Small - page:', page)
            }
          />
          <Pagination
            variant='secondary'
            size='medium'
            theme='light'
            currentPage={3}
            totalPages={8}
            onPageChange={(page) =>
              console.log('Light Secondary Medium - page:', page)
            }
          />
          <Pagination
            variant='secondary'
            size='large'
            theme='light'
            currentPage={4}
            totalPages={8}
            onPageChange={(page) =>
              console.log('Light Secondary Large - page:', page)
            }
          />
        </div>
      </div>
      <div>
        <h3
          style={{ marginBottom: '16px', fontSize: '16px', fontWeight: '600' }}
        >
          Tertiary Pagination
        </h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <Pagination
            variant='tertiary'
            size='small'
            theme='light'
            currentPage={2}
            totalPages={8}
            onPageChange={(page) =>
              console.log('Light Tertiary Small - page:', page)
            }
          />
          <Pagination
            variant='tertiary'
            size='medium'
            theme='light'
            currentPage={3}
            totalPages={8}
            onPageChange={(page) =>
              console.log('Light Tertiary Medium - page:', page)
            }
          />
          <Pagination
            variant='tertiary'
            size='large'
            theme='light'
            currentPage={4}
            totalPages={8}
            onPageChange={(page) =>
              console.log('Light Tertiary Large - page:', page)
            }
          />
        </div>
      </div>
    </div>
  ),
  parameters: {
    backgrounds: { default: 'light' },
    docs: {
      description: {
        story: '라이트 테마에서 모든 페이지네이션 조합을 보여줍니다.',
      },
    },
  },
};

// 다크 테마 전체 조합
export const DarkThemeShowcase: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
      <div>
        <h3
          style={{
            marginBottom: '16px',
            fontSize: '16px',
            fontWeight: '600',
            color: '#ffffff',
          }}
        >
          Primary Pagination
        </h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <Pagination
            variant='primary'
            size='small'
            theme='dark'
            currentPage={2}
            totalPages={8}
            onPageChange={(page) =>
              console.log('Dark Primary Small - page:', page)
            }
          />
          <Pagination
            variant='primary'
            size='medium'
            theme='dark'
            currentPage={3}
            totalPages={8}
            onPageChange={(page) =>
              console.log('Dark Primary Medium - page:', page)
            }
          />
          <Pagination
            variant='primary'
            size='large'
            theme='dark'
            currentPage={4}
            totalPages={8}
            onPageChange={(page) =>
              console.log('Dark Primary Large - page:', page)
            }
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
          Secondary Pagination
        </h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <Pagination
            variant='secondary'
            size='small'
            theme='dark'
            currentPage={2}
            totalPages={8}
            onPageChange={(page) =>
              console.log('Dark Secondary Small - page:', page)
            }
          />
          <Pagination
            variant='secondary'
            size='medium'
            theme='dark'
            currentPage={3}
            totalPages={8}
            onPageChange={(page) =>
              console.log('Dark Secondary Medium - page:', page)
            }
          />
          <Pagination
            variant='secondary'
            size='large'
            theme='dark'
            currentPage={4}
            totalPages={8}
            onPageChange={(page) =>
              console.log('Dark Secondary Large - page:', page)
            }
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
          Tertiary Pagination
        </h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <Pagination
            variant='tertiary'
            size='small'
            theme='dark'
            currentPage={2}
            totalPages={8}
            onPageChange={(page) =>
              console.log('Dark Tertiary Small - page:', page)
            }
          />
          <Pagination
            variant='tertiary'
            size='medium'
            theme='dark'
            currentPage={3}
            totalPages={8}
            onPageChange={(page) =>
              console.log('Dark Tertiary Medium - page:', page)
            }
          />
          <Pagination
            variant='tertiary'
            size='large'
            theme='dark'
            currentPage={4}
            totalPages={8}
            onPageChange={(page) =>
              console.log('Dark Tertiary Large - page:', page)
            }
          />
        </div>
      </div>
    </div>
  ),
  parameters: {
    backgrounds: { default: 'dark' },
    docs: {
      description: {
        story: '다크 테마에서 모든 페이지네이션 조합을 보여줍니다.',
      },
    },
  },
};

// 인터랙티브 스토리 (상태 관리 포함)
export const Interactive: Story = {
  render: () => {
    const [currentPage, setCurrentPage] = useState(1);
    const totalPages = 15;

    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '16px',
          alignItems: 'center',
        }}
      >
        <div style={{ fontSize: '14px', color: '#666' }}>
          현재 페이지: {currentPage} / {totalPages}
        </div>
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
        />
        <div style={{ fontSize: '12px', color: '#999', textAlign: 'center' }}>
          페이지 버튼을 클릭하여 상태 변화를 확인하세요.
        </div>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: '실제 상태 관리가 포함된 인터랙티브 페이지네이션입니다.',
      },
    },
  },
};

// 극단적인 케이스들
export const EdgeCases: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      <div>
        <h4
          style={{ marginBottom: '8px', fontSize: '14px', fontWeight: '600' }}
        >
          단일 페이지 (렌더링되지 않음)
        </h4>
        <Pagination
          currentPage={1}
          totalPages={1}
          onPageChange={(page) => console.log('Single page - page:', page)}
        />
        <div style={{ fontSize: '12px', color: '#999', marginTop: '4px' }}>
          totalPages가 1 이하일 때는 컴포넌트가 렌더링되지 않습니다.
        </div>
      </div>
      <div>
        <h4
          style={{ marginBottom: '8px', fontSize: '14px', fontWeight: '600' }}
        >
          2페이지만 있는 경우
        </h4>
        <Pagination
          currentPage={1}
          totalPages={2}
          onPageChange={(page) => console.log('Two pages - page:', page)}
        />
      </div>
      <div>
        <h4
          style={{ marginBottom: '8px', fontSize: '14px', fontWeight: '600' }}
        >
          매우 많은 페이지 (100페이지)
        </h4>
        <Pagination
          currentPage={50}
          totalPages={100}
          onPageChange={(page) => console.log('Many pages - page:', page)}
        />
      </div>
      <div>
        <h4
          style={{ marginBottom: '8px', fontSize: '14px', fontWeight: '600' }}
        >
          비활성화된 상태
        </h4>
        <Pagination
          currentPage={5}
          totalPages={10}
          disabled={true}
          onPageChange={(page) => console.log('Disabled - page:', page)}
        />
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: '다양한 극단적인 케이스들을 보여주는 페이지네이션입니다.',
      },
    },
  },
};
