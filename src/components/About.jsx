import React from 'react';
import { CheckCircle2 } from 'lucide-react';

export default function About() {
  const highlights = [
    '5+ years in backend & cloud engineering',
    'Certified in AWS & Kubernetes',
    'Focus on performance, reliability, and DX',
  ];

  return (
    <section id="about" className="scroll-mt-24">
      <h2 className="text-2xl md:text-3xl font-semibold text-slate-900">About</h2>
      <div className="mt-6 grid gap-8 md:grid-cols-[240px,1fr] items-start">
        <div className="flex md:block items-center gap-4">
          <div className="h-24 w-24 shrink-0 rounded-full bg-gradient-to-br from-sky-400 to-sky-600 ring-4 ring-sky-100 shadow-md" />
          <div className="md:mt-4">
            <p className="text-slate-600">Your Name</p>
            <p className="text-sm text-slate-500">IT Engineer</p>
          </div>
        </div>

        <div>
          <p className="text-slate-600 leading-relaxed">
            I’m an IT engineer specializing in backend systems, APIs, and cloud-native architectures.
            I enjoy designing scalable services, building delightful developer experiences, and
            shipping products that last.
          </p>

          <ul className="mt-6 grid gap-3 sm:grid-cols-2">
            {highlights.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-sky-600 mt-0.5" />
                <span className="text-slate-700">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
