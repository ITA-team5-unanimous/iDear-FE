import {useCallback} from 'react';

export const useScrollToTop = () => {
  return useCallback(() => {
    window.scrollTo({top: 0, behavior: 'smooth'});
  }, []);
};
