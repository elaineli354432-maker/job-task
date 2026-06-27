import { useMemo, useState } from 'react';
import Header from '../components/Header';
import InteractiveLuoyangMap from '../components/InteractiveLuoyangMap';
import Layout from '../components/Layout';
import LocationFilterPanel from '../components/LocationFilterPanel';
import { LuoyangLocation, luoyangLocations, luoyangMapMeta } from '../data/luoyangLocations';

function MapPage() {
  const [selectedType, setSelectedType] = useState('全部');
  const [query, setQuery] = useState('');
  const [selectedLocation, setSelectedLocation] = useState<LuoyangLocation | undefined>();

  const filteredLocations = useMemo(() => {
    const normalizedQuery = query.trim().toLocaleLowerCase('zh-Hans-CN');

    return luoyangLocations.filter((location) => {
      const matchesType = selectedType === '全部' || location.type === selectedType;
      const matchesQuery =
        normalizedQuery.length === 0 ||
        [location.name, location.type, location.group_path]
          .join(' ')
          .toLocaleLowerCase('zh-Hans-CN')
          .includes(normalizedQuery);

      return matchesType && matchesQuery;
    });
  }, [query, selectedType]);

  const handleSelect = (location: LuoyangLocation) => {
    setSelectedLocation(location);
  };

  const handleReset = () => {
    setSelectedType('全部');
    setQuery('');
    setSelectedLocation(undefined);
  };

  return (
    <>
      <Header />
      <Layout>
        <section className="mb-6 rounded-2xl border border-border bg-[rgba(255,252,244,0.85)] p-6 shadow-sm">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-accent">Issue 9</p>
          <h1 className="mt-2 text-3xl font-semibold tracking-wide text-slateInk">北魏洛阳地点交互地图</h1>
          <p className="mt-2 text-sm leading-7 text-ink/80">
            使用新整理的北魏洛阳地点数据叠加到底图上，支持按地点类型筛选、地名搜索、缩放查看与点击详情。
          </p>
          <p className="mt-3 text-xs text-ink/60">
            当前显示：{filteredLocations.length} / {luoyangMapMeta.count} 处地点
            {selectedLocation ? `；已选中：${selectedLocation.name}` : ''}
          </p>
        </section>

        <div className="grid gap-5 lg:grid-cols-[280px_minmax(0,1fr)]">
          <LocationFilterPanel
            selectedType={selectedType}
            query={query}
            locations={filteredLocations}
            selectedId={selectedLocation?.id}
            onTypeChange={setSelectedType}
            onQueryChange={setQuery}
            onSelect={handleSelect}
            onReset={handleReset}
          />
          <InteractiveLuoyangMap
            locations={filteredLocations}
            selectedId={selectedLocation?.id}
            onSelect={handleSelect}
          />
        </div>
      </Layout>
    </>
  );
}

export default MapPage;
