import { useMemo } from 'react';

export default function ParticleField({ count = 30, colors = ['#00f0ff', '#8b5cf6', '#ff8c00'], type = 'float' }) {
  const particles = useMemo(() => {
    return Array.from({ length: count }, (_, i) => {
      const color = colors[i % colors.length];
      const size = Math.random() * 4 + 1;
      const x = Math.random() * 100;
      const y = Math.random() * 100;
      const duration = Math.random() * 10 + 5;
      const delay = Math.random() * 5;
      const floatX = (Math.random() - 0.5) * 80;
      const floatY = (Math.random() - 0.5) * 60;
      const driftX = (Math.random() - 0.5) * 40;

      return {
        id: i,
        style: {
          width: `${size}px`,
          height: `${size}px`,
          left: `${x}%`,
          top: `${y}%`,
          '--particle-color': color,
          '--particle-duration': `${duration}s`,
          '--particle-delay': `${delay}s`,
          '--float-x': `${floatX}px`,
          '--float-y': `${floatY}px`,
          '--drift-x': `${driftX}px`,
          opacity: Math.random() * 0.6 + 0.2,
        },
        isStreak: type === 'streak',
      };
    });
  }, [count, colors, type]);

  return (
    <div className="particle-field">
      {particles.map((p) => (
        <div
          key={p.id}
          className={`particle ${p.isStreak ? 'streak' : ''}`}
          style={p.style}
        />
      ))}
    </div>
  );
}
