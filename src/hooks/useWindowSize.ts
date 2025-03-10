import { useState, useEffect } from 'react';

export const useWindowSize = () => {
  const [size, setSize] = useState<[number, number]>([0, 0]);

  useEffect(() => {
    const updateSize = () => {
      setSize([window.innerWidth, window.innerHeight]);
    };
    
    window.addEventListener('resize', updateSize);
    updateSize();
    
    return () => window.removeEventListener('resize', updateSize);
  }, []);

  return size;
}; 