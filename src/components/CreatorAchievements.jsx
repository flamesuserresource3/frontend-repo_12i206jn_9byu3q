import { Youtube, Instagram, Trophy, UserCheck } from 'lucide-react';

export default function CreatorAchievements() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-3xl font-bold tracking-tight">Content Creator</h2>
            <p className="mt-3 text-gray-600">
              I run the <span className="font-semibold">Code Constellation</span> and <span className="font-semibold">Coding Sanjai</span> pages to teach and inspire others through coding tips, project showcases, and AI tools.
            </p>
            <div className="mt-6 space-y-4">
              <EmbedCard title="Latest YouTube Video" icon={<Youtube className="h-4 w-4 text-red-600" />}>
                <div className="aspect-video w-full rounded-lg overflow-hidden ring-1 ring-black/5 bg-black">
                  <iframe className="w-full h-full" src="https://www.youtube.com/embed/dQw4w9WgXcQ" title="YouTube video" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                </div>
              </EmbedCard>
              <EmbedCard title="Instagram Post" icon={<Instagram className="h-4 w-4 text-pink-600" />}>
                <div className="aspect-[4/3] w-full rounded-lg overflow-hidden ring-1 ring-black/5 bg-white">
                  <iframe className="w-full h-full" src="https://www.instagram.com/p/Cx1lQf2s4b3/embed" title="Instagram embed" />
                </div>
              </EmbedCard>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-bold text-gray-900">Achievements & Roles</h3>
            <ul className="mt-4 space-y-3">
              <AchievementItem icon={<UserCheck className="h-5 w-5" />} text="Upcoming President of VECODERS Club" />
              <AchievementItem icon={<Trophy className="h-5 w-5" />} text="Organizer of EXPLOITS Symposium" />
              <AchievementItem icon={<Trophy className="h-5 w-5" />} text="Featured developer and innovator" />
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

function EmbedCard({ title, icon, children }) {
  return (
    <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
      <div className="flex items-center gap-2 text-sm font-medium text-gray-900">
        {icon}
        {title}
      </div>
      <div className="mt-3">{children}</div>
    </div>
  );
}

function AchievementItem({ icon, text }) {
  return (
    <li className="flex items-center gap-3 p-3 rounded-lg bg-white border border-gray-200">
      <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-gray-100 text-gray-800">
        {icon}
      </span>
      <span className="text-gray-700">{text}</span>
    </li>
  );
}
