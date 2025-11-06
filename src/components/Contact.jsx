import { Mail, Send } from 'lucide-react';
import { useState } from 'react';

export default function Contact() {
  const [status, setStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Sending...');
    // In a real app, connect to your backend here.
    await new Promise((r) => setTimeout(r, 900));
    setStatus('Thanks! I\'ll get back to you soon.');
  };

  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight">Let\'s build something</h2>
          <p className="mt-3 text-gray-600">Tell me about your idea and I\'ll reach out with next steps.</p>
        </div>
        <form onSubmit={handleSubmit} className="mt-10 grid gap-4 sm:grid-cols-2 bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
          <div className="sm:col-span-1">
            <label className="block text-sm font-medium text-gray-700">Name</label>
            <input className="mt-1 w-full rounded-md border border-gray-200 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-gray-900" required />
          </div>
          <div className="sm:col-span-1">
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input type="email" className="mt-1 w-full rounded-md border border-gray-200 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-gray-900" required />
          </div>
          <div className="sm:col-span-2">
            <label className="block text-sm font-medium text-gray-700">Message</label>
            <textarea rows="4" className="mt-1 w-full rounded-md border border-gray-200 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-gray-900" required />
          </div>
          <div className="sm:col-span-2 flex items-center justify-between">
            <p className="text-sm text-gray-500 flex items-center gap-2"><Mail className="h-4 w-4" /> hello@example.com</p>
            <button type="submit" className="inline-flex items-center gap-2 rounded-md bg-gray-900 text-white px-4 py-2 font-medium hover:bg-gray-800">
              <Send className="h-4 w-4" /> Send
            </button>
          </div>
          {status && (
            <div className="sm:col-span-2 text-sm text-gray-700">{status}</div>
          )}
        </form>
      </div>
    </section>
  );
}
