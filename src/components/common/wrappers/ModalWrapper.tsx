'use client';

import {ReactNode, useEffect} from 'react';
import {createPortal} from 'react-dom';
import {motion, AnimatePresence} from 'framer-motion';

interface ModalWrapperProps {
  children: ReactNode;
  isOpen?: boolean;
  onClose?: () => void;
}

/**
 * ModalWrapper
 * - 배경(overlay), 애니메이션, 포털 렌더링을 담당하는 공통 모달 래퍼입니다.
 * - 내부에 어떤 모달 컴포넌트든 children으로 전달해 사용할 수 있습니다.
 */
export const ModalWrapper = ({
  children,
  isOpen,
  onClose,
}: ModalWrapperProps) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && onClose) onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  useEffect(() => {
    if (isOpen) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  if (typeof window === 'undefined') return null;

  return createPortal(
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className='fixed inset-0 z-50 flex items-center justify-center bg-black/20'
          initial={{opacity: 0}}
          animate={{opacity: 1}}
          exit={{opacity: 0}}
          onClick={onClose}>
          <motion.div
            onClick={(e) => e.stopPropagation()}
            initial={{scale: 0.95, opacity: 0}}
            animate={{scale: 1, opacity: 1}}
            exit={{scale: 0.95, opacity: 0}}
            transition={{duration: 0.2}}>
            {children}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body
  );
};
