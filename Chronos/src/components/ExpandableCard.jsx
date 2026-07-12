import { useState } from 'react';

export default function ExpandableCard({ card, eraColor }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div
      className={`expandable-card ${expanded ? 'expanded' : ''}`}
      onClick={() => setExpanded(!expanded)}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => e.key === 'Enter' && setExpanded(!expanded)}
      id={`card-${card.id}`}
    >
      <div className="card-header">
        <div className="card-icon">{card.icon}</div>
        <div className="card-header-text">
          <div className="card-title">{card.title}</div>
          <div className="card-preview">{card.preview}</div>
        </div>
        <div className="card-expand-icon">
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3 4.5L6 7.5L9 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      </div>

      <div className="card-content">
        <div className="card-divider" />
        <p className="card-body-text">{card.content}</p>

        {card.facts && card.facts.length > 0 && (
          <>
            <div className="card-facts-title">⚡ Key Facts</div>
            <ul className="card-facts-list">
              {card.facts.map((fact, index) => (
                <li key={index} className="card-fact-item">
                  <span className="card-fact-bullet" style={{ color: eraColor }}>◆</span>
                  <span>{fact}</span>
                </li>
              ))}
            </ul>
          </>
        )}
      </div>
    </div>
  );
}
