'use client';

import React, { useState } from 'react';
import { useLang } from '@/lib/LangContext';
import { content } from '@/lib/i18n';

export default function ContactPage() {
  const { lang } = useLang();
  const t = content[lang].contact;
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[var(--color-dark-bg)] via-[var(--color-primary)] to-[var(--color-primary-hover)] py-20 lg:py-28">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full bg-[var(--color-primary-light)] opacity-10 blur-3xl" />
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

      {/* Form */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          {submitted ? (
            <div className="text-center py-16">
              <div className="w-20 h-20 mx-auto mb-8 rounded-full bg-green-50 flex items-center justify-center">
                <svg className="w-10 h-10 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                {lang === 'zh' ? '提交成功！' : 'Submitted!'}
              </h2>
              <p className="text-gray-600">
                {lang === 'zh'
                  ? '感谢您的咨询，我们会尽快与您联系。'
                  : 'Thank you for your inquiry. We will contact you soon.'}
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    {t.name} <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-3 border border-[var(--color-border)] rounded-xl text-sm focus:ring-2 focus:ring-[var(--color-primary-light)] focus:border-[var(--color-primary-light)] outline-none transition-all"
                    placeholder={lang === 'zh' ? '请输入姓名' : 'Enter your name'}
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    {t.company}
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-[var(--color-border)] rounded-xl text-sm focus:ring-2 focus:ring-[var(--color-primary-light)] focus:border-[var(--color-primary-light)] outline-none transition-all"
                    placeholder={lang === 'zh' ? '请输入公司名称' : 'Enter company name'}
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    {t.city}
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-[var(--color-border)] rounded-xl text-sm focus:ring-2 focus:ring-[var(--color-primary-light)] focus:border-[var(--color-primary-light)] outline-none transition-all"
                    placeholder={lang === 'zh' ? '例如：Toronto, ON' : 'e.g. Toronto, ON'}
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    {t.email} <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    required
                    className="w-full px-4 py-3 border border-[var(--color-border)] rounded-xl text-sm focus:ring-2 focus:ring-[var(--color-primary-light)] focus:border-[var(--color-primary-light)] outline-none transition-all"
                    placeholder="email@example.com"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    {t.phone}
                  </label>
                  <input
                    type="tel"
                    className="w-full px-4 py-3 border border-[var(--color-border)] rounded-xl text-sm focus:ring-2 focus:ring-[var(--color-primary-light)] focus:border-[var(--color-primary-light)] outline-none transition-all"
                    placeholder="+1 (XXX) XXX-XXXX"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    {t.language} <span className="text-red-500">*</span>
                  </label>
                  <select
                    required
                    className="w-full px-4 py-3 border border-[var(--color-border)] rounded-xl text-sm bg-white focus:ring-2 focus:ring-[var(--color-primary-light)] focus:border-[var(--color-primary-light)] outline-none transition-all appearance-none"
                  >
                    {t.languageOptions.map((opt, i) => (
                      <option key={i} value={opt}>{opt}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    {t.employees}
                  </label>
                  <select className="w-full px-4 py-3 border border-[var(--color-border)] rounded-xl text-sm bg-white focus:ring-2 focus:ring-[var(--color-primary-light)] focus:border-[var(--color-primary-light)] outline-none transition-all appearance-none">
                    {t.employeeOptions.map((opt, i) => (
                      <option key={i} value={opt}>{opt}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    {t.serviceNeeded}
                  </label>
                  <select className="w-full px-4 py-3 border border-[var(--color-border)] rounded-xl text-sm bg-white focus:ring-2 focus:ring-[var(--color-primary-light)] focus:border-[var(--color-primary-light)] outline-none transition-all appearance-none">
                    {t.serviceOptions.map((opt, i) => (
                      <option key={i} value={opt}>{opt}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  {t.message}
                </label>
                <textarea
                  rows={5}
                  className="w-full px-4 py-3 border border-[var(--color-border)] rounded-xl text-sm focus:ring-2 focus:ring-[var(--color-primary-light)] focus:border-[var(--color-primary-light)] outline-none transition-all resize-y"
                  placeholder={lang === 'zh' ? '请简单描述您的问题或需求...' : 'Briefly describe your question or needs...'}
                />
              </div>

              <button
                type="submit"
                className="w-full sm:w-auto px-10 py-3.5 text-base font-semibold text-white bg-[var(--color-primary-light)] hover:bg-[var(--color-primary-hover)] rounded-xl transition-all shadow-lg hover:shadow-xl"
              >
                {t.submit}
              </button>

              <p className="text-xs text-gray-400 mt-4">{t.note}</p>
            </form>
          )}
        </div>
      </section>
    </>
  );
}
