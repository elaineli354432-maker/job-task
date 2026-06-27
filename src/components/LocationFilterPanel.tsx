import { LuoyangLocation, locationTypeCounts, locationTypes } from '../data/luoyangLocations';

type LocationFilterPanelProps = {
  selectedType: string;
  query: string;
  locations: LuoyangLocation[];
  selectedId?: string;
  onTypeChange: (type: string) => void;
  onQueryChange: (query: string) => void;
  onSelect: (location: LuoyangLocation) => void;
  onReset: () => void;
};

function LocationFilterPanel({
  selectedType,
  query,
  locations,
  selectedId,
  onTypeChange,
  onQueryChange,
  onSelect,
  onReset
}: LocationFilterPanelProps) {
  const options = ['全部', ...locationTypes];

  return (
    <aside className="rounded-2xl border border-border bg-[rgba(255,252,244,0.9)] p-4 shadow-sm">
      <div className="flex items-center justify-between gap-3">
        <h2 className="text-sm font-semibold text-slateInk">地点筛选</h2>
        <button type="button" onClick={onReset} className="text-xs text-accent underline-offset-4 hover:underline">
          重置
        </button>
      </div>

      <label className="mt-4 block text-xs font-medium text-ink/70" htmlFor="location-search">
        搜索地名 / 类型 / 分组
      </label>
      <input
        id="location-search"
        value={query}
        onChange={(event) => onQueryChange(event.target.value)}
        placeholder="如：永宁寺、阊阖门"
        className="mt-2 w-full rounded-xl border border-border bg-white/75 px-3 py-2 text-sm outline-none transition focus:border-accent focus:ring-2 focus:ring-accent/15"
      />

      <h3 className="mb-3 mt-5 text-xs font-medium text-ink/70">类型</h3>
      <div className="space-y-2">
        {options.map((option) => {
          const count =
            option === '全部'
              ? Object.values(locationTypeCounts).reduce((sum, value) => sum + value, 0)
              : locationTypeCounts[option];

          return (
            <button
              key={option}
              type="button"
              onClick={() => onTypeChange(option)}
              className={`flex w-full items-center justify-between rounded-xl border px-3 py-2 text-left text-sm transition ${
                selectedType === option
                  ? 'border-accent bg-accent/10 text-accent'
                  : 'border-border bg-white/50 text-ink/80 hover:border-mutedGold'
              }`}
            >
              <span>{option}</span>
              <span className="text-xs opacity-70">{count}</span>
            </button>
          );
        })}
      </div>

      <h3 className="mb-3 mt-5 text-xs font-medium text-ink/70">当前结果</h3>
      <div className="max-h-64 space-y-2 overflow-auto pr-1">
        {locations.length === 0 ? (
          <p className="rounded-xl border border-dashed border-border bg-white/45 px-3 py-4 text-center text-xs text-ink/55">
            没有匹配地点，请调整关键词或类型。
          </p>
        ) : (
          locations.slice(0, 80).map((location) => (
            <button
              key={location.id}
              type="button"
              onClick={() => onSelect(location)}
              className={`w-full rounded-xl border px-3 py-2 text-left transition ${
                selectedId === location.id
                  ? 'border-accent bg-accent/10 text-accent'
                  : 'border-border bg-white/45 text-ink/80 hover:border-mutedGold'
              }`}
            >
              <span className="block text-sm font-medium">{location.name}</span>
              <span className="text-xs opacity-70">{location.type} · x {location.x} / y {location.y}</span>
            </button>
          ))
        )}
        {locations.length > 80 && <p className="text-center text-xs text-ink/55">仅显示前 80 条，请继续搜索缩小范围。</p>}
      </div>
    </aside>
  );
}

export default LocationFilterPanel;
