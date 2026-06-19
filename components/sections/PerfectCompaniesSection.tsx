'use client';

import React from 'react';
import { useLang } from '@/lib/LangContext';
import { content } from '@/lib/i18n';

export default function PerfectCompaniesSection() {
  const { lang } = useLang();
  const t = content[lang].home;

  return (
    <section className="py-20 lg:py-28 bg-gradient-to-br from-[var(--color-dark-bg)] via-[var(--color-primary)] to-[var(--color-dark-bg2)] relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-[var(--color-primary-light)] opacity-5 blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-[var(--color-accent)] opacity-5 blur-3xl" />
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.5) 1px, transparent 1px)',
            backgroundSize: '40px 40px',
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur border border-white/15 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-accent)]" />
            <span className="text-xs font-medium text-white/80">
              {lang === 'zh' ? 'Perfect 系列' : 'Perfect Group'}
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4">
            {t.perfectTitle}
          </h2>
          <p className="text-white/65 max-w-2xl mx-auto">{t.perfectBody}</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {t.perfectCompanies.map((company, i) => (
            <div
              key={i}
              className="bg-white/5 backdrop-blur rounded-2xl p-6 border border-white/10 text-center hover:bg-white/10 hover:border-white/20 transition-all group"
            >
              <div className="w-14 h-14 mx-auto mb-4 rounded-xl bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-colors">
                <span className="text-xl font-bold text-white">
                  {company.name.charAt(0)}
                </span>
              </div>
              <h3 className="text-sm font-bold text-white mb-2 leading-snug">
                {company.name}
              </h3>
              <p className="text-xs text-white/55 leading-relaxed">{company.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
