import React from 'react';
import { ExternalLink, Star } from 'lucide-react';

const projects = [
  {
    title: 'Realtime Metrics Dashboard',
    desc: 'Stream processing with Kafka + WebSockets for live insights.',
    link: '#',
    stars: '1.2k',
  },
  {
    title: 'Infrastructure as Code Kit',
    desc: 'Reusable Terraform modules for multi-cloud deployments.',
    link: '#',
    stars: '860',
  },
  {
    title: 'AuthN/Z Service',
    desc: 'Scalable authentication and RBAC built for microservices.',
    link: '#',
    stars: '640',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="scroll-mt-24">
      <h2 className="text-2xl md:text-3xl font-semibold text-slate-900">Projects</h2>
      <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((p) => (
          <a
            key={p.title}
            href={p.link}
            className="group relative block rounded-xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md focus:outline-none focus:ring-2 focus:ring-sky-500 transition-all"
          >
            <div className="absolute inset-0 rounded-xl bg-sky-50 opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="relative">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-lg font-semibold text-slate-900 group-hover:text-sky-700 transition-colors">
                  {p.title}
                </h3>
                <ExternalLink className="h-4 w-4 text-slate-400 group-hover:text-sky-600" />
              </div>
              <p className="mt-2 text-slate-600">{p.desc}</p>
              <div className="mt-4 inline-flex items-center gap-1 text-sm text-slate-500">
                <Star className="h-4 w-4 text-amber-400" /> {p.stars}
              </div>
            </div>
          </a>
        ))}
      </div>

      {/* Contact CTA */}
      <div id="contact" className="mt-12 rounded-2xl border border-slate-200 bg-gradient-to-br from-sky-50 to-white p-8 text-center">
        <h3 className="text-xl font-semibold text-slate-900">Let’s build something great together</h3>
        <p className="mt-2 text-slate-600">Open to freelance, full-time, and collaboration opportunities.</p>
        <a
          href="mailto:you@example.com"
          className="mt-5 inline-flex items-center justify-center gap-2 rounded-md bg-sky-600 text-white px-5 py-2.5 text-sm font-medium shadow-sm hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2"
        >
          Reach Out
        </a>
      </div>
    </section>
  );
}
