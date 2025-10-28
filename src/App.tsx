import { useEffect, useMemo, useState } from 'react';
import GlobeView from './components/GlobeView';
import Legend, { LegendItem } from './components/Legend';
import markersData, { Marker } from './data/markers';
import './App.css';

const legendItems: LegendItem[] = [
  { color: 'red', label: 'Jeff & Beth' },
  { color: '#2ecc71', label: 'Nenee & Joe' },
  { color: 'silver', label: 'Zack & Brit' },
  { color: 'purple', label: 'Mel & Carl' },
  { color: 'teal', label: 'Tako & Dani' },
  { color: 'gold', label: 'Tako' },
  { color: 'lightpink', label: 'Fam' }
];

const imageFilePattern = /\.(png|jpe?g|gif|webp)$/i;

function App() {
  const [activeColors, setActiveColors] = useState<Set<string>>(
    () => new Set(legendItems.map(item => item.color))
  );
  const [selectedImageUrl, setSelectedImageUrl] = useState<string | null>(null);

  const markers = useMemo(
    () => markersData.filter(marker => activeColors.has(marker.color)),
    [activeColors]
  );

  const toggleColor = (color: string) => {
    setActiveColors(prev => {
      const next = new Set(prev);
      if (next.has(color)) {
        next.delete(color);
      } else {
        next.add(color);
      }
      return next;
    });
  };

  const handleMarkerClick = (marker: Marker) => {
    if (!marker.url) {
      return;
    }

    if (imageFilePattern.test(marker.url)) {
      setSelectedImageUrl(marker.url);
    } else {
      window.location.href = marker.url;
    }
  };

  const closeImagePopup = () => setSelectedImageUrl(null);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setSelectedImageUrl(null);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div className="app">
      <header className="app__header">
        <p className="app__eyebrow">Family Travel Log</p>
        <h1 className="app__title">Mutnik Adventures</h1>
        <p className="app__subtitle">
          Tap a pin to explore photos and galleries from each journey around the globe.
        </p>
      </header>

      <main className="app__main" role="main">
        <Legend
          items={legendItems}
          activeColors={activeColors}
          onToggle={toggleColor}
        />
        <div className="app__globe-wrapper">
          <GlobeView markers={markers} onMarkerClick={handleMarkerClick} />
        </div>
      </main>

      {selectedImageUrl && (
        <div
          className="app__image-backdrop"
          role="dialog"
          aria-modal="true"
          aria-label="Travel photo preview"
          onClick={closeImagePopup}
        >
          <div
            className="app__image-container"
            onClick={event => event.stopPropagation()}
          >
            <img src={selectedImageUrl} alt="Travel memory" />
            <button type="button" className="app__close-button" onClick={closeImagePopup}>
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
