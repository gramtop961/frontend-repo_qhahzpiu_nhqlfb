import React from 'react';
import { Briefcase } from 'lucide-react';

const experiences = [
  {
    role: 'Senior Backend Engineer',
    company: 'Acme Cloud',
    period: '2022 — Present',
    points: [
      'Led migration to event-driven microservices with Kafka.',
      'Reduced API latency by 45% via query optimization and caching.',
      'Built platform observability with OpenTelemetry and Grafana.',
    ],
  },
  {
    role: 'Software Engineer',
    company: 'Nova Systems',
    period: '2019 — 2022',
    points: [
      'Designed fault-tolerant services processing 50M+ events/day.',
      'Implemented CI/CD pipelines and IaC with Terraform.',
      'Mentored junior engineers and improved code review practices.',
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="scroll-mt-24">
      <div className="flex items-center gap-3">
        <Briefcase className="h-6 w-6 text-sky-600" />
        <h2 className="text-2xl md:text-3xl font-semibold text-slate-900">Experience</h2>
      </div>

      <div className="mt-6 grid gap-6">
        {experiences.map((exp) => (
          <article
            key={exp.role + exp.company}
            className="rounded-xl border border-slate-200 bg-white/70 backdrop-blur-sm p-6 shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <h3 className="text-lg md:text-xl font-semibold text-slate-900">
                {exp.role} • <span className="text-sky-700">{exp.company}</span>
              </h3>
              <span className="text-sm text-slate-500">{exp.period}</span>
            </div>
            <ul className="mt-4 grid gap-2 list-disc pl-5 text-slate-700">
              {exp.points.map((p) => (
                <li key={p}>{p}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
