import { Link, Navigate, useParams } from 'react-router-dom';
import AnnotationList from '../components/AnnotationList';
import Header from '../components/Header';
import Layout from '../components/Layout';
import MiniMap from '../components/MiniMap';
import OriginalText from '../components/OriginalText';
import TempleConceptImage from '../components/TempleConceptImage';
import { temples } from '../data/temples';

function TempleDetailPage() {
  const { id } = useParams();
  const index = temples.findIndex((item) => item.id === id);

  if (index === -1) {
    return <Navigate to="/" replace />;
  }

  const temple = temples[index];
  const prevTemple = temples[(index - 1 + temples.length) % temples.length];
  const nextTemple = temples[(index + 1) % temples.length];

  return (
    <>
      <Header />
      <Layout>
        <div className="grid gap-6 lg:grid-cols-[45%_55%]">
          <section>
            <Link to="/" className="mb-3 inline-flex rounded-full border border-border bg-white/60 px-3 py-1.5 text-sm hover:border-mutedGold">
              返回伽蓝图
            </Link>
            <TempleConceptImage temple={temple} />
            <p className="mt-3 text-xs leading-6 text-ink/70">概念图依据《洛阳伽蓝记》相关文字生成，仅作空间想象参考。</p>
            <MiniMap temples={temples} currentId={temple.id} />
          </section>

          <section className="space-y-4 rounded-2xl border border-border bg-[rgba(255,252,244,0.85)] p-5 shadow-sm">
            <div>
              <h1 className="text-3xl font-semibold text-slateInk">{temple.name}</h1>
              <div className="mt-3 flex flex-wrap gap-2 text-xs">
                {[temple.juan, temple.area, temple.type].map((tag) => (
                  <span key={tag} className="rounded-full border border-border bg-white/50 px-2.5 py-1">
                    {tag}
                  </span>
                ))}
              </div>
              <p className="mt-3 text-sm leading-7 text-ink/80">{temple.shortDescription}</p>
            </div>

            <OriginalText text={temple.originalText} />
            <AnnotationList annotations={temple.annotations} />

            <div className="flex flex-wrap gap-3 border-t border-border pt-4 text-sm">
              <Link to={`/temple/${prevTemple.id}`} className="rounded-full border border-border bg-white/60 px-3 py-1.5 hover:border-mutedGold">上一寺：{prevTemple.name}</Link>
              <Link to={`/temple/${nextTemple.id}`} className="rounded-full border border-border bg-white/60 px-3 py-1.5 hover:border-mutedGold">下一寺：{nextTemple.name}</Link>
              <Link to="/" className="rounded-full border border-border bg-white/60 px-3 py-1.5 hover:border-mutedGold">返回总图</Link>
            </div>
          </section>
        </div>
      </Layout>
    </>
  );
}

export default TempleDetailPage;
