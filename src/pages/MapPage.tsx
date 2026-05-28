import { useMemo, useState } from 'react';
import FilterPanel from '../components/FilterPanel';
import Header from '../components/Header';
import Layout from '../components/Layout';
import LuoyangMap from '../components/LuoyangMap';
import { temples } from '../data/temples';

function MapPage() {
  const [selectedJuan, setSelectedJuan] = useState('全部');
  const visibleCount = useMemo(
    () => (selectedJuan === '全部' ? temples.length : temples.filter((item) => item.juan === selectedJuan).length),
    [selectedJuan]
  );

  return (
    <>
      <Header />
      <Layout>
        <section className="mb-6 rounded-2xl border border-border bg-[rgba(255,252,244,0.85)] p-6 shadow-sm">
          <h1 className="text-3xl font-semibold tracking-wide text-slateInk">北魏洛阳伽蓝图</h1>
          <p className="mt-2 text-sm leading-7 text-ink/80">
            据《洛阳伽蓝记》重绘北魏洛阳诸寺。<br />
            点击寺名，查看该寺概念图、原文与注释。
          </p>
          <p className="mt-3 text-xs text-ink/60">当前显示：{visibleCount} 处寺院节点</p>
        </section>

        <div className="grid gap-5 lg:grid-cols-[260px_minmax(0,1fr)]">
          <FilterPanel selectedJuan={selectedJuan} onChange={setSelectedJuan} />
          <LuoyangMap temples={temples} selectedJuan={selectedJuan} />
        </div>
      </Layout>
    </>
  );
}

export default MapPage;
