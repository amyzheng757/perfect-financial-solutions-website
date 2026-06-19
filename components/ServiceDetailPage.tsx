'use client';

import React from 'react';
import { useLang } from '@/lib/LangContext';
import { content } from '@/lib/i18n';
import Link from 'next/link';
import CTASection from '@/components/sections/CTASection';

type ServicePageKey = 'canadaHR' | 'usPayroll' | 'adminOutsource' | 'bookkeeping' | 'businessMarketing';

export default function ServiceDetailPage({ pageKey }: { pageKey: ServicePageKey }) {
  const { lang } = useLang();
  const t = content[lang][pageKey];
  const prefix = `/${lang}`;

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[var(--color-dark-bg)] via-[var(--color-primary)] to-[var(--color-primary-hover)] pt-28 pb-20 lg:pt-36 lg:pb-28">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full bg-[var(--color-primary-light)] opacity-10 blur-3xl" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <Link
              href={prefix + '/services'}
              className="inline-flex items-center text-sm text-white/60 hover:text-white mb-6 transition-colors"
            >
              <svg className="w-4 h-4 mr-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              {lang === 'zh' ? '返回服务列表' : 'Back to Services'}
            </Link>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">{t.title}</h1>
            <p className="text-lg text-white/70">{t.subtitle}</p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
            <path d="M0 40V20C240 0 480 0 720 20C960 40 1200 40 1440 20V40H0Z" fill="var(--color-surface)" />
          </svg>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
            <div className="lg:col-span-3">
              <p className="text-gray-600 leading-relaxed text-base mb-12">{t.body}</p>

              <h2 className="text-xl font-bold text-gray-900 mb-6">
                {lang === 'zh' ? '我们可以协助：' : 'We can assist with:'}
              </h2>
              <div className="grid sm:grid-cols-2 gap-3 mb-12">
                {t.items.map((item, i) => (
                  <div key={i} className="flex items-center gap-3 text-sm text-gray-700 p-3 rounded-lg bg-[var(--color-surface-alt)]">
                    <svg className="w-5 h-5 text-[var(--color-accent)] shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-2">
              <div className="bg-[var(--color-surface-alt)] rounded-2xl p-6 lg:p-8 border border-[var(--color-border)] sticky top-20">
                <h3 className="text-lg font-bold text-gray-900 mb-5">
                  {lang === 'zh' ? '适合：' : 'Suitable for:'}
                </h3>
                <ul className="space-y-3 mb-8">
                  {t.suitable.map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-[var(--color-primary-bg)] flex items-center justify-center shrink-0 mt-0.5">
                        <svg className="w-3.5 h-3.5 text-[var(--color-primary)]" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span className="text-sm text-gray-600">{item}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href={prefix + '/contact'}
                  className="block w-full text-center px-5 py-3.5 text-sm font-semibold text-white bg-[var(--color-primary-light)] hover:bg-[var(--color-primary-hover)] rounded-xl transition-all shadow-md hover:shadow-lg"
                >
                  {t.cta}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
