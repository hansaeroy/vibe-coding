import React, { useState } from 'react';
import { SelectBox, SelectOption } from './index';

// 테스트용 옵션 데이터
const testOptions: SelectOption[] = [
  { value: 'all', label: '전체' },
  { value: 'option1', label: '옵션 1' },
  { value: 'option2', label: '옵션 2' },
  { value: 'option3', label: '옵션 3' },
  { value: 'disabled', label: '비활성화 옵션', disabled: true },
  {
    value: 'long-text',
    label: '매우 긴 텍스트를 가진 옵션입니다. 이 텍스트는 잘릴 수 있습니다.',
  },
];

/**
 * SelectBox 컴포넌트 테스트 페이지
 */
export const SelectBoxTest = () => {
  const [selectedValue, setSelectedValue] = useState<string>('');
  const [controlledValue, setControlledValue] = useState<string>('option1');

  const handleChange = (value: string, option: SelectOption) => {
    console.log('Selected:', { value, option });
    setSelectedValue(value);
  };

  const handleControlledChange = (value: string, option: SelectOption) => {
    console.log('Controlled Selected:', { value, option });
    setControlledValue(value);
  };

  return (
    <div style={{ padding: '40px', maxWidth: '1200px', margin: '0 auto' }}>
      <h1
        style={{ marginBottom: '40px', fontSize: '24px', fontWeight: 'bold' }}
      >
        SelectBox 컴포넌트 테스트
      </h1>

      {/* 기본 사용법 */}
      <section style={{ marginBottom: '40px' }}>
        <h2
          style={{ marginBottom: '20px', fontSize: '18px', fontWeight: '600' }}
        >
          기본 사용법
        </h2>
        <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
          <SelectBox
            options={testOptions}
            placeholder='옵션을 선택하세요'
            onChange={handleChange}
          />
          <div
            style={{
              padding: '10px',
              backgroundColor: '#f5f5f5',
              borderRadius: '4px',
            }}
          >
            선택된 값: {selectedValue || '없음'}
          </div>
        </div>
      </section>

      {/* 제어 컴포넌트 */}
      <section style={{ marginBottom: '40px' }}>
        <h2
          style={{ marginBottom: '20px', fontSize: '18px', fontWeight: '600' }}
        >
          제어 컴포넌트 (Controlled)
        </h2>
        <div
          style={{
            display: 'flex',
            gap: '20px',
            flexWrap: 'wrap',
            alignItems: 'center',
          }}
        >
          <SelectBox
            options={testOptions}
            value={controlledValue}
            onChange={handleControlledChange}
          />
          <button
            onClick={() => setControlledValue('option2')}
            style={{
              padding: '8px 16px',
              border: '1px solid #ccc',
              borderRadius: '4px',
            }}
          >
            옵션 2로 변경
          </button>
          <button
            onClick={() => setControlledValue('')}
            style={{
              padding: '8px 16px',
              border: '1px solid #ccc',
              borderRadius: '4px',
            }}
          >
            초기화
          </button>
        </div>
      </section>

      {/* 사이즈 변형 */}
      <section style={{ marginBottom: '40px' }}>
        <h2
          style={{ marginBottom: '20px', fontSize: '18px', fontWeight: '600' }}
        >
          사이즈 변형
        </h2>
        <div
          style={{
            display: 'flex',
            gap: '20px',
            flexWrap: 'wrap',
            alignItems: 'flex-start',
          }}
        >
          <div>
            <h3 style={{ marginBottom: '8px', fontSize: '14px' }}>Small</h3>
            <SelectBox
              size='small'
              options={testOptions}
              defaultValue='option1'
            />
          </div>
          <div>
            <h3 style={{ marginBottom: '8px', fontSize: '14px' }}>
              Medium (기본)
            </h3>
            <SelectBox
              size='medium'
              options={testOptions}
              defaultValue='option1'
            />
          </div>
          <div>
            <h3 style={{ marginBottom: '8px', fontSize: '14px' }}>Large</h3>
            <SelectBox
              size='large'
              options={testOptions}
              defaultValue='option1'
            />
          </div>
        </div>
      </section>

      {/* Variant 변형 - Light 테마 */}
      <section style={{ marginBottom: '40px' }}>
        <h2
          style={{ marginBottom: '20px', fontSize: '18px', fontWeight: '600' }}
        >
          Variant 변형 - Light 테마
        </h2>
        <div
          style={{
            display: 'flex',
            gap: '20px',
            flexWrap: 'wrap',
            alignItems: 'flex-start',
          }}
        >
          <div>
            <h3 style={{ marginBottom: '8px', fontSize: '14px' }}>Primary</h3>
            <SelectBox
              variant='primary'
              theme='light'
              options={testOptions}
              defaultValue='option1'
            />
          </div>
          <div>
            <h3 style={{ marginBottom: '8px', fontSize: '14px' }}>Secondary</h3>
            <SelectBox
              variant='secondary'
              theme='light'
              options={testOptions}
              defaultValue='option1'
            />
          </div>
          <div>
            <h3 style={{ marginBottom: '8px', fontSize: '14px' }}>Tertiary</h3>
            <SelectBox
              variant='tertiary'
              theme='light'
              options={testOptions}
              defaultValue='option1'
            />
          </div>
        </div>
      </section>

      {/* Variant 변형 - Dark 테마 */}
      <section
        style={{
          marginBottom: '40px',
          padding: '20px',
          backgroundColor: '#1c1c1c',
          borderRadius: '8px',
        }}
      >
        <h2
          style={{
            marginBottom: '20px',
            fontSize: '18px',
            fontWeight: '600',
            color: '#ffffff',
          }}
        >
          Variant 변형 - Dark 테마
        </h2>
        <div
          style={{
            display: 'flex',
            gap: '20px',
            flexWrap: 'wrap',
            alignItems: 'flex-start',
          }}
        >
          <div>
            <h3
              style={{
                marginBottom: '8px',
                fontSize: '14px',
                color: '#ffffff',
              }}
            >
              Primary
            </h3>
            <SelectBox
              variant='primary'
              theme='dark'
              options={testOptions}
              defaultValue='option1'
            />
          </div>
          <div>
            <h3
              style={{
                marginBottom: '8px',
                fontSize: '14px',
                color: '#ffffff',
              }}
            >
              Secondary
            </h3>
            <SelectBox
              variant='secondary'
              theme='dark'
              options={testOptions}
              defaultValue='option1'
            />
          </div>
          <div>
            <h3
              style={{
                marginBottom: '8px',
                fontSize: '14px',
                color: '#ffffff',
              }}
            >
              Tertiary
            </h3>
            <SelectBox
              variant='tertiary'
              theme='dark'
              options={testOptions}
              defaultValue='option1'
            />
          </div>
        </div>
      </section>

      {/* 비활성화 상태 */}
      <section style={{ marginBottom: '40px' }}>
        <h2
          style={{ marginBottom: '20px', fontSize: '18px', fontWeight: '600' }}
        >
          비활성화 상태
        </h2>
        <div
          style={{
            display: 'flex',
            gap: '20px',
            flexWrap: 'wrap',
            alignItems: 'flex-start',
          }}
        >
          <SelectBox options={testOptions} defaultValue='option1' disabled />
          <SelectBox
            options={testOptions}
            placeholder='비활성화된 셀렉트박스'
            disabled
          />
        </div>
      </section>

      {/* 폼 통합 테스트 */}
      <section style={{ marginBottom: '40px' }}>
        <h2
          style={{ marginBottom: '20px', fontSize: '18px', fontWeight: '600' }}
        >
          폼 통합 테스트
        </h2>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            const formData = new FormData(e.currentTarget);
            console.log('Form Data:', Object.fromEntries(formData));
            alert('폼 데이터가 콘솔에 출력되었습니다.');
          }}
          style={{
            display: 'flex',
            gap: '20px',
            flexWrap: 'wrap',
            alignItems: 'flex-end',
          }}
        >
          <div>
            <label
              style={{
                display: 'block',
                marginBottom: '8px',
                fontSize: '14px',
              }}
            >
              카테고리 선택 (필수)
            </label>
            <SelectBox
              name='category'
              options={testOptions}
              placeholder='카테고리를 선택하세요'
              required
            />
          </div>
          <div>
            <label
              style={{
                display: 'block',
                marginBottom: '8px',
                fontSize: '14px',
              }}
            >
              옵션 선택 (선택사항)
            </label>
            <SelectBox
              name='option'
              options={testOptions}
              defaultValue='option2'
            />
          </div>
          <button
            type='submit'
            style={{
              padding: '12px 24px',
              backgroundColor: '#6da5fa',
              color: '#ffffff',
              border: 'none',
              borderRadius: '8px',
              cursor: 'pointer',
              fontSize: '16px',
              fontWeight: '600',
            }}
          >
            제출
          </button>
        </form>
      </section>

      {/* 키보드 네비게이션 안내 */}
      <section style={{ marginBottom: '40px' }}>
        <h2
          style={{ marginBottom: '20px', fontSize: '18px', fontWeight: '600' }}
        >
          키보드 네비게이션 안내
        </h2>
        <div
          style={{
            padding: '20px',
            backgroundColor: '#f8f9fa',
            borderRadius: '8px',
          }}
        >
          <ul style={{ margin: 0, paddingLeft: '20px' }}>
            <li>
              <strong>Enter/Space:</strong> 드롭다운 열기/닫기, 옵션 선택
            </li>
            <li>
              <strong>Escape:</strong> 드롭다운 닫기
            </li>
            <li>
              <strong>Arrow Down:</strong> 다음 옵션으로 이동
            </li>
            <li>
              <strong>Arrow Up:</strong> 이전 옵션으로 이동
            </li>
            <li>
              <strong>Tab:</strong> 다음 요소로 포커스 이동
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default SelectBoxTest;
