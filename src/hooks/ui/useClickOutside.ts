import {useEffect} from 'react';

/**
 * 컴포넌트 외부 클릭 시 콜백 함수를 호출하는 커스텀 훅
 * @param ref - 클릭 외부를 감지할 요소의 Ref
 * @param callback - 외부 클릭 시 실행할 함수
 */

export const useClickOutside = (
  ref: React.RefObject<HTMLElement | null>,
  callback: () => void
) => {
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        callback();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [ref, callback]);
};
