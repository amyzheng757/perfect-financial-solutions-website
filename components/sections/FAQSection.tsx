'use client';

import React, { useState } from 'react';
import { useLang } from '@/lib/LangContext';
import { content } from '@/lib/i18n';

export default function FAQSection() {
  const { lang } = useLang();
  const t = content[lang].home;
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[var(--color-primary-bg)] border border-[var(--color-primary)]/10 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-primary-light)]" />
            <span className="text-xs font-medium text-[var(--color-primary)]">
              FAQ
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900">
            {t.faqTitle}
          </h2>
        </div>
        <div className="space-y-3">
          {t.faqs.map((faq, i) => (
            <div
              key={i}
              className={`border rounded-xl overflow-hidden transition-all ${
                openIdx === i
                  ? 'border-[var(--color-primary-light)] shadow-sm'
                  : 'border-[var(--color-border)]'
              }`}
            >
              <button
                onClick={() => setOpenIdx(openIdx === i ? null : i)}
                className="w-full flex items-center justify-between px-6 py-5 text-left hover:bg-[var(--color-surface-alt)] transition-colors"
              >
                <span className={`text-sm font-semibold pr-4 transition-colors ${
                  openIdx === i ? 'text-[var(--color-primary)]' : 'text-gray-900'
                }`}>
                  {faq.q}
                </span>
                <svg
                  className={`w-5 h-5 shrink-0 transition-all duration-300 ${
                    openIdx === i ? 'text-[var(--color-primary-light)] rotate-180' : 'text-gray-400'
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div
                className={`grid transition-all duration-300 ${
                  openIdx === i ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                }`}
              >
                <div className="overflow-hidden">
                  <div className="px-6 pb-5 pt-0">
                    <p className="text-sm text-gray-600 leading-relaxed">{faq.a}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
