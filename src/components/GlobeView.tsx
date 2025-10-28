import { useEffect, useMemo, useRef } from 'react';
import Globe, { GlobeMethods } from 'react-globe.gl';
import type { Marker } from '../data/markers';
import './GlobeView.css';

interface GlobeViewProps {
  markers: Marker[];
  onMarkerClick: (marker: Marker) => void;
}

const GlobeView = ({ markers, onMarkerClick }: GlobeViewProps) => {
  const globeRef = useRef<GlobeMethods | undefined>();

  const isTouchDevice = useMemo(() => {
    if (typeof window === 'undefined') {
      return false;
    }

    return 'ontouchstart' in window || navigator.maxTouchPoints > 0;
  }, []);

  useEffect(() => {
    if (!globeRef.current) {
      return;
    }

    globeRef.current.pointOfView({ lat: 20, lng: 0, altitude: 2 }, 0);
  }, []);

  return (
    <div className="globe">
      <Globe
        ref={globeRef}
        backgroundColor="rgba(0,0,0,0)"
        globeImageUrl="https://unpkg.com/three-globe/example/img/earth-blue-marble.jpg"
        width={undefined}
        height={undefined}
        pointsData={markers}
        pointLat="lat"
        pointLng="lng"
        pointColor="color"
        pointLabel="label"
        pointAltitude={isTouchDevice ? 0.08 : 0.05}
        pointRadius={isTouchDevice ? 0.6 : 0.25}
        onPointClick={(point) => onMarkerClick(point as Marker)}
      />
    </div>
  );
};

export default GlobeView;
