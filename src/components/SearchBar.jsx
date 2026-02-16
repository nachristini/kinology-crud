export default function SearchBar({ value, onChange }) {
  return (
    <div className="products-search">
      <svg viewBox="0 0 24 24" className="search-svg">
        <circle cx="11" cy="11" r="6.5" />
        <line x1="16" y1="16" x2="21" y2="21" />
      </svg>

      <input
        placeholder="Buscar produtos..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
}
