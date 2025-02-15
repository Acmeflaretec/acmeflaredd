import { useEffect, useState } from 'react';

const FocusLight = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleScroll = () => {
      const activeSection = document.querySelector('section.active');
      if (activeSection) {
        const rect = activeSection.getBoundingClientRect();
        setPosition({
          x: rect.left + rect.width / 2,
          y: rect.top + rect.height / 2
        });
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div 
      className="focus-light"
      style={{
        '--x': `${position.x}px`,
        '--y': `${position.y}px`
      } as React.CSSProperties}
    />
  );
};

export default FocusLight; 