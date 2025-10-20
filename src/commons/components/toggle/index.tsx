import React, { InputHTMLAttributes } from 'react';
import styles from './styles.module.css';

// 토글 컴포넌트 props 타입 정의
export interface ToggleProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size' | 'onChange'> {
  /**
   * 토글 스타일 변형
   * @default 'primary'
   */
  variant?: 'primary' | 'secondary' | 'tertiary';

  /**
   * 토글 크기
   * @default 'medium'
   */
  size?: 'small' | 'medium' | 'large';

  /**
   * 테마 모드
   * @default 'light'
   */
  theme?: 'light' | 'dark';

  /**
   * 토글 상태 (제어 컴포넌트)
   */
  checked?: boolean;

  /**
   * 토글 상태 변경 핸들러
   */
  onChange?: (checked: boolean) => void;

  /**
   * 토글 라벨 (접근성)
   */
  label?: string;

  /**
   * 비활성화 상태
   */
  disabled?: boolean;
}

/**
 * 토글 컴포넌트
 * Figma 디자인을 기반으로 한 완전한 variant 시스템 구현
 */
export const Toggle = ({
  variant = 'primary',
  size = 'medium',
  theme = 'light',
  checked = false,
  onChange,
  label,
  disabled = false,
  className,
  id,
  ...props
}: ToggleProps) => {
  // 토글 상태 변경 핸들러
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (!disabled && onChange) {
      onChange(event.target.checked);
    }
  };

  // 토글 컨테이너 클래스 생성
  const toggleClasses = [
    styles.toggle,
    styles[`variant-${variant}`],
    styles[`size-${size}`],
    styles[`theme-${theme}`],
    checked && styles.checked,
    disabled && styles.disabled,
    className,
  ]
    .filter(Boolean)
    .join(' ');

  // 핸들 클래스 생성
  const handleClasses = [
    styles.handle,
    styles[`handle-${size}`],
    checked && styles.handleChecked,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <label className={styles.container}>
      <input
        type="checkbox"
        className={styles.input}
        checked={checked}
        onChange={handleChange}
        disabled={disabled}
        id={id}
        {...props}
      />
      <div className={toggleClasses}>
        <div className={handleClasses} />
      </div>
      {label && (
        <span className={styles.label}>
          {label}
        </span>
      )}
    </label>
  );
};

export default Toggle;
