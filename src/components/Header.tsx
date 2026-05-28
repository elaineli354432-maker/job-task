import { Link, useLocation } from 'react-router-dom';

function Header() {
  const location = useLocation();

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border/80 bg-[rgba(245,239,227,0.88)] backdrop-blur-sm">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 md:px-8">
        <Link to="/" className="text-lg font-semibold tracking-wide text-slateInk">
          北魏洛阳伽蓝图
        </Link>
        <nav className="flex items-center gap-3 text-sm">
          <Link to="/" className="rounded-full border border-border bg-white/50 px-3 py-1.5 hover:border-mutedGold">
            返回总图
          </Link>
          <button type="button" className="rounded-full border border-border bg-white/50 px-3 py-1.5 text-ink/80">
            关于本项目
          </button>
          <span className="hidden text-xs text-ink/60 md:block">{location.pathname}</span>
        </nav>
      </div>
    </header>
  );
}

export default Header;
