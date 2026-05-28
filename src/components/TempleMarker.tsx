import { Temple } from '../data/temples';

type TempleMarkerProps = {
  temple: Temple;
  dimmed: boolean;
  onClick: (id: string) => void;
};

const typeColorMap: Record<string, string> = {
  皇家寺院: 'bg-accent',
  尼寺: 'bg-slateInk',
  讲经道场: 'bg-mutedGold',
  默认: 'bg-[#6b665d]'
};

function TempleMarker({ temple, dimmed, onClick }: TempleMarkerProps) {
  const color = typeColorMap[temple.type] ?? typeColorMap['默认'];

  return (
    <button
      type="button"
      onClick={() => onClick(temple.id)}
      className={`group absolute -translate-x-1/2 -translate-y-1/2 ${dimmed ? 'opacity-30' : 'opacity-95'}`}
      style={{ left: `${temple.x}%`, top: `${temple.y}%` }}
    >
      <span className={`block h-3.5 w-3.5 rounded-full border border-white/80 ${color} shadow-sm transition group-hover:scale-125`} />
      <span className="pointer-events-none absolute left-1/2 top-[-0.6rem] hidden w-max -translate-x-1/2 -translate-y-full rounded-md border border-border bg-[rgba(255,252,244,0.95)] px-2 py-1 text-xs text-ink shadow group-hover:block">
        {temple.name} · {temple.juan} · {temple.area}
      </span>
    </button>
  );
}

export default TempleMarker;
