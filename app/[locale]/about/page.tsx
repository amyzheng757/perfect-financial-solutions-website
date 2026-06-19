'use client';

import React from 'react';
import { useLang } from '@/lib/LangContext';
import { content } from '@/lib/i18n';
import CTASection from '@/components/sections/CTASection';

export default function AboutPage() {
  const { lang } = useLang();
  const t = content[lang].about;

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[var(--color-dark-bg)] via-[var(--color-primary)] to-[var(--color-primary-hover)] py-20 lg:py-28">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full bg-[var(--color-primary-light)] opacity-10 blur-3xl" />
          <div className="absolute bottom-0 left-0 w-[300px] h-[300px] rounded-full bg-[var(--color-accent)] opacity-10 blur-3xl" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">{t.title}</h1>
            <p className="text-lg text-white/70 leading-relaxed">{t.body}</p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
            <path d="M0 40V20C240 0 480 0 720 20C960 40 1200 40 1440 20V40H0Z" fill="var(--color-surface)" />
          </svg>
        </div>
      </section>

      {/* Perfect Companies */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
              {lang === 'zh' ? 'Perfect 系列公司' : 'Perfect Group of Companies'}
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {t.perfectCompanies.map((company, i) => (
              <div
                key={i}
                className="bg-[var(--color-surface-alt)] rounded-2xl p-6 border border-[var(--color-border)] text-center card-lift group"
              >
                <div className="w-14 h-14 mx-auto mb-4 rounded-xl bg-[var(--color-primary-bg)] flex items-center justify-center group-hover:bg-[var(--color-primary)] transition-colors">
                  <span className="text-lg font-bold text-[var(--color-primary)] group-hover:text-white transition-colors">
                    {company.name.charAt(0)}
                  </span>
                </div>
                <h3 className="text-sm font-bold text-gray-900 mb-2 leading-snug">
                  {company.name}
                </h3>
                <p className="text-xs text-gray-500 leading-relaxed">{company.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20 lg:py-28 bg-[var(--color-surface-alt)]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="w-16 h-16 mx-auto mb-8 rounded-2xl bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-primary-light)] flex items-center justify-center shadow-lg">
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
            </svg>
          </div>
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[var(--color-primary-bg)] border border-[var(--color-primary)]/10 mb-6">
            <span className="text-xs font-medium text-[var(--color-primary)]">
              {lang === 'zh' ? '我们的使命' : 'Our Mission'}
            </span>
          </div>
          <p className="text-xl text-gray-600 leading-relaxed italic font-medium">
            &ldquo;{t.mission}&rdquo;
          </p>
        </div>
      </section>

      <CTASection />
    </>
  );
}
