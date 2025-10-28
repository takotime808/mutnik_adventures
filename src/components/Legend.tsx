import './Legend.css';

export interface LegendItem {
  color: string;
  label: string;
}

interface LegendProps {
  items: LegendItem[];
  activeColors: Set<string>;
  onToggle: (color: string) => void;
}

const Legend = ({ items, activeColors, onToggle }: LegendProps) => (
  <aside className="legend" aria-label="Traveler legend">
    <h2 className="legend__title">Travelers</h2>
    <ul className="legend__list">
      {items.map(item => {
        const isActive = activeColors.has(item.color);
        return (
          <li key={item.color}>
            <button
              type="button"
              className={`legend__item ${isActive ? 'legend__item--active' : 'legend__item--inactive'}`}
              onClick={() => onToggle(item.color)}
              aria-pressed={isActive}
            >
              <span
                className="legend__swatch"
                style={{ backgroundColor: item.color }}
                aria-hidden="true"
              />
              <span>{item.label}</span>
            </button>
          </li>
        );
      })}
    </ul>
  </aside>
);

export default Legend;
