'use client';

import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from 'react';
import { createPortal } from 'react-dom';

interface ModalContextType {
  isOpen: boolean;
  content: ReactNode | null;
  openModal: (content: ReactNode) => void;
  closeModal: () => void;
}

const ModalContext = createContext<ModalContextType | undefined>(undefined);

export function useModal() {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error('useModal은 ModalProvider 내부에서만 사용할 수 있습니다.');
  }
  return context;
}

interface ModalProviderProps {
  children: ReactNode;
}

export function ModalProvider({ children }: ModalProviderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [content, setContent] = useState<ReactNode | null>(null);
  const [mounted, setMounted] = useState(false);

  // 클라이언트 사이드에서만 마운트
  useEffect(() => {
    setMounted(true);
  }, []);

  const openModal = (content: ReactNode) => {
    setContent(content);
    setIsOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setIsOpen(false);
    document.body.style.overflow = '';
    setTimeout(() => {
      setContent(null);
    }, 300);
  };

  return (
    <ModalContext.Provider value={{ isOpen, content, openModal, closeModal }}>
      {children}
      {mounted && isOpen && content
        ? createPortal(
            <div
              className='fixed inset-0 z-50 flex items-center justify-center bg-black/50'
              onClick={closeModal}
            >
              <div
                className='relative bg-white dark:bg-gray-800 rounded-lg shadow-xl'
                onClick={(e) => e.stopPropagation()}
              >
                {content}
              </div>
            </div>,
            document.body
          )
        : null}
    </ModalContext.Provider>
  );
}
