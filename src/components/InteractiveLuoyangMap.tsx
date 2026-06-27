import { useMemo, useState } from 'react';
import { LuoyangLocation, getLocationColorClasses, locationTypes, luoyangMapMeta } from '../data/luoyangLocations';

type InteractiveLuoyangMapProps = {
  locations: LuoyangLocation[];
  selectedId?: string;
  onSelect: (location: LuoyangLocation) => void;
};

function InteractiveLuoyangMap({ locations, selectedId, onSelect }: InteractiveLuoyangMapProps) {
  const [zoom, setZoom] = useState(1);
  const selectedLocation = useMemo(
    () => locations.find((location) => location.id === selectedId),
    [locations, selectedId]
  );

  return (
    <section className="rounded-2xl border border-border bg-[rgba(255,252,244,0.9)] p-4 shadow-sm">
      <div className="mb-3 flex flex-wrap items-center justify-between gap-3">
        <div>
          <h2 className="text-lg font-semibold text-slateInk">北魏洛阳地点交互地图</h2>
          <p className="text-xs text-ink/60">
            数据源：{luoyangMapMeta.source_file}；坐标：{luoyangMapMeta.coordinate_system}；当前 {locations.length} 处
          </p>
        </div>
        <label className="flex items-center gap-2 text-xs text-ink/70">
          缩放
          <input
            type="range"
            min="1"
            max="2.4"
            step="0.1"
            value={zoom}
            onChange={(event) => setZoom(Number(event.target.value))}
            className="w-32 accent-[#9f6b3d]"
          />
          <span className="w-9 tabular-nums">{zoom.toFixed(1)}×</span>
        </label>
      </div>

      <div className="overflow-auto rounded-xl border border-[#d6c7aa] bg-[#eadfc9]">
        <div
          className="relative origin-top-left"
          style={{ width: luoyangMapMeta.canvas_width * zoom, height: luoyangMapMeta.canvas_height * zoom }}
        >
          <img
            src="/beiwei_luoyang_base.png"
            alt="北魏洛阳底图"
            className="absolute inset-0 h-full w-full select-none object-fill"
            draggable={false}
          />
          {locations.length === 0 && (
            <div className="absolute left-1/2 top-1/2 z-20 -translate-x-1/2 -translate-y-1/2 rounded-xl border border-border bg-[rgba(255,252,244,0.95)] px-4 py-3 text-sm text-ink shadow">
              没有匹配地点
            </div>
          )}
          {locations.map((location) => {
            const color = getLocationColorClasses(location.type);
            const isSelected = selectedId === location.id;
            return (
              <button
                key={location.id}
                type="button"
                onClick={() => onSelect(location)}
                className={`group absolute z-10 -translate-x-1/2 -translate-y-1/2 rounded-full ring-4 transition hover:z-20 hover:scale-125 focus:z-20 focus:outline-none ${color} ${
                  isSelected ? 'scale-150 ring-8' : ''
                }`}
                style={{
                  left: location.x * zoom,
                  top: location.y * zoom,
                  width: Math.max(10 * zoom, 12),
                  height: Math.max(10 * zoom, 12)
                }}
                aria-label={`${location.name}，${location.type}`}
              >
                <span className="absolute left-1/2 top-[-0.55rem] hidden w-max max-w-56 -translate-x-1/2 -translate-y-full rounded-md border border-border bg-[rgba(255,252,244,0.98)] px-2 py-1 text-xs text-ink shadow group-hover:block group-focus:block">
                  {location.name} · {location.type}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      <div className="mt-4 flex flex-wrap gap-2 text-xs text-ink/70">
        {locationTypes.map((type) => (
          <span key={type} className="inline-flex items-center gap-1 rounded-full border border-border bg-white/55 px-2 py-1">
            <span className={`h-2.5 w-2.5 rounded-full ${getLocationColorClasses(type).split(' ')[0]}`} />
            {type}
          </span>
        ))}
      </div>

      {selectedLocation && (
        <div className="mt-4 rounded-xl border border-border bg-white/65 p-4 text-sm leading-6 text-ink/80">
          <h3 className="text-base font-semibold text-slateInk">{selectedLocation.name}</h3>
          <p>类型：{selectedLocation.type}（{selectedLocation.group_path}）</p>
          <p>坐标：x {selectedLocation.x}，y {selectedLocation.y}；标签方向：{selectedLocation.label_direction}</p>
          <p className="text-xs text-ink/60">{selectedLocation.note}</p>
        </div>
      )}
    </section>
  );
}

export default InteractiveLuoyangMap;
