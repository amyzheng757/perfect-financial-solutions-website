'use client';

import React from 'react';
import { useLang } from '@/lib/LangContext';
import { content } from '@/lib/i18n';
import Link from 'next/link';

export default function Footer() {
  const { lang } = useLang();
  const t = content[lang];
  const prefix = `/${lang}`;

  const serviceLinks = [
    { label: t.nav.canadaHR, href: '/services/canada-hr-payroll' },
    { label: t.nav.usPayroll, href: '/services/us-payroll-tax' },
    { label: t.nav.adminOutsource, href: '/services/admin-outsourcing' },
    { label: t.nav.bookkeeping, href: '/services/bookkeeping' },
    { label: t.nav.businessMarketing, href: '/services/business-marketing' },
  ];

  return (
    <footer className="bg-gradient-to-br from-[var(--color-dark-bg)] to-[var(--color-dark-bg2)] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12">
          {/* Company info */}
          <div className="lg:col-span-5">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-xl bg-white/15 flex items-center justify-center">
                <span className="text-white font-bold text-lg">P</span>
              </div>
              <div>
                <span className="font-bold text-lg text-white">Perfect Employer</span>
                <span className="block text-white/40 text-xs">Solutions Ltd</span>
              </div>
            </div>
            <p className="text-white/60 text-sm leading-relaxed mb-4 max-w-sm">
              {t.footer.tagline}
            </p>
            <p className="text-white/35 text-xs">{t.footer.partOf}</p>
          </div>

          {/* Quick links */}
          <div className="lg:col-span-3">
            <h3 className="font-semibold text-sm uppercase tracking-wider mb-5 text-white/80">
              {t.footer.quickLinks}
            </h3>
            <ul className="space-y-3">
              <li>
                <Link href={prefix + '/'} className="text-white/50 hover:text-white text-sm transition-colors">
                  {t.nav.home}
                </Link>
              </li>
              <li>
                <Link href={prefix + '/services'} className="text-white/50 hover:text-white text-sm transition-colors">
                  {t.nav.services}
                </Link>
              </li>
              <li>
                <Link href={prefix + '/about'} className="text-white/50 hover:text-white text-sm transition-colors">
                  {t.nav.about}
                </Link>
              </li>
              <li>
                <Link href={prefix + '/contact'} className="text-white/50 hover:text-white text-sm transition-colors">
                  {t.nav.contact}
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="lg:col-span-4">
            <h3 className="font-semibold text-sm uppercase tracking-wider mb-5 text-white/80">
              {t.footer.services}
            </h3>
            <ul className="space-y-3">
              {serviceLinks.map((link) => (
                <li key={link.href}>
                  <Link href={prefix + link.href} className="text-white/50 hover:text-white text-sm transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Contact bar */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
          <div className="flex flex-wrap items-center gap-6 text-white/40 text-xs">
            <span className="flex items-center gap-1.5">
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
              {t.footer.phone}: +1 (XXX) XXX-XXXX
            </span>
            <span className="flex items-center gap-1.5">
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
              {t.footer.email}: info@perfectemployersolutions.com
            </span>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="mt-8 pt-6 border-t border-white/10">
          <h4 className="text-xs font-semibold uppercase tracking-wider text-white/40 mb-2">
            {t.footer.disclaimer}
          </h4>
          <p className="text-white/25 text-xs leading-relaxed max-w-3xl">
            {t.footer.disclaimerText}
          </p>
        </div>

        {/* Bottom bar */}
        <div className="mt-6 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white/30 text-xs">
            &copy; {new Date().getFullYear()} Perfect Employer Solutions Ltd. {t.footer.copyright}.
          </p>
        </div>
      </div>
    </footer>
  );
}
