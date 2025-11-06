export default function Footer() {
  return (
    <footer className="py-10 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-gray-600">
        <p>© {new Date().getFullYear()} Your Name. All rights reserved.</p>
        <p className="opacity-80">Built with React, Tailwind & Spline.</p>
      </div>
    </footer>
  );
}
