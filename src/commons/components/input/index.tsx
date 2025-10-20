import React, { InputHTMLAttributes } from 'react';
import styles from './styles.module.css';

// 기본 HTML 인풋 속성에서 size를 제외한 타입 정의
type InputHTMLAttributesWithoutSize = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  'size'
>;

// 인풋 컴포넌트 props 타입 정의
export interface InputProps extends InputHTMLAttributesWithoutSize {
  /**
   * 인풋 스타일 변형
   * @default 'primary'
   */
  variant?: 'primary' | 'secondary' | 'tertiary';

  /**
   * 인풋 크기
   * @default 'medium'
   */
  size?: 'small' | 'medium' | 'large';

  /**
   * 테마 모드
   * @default 'light'
   */
  theme?: 'light' | 'dark';

  /**
   * 플레이스홀더 텍스트
   */
  placeholder?: string;
}

/**
 * 기본 인풋 컴포넌트
 */
export const Input = ({
  variant = 'primary',
  size = 'medium',
  theme = 'light',
  className,
  ...props
}: InputProps) => {
  // 인풋 클래스 생성
  const inputClasses = [
    styles.input,
    styles[`variant-${variant}`],
    styles[`size-${size}`],
    styles[`theme-${theme}`],
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return <input className={inputClasses} {...props} />;
};

export default Input;
