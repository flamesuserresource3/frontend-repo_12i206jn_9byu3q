export default function Footer() {
  return (
    <footer className="py-10 border-t border-white/10 bg-slate-950/80">
      <div className="mx-auto max-w-6xl px-4 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-slate-400">© {new Date().getFullYear()} Sanjai K — All rights reserved.</p>
        <div className="text-sm text-slate-400">
          Built with React, Tailwind & Spline.
        </div>
      </div>
    </footer>
  );
}
