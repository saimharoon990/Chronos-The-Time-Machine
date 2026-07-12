import { useState, useEffect } from 'react';
import ParticleField from './ParticleField';
import { laboratoryData } from '../utils/initialData';

export default function Laboratory({ onActivate }) {
  const [poweringUp, setPoweringUp] = useState(false);
  const [powerLevel, setPowerLevel] = useState(0);
  const [status, setStatus] = useState(laboratoryData.status);

  useEffect(() => {
    if (poweringUp) {
      setStatus('INITIALIZING...');
      const interval = setInterval(() => {
        setPowerLevel((prev) => {
          if (prev >= 100) {
            clearInterval(interval);
            setStatus('TEMPORAL LOCK ENGAGED');
            setTimeout(() => onActivate(), 600);
            return 100;
          }
          return prev + 2;
        });
      }, 40);
      return () => clearInterval(interval);
    }
  }, [poweringUp, onActivate]);

  const handleActivate = () => {
    if (!poweringUp) {
      setPoweringUp(true);
    }
  };

  return (
    <div className="laboratory scene">
      <ParticleField
        count={40}
        colors={['#00f0ff', '#8b5cf6', '#ff8c00']}
        type="float"
      />

      {/* Lab Header */}
      <div className="lab-header">
        <div className="lab-version">{laboratoryData.version} // CLASSIFIED</div>
        <h1 className="lab-title">{laboratoryData.title}</h1>
        <div className="lab-subtitle">{laboratoryData.subtitle}</div>
      </div>

      {/* Energy Cores */}
      <div className="energy-cores">
        {laboratoryData.energyCores.map((core) => (
          <div key={core.id} className="energy-core">
            <div
              className="core-orb"
              style={{ '--core-color': core.color }}
            />
            <span className="core-name">{core.name}</span>
            <span className="core-power" style={{ color: core.color }}>
              {poweringUp ? `${Math.min(100, core.power + Math.floor(powerLevel * 0.15))}%` : `${core.power}%`}
            </span>
          </div>
        ))}
      </div>

      {/* System Readings */}
      <div className="system-readings">
        {laboratoryData.systemReadings.map((reading, idx) => (
          <div key={idx} className="reading-item">
            <div className="reading-label">{reading.label}</div>
            <div className="reading-value">{reading.value}</div>
            <div className={`reading-status ${reading.status}`}>
              ● {reading.status}
            </div>
          </div>
        ))}
      </div>

      {/* Activate Button */}
      <div className="activate-btn-wrapper">
        {!poweringUp ? (
          <button
            className="activate-btn"
            onClick={handleActivate}
            id="activate-time-machine"
          >
            ⚡ Activate Time Machine
          </button>
        ) : (
          <div className="power-up-overlay" style={{ position: 'relative', background: 'transparent' }}>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <div className="power-up-text">{status}</div>
              <div className="power-up-progress">
                <div className="power-up-bar" style={{ width: `${powerLevel}%` }} />
              </div>
              <div style={{
                fontFamily: 'var(--font-display)',
                fontSize: '0.7rem',
                color: 'var(--cyan-glow)',
                marginTop: '0.5rem',
                letterSpacing: '0.2em'
              }}>
                {powerLevel}%
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
