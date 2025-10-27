"use client";

import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
  useCallback,
} from "react";
import { createPortal } from "react-dom";
import styles from "./styles.module.css";

interface ModalStackItem {
  id: string;
  content: ReactNode;
}

interface ModalContextType {
  isOpen: boolean;
  modalStack: ModalStackItem[];
  openModal: (content: ReactNode) => void;
  closeModal: () => void;
}

const ModalContext = createContext<ModalContextType | undefined>(undefined);

export function useModal() {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error("useModal은 ModalProvider 내부에서만 사용할 수 있습니다.");
  }
  return context;
}

interface ModalProviderProps {
  children: ReactNode;
}

export function ModalProvider({ children }: ModalProviderProps) {
  const [modalStack, setModalStack] = useState<ModalStackItem[]>([]);
  const [mounted, setMounted] = useState(false);

  const isOpen = modalStack.length > 0;

  const openModal = useCallback((content: ReactNode) => {
    const newModal: ModalStackItem = {
      id: `modal-${Date.now()}-${Math.random()}`,
      content,
    };
    setModalStack((prev) => [...prev, newModal]);
  }, []);

  const closeModal = useCallback(() => {
    setModalStack((prev) => prev.slice(0, -1));
  }, []);

  // 클라이언트 사이드에서만 마운트
  useEffect(() => {
    setMounted(true);
  }, []);

  // 모달이 1개라도 열려 있으면 body 스크롤 제거
  useEffect(() => {
    if (modalStack.length > 0) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [modalStack.length]);

  // ESC 키로 최상위 모달 닫기
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape" && isOpen) {
        closeModal();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen, closeModal]);

  return (
    <ModalContext.Provider
      value={{ isOpen, modalStack, openModal, closeModal }}
    >
      {children}
      {mounted &&
        modalStack.map((modal, index) =>
          createPortal(
            <div
              key={modal.id}
              className={styles.overlay}
              onClick={index === modalStack.length - 1 ? closeModal : undefined}
              data-testid="modal-overlay"
              style={{ zIndex: 50 + index }}
            >
              <div
                className={styles.container}
                onClick={(e) => e.stopPropagation()}
                data-testid="diary-modal"
              >
                {modal.content}
              </div>
            </div>,
            document.body
          )
        )}
    </ModalContext.Provider>
  );
}
