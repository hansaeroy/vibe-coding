'use client';

import React, { useState } from 'react';
import {
  SearchBar,
  SearchBarVariant,
  SearchBarSize,
  SearchBarTheme,
} from './index';

// 테스트 컴포넌트
export default function SearchBarTest() {
  const [searchValue, setSearchValue] = useState('');
  const [variant, setVariant] = useState<SearchBarVariant>('primary');
  const [size, setSize] = useState<SearchBarSize>('medium');
  const [theme, setTheme] = useState<SearchBarTheme>('light');

  const handleSearch = (value: string) => {
    console.log('검색:', value);
    alert(`검색어: ${value}`);
  };

  const handleClear = () => {
    setSearchValue('');
  };

  return (
    <div
      style={{
        padding: '40px',
        backgroundColor: theme === 'dark' ? '#000000' : '#ffffff',
        minHeight: '100vh',
        color: theme === 'dark' ? '#ffffff' : '#000000',
      }}
    >
      <h1>SearchBar 컴포넌트 테스트</h1>

      {/* 컨트롤 패널 */}
      <div
        style={{
          marginBottom: '40px',
          display: 'flex',
          gap: '20px',
          flexWrap: 'wrap',
        }}
      >
        <div>
          <label>Variant: </label>
          <select
            value={variant}
            onChange={(e) => setVariant(e.target.value as SearchBarVariant)}
            style={{ padding: '4px 8px' }}
          >
            <option value='primary'>Primary</option>
            <option value='secondary'>Secondary</option>
            <option value='tertiary'>Tertiary</option>
          </select>
        </div>

        <div>
          <label>Size: </label>
          <select
            value={size}
            onChange={(e) => setSize(e.target.value as SearchBarSize)}
            style={{ padding: '4px 8px' }}
          >
            <option value='small'>Small</option>
            <option value='medium'>Medium</option>
            <option value='large'>Large</option>
          </select>
        </div>

        <div>
          <label>Theme: </label>
          <select
            value={theme}
            onChange={(e) => setTheme(e.target.value as SearchBarTheme)}
            style={{ padding: '4px 8px' }}
          >
            <option value='light'>Light</option>
            <option value='dark'>Dark</option>
          </select>
        </div>
      </div>

      {/* 현재 설정으로 테스트 */}
      <div style={{ marginBottom: '40px' }}>
        <h2>
          현재 설정: {variant} / {size} / {theme}
        </h2>
        <div style={{ maxWidth: '400px' }}>
          <SearchBar
            variant={variant}
            size={size}
            theme={theme}
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            onSearch={handleSearch}
            onClear={handleClear}
            showClear={true}
            placeholder='검색어를 입력해 주세요.'
          />
        </div>
        <p style={{ marginTop: '10px', fontSize: '14px', color: '#666' }}>
          현재 값: &quot;{searchValue}&quot;
        </p>
      </div>

      {/* 모든 Variant 테스트 */}
      <div style={{ marginBottom: '40px' }}>
        <h2>모든 Variant (Medium Size, {theme} Theme)</h2>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '20px',
            maxWidth: '400px',
          }}
        >
          <div>
            <h3>Primary</h3>
            <SearchBar
              variant='primary'
              size='medium'
              theme={theme}
              placeholder='Primary variant'
            />
          </div>
          <div>
            <h3>Secondary</h3>
            <SearchBar
              variant='secondary'
              size='medium'
              theme={theme}
              placeholder='Secondary variant'
            />
          </div>
          <div>
            <h3>Tertiary</h3>
            <SearchBar
              variant='tertiary'
              size='medium'
              theme={theme}
              placeholder='Tertiary variant'
            />
          </div>
        </div>
      </div>

      {/* 모든 Size 테스트 */}
      <div style={{ marginBottom: '40px' }}>
        <h2>모든 Size (Primary Variant, {theme} Theme)</h2>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '20px',
            maxWidth: '400px',
          }}
        >
          <div>
            <h3>Small</h3>
            <SearchBar
              variant='primary'
              size='small'
              theme={theme}
              placeholder='Small size'
            />
          </div>
          <div>
            <h3>Medium</h3>
            <SearchBar
              variant='primary'
              size='medium'
              theme={theme}
              placeholder='Medium size'
            />
          </div>
          <div>
            <h3>Large</h3>
            <SearchBar
              variant='primary'
              size='large'
              theme={theme}
              placeholder='Large size'
            />
          </div>
        </div>
      </div>

      {/* 기능 테스트 */}
      <div style={{ marginBottom: '40px' }}>
        <h2>기능 테스트</h2>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '20px',
            maxWidth: '400px',
          }}
        >
          <div>
            <h3>아이콘 없음</h3>
            <SearchBar
              variant='primary'
              size='medium'
              theme={theme}
              showIcon={false}
              placeholder='아이콘 없는 검색바'
            />
          </div>
          <div>
            <h3>비활성화</h3>
            <SearchBar
              variant='primary'
              size='medium'
              theme={theme}
              disabled
              placeholder='비활성화된 검색바'
            />
          </div>
          <div>
            <h3>기본값 있음</h3>
            <SearchBar
              variant='primary'
              size='medium'
              theme={theme}
              defaultValue='기본 검색어'
              showClear={true}
            />
          </div>
        </div>
      </div>

      {/* 사용법 안내 */}
      <div
        style={{
          marginTop: '60px',
          padding: '20px',
          backgroundColor: theme === 'dark' ? '#333' : '#f5f5f5',
          borderRadius: '8px',
        }}
      >
        <h2>사용법</h2>
        <pre style={{ fontSize: '14px', overflow: 'auto' }}>
          {`import { SearchBar } from '@/commons/components/searchbar';

// 기본 사용법
<SearchBar 
  placeholder="검색어를 입력하세요"
  onSearch={(value) => console.log(value)}
/>

// 모든 옵션 사용
<SearchBar
  variant="primary"        // 'primary' | 'secondary' | 'tertiary'
  size="medium"           // 'small' | 'medium' | 'large'
  theme="light"           // 'light' | 'dark'
  value={searchValue}
  onChange={(e) => setSearchValue(e.target.value)}
  onSearch={handleSearch}
  onClear={handleClear}
  showIcon={true}
  showClear={true}
  placeholder="검색어를 입력해 주세요."
/>`}
        </pre>
      </div>
    </div>
  );
}
