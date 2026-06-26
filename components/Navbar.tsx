'use client';

import React, { useState, useEffect } from 'react';
import { useLang } from '@/lib/LangContext';
import { content } from '@/lib/i18n';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const { lang, toggleLang } = useLang();
  const t = content[lang];
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const prefix = `/${lang}`;
  const isHome = pathname === prefix || pathname === prefix + '/';

  const isActive = (href: string) => {
    const fullPath = prefix + href;
    if (href === '/') return isHome;
    return pathname.startsWith(fullPath);
  };

  const navItems = [
    { label: t.nav.home, href: '/' },
    { label: t.nav.services, href: '/services' },
    { label: t.nav.canadaHR, href: '/services/canada-hr-payroll' },
    { label: t.nav.usPayroll, href: '/services/us-payroll-tax' },
    { label: t.nav.about, href: '/about' },
  ];

  const linkClass = (href: string) => {
    const active = isActive(href);
    if (isHome && !scrolled) {
      return `text-sm font-medium transition-colors ${
        active ? 'text-white' : 'text-white/80 hover:text-white'
      }`;
    }
    return `text-sm font-medium transition-colors ${
      active
        ? 'text-[var(--color-primary)]'
        : 'text-gray-600 hover:text-[var(--color-primary)]'
    }`;
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur shadow-sm border-b border-[var(--color-border)]'
          : isHome
            ? 'bg-transparent'
            : 'bg-white/95 backdrop-blur border-b border-[var(--color-border)]'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href={prefix + '/'} className="flex items-center shrink-0 group">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={isHome && !scrolled ? '/logo-dark.png' : '/logo-light.png'}
              alt={lang === 'zh' ? '博致雇主解决方案' : 'Perfect Employer Solutions'}
              className="h-15 w-auto"
            />
          </Link>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={prefix + item.href}
                className={`px-3 py-2 rounded-lg text-sm font-medium transition-all ${
                  isActive(item.href)
                    ? scrolled || !isHome
                      ? 'bg-[var(--color-primary-bg)] text-[var(--color-primary)]'
                      : 'bg-white/10 text-white'
                    : scrolled || !isHome
                      ? 'text-gray-600 hover:text-[var(--color-primary)] hover:bg-gray-50'
                      : 'text-white/80 hover:text-white hover:bg-white/10'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Right actions */}
          <div className="flex items-center gap-3">
            {/* Language switcher */}
            <button
              onClick={toggleLang}
              className={`text-xs font-medium transition-all px-2.5 py-1.5 rounded-md border ${
                isHome && !scrolled
                  ? 'text-white border-white/30 hover:border-white/60 hover:bg-white/10'
                  : 'text-gray-500 border-gray-200 hover:border-[var(--color-primary)] hover:text-[var(--color-primary)]'
              }`}
              aria-label="Switch language"
            >
              {lang === 'zh' ? 'EN' : '中文'}
            </button>

            {/* CTA Button */}
            <Link
              href={prefix + '/contact'}
              className={`hidden sm:inline-flex items-center px-5 py-2.5 text-sm font-medium rounded-lg transition-all shadow-sm ${
                isHome && !scrolled
                  ? 'bg-white text-[var(--color-primary)] hover:bg-gray-100'
                  : 'text-white bg-[var(--color-primary-light)] hover:bg-[var(--color-primary-hover)]'
              }`}
            >
              {t.nav.bookConsultation}
              <svg className="ml-1.5 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className={`lg:hidden p-2 rounded-md transition-colors ${
                isHome && !scrolled ? 'text-white hover:bg-white/10' : 'text-gray-600 hover:text-[var(--color-primary)]'
              }`}
              aria-label="Toggle menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {mobileOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="lg:hidden py-4 border-t border-[var(--color-border)] bg-white">
            <div className="flex flex-col gap-1">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={prefix + item.href}
                  onClick={() => setMobileOpen(false)}
                  className={`px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                    isActive(item.href)
                      ? 'bg-[var(--color-primary-bg)] text-[var(--color-primary)]'
                      : 'text-gray-600 hover:bg-gray-50'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
              <Link
                href={prefix + '/contact'}
                onClick={() => setMobileOpen(false)}
                className="mx-3 mt-2 text-center px-4 py-3 text-sm font-medium text-white bg-[var(--color-primary-light)] hover:bg-[var(--color-primary-hover)] rounded-lg transition-colors shadow-sm"
              >
                {t.nav.bookConsultation}
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
