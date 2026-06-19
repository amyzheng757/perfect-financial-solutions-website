'use client';

import React from 'react';
import { useLang } from '@/lib/LangContext';
import { content } from '@/lib/i18n';
import Link from 'next/link';

export default function HeroSection() {
  const { lang } = useLang();
  const t = content[lang].home;
  const langPrefix = lang === 'en' ? '/en' : '';

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[var(--color-dark-bg)] via-[var(--color-primary)] to-[var(--color-primary-hover)]">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-[var(--color-primary-light)] opacity-10 blur-3xl" />
        <div className="absolute -bottom-20 -left-20 w-[400px] h-[400px] rounded-full bg-[var(--color-accent)] opacity-10 blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full border border-white/5" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border border-white/5" />
        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-28 lg:pt-40 lg:pb-40">
        <div className="max-w-3xl">
          {/* Trust badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur border border-white/15 mb-8">
            <span className="w-2 h-2 rounded-full bg-[var(--color-accent)] animate-pulse" />
            <span className="text-white/90 text-sm font-medium">
              {lang === 'zh' ? '14+ 年服务小微企业经验' : '14+ Years Supporting Small Businesses'}
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight text-white leading-tight mb-6">
            {t.heroTitle}
          </h1>
          <p className="text-lg sm:text-xl text-white/75 leading-relaxed mb-10 max-w-2xl">
            {t.heroSubtitle}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <Link
              href={langPrefix + '/contact'}
              className="inline-flex items-center justify-center px-8 py-3.5 text-base font-semibold text-[var(--color-primary)] bg-white hover:bg-gray-100 rounded-lg transition-all shadow-lg hover:shadow-xl"
            >
              {t.btnConsultation}
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
            <Link
              href={langPrefix + '/services'}
              className="inline-flex items-center justify-center px-8 py-3.5 text-base font-medium text-white border-2 border-white/30 hover:border-white/60 hover:bg-white/10 rounded-lg transition-all"
            >
              {t.btnServices}
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </Link>
          </div>
          {/* Trust tags */}
          <div className="flex flex-wrap gap-3">
            {t.trustTags.map((tag, i) => (
              <span
                key={i}
                className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-white/10 backdrop-blur border border-white/15 text-white/90"
              >
                <svg className="w-4 h-4 mr-2 text-[var(--color-accent)]" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom wave divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path d="M0 60V30C240 0 480 0 720 30C960 60 1200 60 1440 30V60H0Z" fill="var(--color-surface)" />
        </svg>
      </div>
    </section>
  );
}
