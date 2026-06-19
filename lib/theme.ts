export type ThemeId = 'blue' | 'gold' | 'teal';

export interface Theme {
  id: ThemeId;
  name: string;
  label: string;
  colors: {
    primary: string;
    primaryHover: string;
    primaryLight: string;
    primaryBg: string;
    secondary: string;
    accent: string;
    accentHover: string;
    surface: string;
    surfaceAlt: string;
    border: string;
    darkBg: string;
    darkBg2: string;
  };
}

export const themes: Record<ThemeId, Theme> = {
  blue: {
    id: 'blue',
    name: 'Professional Blue',
    label: '专业蓝',
    colors: {
      primary: '#003366',
      primaryHover: '#004080',
      primaryLight: '#0066CC',
      primaryBg: '#E8F1FA',
      secondary: '#0070D2',
      accent: '#D4A853',
      accentHover: '#B8923A',
      surface: '#ffffff',
      surfaceAlt: '#F4F7FA',
      border: '#DFE6ED',
      darkBg: '#001A33',
      darkBg2: '#002244',
    },
  },
  gold: {
    id: 'gold',
    name: 'Warm Gold',
    label: '暖金色',
    colors: {
      primary: '#1c1917',
      primaryHover: '#292524',
      primaryLight: '#44403c',
      primaryBg: '#fef3c7',
      secondary: '#d97706',
      accent: '#d97706',
      accentHover: '#b45309',
      surface: '#ffffff',
      surfaceAlt: '#fffbeb',
      border: '#e7e5e4',
      darkBg: '#1c1917',
      darkBg2: '#292524',
    },
  },
  teal: {
    id: 'teal',
    name: 'Modern Teal',
    label: '现代青',
    colors: {
      primary: '#134e4a',
      primaryHover: '#1a6b64',
      primaryLight: '#0d9488',
      primaryBg: '#f0fdfa',
      secondary: '#0f766e',
      accent: '#f59e0b',
      accentHover: '#d97706',
      surface: '#ffffff',
      surfaceAlt: '#f0fdfa',
      border: '#ccfbf1',
      darkBg: '#0f2e2b',
      darkBg2: '#134e4a',
    },
  },
};

export function getThemeCSS(theme: Theme): string {
  const c = theme.colors;
  return `
    --color-primary: ${c.primary};
    --color-primary-hover: ${c.primaryHover};
    --color-primary-light: ${c.primaryLight};
    --color-primary-bg: ${c.primaryBg};
    --color-secondary: ${c.secondary};
    --color-accent: ${c.accent};
    --color-accent-hover: ${c.accentHover};
    --color-surface: ${c.surface};
    --color-surface-alt: ${c.surfaceAlt};
    --color-border: ${c.border};
    --color-dark-bg: ${c.darkBg};
    --color-dark-bg2: ${c.darkBg2};
  `;
}
