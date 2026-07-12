import ParticleField from './ParticleField';
import ExpandableCard from './ExpandableCard';
import { eras } from '../utils/initialData';

export default function EraScene({ eraIndex, onNavigate, onBackToTunnel }) {
  const era = eras[eraIndex];
  const hasPrev = eraIndex > 0;
  const hasNext = eraIndex < eras.length - 1;

  return (
    <div className="era-scene scene" style={{ '--era-color': era.color, '--era-gradient-to': era.gradientTo }}>
      {/* Background Image */}
      <div className="era-background">
        <img src={era.image} alt={era.name} loading="eager" />
      </div>

      <ParticleField
        count={25}
        colors={[era.color, 'rgba(255,255,255,0.3)']}
        type="float"
      />

      {/* Top Navigation Bar */}
      <div className="era-top-bar">
        <button
          className="era-nav-btn"
          onClick={hasPrev ? () => onNavigate(eraIndex - 1) : onBackToTunnel}
          id={`nav-prev-${era.id}`}
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="15 18 9 12 15 6" />
          </svg>
          {hasPrev ? eras[eraIndex - 1].name : 'Time Tunnel'}
        </button>

        {/* Era Dots Indicator */}
        <div className="era-indicator">
          {eras.map((e, idx) => (
            <div
              key={e.id}
              className={`era-dot ${idx === eraIndex ? 'active' : ''}`}
              style={{ '--era-color': e.color }}
              onClick={() => onNavigate(idx)}
              title={e.name}
              role="button"
              tabIndex={0}
              id={`dot-${e.id}`}
            />
          ))}
        </div>

        <button
          className="era-nav-btn"
          onClick={hasNext ? () => onNavigate(eraIndex + 1) : onBackToTunnel}
          id={`nav-next-${era.id}`}
        >
          {hasNext ? eras[eraIndex + 1].name : 'Time Tunnel'}
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="9 18 15 12 9 6" />
          </svg>
        </button>
      </div>

      {/* Main Content */}
      <div className="era-main-content">
        {/* Era Hero */}
        <div className="era-hero">
          <div className="era-icon">{era.icon}</div>
          <h1 className="era-title">{era.name}</h1>
          <div className="era-subtitle-text">{era.subtitle}</div>
          <p className="era-description">{era.description}</p>
          <p className="era-atmosphere">{era.atmosphere}</p>
        </div>

        {/* Expandable Cards */}
        <div className="cards-grid">
          {era.cards.map((card) => (
            <ExpandableCard
              key={card.id}
              card={card}
              eraColor={era.color}
            />
          ))}
        </div>
      </div>

      {/* Return Button */}
      <button
        className="return-to-tunnel-btn"
        onClick={onBackToTunnel}
        id={`return-tunnel-${era.id}`}
      >
        ◈ Return to Time Tunnel
      </button>
    </div>
  );
}
