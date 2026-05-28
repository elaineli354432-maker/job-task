import { useNavigate } from 'react-router-dom';
import { Temple } from '../data/temples';
import TempleMarker from './TempleMarker';

type LuoyangMapProps = {
  temples: Temple[];
  selectedJuan: string;
};

function LuoyangMap({ temples, selectedJuan }: LuoyangMapProps) {
  const navigate = useNavigate();

  return (
    <section className="relative min-h-[620px] overflow-hidden rounded-2xl border border-border bg-[rgba(255,252,244,0.9)] shadow-sm">
      <div className="absolute inset-0 bg-[linear-gradient(transparent_96%,rgba(176,138,60,0.1)_100%),linear-gradient(90deg,transparent_96%,rgba(176,138,60,0.1)_100%)] bg-[size:22px_22px] opacity-30" />
      <div className="absolute inset-[8%] border-2 border-[#b89e76]/70" />
      <div className="absolute inset-[20%_26%_28%_26%] border border-[#a58c65]" />
      <div className="absolute left-[18%] top-1/2 h-px w-[64%] bg-[#9b896c]/70" />
      <div className="absolute left-1/2 top-[16%] h-[68%] w-px bg-[#9b896c]/70" />
      <div className="absolute left-[24%] top-[30%] h-[40%] w-px bg-[#bca680]/60" />
      <div className="absolute left-[76%] top-[30%] h-[40%] w-px bg-[#bca680]/60" />

      {temples.map((temple) => {
        const dimmed = selectedJuan !== '全部' && temple.juan !== selectedJuan;
        return <TempleMarker key={temple.id} temple={temple} dimmed={dimmed} onClick={(id) => navigate(`/temple/${id}`)} />;
      })}
    </section>
  );
}

export default LuoyangMap;
