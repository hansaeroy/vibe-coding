"use client";

import { useCallback } from "react";
import { useModal } from "@/commons/providers/modal/modal.provider";
import { Modal } from "@/commons/components/modal";

export const useLinkModalClose = () => {
  const { openModal, closeModal } = useModal();

  // 계속 작성하기 - 등록 취소 모달만 닫기
  const handleContinueWriting = useCallback(() => {
    closeModal();
  }, [closeModal]);

  // 등록 취소하기 - 등록 취소 모달과 일기 작성 모달 모두 닫기
  const handleCancelWriting = useCallback(() => {
    // 등록 취소 모달 닫기
    closeModal();
    // 일기 작성 모달 닫기
    closeModal();
  }, [closeModal]);

  // 등록 취소 모달 열기
  const openCancelModal = useCallback(() => {
    openModal(
      <Modal
        variant="info"
        actions="dual"
        title="일기 등록 취소"
        description="작성 중인 일기가 저장되지 않습니다. 정말 취소하시겠어요?"
        confirmText="등록 취소"
        cancelText="계속 작성"
        onConfirm={handleCancelWriting}
        onCancel={handleContinueWriting}
        data-testid="cancel-modal"
      />
    );
  }, [openModal, handleContinueWriting, handleCancelWriting]);

  return {
    openCancelModal,
    handleContinueWriting,
    handleCancelWriting
  };
};