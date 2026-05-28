import { Temple } from '../data/temples';

type MiniMapProps = {
  temples: Temple[];
  currentId: string;
};

function MiniMap({ temples, currentId }: MiniMapProps) {
  return (
    <div className="relative mt-4 h-40 rounded-xl border border-border bg-white/60">
      <div className="absolute inset-[8%] border border-[#b89e76]/70" />
      {temples.map((temple) => {
        const active = temple.id === currentId;
        return (
          <span
            key={temple.id}
            className={`absolute -translate-x-1/2 -translate-y-1/2 rounded-full ${active ? 'h-3 w-3 bg-accent ring-2 ring-accent/30' : 'h-2 w-2 bg-ink/30'}`}
            style={{ left: `${temple.x}%`, top: `${temple.y}%` }}
            title={temple.name}
          />
        );
      })}
    </div>
  );
}

export default MiniMap;
