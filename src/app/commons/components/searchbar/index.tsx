'use client';

import React, { forwardRef, InputHTMLAttributes } from 'react';
// Image 컴포넌트는 SVG 지원 제한으로 인해 제거
import styles from './styles.module.css';

// Variant 타입 정의
export type SearchBarVariant = 'primary' | 'secondary' | 'tertiary';
export type SearchBarSize = 'small' | 'medium' | 'large';
export type SearchBarTheme = 'light' | 'dark';

// SearchBar Props 인터페이스
export interface SearchBarProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> {
  /** 검색바 변형 스타일 */
  variant?: SearchBarVariant;
  /** 검색바 크기 */
  size?: SearchBarSize;
  /** 테마 (라이트/다크) */
  theme?: SearchBarTheme;
  /** 플레이스홀더 텍스트 */
  placeholder?: string;
  /** 검색 아이콘 표시 여부 */
  showIcon?: boolean;
  /** 검색 버튼 클릭 핸들러 */
  onSearch?: (value: string) => void;
  /** 클리어 버튼 표시 여부 */
  showClear?: boolean;
  /** 클리어 버튼 클릭 핸들러 */
  onClear?: () => void;
  /** 컨테이너 추가 클래스명 */
  containerClassName?: string;
}

// SearchBar 컴포넌트
export const SearchBar = forwardRef<HTMLInputElement, SearchBarProps>(
  (
    {
      variant = 'primary',
      size = 'medium',
      theme = 'light',
      placeholder = '검색어를 입력해 주세요.',
      showIcon = true,
      onSearch,
      showClear = false,
      onClear,
      containerClassName = '',
      className = '',
      value,
      onChange,
      onKeyDown,
      ...props
    },
    ref
  ) => {
    // 검색 실행 핸들러
    const handleSearch = () => {
      if (onSearch && typeof value === 'string') {
        onSearch(value);
      }
    };

    // 키보드 이벤트 핸들러
    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.key === 'Enter') {
        handleSearch();
      }
      onKeyDown?.(e);
    };

    // 클리어 핸들러
    const handleClear = () => {
      onClear?.();
    };

    // 클래스명 조합
    const containerClasses = [
      styles.searchBarContainer,
      styles[`variant-${variant}`],
      styles[`size-${size}`],
      styles[`theme-${theme}`],
      containerClassName,
    ]
      .filter(Boolean)
      .join(' ');

    const inputClasses = [styles.searchBarInput, className]
      .filter(Boolean)
      .join(' ');

    return (
      <div className={containerClasses}>
        {/* 검색 아이콘 */}
        {showIcon && (
          <button
            type='button'
            className={styles.searchIcon}
            onClick={handleSearch}
            aria-label='검색'
          >
            <img
              src='/icons/search_outline_light_m.svg'
              alt='검색'
              width={24}
              height={24}
            />
          </button>
        )}

        {/* 입력 필드 */}
        <input
          ref={ref}
          type='text'
          className={inputClasses}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          onKeyDown={handleKeyDown}
          {...props}
        />

        {/* 클리어 버튼 */}
        {showClear && value && (
          <button
            type='button'
            className={styles.clearButton}
            onClick={handleClear}
            aria-label='검색어 지우기'
          >
            <img
              src='/icons/close_outline_light_s.svg'
              alt='닫기'
              width={20}
              height={20}
            />
          </button>
        )}
      </div>
    );
  }
);

SearchBar.displayName = 'SearchBar';

export default SearchBar;
