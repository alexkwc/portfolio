import React, { useRef, useState } from 'react';

const App: React.FC = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const characterRef = useRef<HTMLDivElement | null>(null);
  const [isWalking, setIsWalking] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current || !characterRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    const x = event.clientX - rect.left - characterRef.current.offsetWidth / 2;
    const y = event.clientY - rect.top - characterRef.current.offsetHeight / 2;

    setPosition({ x, y });
  };

  return (
    <div
      ref={containerRef}
      className="min-h-screen relative overflow-hidden"
      onClick={handleClick}
      
    >
      <div
        ref={characterRef}
        className="character"
        style={{ transform: `translate(${position.x}px, ${position.y}px)` }}
        onTransitionStart={() => setIsWalking(true)}
        onTransitionEnd={() => setIsWalking(false)}
      >
        <div 
          className={`character-internal ${isWalking ? 'walk' : 'idle'}`} 
        />
      </div>
    </div>
  );
};

export default App;