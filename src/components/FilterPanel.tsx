const options = ['全部', '卷一', '卷二', '卷三', '卷四', '卷五'] as const;

type FilterPanelProps = {
  selectedJuan: string;
  onChange: (juan: string) => void;
};

function FilterPanel({ selectedJuan, onChange }: FilterPanelProps) {
  return (
    <aside className="rounded-2xl border border-border bg-[rgba(255,252,244,0.85)] p-4 shadow-sm">
      <h2 className="mb-3 text-sm font-semibold text-slateInk">卷次筛选</h2>
      <div className="space-y-2">
        {options.map((option) => (
          <button
            key={option}
            type="button"
            onClick={() => onChange(option)}
            className={`w-full rounded-xl border px-3 py-2 text-left text-sm transition ${
              selectedJuan === option
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

export default FilterPanel;
