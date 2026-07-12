import { useState, useCallback } from 'react';
import Laboratory from './components/Laboratory';
import TimeTunnel from './components/TimeTunnel';
import EraScene from './components/EraScene';
import TransitionOverlay from './components/TransitionOverlay';

// Scenes: 'laboratory' | 'tunnel' | 'era'
export default function App() {
  const [currentScene, setCurrentScene] = useState('laboratory');
  const [eraIndex, setEraIndex] = useState(0);
  const [transitioning, setTransitioning] = useState(false);
  const [pendingScene, setPendingScene] = useState(null);
  const [pendingEraIndex, setPendingEraIndex] = useState(0);

  const navigateTo = useCallback((scene, eraIdx = 0) => {
    if (transitioning) return;
    setTransitioning(true);
    setPendingScene(scene);
    setPendingEraIndex(eraIdx);
  }, [transitioning]);

  const handleTransitionComplete = useCallback(() => {
    if (pendingScene) {
      setCurrentScene(pendingScene);
      setEraIndex(pendingEraIndex);
      setPendingScene(null);
    }
    setTransitioning(false);
  }, [pendingScene, pendingEraIndex]);

  const handleActivate = useCallback(() => {
    navigateTo('tunnel');
  }, [navigateTo]);

  const handleSelectEra = useCallback((idx) => {
    navigateTo('era', idx);
  }, [navigateTo]);

  const handleEraNavigate = useCallback((idx) => {
    navigateTo('era', idx);
  }, [navigateTo]);

  const handleBackToTunnel = useCallback(() => {
    navigateTo('tunnel');
  }, [navigateTo]);

  return (
    <>
      {currentScene === 'laboratory' && (
        <Laboratory onActivate={handleActivate} />
      )}

      {currentScene === 'tunnel' && (
        <TimeTunnel onSelectEra={handleSelectEra} />
      )}

      {currentScene === 'era' && (
        <EraScene
          eraIndex={eraIndex}
          onNavigate={handleEraNavigate}
          onBackToTunnel={handleBackToTunnel}
        />
      )}

      <TransitionOverlay
        active={transitioning}
        onComplete={handleTransitionComplete}
      />
    </>
  );
}
