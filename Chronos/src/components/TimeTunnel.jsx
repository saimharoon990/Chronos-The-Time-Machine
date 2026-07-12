import ParticleField from './ParticleField';
import { eras } from '../utils/initialData';

export default function TimeTunnel({ onSelectEra }) {
  return (
    <div className="time-tunnel scene">
      {/* Vortex Background */}
      <div className="tunnel-vortex">
        <div className="tunnel-ring" />
        <div className="tunnel-ring" />
        <div className="tunnel-ring" />
        <div className="tunnel-ring" />
        <div className="tunnel-ring" />
        <div className="tunnel-ring" />
        <div className="tunnel-center-glow" />
      </div>

      <ParticleField
        count={60}
        colors={['#00f0ff', '#8b5cf6', '#ff8c00', '#4ade80']}
        type="streak"
      />

      {/* Content */}
      <div className="tunnel-content">
        <h2 className="tunnel-title">SELECT YOUR DESTINATION</h2>
        <p className="tunnel-subtitle">
          The temporal field is stable. Choose an era to explore — each holds secrets waiting to be uncovered.
        </p>

        {/* Era Timeline */}
        <div className="era-timeline">
          {eras.map((era, index) => (
            <div key={era.id} style={{ display: 'flex', alignItems: 'center' }}>
              <div
                className="era-node"
                onClick={() => onSelectEra(index)}
                style={{ '--era-color': era.color }}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => e.key === 'Enter' && onSelectEra(index)}
                id={`era-node-${era.id}`}
              >
                <div className="era-node-dot" style={{ borderColor: era.color }}>
                  {era.icon}
                </div>
                <span className="era-node-name">{era.name}</span>
                <span className="era-node-year">{era.year}</span>
              </div>

              {index < eras.length - 1 && (
                <div
                  className="era-connector"
                  style={{
                    '--from-color': era.color,
                    '--to-color': eras[index + 1].color,
                  }}
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
