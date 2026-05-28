import { Temple } from '../data/temples';

type Props = {
  temple: Temple;
};

function TempleConceptImage({ temple }: Props) {
  if (temple.conceptImage) {
    const imageSrc = temple.conceptImage.startsWith('/')
      ? `${import.meta.env.BASE_URL}${temple.conceptImage.replace(/^\/+/, '')}`
      : temple.conceptImage;

    return <img src={imageSrc} alt={`${temple.name}概念图`} className="h-[420px] w-full rounded-2xl border border-border object-cover" />;
  }

  return (
    <div className="relative flex h-[420px] w-full flex-col justify-between rounded-2xl border border-border bg-[linear-gradient(120deg,rgba(176,138,60,0.14),rgba(63,75,83,0.1))] p-6">
      <div>
        <p className="text-sm text-ink/60">概念图占位</p>
        <h3 className="mt-2 text-2xl font-semibold text-slateInk">{temple.name}</h3>
        <p className="mt-1 text-sm text-ink/70">{temple.juan} · {temple.area}</p>
      </div>
      <p className="rounded-lg border border-border/80 bg-white/40 p-3 text-sm leading-6 text-ink/80">{temple.imagePrompt}</p>
    </div>
  );
}

export default TempleConceptImage;
