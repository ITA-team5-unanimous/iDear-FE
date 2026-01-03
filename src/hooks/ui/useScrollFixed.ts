import {useEffect, useState} from 'react';

export const useScrollFixed = (threshold: number) => {
  const [isFixed, setIsFixed] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsFixed(window.scrollY >= threshold);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [threshold]);

  return isFixed;
};
