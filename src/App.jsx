import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';

export default function App() {
  return (
    <div className="font-inter text-slate-800 bg-white">
      {/* Hero with interactive Spline background */}
      <Hero />

      {/* Content sections */}
      <main className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 space-y-24 py-16">
        <About />
        <Experience />
        <Projects />
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-200 py-10">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 text-center text-sm text-slate-500">
          © {new Date().getFullYear()} Your Name — Crafted with care.
        </div>
      </footer>
    </div>
  );
}
