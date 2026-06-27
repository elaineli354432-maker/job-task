import { useMemo, useState } from 'react';
import { LuoyangLocation, luoyangMapMeta } from '../data/luoyangLocations';

type InteractiveLuoyangMapProps = {
  locations: LuoyangLocation[];
  selectedId?: string;
  onSelect: (location: LuoyangLocation) => void;
};

const typeColorMap: Record<string, string> = {
  寺院: 'bg-accent ring-accent/25',
  城门: 'bg-slateInk ring-slateInk/25',
  宫城: 'bg-[#9f6b3d] ring-[#9f6b3d]/25',
  里坊: 'bg-mutedGold ring-mutedGold/25',
  人物居所: 'bg-[#7b6db2] ring-[#7b6db2]/25',
  水系: 'bg-[#3f83a8] ring-[#3f83a8]/25',
  道路: 'bg-[#6b665d] ring-[#6b665d]/25'
};

function InteractiveLuoyangMap({ locations, selectedId, onSelect }: InteractiveLuoyangMapProps) {
  const [zoom, setZoom] = useState(1);
  const selectedLocation = useMemo(() => locations.find((location) => location.id === selectedId), [locations, selectedId]);

  return (
    <section className="rounded-2xl border border-border bg-[rgba(255,252,244,0.9)] p-4 shadow-sm">
      <div className="mb-3 flex flex-wrap items-center justify-between gap-3">
        <div>
          <h2 className="text-lg font-semibold text-slateInk">北魏洛阳地点交互地图</h2>
          <p className="text-xs text-ink/60">
            数据源：{luoyangMapMeta.source_file}；坐标：{luoyangMapMeta.coordinate_system}
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
          {locations.map((location) => {
            const color = typeColorMap[location.type] ?? 'bg-[#6b665d] ring-[#6b665d]/25';
            const isSelected = selectedId === location.id;
            return (
              <button
                key={location.id}
                type="button"
                onClick={() => onSelect(location)}
                className={`group absolute z-10 -translate-x-1/2 -translate-y-1/2 rounded-full ring-4 transition hover:z-20 hover:scale-125 focus:z-20 focus:outline-none ${color} ${
                  isSelected ? 'scale-150 ring-8' : ''
                }`}
                style={{ left: location.x * zoom, top: location.y * zoom, width: 10 * zoom, height: 10 * zoom }}
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
