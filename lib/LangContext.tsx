'use client';

import React, { createContext, useContext, useState, useCallback, useEffect } from 'react';
import type { Lang } from '@/lib/i18n';
import { useParams, usePathname, useRouter } from 'next/navigation';

interface LangContextType {
  lang: Lang;
  setLang: (l: Lang) => void;
  toggleLang: () => void;
}

const LangContext = createContext<LangContextType>({
  lang: 'zh',
  setLang: () => {},
  toggleLang: () => {},
});

export function useLang() {
  return useContext(LangContext);
}

export function LangProvider({ children }: { children: React.ReactNode }) {
  const params = useParams();
  const pathname = usePathname();
  const router = useRouter();

  const getLangFromParams = (): Lang => {
    const locale = params?.locale as string | undefined;
    if (locale === 'en') return 'en';
    return 'zh';
  };

  const [lang, setLangState] = useState<Lang>('zh');

  useEffect(() => {
    setLangState(getLangFromParams());
  }, [params?.locale]);

  const setLang = useCallback(
    (newLang: Lang) => {
      if (newLang === lang) return;
      // Replace the [locale] segment in the current path
      const newPath = pathname.replace(/^\/(zh|en)/, `/${newLang}`);
      router.push(newPath);
    },
    [lang, pathname, router]
  );

  const toggleLang = useCallback(() => {
    setLang(lang === 'zh' ? 'en' : 'zh');
  }, [lang, setLang]);

  return (
    <LangContext.Provider value={{ lang, setLang, toggleLang }}>
      {children}
    </LangContext.Provider>
  );
}
