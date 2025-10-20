'use client';

import React from 'react';
import styles from './styles.module.css';

// 페이지네이션 컴포넌트 Props 타입 정의
export interface PaginationProps {
  /** 현재 페이지 번호 (1부터 시작) */
  currentPage: number;
  /** 전체 페이지 수 */
  totalPages: number;
  /** 페이지 변경 시 호출되는 콜백 함수 */
  onPageChange: (page: number) => void;
  /** 컴포넌트 variant */
  variant?: 'primary' | 'secondary' | 'tertiary';
  /** 컴포넌트 크기 */
  size?: 'small' | 'medium' | 'large';
  /** 테마 */
  theme?: 'light' | 'dark';
  /** 한 번에 표시할 페이지 번호 개수 (기본값: 5) */
  visiblePages?: number;
  /** 비활성화 상태 */
  disabled?: boolean;
  /** 추가 CSS 클래스 */
  className?: string;
}

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
  variant = 'primary',
  size = 'medium',
  theme = 'light',
  visiblePages = 5,
  disabled = false,
  className = '',
}) => {
  // 표시할 페이지 번호 범위 계산
  const getVisiblePageNumbers = (): number[] => {
    const pages: number[] = [];
    const halfVisible = Math.floor(visiblePages / 2);

    let startPage = Math.max(1, currentPage - halfVisible);
    const endPage = Math.min(totalPages, startPage + visiblePages - 1);

    // 끝 페이지가 총 페이지 수보다 작을 때 시작 페이지 조정
    if (endPage - startPage + 1 < visiblePages) {
      startPage = Math.max(1, endPage - visiblePages + 1);
    }

    for (let i = startPage; i <= endPage; i++) {
      pages.push(i);
    }

    return pages;
  };

  // 이전 페이지로 이동
  const handlePrevious = () => {
    if (currentPage > 1 && !disabled) {
      onPageChange(currentPage - 1);
    }
  };

  // 다음 페이지로 이동
  const handleNext = () => {
    if (currentPage < totalPages && !disabled) {
      onPageChange(currentPage + 1);
    }
  };

  // 특정 페이지로 이동
  const handlePageClick = (page: number) => {
    if (page !== currentPage && !disabled) {
      onPageChange(page);
    }
  };

  // 페이지가 1개 이하인 경우 렌더링하지 않음
  if (totalPages <= 1) {
    return null;
  }

  const visiblePageNumbers = getVisiblePageNumbers();
  const isPreviousDisabled = currentPage <= 1 || disabled;
  const isNextDisabled = currentPage >= totalPages || disabled;

  return (
    <nav
      className={`${styles.pagination} ${styles[variant]} ${styles[size]} ${
        styles[theme]
      } ${disabled ? styles.disabled : ''} ${className}`}
      role='navigation'
      aria-label='페이지네이션'
    >
      {/* 이전 페이지 버튼 */}
      <button
        type='button'
        className={`${styles.navButton} ${styles.prevButton} ${
          isPreviousDisabled ? styles.navButtonDisabled : ''
        }`}
        onClick={handlePrevious}
        disabled={isPreviousDisabled}
        aria-label='이전 페이지'
      >
        <svg
          width='24'
          height='24'
          viewBox='0 0 24 24'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
          className={styles.navIcon}
        >
          <path
            d='M15.41 7.41L14 6L8 12L14 18L15.41 16.59L10.83 12L15.41 7.41Z'
            fill='currentColor'
          />
        </svg>
      </button>

      {/* 페이지 번호 버튼들 */}
      <div className={styles.pageNumbers}>
        {visiblePageNumbers.map((page) => (
          <button
            key={page}
            type='button'
            className={`${styles.pageButton} ${
              page === currentPage
                ? styles.pageButtonActive
                : styles.pageButtonInactive
            }`}
            onClick={() => handlePageClick(page)}
            disabled={disabled}
            aria-label={`페이지 ${page}`}
            aria-current={page === currentPage ? 'page' : undefined}
          >
            {page}
          </button>
        ))}
      </div>

      {/* 다음 페이지 버튼 */}
      <button
        type='button'
        className={`${styles.navButton} ${styles.nextButton} ${
          isNextDisabled ? styles.navButtonDisabled : ''
        }`}
        onClick={handleNext}
        disabled={isNextDisabled}
        aria-label='다음 페이지'
      >
        <svg
          width='24'
          height='24'
          viewBox='0 0 24 24'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
          className={styles.navIcon}
        >
          <path
            d='M8.59 16.59L10 18L16 12L10 6L8.59 7.41L13.17 12L8.59 16.59Z'
            fill='currentColor'
          />
        </svg>
      </button>
    </nav>
  );
};

export default Pagination;
