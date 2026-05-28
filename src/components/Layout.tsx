import { ReactNode } from 'react';

type LayoutProps = {
  children: ReactNode;
};

function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen bg-paper text-ink bg-[radial-gradient(circle_at_20%_10%,rgba(176,138,60,0.08),transparent_45%),radial-gradient(circle_at_80%_90%,rgba(63,75,83,0.08),transparent_40%)]">
      <div className="mx-auto w-full max-w-7xl px-4 pb-8 pt-24 md:px-8">{children}</div>
    </div>
  );
}

export default Layout;
