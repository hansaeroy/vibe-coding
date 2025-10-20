import React, { useState, useRef, useEffect } from 'react';
// Image 컴포넌트는 SVG 지원 제한으로 인해 제거
import styles from './styles.module.css';

// 셀렉트 박스 옵션 타입 정의
export interface SelectOption {
  /**
   * 옵션의 고유 값
   */
  value: string;
  /**
   * 옵션에 표시될 라벨
   */
  label: string;
  /**
   * 옵션 비활성화 여부
   */
  disabled?: boolean;
}

// 셀렉트 박스 컴포넌트 props 타입 정의
export interface SelectBoxProps {
  /**
   * 셀렉트 박스 스타일 변형
   * @default 'primary'
   */
  variant?: 'primary' | 'secondary' | 'tertiary';

  /**
   * 셀렉트 박스 크기
   * @default 'medium'
   */
  size?: 'small' | 'medium' | 'large';

  /**
   * 테마 모드
   * @default 'light'
   */
  theme?: 'light' | 'dark';

  /**
   * 선택 가능한 옵션들
   */
  options: SelectOption[];

  /**
   * 현재 선택된 값
   */
  value?: string;

  /**
   * 기본 선택된 값
   */
  defaultValue?: string;

  /**
   * 플레이스홀더 텍스트
   */
  placeholder?: string;

  /**
   * 비활성화 여부
   */
  disabled?: boolean;

  /**
   * 값 변경 시 호출되는 콜백
   */
  onChange?: (value: string, option: SelectOption) => void;

  /**
   * 추가 CSS 클래스명
   */
  className?: string;

  /**
   * 셀렉트 박스 이름 (폼에서 사용)
   */
  name?: string;

  /**
   * 필수 입력 여부
   */
  required?: boolean;
}

/**
 * 기본 셀렉트 박스 컴포넌트
 */
export const SelectBox = ({
  variant = 'primary',
  size = 'medium',
  theme = 'light',
  options = [],
  value,
  defaultValue,
  placeholder = '선택하세요',
  disabled = false,
  onChange,
  className,
  name,
  required = false,
}: SelectBoxProps) => {
  // 내부 상태 관리
  const [selectedValue, setSelectedValue] = useState<string>(
    value || defaultValue || ''
  );
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [focusedIndex, setFocusedIndex] = useState<number>(-1);

  // 참조 관리
  const selectRef = useRef<HTMLDivElement>(null);
  const listRef = useRef<HTMLUListElement>(null);

  // 선택된 옵션 찾기
  const selectedOption = options.find(
    (option) => option.value === selectedValue
  );

  // 외부에서 value가 변경될 때 내부 상태 업데이트
  useEffect(() => {
    if (value !== undefined) {
      setSelectedValue(value);
    }
  }, [value]);

  // 외부 클릭 감지
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        selectRef.current &&
        !selectRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
        setFocusedIndex(-1);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // 키보드 이벤트 처리
  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (disabled) return;

    switch (event.key) {
      case 'Enter':
      case ' ':
        event.preventDefault();
        if (!isOpen) {
          setIsOpen(true);
          setFocusedIndex(0);
        } else if (focusedIndex >= 0) {
          const option = options[focusedIndex];
          if (option && !option.disabled) {
            handleOptionSelect(option);
          }
        }
        break;
      case 'Escape':
        setIsOpen(false);
        setFocusedIndex(-1);
        break;
      case 'ArrowDown':
        event.preventDefault();
        if (!isOpen) {
          setIsOpen(true);
          setFocusedIndex(0);
        } else {
          const nextIndex = Math.min(focusedIndex + 1, options.length - 1);
          setFocusedIndex(nextIndex);
        }
        break;
      case 'ArrowUp':
        event.preventDefault();
        if (isOpen) {
          const prevIndex = Math.max(focusedIndex - 1, 0);
          setFocusedIndex(prevIndex);
        }
        break;
    }
  };

  // 옵션 선택 처리
  const handleOptionSelect = (option: SelectOption) => {
    if (option.disabled) return;

    setSelectedValue(option.value);
    setIsOpen(false);
    setFocusedIndex(-1);
    onChange?.(option.value, option);
  };

  // 셀렉트 박스 토글
  const handleToggle = () => {
    if (disabled) return;
    setIsOpen(!isOpen);
    if (!isOpen) {
      setFocusedIndex(0);
    }
  };

  // 셀렉트 박스 클래스 생성
  const selectClasses = [
    styles.selectbox,
    styles[`variant-${variant}`],
    styles[`size-${size}`],
    styles[`theme-${theme}`],
    isOpen && styles.open,
    disabled && styles.disabled,
    className,
  ]
    .filter(Boolean)
    .join(' ');

  // 드롭다운 클래스 생성
  const dropdownClasses = [
    styles.dropdown,
    styles[`size-${size}`],
    styles[`theme-${theme}`],
    isOpen && styles.open,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <div
      ref={selectRef}
      className={selectClasses}
      onClick={handleToggle}
      onKeyDown={handleKeyDown}
      tabIndex={disabled ? -1 : 0}
      role='combobox'
      aria-expanded={isOpen}
      aria-haspopup='listbox'
      aria-controls={isOpen ? 'selectbox-dropdown' : undefined}
      aria-required={required}
      data-name={name}
    >
      {/* 선택된 값 표시 영역 */}
      <div className={styles.display}>
        <span className={styles.text}>
          {selectedOption ? selectedOption.label : placeholder}
        </span>
        <div className={styles.arrow}>
          <img
            src='/icons/arrow_drop_down.svg'
            alt='드롭다운 화살표'
            width={9}
            height={5}
          />
        </div>
      </div>

      {/* 드롭다운 옵션 리스트 */}
      {isOpen && (
        <ul
          ref={listRef}
          id='selectbox-dropdown'
          className={dropdownClasses}
          role='listbox'
          aria-label='옵션 목록'
        >
          {options.map((option, index) => {
            const optionClasses = [
              styles.option,
              index === focusedIndex && styles.focused,
              option.value === selectedValue && styles.selected,
              option.disabled && styles.optionDisabled,
            ]
              .filter(Boolean)
              .join(' ');

            return (
              <li
                key={option.value}
                className={optionClasses}
                role='option'
                aria-selected={option.value === selectedValue}
                aria-disabled={option.disabled}
                onClick={() => handleOptionSelect(option)}
                onMouseEnter={() => setFocusedIndex(index)}
              >
                {option.label}
              </li>
            );
          })}
        </ul>
      )}

      {/* 히든 인풋 (폼 제출용) */}
      {name && (
        <input
          type='hidden'
          name={name}
          value={selectedValue}
          required={required}
        />
      )}
    </div>
  );
};

export default SelectBox;
