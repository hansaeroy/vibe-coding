import React, { ButtonHTMLAttributes } from "react";
import styles from "./styles.module.css";

// 버튼 컴포넌트 props 타입 정의
export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * 버튼 스타일 변형
   * @default 'primary'
   */
  variant?: "primary" | "secondary" | "tertiary";

  /**
   * 버튼 크기
   * @default 'medium'
   */
  size?: "small" | "medium" | "large";

  /**
   * 테마 모드
   * @default 'light'
   */
  theme?: "light" | "dark";

  /**
   * 버튼 내부 콘텐츠
   */
  children: React.ReactNode;
}

/**
 * 기본 버튼 컴포넌트
 */
export const Button = ({
  variant = "primary",
  size = "medium",
  theme = "light",
  children,
  className,
  ...props
}: ButtonProps) => {
  // 버튼 클래스 생성
  const buttonClasses = [
    styles.button,
    styles[`variant-${variant}`],
    styles[`size-${size}`],
    styles[`theme-${theme}`],
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <button className={buttonClasses} {...props}>
      {children}
    </button>
  );
};

export default Button;
