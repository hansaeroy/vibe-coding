"use client";

import { useCallback } from "react";
import { useModal } from "@/commons/providers/modal/modal.provider";
import DiariesNew from "@/components/diaries-new";

// 모달 링크 훅 반환 타입
export interface UseLinkModalReturn {
  openDiaryModal: () => void;
  closeDiaryModal: () => void;
  isModalOpen: boolean;
}

/**
 * 일기쓰기 모달을 관리하는 훅
 * 모달 열기/닫기 기능을 제공합니다.
 */
export const useLinkModal = (): UseLinkModalReturn => {
  const { isOpen, openModal, closeModal } = useModal();

  // 일기쓰기 모달 열기
  const openDiaryModal = useCallback(() => {
    const modalContent = <DiariesNew />;
    openModal(modalContent);
  }, [openModal]);

  // 일기쓰기 모달 닫기
  const closeDiaryModal = useCallback(() => {
    closeModal();
  }, [closeModal]);

  return {
    openDiaryModal,
    closeDiaryModal,
    isModalOpen: isOpen,
  };
};
