import { useEffect, useState } from 'react';

export default function TransitionOverlay({ active, onComplete }) {
  const [phase, setPhase] = useState('idle');

  useEffect(() => {
    if (active) {
      setPhase('flash');
      const timer1 = setTimeout(() => setPhase('warp'), 200);
      const timer2 = setTimeout(() => {
        setPhase('idle');
        if (onComplete) onComplete();
      }, 1200);
      return () => {
        clearTimeout(timer1);
        clearTimeout(timer2);
      };
    }
  }, [active, onComplete]);

  if (phase === 'idle') return null;

  return (
    <div className={`transition-overlay ${phase !== 'idle' ? 'active' : ''}`}>
      {phase === 'flash' && <div className="transition-flash" />}
      {phase === 'warp' && (
        <>
          <div className="transition-warp" />
          <div className="transition-rings">
            <div className="ring" />
            <div className="ring" />
            <div className="ring" />
          </div>
        </>
      )}
    </div>
  );
}
