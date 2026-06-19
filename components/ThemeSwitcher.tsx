'use client';

import React from 'react';
import { useTheme } from '@/lib/ThemeContext';
import { themes } from '@/lib/theme';

export default function ThemeSwitcher() {
  const { themeId, setThemeId } = useTheme();

  return (
    <div className="flex items-center gap-1 bg-white/90 backdrop-blur rounded-xl p-1 shadow-lg border border-[var(--color-border)]">
      {(Object.keys(themes) as Array<keyof typeof themes>).map((id) => {
        const theme = themes[id];
        const isActive = themeId === id;
        return (
          <button
            key={id}
            onClick={() => setThemeId(id)}
            className={`flex items-center gap-2 px-3 py-2 rounded-lg text-xs font-medium transition-all ${
              isActive
                ? 'bg-[var(--color-primary-bg)] text-[var(--color-primary)] shadow-sm'
                : 'text-gray-500 hover:text-gray-700 hover:bg-gray-50'
            }`}
            title={theme.name}
          >
            <span
              className="w-3.5 h-3.5 rounded-full ring-1 ring-offset-1 ring-gray-200"
              style={{ backgroundColor: theme.colors.primary }}
            />
            <span className="hidden sm:inline">{theme.label}</span>
          </button>
        );
      })}
    </div>
  );
}
