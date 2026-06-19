'use client';

import React from 'react';
import { useLang } from '@/lib/LangContext';
import { content } from '@/lib/i18n';
import Link from 'next/link';

export default function CTASection() {
  const { lang } = useLang();
  const t = content[lang].home;
  const langPrefix = lang === 'en' ? '/en' : '';

  return (
    <section className="py-20 lg:py-28 bg-gradient-to-br from-[var(--color-primary)] via-[var(--color-primary-hover)] to-[var(--color-dark-bg)] text-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full bg-[var(--color-primary-light)] opacity-10 blur-3xl" />
        <div className="absolute bottom-0 left-1/4 w-[300px] h-[300px] rounded-full bg-[var(--color-accent)] opacity-10 blur-3xl" />
      </div>

      <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6 leading-tight">
          {t.ctaTitle}
        </h2>
        <p className="text-lg text-white/70 leading-relaxed mb-10 max-w-xl mx-auto">
          {t.ctaBody}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href={langPrefix + '/contact'}
            className="inline-flex items-center justify-center px-8 py-3.5 text-base font-semibold text-[var(--color-primary)] bg-white hover:bg-gray-100 rounded-lg transition-all shadow-lg hover:shadow-xl"
          >
            {t.ctaBtn1}
            <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
          <Link
            href={langPrefix + '/contact'}
            className="inline-flex items-center justify-center px-8 py-3.5 text-base font-medium text-white border-2 border-white/30 hover:border-white/60 hover:bg-white/10 rounded-lg transition-all"
          >
            {t.ctaBtn2}
          </Link>
        </div>
      </div>
    </section>
  );
}
