import React from 'react';
import Spline from '@splinetool/react-spline';
import { Mail, Download, Github, Linkedin } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative w-full h-[80vh] md:h-[88vh] overflow-hidden">
      {/* Interactive Spline background */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/zhZFnwyOYLgqlLWk/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
        {/* Soft gradient overlay to blend with sky theme; it remains clickable for Spline */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/60 via-white/40 to-white/70" />
      </div>

      {/* Content */}
      <div className="relative h-full">
        <div className="mx-auto max-w-6xl h-full px-4 sm:px-6 lg:px-8 flex items-center">
          <div className="w-full max-w-2xl">
            <span className="inline-flex items-center gap-2 rounded-full bg-sky-50 text-sky-700 px-3 py-1 text-xs font-medium ring-1 ring-sky-100 shadow-sm">
              <span className="inline-block h-2 w-2 rounded-full bg-sky-400" />
              Available for new opportunities
            </span>
            <h1 className="mt-6 text-4xl md:text-6xl font-semibold leading-tight text-slate-900">
              Hi, I’m <span className="text-sky-600">Your Name</span> —
              <br className="hidden md:block" />
              IT Engineer & Problem Solver
            </h1>
            <p className="mt-4 md:mt-6 text-base md:text-lg text-slate-600 max-w-xl">
              I build resilient systems, craft clean architectures, and turn complex challenges
              into elegant, scalable solutions.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-md bg-sky-600 text-white px-4 py-2 text-sm md:text-base font-medium shadow-sm hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2 transition-colors"
              >
                <Mail className="h-4 w-4" /> Contact Me
              </a>
              <a
                href="#"
                className="inline-flex items-center gap-2 rounded-md bg-white text-slate-700 px-4 py-2 text-sm md:text-base font-medium shadow-sm ring-1 ring-slate-200 hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2 transition-colors"
                download
              >
                <Download className="h-4 w-4" /> Download CV
              </a>
              <a
                href="https://github.com/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-md bg-white text-slate-700 px-4 py-2 text-sm md:text-base font-medium shadow-sm ring-1 ring-slate-200 hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2 transition-colors"
              >
                <Github className="h-4 w-4" /> GitHub
              </a>
              <a
                href="https://linkedin.com/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-md bg-white text-slate-700 px-4 py-2 text-sm md:text-base font-medium shadow-sm ring-1 ring-slate-200 hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2 transition-colors"
              >
                <Linkedin className="h-4 w-4" /> LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
