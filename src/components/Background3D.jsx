import Spline from '@splinetool/react-spline';

// Global background Spline that stays visible while scrolling
export default function Background3D() {
  return (
    <div className="fixed inset-0 z-0">
      <Spline
        scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode"
        style={{ width: '100%', height: '100%' }}
      />
      {/* Subtle dark gradient to ensure text contrast without blocking interactions */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-950/70 via-slate-950/60 to-slate-950/80" />
    </div>
  );
}
