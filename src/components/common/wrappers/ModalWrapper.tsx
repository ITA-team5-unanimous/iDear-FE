'use client';

import {ReactNode, useEffect} from 'react';
import {createPortal} from 'react-dom';
import {motion, AnimatePresence} from 'framer-motion';
import {FocusTrap} from 'focus-trap-react';

interface ModalWrapperProps {
  children: ReactNode;
  isOpen: boolean;
  onClose?: () => void;
}

/**
 * ModalWrapper
 * - 배경(overlay), 애니메이션, 포털 렌더링을 담당하는 공통 모달 래퍼입니다.
 * - 내부에 어떤 모달 컴포넌트든 children으로 전달해 사용할 수 있습니다.
 * - esc 키, overlay 클릭 시 모달이 닫힙니다.
 */
export const ModalWrapper = ({
  children,
  isOpen,
  onClose,
}: ModalWrapperProps) => {
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose?.();
      }
    };
    if (isOpen) {
      window.addEventListener('keydown', handleEsc);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleEsc);
      document.body.style.overflow = '';
    };
  }, [isOpen, onClose]);

  if (typeof window === 'undefined') return null;

  return createPortal(
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className='fixed inset-0 z-50 flex items-center justify-center bg-black/20'
          initial={{opacity: 0}}
          animate={{opacity: 1}}
          exit={{opacity: 0}}
          aria-modal='true'
          role='dialog'
          aria-labelledby='modal-header'
          aria-describedby='modal-description'
          onClick={onClose}>
          <FocusTrap
            focusTrapOptions={{
              onActivate: () => {
                const focusable = document.querySelector('[data-auto-focus]');
                if (focusable instanceof HTMLElement) focusable.focus();
              },
              escapeDeactivates: true,
              clickOutsideDeactivates: true,
            }}>
            <motion.div
              onClick={(e) => e.stopPropagation()}
              initial={{scale: 0.95, opacity: 0}}
              animate={{scale: 1, opacity: 1}}
              exit={{scale: 0.95, opacity: 0}}
              transition={{duration: 0.2}}>
              {children}
            </motion.div>
          </FocusTrap>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body
  );
};
