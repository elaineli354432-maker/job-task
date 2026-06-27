import { locationTypes } from '../data/luoyangLocations';

type LocationFilterPanelProps = {
  selectedType: string;
  query: string;
  onTypeChange: (type: string) => void;
  onQueryChange: (query: string) => void;
};

function LocationFilterPanel({ selectedType, query, onTypeChange, onQueryChange }: LocationFilterPanelProps) {
  const options = ['全部', ...locationTypes];

  return (
    <aside className="rounded-2xl border border-border bg-[rgba(255,252,244,0.9)] p-4 shadow-sm">
      <h2 className="text-sm font-semibold text-slateInk">地点筛选</h2>
      <label className="mt-4 block text-xs font-medium text-ink/70" htmlFor="location-search">
        搜索地名
      </label>
      <input
        id="location-search"
        value={query}
        onChange={(event) => onQueryChange(event.target.value)}
        placeholder="如：永宁寺、阊阖门"
        className="mt-2 w-full rounded-xl border border-border bg-white/75 px-3 py-2 text-sm outline-none transition focus:border-accent focus:ring-2 focus:ring-accent/15"
      />

      <h3 className="mb-3 mt-5 text-xs font-medium text-ink/70">类型</h3>
      <div className="max-h-[460px] space-y-2 overflow-auto pr-1">
        {options.map((option) => (
          <button
            key={option}
            type="button"
            onClick={() => onTypeChange(option)}
            className={`w-full rounded-xl border px-3 py-2 text-left text-sm transition ${
              selectedType === option
                ? 'border-accent bg-accent/10 text-accent'
                : 'border-border bg-white/50 text-ink/80 hover:border-mutedGold'
            }`}
          >
            {option}
          </button>
        ))}
      </div>
    </aside>
  );
}

export default LocationFilterPanel;
