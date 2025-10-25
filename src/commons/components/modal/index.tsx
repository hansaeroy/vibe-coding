"use client";

import React, { HTMLAttributes } from "react";
import { Button } from "../button";
import styles from "./styles.module.css";

// 기본 HTML div 속성에서 size를 제외한 타입 정의
type HTMLDivAttributesWithoutSize = Omit<
  HTMLAttributes<HTMLDivElement>,
  "size"
>;

export interface ModalProps extends HTMLDivAttributesWithoutSize {
  /**
   * 모달 변형 타입
   * @default 'info'
   */
  variant?: "info" | "danger";

  /**
   * 액션 버튼 타입
   * @default 'single'
   */
  actions?: "single" | "dual";

  /**
   * 모달 크기
   * @default 'medium'
   */
  size?: "small" | "medium" | "large";

  /**
   * 테마 모드
   * @default 'light'
   */
  theme?: "light" | "dark";

  /**
   * 모달 제목
   */
  title: string;

  /**
   * 모달 설명
   */
  description: string;

  /**
   * 확인 버튼 텍스트
   * @default '확인'
   */
  confirmText?: string;

  /**
   * 취소 버튼 텍스트 (dual actions일 때만 사용)
   * @default '취소'
   */
  cancelText?: string;

  /**
   * 확인 버튼 클릭 핸들러
   */
  onConfirm: () => void;

  /**
   * 취소 버튼 클릭 핸들러 (dual actions일 때만 사용)
   */
  onCancel?: () => void;

  /**
   * 모달 비활성화 상태
   * @default false
   */
  disabled?: boolean;

}

/**
 * 모달 컴포넌트
 */
export const Modal = ({
  variant = "info",
  actions = "single",
  size = "medium",
  theme = "light",
  title,
  description,
  confirmText = "확인",
  cancelText = "취소",
  onConfirm,
  onCancel,
  disabled = false,
  className,
  ...props
}: ModalProps) => {
  const modalClasses = [
    styles.modal,
    styles[`variant-${variant}`],
    styles[`actions-${actions}`],
    styles[`size-${size}`],
    styles[`theme-${theme}`],
    disabled && styles.disabled,
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div
      className={modalClasses}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      aria-describedby="modal-description"
      {...props}
    >
      {/* 모달 헤더 */}
      <div className={styles.header}>
        <h2 id="modal-title" className={styles.title}>
          {title}
        </h2>
        <p id="modal-description" className={styles.description}>
          {description}
        </p>
      </div>

      {/* 모달 액션 버튼 영역 */}
      <div className={styles.actions}>
        {actions === "single" ? (
          <Button
            variant="primary"
            theme="light"
            size="large"
            onClick={onConfirm}
            disabled={disabled}
            className={styles.fullWidthButton}
          >
            {confirmText}
          </Button>
        ) : (
          <>
            <Button
              variant="secondary"
              theme="light"
              size="large"
              onClick={onCancel}
              disabled={disabled}
              className={styles.halfWidthButton}
            >
              {cancelText}
            </Button>
            <Button
              variant="primary"
              theme="light"
              size="large"
              onClick={onConfirm}
              disabled={disabled}
              className={styles.halfWidthButton}
            >
              {confirmText}
            </Button>
          </>
        )}
      </div>
    </div>
  );
};

export default Modal;
